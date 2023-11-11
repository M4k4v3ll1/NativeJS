import {CityType} from "../02/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStuff, toHireStuff} from "./03_02";

export let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White Street'
                    },
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy Street'
                    },
                }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'HZ Street'
                    },
                }
            }
        ],
        governmentBuildings: [
            {
                id: 1,
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                id: 2,
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            },
        ],
        citizenNumber: 1000000
    }
})

test('budget should be changed for Hospital', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000);
    expect(city.governmentBuildings[1].budget).toBe(500000);
})

test('budget should be changed for Fire-Station', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
})

test('houses should be repaired', () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
})

test('staff should be decreased', () => {
    toFireStuff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('staff should be increased', () => {
    toHireStuff(city.governmentBuildings[0], 20);
    toFireStuff(city.governmentBuildings[1], 100)

    expect(city.governmentBuildings[0].staffCount).toBe(220);
    expect(city.governmentBuildings[1].staffCount).toBe(900);
})

test('Greeting message should be correct for city', () => {
    /*const message = createMessage(city);

    expect(message).toBe('Hello New York citizens. I want you be happy. All 1000000 citizens');*/
    expect(createMessage(city)).toBe('Hello New York citizens. I want you be happy. All 1000000 citizens');

})
//test-driving development