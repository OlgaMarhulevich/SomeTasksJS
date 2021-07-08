import {GovernmentType, HousesType} from "../02/02_types";

export function getStreetsTitleGovernmentsBuilding (govbuild: Array<GovernmentType>) {
    return govbuild.map(g => g.address.street.title)
}

export function getStreetsTitleHouses (houses: Array<HousesType>) {
    return houses.map(g => g.address.street.title)
}

export function greetingMessagesForStreets (houses: Array<HousesType>) {
    return houses.map(g => `Hello gays from ${g.address.street.title}`)
}

