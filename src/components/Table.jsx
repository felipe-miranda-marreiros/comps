import React from 'react'

export const Table = ({ data, config, keyFn }) => {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return (
        <React.Fragment key={column.label}>{column.header()}</React.Fragment>
      )
    }
    return (
      <th className="p-3" key={column.label}>
        {column.label}
      </th>
    )
  })
  const renderedColumns = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
        </td>
      )
    })
    return (
      <tr className="border-b-2 " key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    )
  })
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedColumns}</tbody>
    </table>
  )
}
