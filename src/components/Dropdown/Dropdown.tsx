import { useState, useRef, useCallback } from "react";
import { ChevronDown, Search, X, Check } from "lucide-react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import type { DropdownProps, DropdownOption } from "./types";

const cx = (...args: (string | boolean | undefined)[]) => twMerge(clsx(args));

function highlightMatch(text: string, query: string) {
  if (!query.trim()) return <span>{text}</span>;

  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <span>{text}</span>;

  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + query.length);
  const after = text.slice(idx + query.length);

  return (
    <span>
      {before}
      <span className="bg-teal-100 dark:bg-teal-900/50 rounded px-0.5">
        {match}
      </span>
      {after}
    </span>
  );
}

function getPortalPosition(triggerRef: React.RefObject<HTMLDivElement | null>) {
  if (!triggerRef.current) return { top: 0, left: 0, w: 0 };
  const r = triggerRef.current.getBoundingClientRect();
  return {
    top: r.bottom + window.scrollY + 4,
    left: r.left + window.scrollX,
    w: r.width,
  };
}

export function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  searchable = false,
  multiple = false,
  portal = false,
  disabled = false,
  loading = false,
  error,
  label,
  className,
  menuClassName,
  renderOption,
  zIndex = 50,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(-1);
  const [pos, setPos] = useState({ top: 0, left: 0, w: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const selected = multiple
    ? Array.isArray(value)
      ? value
      : []
    : value
      ? [value as string]
      : [];

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(search.toLowerCase()),
  );

  const selectedItems = options.filter((o) => selected.includes(o.value));

  const scrollToItem = useCallback((index: number) => {
    if (index >= 0 && menuRef.current) {
      const item = menuRef.current.children[index] as HTMLElement;
      if (item) item.scrollIntoView({ block: "nearest" });
    }
  }, []);

  function toggle() {
    if (disabled || loading) return;
    if (!open) {
      setSearch("");
      setFocused(-1);
      if (portal) setPos(getPortalPosition(ref));
    }
    setOpen(!open);
  }

  function close() {
    setOpen(false);
    setFocused(-1);
  }

  function select(opt: DropdownOption) {
    if (multiple) {
      const next = selected.includes(opt.value)
        ? selected.filter((v) => v !== opt.value)
        : [...selected, opt.value];
      if (onChange) onChange(next);
    } else {
      if (onChange) onChange(opt.value);
      setOpen(false);
    }
  }

  function remove(e: React.MouseEvent, v: string) {
    e.stopPropagation();
    if (multiple) {
      if (onChange) onChange(selected.filter((x) => x !== v));
    } else {
      if (onChange) onChange(undefined);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (disabled || loading) return;

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        if (!open) {
          if (portal) setPos(getPortalPosition(ref));
          setOpen(true);
          setFocused(0);
          requestAnimationFrame(() => scrollToItem(0));
        } else if (focused >= 0 && filtered[focused]) {
          select(filtered[focused]);
        }
        break;
      case "Escape":
        e.preventDefault();
        close();
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!open) {
          if (portal) setPos(getPortalPosition(ref));
          setOpen(true);
          setFocused(0);
          requestAnimationFrame(() => scrollToItem(0));
        } else {
          const nextDown = Math.min(focused + 1, filtered.length - 1);
          setFocused(nextDown);
          requestAnimationFrame(() => scrollToItem(nextDown));
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (open) {
          const nextUp = Math.max(focused - 1, 0);
          setFocused(nextUp);
          requestAnimationFrame(() => scrollToItem(nextUp));
        }
        break;
      case "Tab":
        if (open) close();
        break;
    }
  }

  function handleMouseEnter(idx: number) {
    setFocused(idx);
  }

  const menuContent = (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.96 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      style={{
        position: "absolute",
        top: portal ? pos.top : "100%",
        left: portal ? pos.left : 0,
        width: portal ? pos.w : "100%",
        zIndex,
      }}
      className={cx(
        "mt-1 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg shadow-lg overflow-hidden",
        menuClassName,
      )}
      role="listbox"
      aria-label="Options"
    >
      {searchable && (
        <div className="p-2 border-b border-gray-100 dark:border-zinc-800 flex items-center gap-2">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            autoFocus
            className="w-full bg-transparent border-none outline-none text-sm py-1 placeholder:text-gray-400"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search options"
          />
          {search && (
            <X
              className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
              onClick={() => setSearch("")}
            />
          )}
        </div>
      )}
      <div ref={menuRef} className="max-h-60 overflow-y-auto p-1 scrollbar">
        {filtered.length > 0 ? (
          filtered.map((opt, idx) => {
            const active = selected.includes(opt.value);
            const isFocused = idx === focused;
            return (
              <div
                key={opt.value}
                role="option"
                aria-selected={active}
                onClick={() => select(opt)}
                onMouseEnter={() => handleMouseEnter(idx)}
                className={cx(
                  "flex items-center justify-between px-3 py-2 rounded-md cursor-pointer text-sm transition-colors",
                  active
                    ? "bg-teal-50 dark:bg-teal-900/30 text-teal-900 dark:text-teal-100 font-medium"
                    : isFocused
                      ? "bg-teal-50 dark:bg-teal-900/20 text-gray-900 dark:text-gray-100"
                      : "hover:bg-teal-50 dark:hover:bg-teal-900/20 text-gray-700 dark:text-gray-300",
                )}
              >
                <div className="flex items-center gap-2">
                  {renderOption ? (
                    renderOption(opt, active)
                  ) : (
                    <>
                      {opt.icon && <span className="w-4 h-4">{opt.icon}</span>}
                      {searchable && search ? (
                        highlightMatch(opt.label, search)
                      ) : (
                        <span>{opt.label}</span>
                      )}
                    </>
                  )}
                </div>
                {active && (
                  <Check className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                )}
              </div>
            );
          })
        ) : (
          <div className="px-3 py-4 text-center text-sm text-gray-400 italic">
            Nothing here
          </div>
        )}
      </div>
    </motion.div>
  );

  const backdrop = open && (
    <div
      className="fixed inset-0"
      style={{ zIndex: zIndex - 1 }}
      onClick={close}
      aria-hidden="true"
    />
  );

  return (
    <div className={cx("relative w-full", className)} ref={ref}>
      {label && (
        <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-1.5 ml-1">
          {label}
        </label>
      )}
      <div
        role="combobox"
        tabIndex={disabled ? -1 : 0}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-disabled={disabled}
        aria-label={label || placeholder}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        className={cx(
          "flex items-center justify-between gap-2 px-4 py-2.5 bg-white dark:bg-zinc-900 border rounded-lg cursor-pointer transition-all select-none focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-zinc-700",
          open
            ? "border-gray-400 dark:border-zinc-500 shadow-sm"
            : "border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600",
          error && "border-red-500 dark:border-red-500 ring-red-100",
          disabled && "opacity-50 cursor-not-allowed",
        )}
      >
        <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
          {selectedItems.length > 0 ? (
            multiple ? (
              selectedItems.map((o) => (
                <span
                  key={o.value}
                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded"
                >
                  {o.label}
                  <X
                    className="w-3 h-3 cursor-pointer hover:text-red-500 transition-colors"
                    onClick={(e) => remove(e, o.value)}
                  />
                </span>
              ))
            ) : (
              <span className="text-zinc-800 dark:text-zinc-200 text-sm">
                {selectedItems[0].label}
              </span>
            )
          ) : (
            <span className="text-gray-500 dark:text-gray-400 text-sm truncate">
              {placeholder}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {loading ? (
            <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
          ) : (
            <ChevronDown
              className={cx(
                "w-4 h-4 text-gray-400 transition-transform duration-200",
                open && "rotate-180 text-gray-600",
              )}
            />
          )}
        </div>
      </div>
      {error && (
        <p className="mt-1.5 ml-1 text-xs text-red-500 font-medium">{error}</p>
      )}

      <AnimatePresence>
        {open && (
          <>
            {portal ? (
              createPortal(
                <>
                  {backdrop}
                  {menuContent}
                </>,
                document.body,
              )
            ) : (
              <>
                {backdrop}
                {menuContent}
              </>
            )}
          </>
        )}
      </AnimatePresence>

      <style>{`
        .scrollbar::-webkit-scrollbar { width: 5px; }
        .scrollbar::-webkit-scrollbar-track { background: transparent; }
        .scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
        .dark .scrollbar::-webkit-scrollbar-thumb { background: #3f3f46; }
      `}</style>
    </div>
  );
}
