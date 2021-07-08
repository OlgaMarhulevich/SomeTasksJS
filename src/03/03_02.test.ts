import {CityType} from "../02/02_types";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03_02";

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

test('budget should  be changed for HOSPITAL', () => {
    addMoneyToBudget(city, 'HOSPITAL', 100000);

    expect(city.governmentBuilding[0].budget).toBe(300000);
    expect(city.governmentBuilding[1].budget).toBe(500000);
})

test('houses should be repaired', () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
})

test('staff should be decremented', () => {
    toFireStaff(city.governmentBuilding[0], 20);

    expect(city.governmentBuilding[0].staffCount).toBe(180)
})

test('staff should be incremented', () => {
    toHireStaff(city.governmentBuilding[0], 20);

    expect(city.governmentBuilding[0].staffCount).toBe(220)
})

test('staff number should be correct', () => {
    toHireStaff(city.governmentBuilding[0], 20);
    toHireStaff(city.governmentBuilding[1], 100);

    expect(city.governmentBuilding[0].staffCount).toBe(220);
    expect(city.governmentBuilding[1].staffCount).toBe(1100);
})

test('greeting message should be correct for city', () => {
    const message = createMessage(city);

    expect(message).toBe('Hello all of the 1000000 New York citizen!');
})