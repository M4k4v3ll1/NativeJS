import {StudentPropsType} from '../02/02'

debugger;
export const sum = (a: number, b: number) => {
    return (a + b);
}

export function sum2(a: number, b: number) {
    return (a + b);
}

const res1 = sum(sum(1, 7), sum(3, 3))
const res2 = sum(3, 3)

export const addSkill = (st: StudentPropsType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export function addSkill2(st: StudentPropsType, skill: string) {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (s: StudentPropsType) => {
    s.isActive = true
}

export function doesStudentLiveInSomeCountry(stud: StudentPropsType, cityName: string) {
    return stud.address.city.title === cityName
}
