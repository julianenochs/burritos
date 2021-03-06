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

//   fetch('http://localhost:3001/api/v1/users', {
//     method: 'post',
//     body: JSON.stringify({
//       id: 3, name: "Juju", status: "sick", interests: "sleep"
//     }),
//       headers: {
//   'Accept': 'application/json',
//     'Content-Type': 'application/json'
// },
//     }).then(response => response.json())

// fetch('http://localhost:3001/api/v1/users/3', {
//   method: 'delete',
// }).then(response => response.json())
// }
