import {CityType} from "../02/02_types";
import {getStreetsTitleGovernmentsBuilding, getStreetsTitleHouses, greetingMessagesForStreets} from "./05_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                builtAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                id: 2,
                builtAt: 2008,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3,
                builtAt: 2020,
                repaired: false,
                address: {
                    number: 102,
                    street: {
                        title: 'Black street'
                    }
                }
            },

        ],
        governmentBuilding: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Center Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }

        ],
        citizenNumber: 1000000
    }
})

test ('list of streets title of governments buildings', () => {
    let streetNames = getStreetsTitleGovernmentsBuilding(city.governmentBuilding);

    expect(streetNames.length).toBe(2);
    expect(streetNames[0]).toBe('Center Str');
    expect(streetNames[1]).toBe('South Str');
})

test ('list of streets title of houses', () => {
    let streetNames = getStreetsTitleHouses(city.houses);

    expect(streetNames.length).toBe(3);
    expect(streetNames[0]).toBe('White street');
    expect(streetNames[1]).toBe('Happy street');
})

test ('create greeting message for streets', () => {
    let messages = greetingMessagesForStreets(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello gays from White street');
    expect(messages[1]).toBe('Hello gays from Happy street');
})

