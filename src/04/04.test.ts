import {filterCheap, filterOld} from "./04";

test ('should take old men older then 90', () => {
    const ages = [18,20,22,100,1,90];
    /*const oldAges = ages.filter(filterOld);*/
    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test ('should take courses chipper then 160', () => {
    const courses = [
        {title: 'HTML', price: 100},
        {title: 'JS', price: 200},
        {title: 'React', price: 110},
    ];
    const cheapCourses = courses.filter(filterCheap);

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe('HTML');
    expect(cheapCourses[1].title).toBe('React');
})

test ('get only active tasks', () => {
    const tasks = [
        {id: 1, title: 'title1', isDone: false},
        {id: 2, title: 'title2', isDone: true},
        {id: 3, title: 'title3', isDone: false},
        {id: 4, title: 'title4', isDone: true},
    ];
    const activeTasks = tasks.filter( task => !task.isDone );
    const completedTasks = tasks.filter( task => task.isDone );

    expect(activeTasks.length).toBe(2);
    expect(activeTasks[0].title).toBe('title1');
    expect(activeTasks[1].title).toBe('title3');

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe('title2');
    expect(completedTasks[1].title).toBe('title4');
})

