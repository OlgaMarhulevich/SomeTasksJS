export type TechnologiesType = {
    id: number,
    title: string
}
export type AddressType = {
    streetTitle: string,
    city: LocalCityType
}
export type LocalCityType = {
    title: string,
    countryTitle: string
}
export type StudentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType,
    technologies: Array<TechnologiesType>
}

const student: StudentType = {
    id: 1,
    name: 'Olya',
    age: 26,
    isActive: false,
    address: {
        streetTitle: 'Surganova',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'JS'
        }
    ]
}

console.log(student.age)