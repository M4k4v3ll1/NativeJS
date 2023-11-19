import {CityType} from "../02/02_02";
import {
    createMessages,
    getStreetsTitlesOfGovernmentsBuildings, getStreetsTitlesOfHouses
} from "./05_02";

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
                        title: 'Happy Street'
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

test('list of streets titles of government buildings', () => {
   let streetsNames = getStreetsTitlesOfGovernmentsBuildings(city.governmentBuildings)

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe('Central Str');
    expect(streetsNames[1]).toBe('South Str');
    })

test('list of streets titles', () => {
   let streetsNames = getStreetsTitlesOfHouses(city.houses)

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe('White Street');
    expect(streetsNames[1]).toBe('Happy Street');
    expect(streetsNames[2]).toBe('Happy Street');
    })

test('create greeting messages for streets', () => {
   let messages  = createMessages(city.houses)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello guys from White Street');
    expect(messages[1]).toBe('Hello guys from Happy Street');
    expect(messages[2]).toBe('Hello guys from Happy Street');
    })

