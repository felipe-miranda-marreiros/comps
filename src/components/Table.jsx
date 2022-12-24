export const Table = ({ data, config, keyFn }) => {
  const renderedHeaders = config.map((column) => {
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
