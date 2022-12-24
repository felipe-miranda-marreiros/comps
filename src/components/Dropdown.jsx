import { useEffect, useMemo, useRef, useState } from 'react'
import { GoChevronDown } from 'react-icons/go'
import { Panel } from './Panel'

export const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const divEl = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (!divEl.current) return
      if (!divEl.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handler, true)
    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

  const handleClick = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleOptionClick = (option) => {
    onChange(option)
    handleClick()
  }

  const renderedOptions = useMemo(
    () =>
      options.map((option) => {
        return (
          <div
            className="hover:bg-sky-100 rounded cursor-pointer p-1"
            onClick={() => handleOptionClick(option)}
            key={option.value}
          >
            {option.label}
          </div>
        )
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <div ref={divEl} className="w-48 relative">
      <div
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white"
      >
        {value?.label ?? 'Select...'}
        <GoChevronDown />
      </div>
      {isOpen ? (
        <Panel className="absolute top-full">{renderedOptions}</Panel>
      ) : null}
    </div>
  )
}
