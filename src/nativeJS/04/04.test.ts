import {StudentPropsType} from "../02/02";
import {addSkill, doesStudentLiveInSomeCountry, makeStudentActive} from "./04";

let Student: StudentPropsType;
beforeEach(() => {
    Student = {
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
})

test('new tech skill should be added to student', () => {
    expect(Student.technologies.length).toBe(3);
    addSkill(Student, 'JS');
    expect(Student.technologies.length).toBe(4);
    expect(Student.technologies[3].title).toBe('JS');
    expect(Student.technologies[3].title).toBeDefined();
})
test('student should be made active', () => {
    expect(Student.isActive).toBe(false);
    makeStudentActive(Student);
    expect(Student.isActive).toBe(true);
})

test('does student live in some country', () => {
    let result1 = doesStudentLiveInSomeCountry(Student, 'Moscow');
    let result2 = doesStudentLiveInSomeCountry(Student, 'Minsk');
    expect(result1).toBe(false)
    expect(result2).toBe(true)
})