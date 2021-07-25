import {UserType} from './09_01'

test ('objects test', () => {

    let user1: UserType = {
        name: 'Olya',
        age: 26
    }
    let user2 = user1;

    user2.age++

    expect(user1 === user2).toBe(true)
    expect(user1.age).toBe(27)

})