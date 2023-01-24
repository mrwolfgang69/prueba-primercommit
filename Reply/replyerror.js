let users = [
  { name: 'Georg', email: 'georg@academlo.com' },
  { name: 'Andrea', email: 'andrea@gmail.com' }
]

let attendances = [
  { email: 'georg@academlo.com', attendance: true },
  { email: 'andrea@gmail.com', attendance: false }
]

function mergeData(users, attendances){
let x = [];
for (let i = 0; i < users.length; i++){
x.push(users[i])
}

return (x)


}

console.log(mergeData(attendances))