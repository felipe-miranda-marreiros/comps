import { useState } from 'react'
import { GoChevronDown, GoArrowLeft } from 'react-icons/go'

const INITIAL_EXPANDED_INDEX = -1

export const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(INITIAL_EXPANDED_INDEX)

  const handleClick = (nextIndex) => {
    setExpandedIndex((prevState) => {
      if (prevState === nextIndex) {
        return -1
      } else {
        return nextIndex
      }
    })
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex
    const icon = <span>{isExpanded ? <GoArrowLeft /> : <GoChevronDown />}</span>
    return (
      <div key={item.label}>
        <div
          className="flex justify-between items-center bg-gray-50 border"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded ? (
          <div className="border-b p-5">{item.description}</div>
        ) : null}
      </div>
    )
  })
  return <div className="border-x border-t rounded">{renderedItems}</div>
}
