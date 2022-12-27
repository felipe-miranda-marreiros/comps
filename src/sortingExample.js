const data = [
  {
    name: 'Tomato',
    cost: 10,
    weight: 5,
  },
  {
    name: 'Carrot',
    cost: 15,
    weight: 2,
  },
  {
    name: 'Onion',
    cost: 5,
    weight: 7,
  },
]

const sortOrder = 'asc'

const getSortValue = (vegetable) => {
  return vegetable.cost
}

console.log(
  data.sort((a, b) => {
    const valueA = getSortValue(a)
    const valueB = getSortValue(b)

    const reverseOder = sortOrder === 'asc' ? 1 : -1

    if (typeof valueA === 'string') {
      return valueA.localeCompare(valueB) * reverseOder
    } else {
      return (valueA - valueB) * reverseOder
    }
  })
)
