// CODE here for your Lambda Classes


// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props


class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age =  attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}


// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'


class Instructor {
    constructor(attributes) {
        super(attributes)
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo (subject) {
        return (`Today we are learning about ${subject}`)
    }
}


// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`








//Instantiate Objects using class constructors
const austenAllred = new Person({
    name: 'Austen',
    age: 29,
    location: 'Utah',
    gender: 'Male'
});

const ashtonKutcher = new Person({
    name: 'Ashton',
    age: 40,
    location: 'Hollywood',
    gender: 'Male'
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
joshKnell.grade(alexanderPiroumian, "Javscript IV");
console.log('');

console.log('Instructor Tests - Ryan Hamblin');
ryanHamblin.demo('Javascript');
ryanHamblin.grade(alexanderPiroumian, "Javscript IV");
console.log('');

console.log('Project Manager Tests - Ryan Borgis');
ryanBorgis.standUp('#web17_brandon');
ryanBorgis.debugsCode(alexanderPiroumian, 'Javascript IV');
console.log('');

