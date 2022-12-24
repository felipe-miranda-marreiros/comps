import { useState } from 'react'
import { Dropdown } from '../components/Dropdown'

export const DropdownPage = () => {
  const [selection, setSelection] = useState(null)

  const handleSelect = (option) => {
    setSelection(option)
  }

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
    { label: 'Black', value: 'black' },
  ]
  return (
    <Dropdown value={selection} onChange={handleSelect} options={options} />
  )
}
