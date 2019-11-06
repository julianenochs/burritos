export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const addOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
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
