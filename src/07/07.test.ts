import {fun} from "./07";
fun();

test ('1', () => {
    let props = {
        name: 'olga',
        age: 26,
        address: {
            street: {
                title: 'Center str'
            }
        }
    }

    const {name, ...age} = props;

    expect(name).toBe('olga');
    expect(age).toStrictEqual({ age: 26,
        address: {
            street: {
                title: 'Center str'
            }
        } });
})

test ('2', () => {
    const arr = [1,2,3];
    const [a,b] = arr;

    expect(a).toBe(1);
    expect(b).toBe(2);

})

test ('3', () => {
    const arr = [1,2,3];
    const [ , ,b] = arr;

    expect(b).toBe(3);

})

test ('4', () => {
    const arr = [1,2,3];
    const [a, ...b] = arr;

    expect(a).toBe(1);
    expect(b.length).toBe(2);
})

test ('5', () => {
    const arr = [1,2,3];
    const [a, ...b] = arr;

    expect(a).toBe(1);
    expect(b.length).toBe(2);
})


