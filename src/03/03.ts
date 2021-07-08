import { StudentType } from "../02/02";

export function sum (a: number, b: number) {
    return a + b
}

export const addTechnology = (student: StudentType, technology: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: technology
    })
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true;
}

export const doesStudentLiveIn = (student: StudentType, city: string) => {
    return student.address.city.title === city
}