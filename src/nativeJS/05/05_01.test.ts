import {createGreetingMessage, createReportForSoldier, peopleType} from "./05_01";

let people: Array<peopleType> = []

beforeEach(() => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitrii Sidorov', age: 33}
    ]
})

test('should get array of greeting messages', () => {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe(`Hello Andrew. Welcome to Earth`)
    expect(messages[1]).toBe(`Hello Alexander. Welcome to Earth`)
    expect(messages[2]).toBe(`Hello Dmitrii. Welcome to Earth`)
})

test(`should get array of voenkomat's messages`, () => {
    const reports = createReportForSoldier(people);

    expect(reports.length).toBe(3);
    expect(reports[0]).toBe(`Hello soldier Ivanov Andrew. 33 years you prepered for this big honor to protect your country!`);
    expect(reports[1]).toBe(`Hello soldier Petrov Alexander. 24 years you prepered for this big honor to protect your country!`);
    expect(reports[2]).toBe(`Hello soldier Sidorov Dmitrii. 33 years you prepered for this big honor to protect your country!`);

})