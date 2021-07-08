import {CityType, GovernmentType} from "../02/02_types";

export function destroyHousesOnTheStreet (city: CityType, street: string) {
    city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export function getBuildingWithStaffGreaterThen (buildings: Array<GovernmentType>, count: number) {
    return buildings.filter(build => build.staffCount > count)
}