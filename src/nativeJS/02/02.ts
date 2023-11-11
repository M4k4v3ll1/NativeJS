export type StudentPropsType = {
    name: string
    age: number
    isActive: boolean
    address: addressPropsType
    technologies: Array<technologiesPropsType>
}
type addressPropsType = {
    streetTitle: string
    city: cityPropsType
}
type cityPropsType = {
    title: string
    countryTitle: string
}
type technologiesPropsType = {
    id: number
    title: string
}

export const Student: StudentPropsType = {
    name: 'Dimych',
    age: 32,
    isActive: false,
    address: {
        streetTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        }
    ]
}

console.log(Student.age)
console.log(Student.name)
console.log(Student.address.city.title)
console.log(Student.technologies[2].title)

type myWifePropsType = {
    name: string
    age: number
    body: bodyPropsType
    skills: Array<skillsPropsType>
}
type bodyPropsType = {
    boobs: string
    ass: string
    isStomachTrained: boolean
}
type skillsPropsType = {
    id: number
    title: string
}

export const myWife: myWifePropsType = {
    name: 'Tanusha',
    age: 36,
    body: {
        boobs: 'huge',
        ass: 'nice',
        isStomachTrained: true
    },
    skills: [
        {
            id: 1,
            title: 'cooking'
        },
        {
            id: 2,
            title: 'cleaning'
        },
        {
            id: 3,
            title: 'dance'
        },
    ]
}

console.log('My wife name is ' + myWife.name)
console.log('She has ' + myWife.body.boobs + 'boobs')
console.log('She is very good in ' + myWife.skills[2].title + ', but very rarely ' + myWife.skills[0].title)