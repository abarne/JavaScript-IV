// // CODE here for your Lambda Classes
// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:
// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

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

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class Person {
	constructor(attrs) {
		this.name = attrs.name;
		this.age = attrs.age;
		this.location = attrs.location;
	}
	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}`;
	}
}

class Instructor extends Person {
	constructor(attrs) {
		super(attrs);
		this.specialty = attrs.specialty;
		this.favLanguage = attrs.favLanguage;
		this.catchPhrase = attrs.catchPhrase;
	}
	demo(subject) {
		return `Today, we are learding about ${subject}`;
	}
	grade(student, subject) {
		return `${student.name} receives a perfect score on ${subject}.`;
	}
}

class Student extends Person {
	constructor(attrs) {
		super(attrs);
		this.previousBackground = attrs.previousBackground;
		this.className = attrs.className;
		this.favSubjects = attrs.favSubjects;
	}
	listsSubjects() {
		for (let i = 0; i < this.favSubjects.length; i++) {
			console.log(this.favSubjects[i]);
		}
	}
	PRAssignment(subject) {
		return `${this.name} has submitted a PR for ${subject}.`;
	}
	sprintChallenge(subject) {
		return `${this.name} has begun sprint challenge on ${subject}`;
	}
}

class ProjectManager extends Instructor {
	constructor(attrs) {
		super(attrs);
		this.gradClassName = attrs.gradClassName;
		this.favInstructor = attrs.favInstructor;
	}
	standUp(channel) {
		return `${this.name} announces to ${channel}.`;
	}
	debugsCode(student, subject) {
		return `${this.name} debugs ${student.name}'s code on ${subject}.`;
	}
}

const fred = new Instructor({
	name: 'Fred',
	location: 'Bedrock',
	age: 37,
	favLanguage: 'JavaScript',
	specialty: 'Front-end',
	catchPhrase: `Don't forget the homies`
});

const joe = new Instructor({
	name: 'Joe',
	location: 'Florida',
	age: 42,
	favLanguage: 'JavaScript',
	specialty: 'Back-end',
	catchPhrase: `Don't forget to de-bug!`
});

const steve = new Student({
	name: 'Steve',
	location: 'Utah',
	age: 23,
	previousBackground: 'Some College',
	className: 'Web23',
	favSubjects: [ 'Math', 'Computer Science' ]
});

const billy = new ProjectManager({
	name: 'Billy',
	location: 'Michigan',
	age: 32,
	favLanguage: 'JavaScript',
	spcialty: 'Front-end',
	catchPrase: `Let's do this!`,
	gradClassName: 'CS1',
	favInstructor: 'Sean'
});

console.log(fred.speak());
console.log(joe.speak());
console.log(steve.speak());
console.log(billy.speak());

console.log(fred.demo('Math'));
console.log(joe.demo('JavaScript'));
console.log(billy.demo('Python'));

console.log(fred.grade(steve, 'Math'));
console.log(joe.grade(steve, 'Math'));
console.log(billy.grade(steve, 'Math'));

steve.listsSubjects();
console.log(steve.PRAssignment('JavaScript'));
console.log(steve.sprintChallenge('JavaScript Knowledge'));

console.log(billy.standUp('Web23-Help'));
console.log(billy.debugsCode(steve, 'HTML'));
