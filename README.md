# Dropdown

React dropdown with search, multi-select and portal. Uses Tailwind for styling.

## Usage

```tsx
import { Dropdown } from "premium-dropdown";

function MyComponent() {
  const [val, setVal] = useState();

  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  return <Dropdown options={options} value={val} onChange={setVal} />;
}
```

Add `searchable` for filtering, `multiple` for multi-select:

```tsx
<Dropdown options={options} searchable multiple />
```

Use `portal` if dropdown is inside overflow:hidden container:

```tsx
<Dropdown options={options} portal />
```

## Props

- `options` - array of `{ value, label }` objects (required)
- `value` / `onChange` - controlled value
- `searchable` - show search input
- `multiple` - allow multiple selection
- `portal` - render menu in document.body
- `zIndex` - menu z-index (default 50)
- `label` - label above dropdown
- `placeholder` - placeholder text
- `disabled` / `loading` / `error` - states
- `renderOption` - custom option render function

## Storybook

```
npm run storybook
```

## Build

```
npm run build
```
