import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dropdown } from './Dropdown'
import { useState } from 'react'
import { Mail, Github, Twitter, User } from 'lucide-react'

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Dropdown>

const sampleOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option with icon' },
  { value: '3', label: 'Long Long Option 3' },
  { value: '4', label: 'Long Long Long Option 4' },
  { value: '5', label: 'Long Long Long Long Option 5' },
  { value: '6', label: 'Long Long Long Long Long Option 6' },
]

export const Basic: Story = {
  args: {
    options: sampleOptions,
    label: 'Label',
    placeholder: 'Select an option',
  },
  render(args) {
    const [val, setVal] = useState<string | string[] | undefined>('1')
    return (
      <div className="w-96">
        <Dropdown {...args} value={val} onChange={setVal} />
      </div>
    )
  },
}

export const MultiSelect: Story = {
  args: {
    options: sampleOptions,
    label: 'Multi Select',
    multiple: true,
    placeholder: 'Select multiple...',
  },
  render(args) {
    const [val, setVal] = useState<string | string[] | undefined>(['1', '2'])
    return (
      <div className="w-96">
        <Dropdown {...args} value={val} onChange={setVal} />
      </div>
    )
  },
}

export const Searchable: Story = {
  args: {
    options: sampleOptions,
    label: 'Searchable Dropdown',
    searchable: true,
  },
  render(args) {
    const [val, setVal] = useState<string | string[] | undefined>()
    return (
      <div className="w-96">
        <Dropdown {...args} value={val} onChange={setVal} />
      </div>
    )
  },
}

export const CustomRendering: Story = {
  args: {
    options: [
      { value: 'email', label: 'Email', icon: <Mail className="w-3.5 h-3.5" /> },
      { value: 'github', label: 'GitHub', icon: <Github className="w-3.5 h-3.5" /> },
      { value: 'twitter', label: 'Twitter', icon: <Twitter className="w-3.5 h-3.5" /> },
      { value: 'profile', label: 'Profile', icon: <User className="w-3.5 h-3.5" /> },
    ],
    label: 'Custom Icons',
  },
  render(args) {
    const [val, setVal] = useState<string | string[] | undefined>()
    return (
      <div className="w-96">
        <Dropdown {...args} value={val} onChange={setVal} />
      </div>
    )
  },
}

export const Portal: Story = {
  args: {
    options: sampleOptions,
    label: 'With Portal',
    portal: true,
  },
  render(args) {
    const [val, setVal] = useState<string | string[] | undefined>()
    return (
      <div className="w-96 h-[300px] overflow-hidden border border-dashed border-zinc-300 p-10 relative">
        <p className="mb-4 text-xs text-zinc-500 italic">This container has overflow-hidden. Portal is required.</p>
        <Dropdown {...args} value={val} onChange={setVal} />
      </div>
    )
  },
}

export const HighZIndex: Story = {
  args: {
    options: sampleOptions,
    label: 'Z-Index Compatibility',
    zIndex: 9999,
  },
  render(args) {
    const [val, setVal] = useState<string | string[] | undefined>()
    return (
      <div className="w-96 relative">
        <div 
          style={{ zIndex: 5000 }} 
          className="absolute top-20 left-10 w-40 h-20 bg-blue-500/20 border border-blue-500 flex items-center justify-center rounded text-[10px] text-blue-700 font-bold"
        >
          Z-INDEX: 5000
        </div>
        <Dropdown {...args} value={val} onChange={setVal} />
      </div>
    )
  },
}
