import {CityType, GovernmentType, HousesType} from "../02/02_types";

export const addMoneyToBudget = (city: CityType, building: string, amount: number) => {
    city.governmentBuilding.filter(build => build.type === building).forEach(build => build.budget += amount)
}

export const repairHouse = (house: HousesType) => {
    house.repaired = true;
}

export const toFireStaff = (building: GovernmentType, number: number) => {
    building.staffCount -= number;
}

export const toHireStaff = (building: GovernmentType, number: number) => {
    building.staffCount += number;
}

export const createMessage = (city: CityType) => {
    return `Hello all of the ${city.citizenNumber} ${city.title} citizen!`
}


