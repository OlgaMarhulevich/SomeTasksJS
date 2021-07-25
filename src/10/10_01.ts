export type UserType = {
    name: string
    hair: number
    address: {city: string, house: number}
}

export const makeHairstyle = (user: UserType, long: number) => {
    const copyUser = { ...user, hair: user.hair / long }
    return copyUser
}

export type UserWithLaptop = UserType & {
    laptop: {
        title: string
    }
}

export const moveUser = (user: UserWithLaptop, city: string): UserWithLaptop => {
    const copyUser = { ...user, address: { ...user.address, city: city }}
    return copyUser
}

export const upgradeUserLaptop = (user: UserWithLaptop, laptop: string): UserWithLaptop => {
    return { ...user, laptop: { ...user.laptop, title: laptop } }
}

export type UserWithBooks = UserType & {
    books: Array<string>
}

export const moveUserToAnotherHouse = (user: UserWithLaptop & UserWithBooks, house: number): UserWithLaptop & UserWithBooks => {
    return { ...user, address: {...user.address, house} }
}

export const addBook = (user: UserWithLaptop & UserWithBooks, book: Array<string>): UserWithLaptop & UserWithBooks => {
    return { ...user, books: [...user.books, ...book]}
}

export const updateBook = (user: UserWithLaptop & UserWithBooks, from: string, to: string): UserWithLaptop & UserWithBooks => {
    return { ...user, books: user.books.map(el => el === from ? to : el)}
    /*copy.books[copy.books.indexOf(from)] = to*/
}

export const removeBook = (user: UserWithLaptop & UserWithBooks, book: string): UserWithLaptop & UserWithBooks => {
    return { ...user, books: user.books.filter(el => el !== book)}
    /*copy.books[copy.books.indexOf(from)] = to*/
}

export type CompaniesType = {
    companies: Array<{id: number, title: string}>
}

export const addCompany = (user: UserWithLaptop & CompaniesType, comp: string): UserWithLaptop & CompaniesType => {
    return { ...user, companies: [...user.companies, {id: 3, title: comp}]}
}

export const updateCompany = (user: UserWithLaptop & CompaniesType, from: string, to: string): UserWithLaptop & CompaniesType => {
    return { ...user, companies: user.companies.map(el => el.title === from ? {...el, title: to} : el)}
}

export const updateCompany2 = (companies: { [key: string]: Array<{id: number, title: string}> }, userName: string, from: string, to: string): { [key: string]: Array<{id: number, title: string}> } => {
    let companiesCopy = { ...companies}
    companiesCopy[userName] = companiesCopy[userName].map(el => el.title === from ? {...el, title: to} : el )
    return companiesCopy
}
