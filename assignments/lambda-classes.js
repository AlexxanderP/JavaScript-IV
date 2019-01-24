// CODE here for your Lambda Classes
















//Instantiate Objects using class constructors
const austenAllred = new Person({
    name: 'Austen',
    location: 'Utah'
});

const ashtonKutcher = new Person({
    name: 'Ashton',
    location: 'Hollywood'
});

const timothyShores = new Student({
    name: 'Timothy',
    age: 29,
    location: 'Chicago',
    gender: 'Male',
    previousBackground: 'Marketing',
    className: 'Web17',
    favSubjects: ['HTML', 'CSS', 'LESS', 'Javascript']
});

const javontayMcElroy = new Student({
    name: 'Javontay',
    favSubjects: ['HTML', 'CSS', 'LESS', 'Javascript']

});

const omarSallah = new Student({
    name: 'Justin',
    favSubjects: ['HTML', 'CSS', 'LESS', 'Javascript']
});

const joshKnell = new Instructor({
    name: 'Josh',
    gender: 'Male',
    specialty: 'Front-end web development',
    favLanguage: 'Javascript',
    catchPhrase: 'Banjo'
});

const ryanHamblin = new Instructor({
    name: 'Ryan',
    location: 'Utah',
    gender: 'Male',
    specialty: 'Full-Stack web development',
    favLanguage: 'Javascript'
});

const brandonVilaychith = new ProjectManager({
    name: 'Brandon',
    gender: 'Male',
});

const ryanBorgis = new ProjectManager({
    name: 'Ryan',
    gender: 'Male',
});

// Console.log Tests
console.log('Person Tests');
austenAllred.speak();
ashtonKutcher.speak();
console.log('');

console.log('Student Tests - Timothy Shores ');
timothyShores.listSubjects();
timothyShores.PRAssignment('Javascript IV');
timothyShores.sprintChallenge('Javascript IV');
console.log('');

console.log('Student Tests - Javontay McElroy ');
javontayMcElroy.listSubjects();
javontayMcElroy.PRAssignment('Javascript III');
javontayMcElroy.sprintChallenge('Javascript III');
console.log('');


console.log('Student Tests - Justin Davis ');
justinDavis.listSubjects();
justinDavis.PRAssignment('Javascript II');
justinDavis.sprintChallenge('Javascript II');
console.log('');

console.log('Instructor Tests - Josh Knell');
joshKnell.demo('Javascript');
joshKnell.grade(timothyShores, "Javscript IV");
console.log('');

console.log('Instructor Tests - Ryan Hamblin');
ryanHamblin.demo('Javascript');
ryanHamblin.grade(timothyShores, "Javscript IV");
console.log('');

console.log('Project Manager Tests - Ryan Borgis');
ryanBorgis.standUp('#web17_ryan');
ryanBorgis.debugsCode(timothyShores, 'Javascript IV');
console.log('');