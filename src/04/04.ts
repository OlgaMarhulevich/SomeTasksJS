export function filterOld (age: number) {
    return age > 90;
}

type filterCheapType = {
    title: string,
    price: number
}
export function filterCheap (course: filterCheapType) {
    return course.price < 160;
}
