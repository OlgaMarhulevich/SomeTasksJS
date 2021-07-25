import {
    addBook, addCompany, CompaniesType,
    makeHairstyle,
    moveUser,
    moveUserToAnotherHouse, removeBook, updateBook, updateCompany, updateCompany2,
    upgradeUserLaptop,
    UserType,
    UserWithBooks,
    UserWithLaptop
} from './10_01'

test ('reference type test', () => {

    let user: UserType = {
        name: 'Olya',
        hair: 32,
        address: {
            city: 'Gomel',
            house: 12
        }
    }

    const cutUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(cutUser.hair).toBe(16)
    expect(cutUser.address).toBe(user.address)

})

test ('change address', () => {

    let user: UserWithLaptop = {
        name: 'Olya',
        hair: 32,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'Asus'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user.address.city).toBe('Gomel')
    expect(movedUser.address.city).toBe('Kiev')
    expect(user.laptop).toBe(movedUser.laptop)

})

test ('upgrade user laptop', () => {

    let user: UserWithLaptop = {
        name: 'Olya',
        hair: 32,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'Asus'
        }
    }

    const upgradedUser = upgradeUserLaptop(user, 'MacBook')

    expect(user).not.toBe(upgradedUser)
    expect(user.laptop).not.toBe(upgradedUser.laptop)
    expect(user.address).toBe(upgradedUser.address)
    expect(upgradedUser.laptop.title).toBe('MacBook')

})

test ('move to another house', () => {

    let user: UserWithLaptop & UserWithBooks = {
        name: 'Olya',
        hair: 32,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'js', 'html']
    }

    const movedToAnotherHouseUser = moveUserToAnotherHouse(user, 1)

    expect(user).not.toBe(movedToAnotherHouseUser)
    expect(user.address).not.toBe(movedToAnotherHouseUser.address)
    expect(user.laptop).toBe(movedToAnotherHouseUser.laptop)
    expect(user.books).toBe(movedToAnotherHouseUser.books)
    expect(movedToAnotherHouseUser.address.house).toBe(1)

})

test ('add new book', () => {

    let user: UserWithLaptop & UserWithBooks = {
        name: 'Olya',
        hair: 32,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'js', 'html']
    }

    const copyUser = addBook(user, ['react', 'restAPI'])

    expect(user).not.toBe(copyUser)
    expect(user.address).toBe(copyUser.address)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.books).not.toBe(copyUser.books)
    expect(copyUser.books[3]).toBe('react')
    expect(copyUser.books[4]).toBe('restAPI')
})

test ('update js to ts book', () => {

    let user: UserWithLaptop & UserWithBooks = {
        name: 'Olya',
        hair: 32,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'js', 'html']
    }

    const copyUser = updateBook (user, 'js', 'ts')

    expect(user).not.toBe(copyUser)
    expect(user.address).toBe(copyUser.address)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.books).not.toBe(copyUser.books)
    expect(copyUser.books[1]).toBe('ts')
})

test ('remove js from books', () => {

    let user: UserWithLaptop & UserWithBooks = {
        name: 'Olya',
        hair: 32,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'js', 'html']
    }

    const copyUser = removeBook (user, 'js')

    expect(user).not.toBe(copyUser)
    expect(user.address).toBe(copyUser.address)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.books).not.toBe(copyUser.books)
    expect(copyUser.books[1]).toBe('html')
})

test ('add company', () => {

    let user: UserWithLaptop & CompaniesType = {
        name: 'Olya',
        hair: 32,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        companies: [
            {id: 1, title: 'epam'},
            {id: 2, title: 'itransition'}
        ]
    }

    const copyUser = addCompany (user, 'itechArt')

    expect(user).not.toBe(copyUser)
    expect(user.address).toBe(copyUser.address)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.companies).not.toBe(copyUser.companies)
    expect(copyUser.companies[2].title).toBe('itechArt')
})

test ('update company title', () => {

    let user: UserWithLaptop & CompaniesType = {
        name: 'Olya',
        hair: 32,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        companies: [
            {id: 1, title: 'epam'},
            {id: 2, title: 'itransition'}
        ]
    }

    const copyUser = updateCompany (user, 'epam', 'EPAM')

    expect(user).not.toBe(copyUser)
    expect(user.address).toBe(copyUser.address)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.companies).not.toBe(copyUser.companies)
    expect(copyUser.companies[0].title).toBe('EPAM')
})

test ('update company title 2', () => {

    let companies = {
        'Olya': [ {id: 1, title: 'epam'}, {id: 2, title: 'itransition'} ],
        'Anna': [ {id: 2, title: 'itransition'} ]
    }

    const copyCompanies = updateCompany2 (companies, 'Olya', 'epam', 'EPAM')

    expect(companies).not.toBe(copyCompanies)
    expect(companies['Anna']).toBe(copyCompanies['Anna'])
    expect(copyCompanies['Olya'][0].title).toBe('EPAM')
})