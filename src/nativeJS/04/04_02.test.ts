import {CityType} from "../02/02_02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreatherThen} from "./04_02";

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

test('Houses should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy Street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})

test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreatherThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION');
})