export function splitIntoWords(sentence: string) {
    return sentence.toLowerCase().split(' ')
        .filter(el => el !== '' && el !== '-').map(word => word
            .replace('.','')
            .replace(',','')
            .replace('!','')
        )
}

export function sum(a: number,b: number) {
    return a + b
}

export function mult(a: number,b: number) {
    return a * b
}