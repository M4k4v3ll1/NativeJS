export type peopleType = {
    name: string
    age: number
}

const people: Array<peopleType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitrii Sidorov', age: 33}
]

/*const dimychTransformator = (man: peopleType) => {
    return {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
}*/

//Can be rewrote without {return} as:

const dimychTransformator = (man: peopleType) => ({
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    })

let d1 = dimychTransformator(people[0])
let d2 = dimychTransformator(people[1])
let d3 = dimychTransformator(people[2])

const dev1 = [d1, d2, d3]

const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const dev3 = people.map(dimychTransformator)

const dev4 = people.map(man => ({
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))

export const createGreetingMessage = (people: Array<peopleType>) => {
    return people.map(people => `Hello ${people.name.split(' ')[0]}. Welcome to Earth`)
}

export const createReportForSoldier = (people: Array<peopleType>) => {
    return people.map(p => `Hello soldier ${p.name.split(' ')[1]} ${p.name.split(' ')[0]}. ${p.age} years you prepered for this big honor to protect your country!`)
}