/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York."
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York."
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York."
	});
	const dummy_campus4 = await Campus.create({
		name: "Lehman College",
		address: "250 Bedford Park Blvd W, Bronx, NY 10468",
		description: "This is a school in Bronx, New York."
	});

	const dummy_campus5 = await Campus.create({
		name: "City College",
		address: "160 Convent Ave, New York, NY 10031",
		description: "This is also school in New York, New York."
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
      	lastname: "Smith",
		email: "joesmith@gmail.com", // add email adress to match requirements
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
      	lastname: "Johnson",
		email: "maryjohnson@gmail.com", // add email adress to match requirements
	});

	const dummy_student3 = await Student.create({
		firstname: "Kobe",
      	lastname: "Bryant",
		email: "kobebryant@gmail.com", // add email adress to match requirements
	});

	const dummy_student4 = await Student.create({
		firstname: "Chris",
      	lastname: "Hemsworth",
		email: "chrishemsworth@gmail.com", // add email adress to match requirements
	});

	const dummy_student5 = await Student.create({
		firstname: "Jacob",
      	lastname: "Peralta",
		email: "jacobperalta@gmail.com", // add email adress to match requirements
	});

	const dummy_student6 = await Student.create({
		firstname: "Freddie",
      	lastname: "Mercury",
		email: "freddiemercury@gmail.com", // add email adress to match requirements
	});

	const dummy_student7 = await Student.create({
		firstname: "Laufey",
      	lastname: "Jónsdóttir",
		email: "laufeyjónsdóttir@gmail.com", // add email adress to match requirements
	});

	const dummy_student8 = await Student.create({
		firstname: "Thomas",
      	lastname: "Bangalter",
		email: "thomasbangalter@gmail.com", // add email adress to match requirements
	});

	const dummy_student9 = await Student.create({
		firstname: "Donald",
      	lastname: "Glover",
		email: "donaldglover@gmail.com", // add email adress to match requirements
	});

	const dummy_student10 = await Student.create({
		firstname: "Louis K.",
      	lastname: "Celestin",
		email: "louiskcelestin@gmail.com", // add email adress to match requirements
	});
	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
	await dummy_student3.setCampus(dummy_campus5);
	await dummy_student4.setCampus(dummy_campus4);
	await dummy_student5.setCampus(dummy_campus3);
	await dummy_student6.setCampus(dummy_campus);
	await dummy_student7.setCampus(dummy_campus2);
	await dummy_student8.setCampus(dummy_campus3);
	await dummy_student9.setCampus(dummy_campus4);
	await dummy_student10.setCampus(dummy_campus5);
}

// Export the database seeding function
module.exports = seedDB;