export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const addOrders = (order) => {
  return fetch('http://localhost:3001/api/v1/orders', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  })
    .then(response => response.json(order))
}
