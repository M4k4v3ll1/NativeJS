import {CityType, governmentBuildingsType, housesType} from "../02/02_02";


export function addMoneyToBudget(building: governmentBuildingsType, addBudget: number) {
    building.budget += addBudget;
}

export function repairHouse(repaired: housesType) {
    repaired.repaired = true;
}

export function toFireStuff(Buildings: governmentBuildingsType, stuffCountToFire: number) {
    Buildings.staffCount -= stuffCountToFire;
}

export const toHireStuff = (Buildings: governmentBuildingsType, stuffCountToHire: number) => {
    Buildings.staffCount += stuffCountToHire;
}

export const createMessage = (props: CityType) => {
    /*return ('Hello ' + props.title + ' citizens. I want you be happy. All ' + props.citizenNumber + ' citizens');*/
    return (`Hello ${props.title} citizens. I want you be happy. All ${props.citizenNumber} citizens`);
}

export function demolishHousesOnTheStreet (city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreatherThen(buildings: Array<governmentBuildingsType>, staffCount: number) {
    return buildings = buildings.filter(b => b.staffCount > staffCount)
}