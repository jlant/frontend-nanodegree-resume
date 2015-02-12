// resume objects
var bio = {
	"name": "Jeremiah Lant",
	"role": "Programmer and Full Stack Web Developer",
	"contacts": {
		"mobile": "502-338-3156",
		"email": "jeremiahlant@gmail.com",
		"github": "https://github.com/jlant",
		"twitter": "@jlant",
		"location": "Louisville, Kentucky",
	},
	"bio_pic": "images/jeremiah.jpg",
	"welcome_msg": "Hello and welcome to my page.",
	"skills": ["python", "r", "javascript", "web development", "hydrodynamic modeling", "hydrologic modeling"],
}

var work = {
	"jobs": [
		{
			"employer": "United States Geological Survey",
			"title": "Hydrologist",
			"location": "Louisville, Kentucky, US",
			"dates": "2011-Present",
			"description": "Work consists of hydrodynamic modeling and hydrologic modeling"
		},
		{
			"employer": "United States Geological Survey",
			"title": "Student Intern",
			"location": "Columbus, Ohio, US",
			"dates": "2010-2011",
			"description": "Work consisted of assisting with flood inundation mapping"
		},
		{
			"employer": "Ohio State University",
			"title": "Masters student",
			"location": "Columbus, Ohio, US",
			"dates": "2009-2011",
			"description": "Work consisted of using a 2d hydrodynamic model called LISFLOOD-FP to model the Muskingum River in Zanesville, Ohio"
		},
		{
			"employer": "COSI",
			"title": "Outreach Instructor",
			"location": "Columbus, Ohio, US",
			"dates": "2007-2009",
			"description": "Taught science through outreach program"
		},
		{
			"employer": "Teach for America - Frederick Douglass High School",
			"title": "Physics Teacher",
			"location": "Atlanta, Georgia, US",
			"dates": "2006-2007",
			"description": "Taught Physics to 11th and 12th graders"
		}
	]
}

var education = {
	"schools": [
		{
			"name": "University of Kentucky",
			"location": "Lexington, Kentucky, US",
			"degree": "BS",
			"majors": "Physics",
			"dates": "2002-2006"
		},
		{
			"name": "Ohio State University",
			"location": "Columbus, Ohio, US",
			"degree": "MS",
			"majors": "Geodetic Science",
			"dates": "2009-2011"
		}
	],
	"online_courses": [
		{
			"title": "Javascript Basics",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud804"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud304"
		},
		{
			"title": "Intro to Computer Science",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/cs101"
		},
		{
			"title": "High Performance Scientific Computing",
			"school": "Coursera",
			"dates": 2014,
			"url": "https://www.coursera.org/course/scicomp"
		},
		{
			"title": "An Introduction to Interactive Programming in Python",
			"school": "Coursera",
			"dates": 2013,
			"url": "https://www.coursera.org/course/interactivepython"
		},
		{
			"title": "Data Analysis",
			"school": "Coursera",
			"dates": 2013,
			"url": "https://www.coursera.org/course/dataanalysis"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Flood-Inundation Maps for a 6.5-Mile Reach of the Kentucky River at Frankfort, Kentucky",
			"dates": 2014,
			"images": "http://pubs.usgs.gov/sim/3278/"
		},
		{
			"title": "Flood-Inundation Maps for an 8.9-Mile Reach of the South Fork Little River at Hopkinsville, Kentucky",
			"dates": 2013,
			"images": "http://pubs.usgs.gov/sim/3242/"
		},
		{
			"title": "waterapputils",
			"dates": 2015,
			"images": "https://github.com/jlant-usgs/waterapputils"
		},
		{
			"title": "nwispy",
			"dates": 2014,
			"images": "https://github.com/jlant-usgs/nwispy"
		},
		{
			"title": "hydrocomp",
			"dates": 2014,
			"images": "https://github.com/jlant-usgs/hydrocomp"
		},
		{
			"title": "scientific-computing-group",
			"dates": 2014,
			"images": "https://github.com/jlant-usgs/scientific-computing-group"
		}
	]
}


if (bio["skills"].length > 0) {

	$("#header").append(HTMLskillsStart);

	var formatted_skill_0 = HTMLskills.replace("%data%", bio["skills"][0]);
	$("#skills").append(formatted_skill_0);

	var formatted_skill_1 = HTMLskills.replace("%data%", bio["skills"][1]);
	$("#skills").append(formatted_skill_1);

	var formatted_skill_2 = HTMLskills.replace("%data%", bio["skills"][2]);
	$("#skills").append(formatted_skill_2);

	var formatted_skill_3 = HTMLskills.replace("%data%", bio["skills"][3]);
	$("#skills").append(formatted_skill_3);

	var formatted_skill_4 = HTMLskills.replace("%data%", bio["skills"][4]);
	$("#skills").append(formatted_skill_4);

	var formatted_skill_5 = HTMLskills.replace("%data%", bio["skills"][5]);
	$("#skills").append(formatted_skill_5);

}