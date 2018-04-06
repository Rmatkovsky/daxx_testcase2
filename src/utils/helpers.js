export const filterByDirection = (data, filter) =>
  data
    .map(item => (item.Direction === filter ? item : null))
    .filter(item => item !== null)

export const sortByPosition = data => data.sort((a, b) => a.Position > b.Position)

export const getByProperty = (data, property) => data.map(item => item[property])
