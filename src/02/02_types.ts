export type StreetType = {
    title: string
}
export type AddressType = {
    number?: number,
    street: StreetType
}
export type HousesType = {
    id: number,
    builtAt: number,
    repaired: boolean,
    address: AddressType
}

export type GovernmentType = {
    type: 'HOSPITAL' | 'FIRE-STATION',
    budget: number,
    staffCount: number,
    address: AddressType
}

export type CityType = {
    title: string,
    houses: Array<HousesType>,
    governmentBuilding: Array<GovernmentType>,
    citizenNumber: number
}