import {createGreetingMessage, ManType } from "./05";

let people: Array<ManType> = []

beforeEach( () => {
    people = [
        {name: "John Smith", age: 23},
        {name: "Ann Noth", age: 18},
    ]
} )

test ('should get array of greeting messages', () => {
    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(2);
    expect(messages[0]).toBe('Hello John. Welcome!');
    expect(messages[1]).toBe('Hello Ann. Welcome!');
})

