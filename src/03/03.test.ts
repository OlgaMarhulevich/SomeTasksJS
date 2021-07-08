import { StudentType } from "../02/02";
import {addTechnology, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: 'Olya',
        age: 26,
        isActive: false,
        address: {
            streetTitle: 'Surganova',
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
                title: 'JS'
            }
        ]
    }
})

test('new technology should be added to student', () => {
    expect(student.technologies.length).toBe(3);

    addTechnology(student, 'React');

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('React');
    expect(student.technologies[3].id).toBeDefined();
})

test('student should be active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);
})

test('does student live in a city', () => {
    let res = doesStudentLiveIn(student, 'Moskow');
    let res2 = doesStudentLiveIn(student, 'Minsk');

    expect(res).toBe(false);
    expect(res2).toBe(true);
})
