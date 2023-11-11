export type CityType = {
    title: string
    houses: Array<housesType>
    governmentBuildings: Array<governmentBuildingsType>
    citizenNumber: number
}

export type housesType = {
    id: number
    buildedAt: number
    repaired: boolean,
    address: addressType
}
export type addressType = {
    number?: number
    street: streetType
}
export type streetType = {
    title: string
}

export type governmentBuildingsType = {
    id: number
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: addressType
}
