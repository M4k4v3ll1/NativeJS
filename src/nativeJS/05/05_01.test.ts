import {createGreetingMessage, peopleType} from "./05_01";

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