// const repo = {
//     save(user) {
//         const promise = new Promise((resolve, reject) => {
//             try {
//                 localStorage.setItem('user', JSON.stringify(user))
//                 resolve()
//             } catch (error) {
//                 reject(error)
//             }
//         })
//         return promise
//     },
//     read() {
//         const promise = new Promise((resolve, reject) => {
//             try {
//                 const user = localStorage.getItem('user')
//                 user ? resolve(JSON.parse(user)) : resolve(null)
//             } catch (error) {
//                 reject(error)
//             }
//         })
//         return promise
//     }
// }
//
// async function foo() {
//     await repo.save('Olya')
//     console.log('saved')
//     const user = await repo.read()
//     console.log(user)
// }
// foo()
//
// console.log('----------------------------------')
//
// function wait(ms) {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res()
//         }, ms)
//     })
// }
//
// async function foo2() {
//     await wait(1000)
//     console.log('1')
//     await wait(1000)
//     console.log('2')
//     await wait(1000)
//     console.log('3')
// }
// foo2()
//
// const findUserInDB = (id) => {
//     const DB = [
//         {id: 1, name: 'Olya', friend: 5},
//         {id: 2, name: 'Sveta', friend: 1},
//         {id: 3, name: 'Dima', friend: 2},
//     ]
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             const user = DB.find(u => u.id === id)
//             user ? res(user) : rej('user not found')
//         }, 1000)
//     })
// }
// const axios = {
//     get(url) {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 res({
//                     request: {},
//                     status: 200,
//                     headers: {},
//                     config: {},
//                     data: {count: 12}
//                 }, 4000)
//             })
//         })
//     }
// }
//
// findUserInDB(1)
//     .then(user => {
//         console.log(user.name)
//         return user.friend
//     })
//     .then(userFriendId => findUserInDB(userFriendId))
//     .catch(error => {
//         console.warn(error)
//         const bot = {name: 'UserBot', friend: 3}
//         return bot
//     })
//     .then(userFriend1 => {
//         console.log(userFriend1.name)
//         return userFriend1.friend
//     })
//     .then(userFriend1Id => findUserInDB(userFriend1Id))
//     .then(userFriend2 => {
//         console.log(userFriend2.name)
//         return userFriend2
//     })