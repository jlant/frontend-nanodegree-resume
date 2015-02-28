// resume objects
var bio = {
	"name": "Jeremiah Lant",
	"role": "Hydrologist, Programmer, and Full Stack Web Developer",
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
			"description": "Flood inundation modeling",
			"images": ["images/197x148.gif", "images/197x148.gif"]
		},
		{
			"title": "Flood-Inundation Maps for an 8.9-Mile Reach of the South Fork Little River at Hopkinsville, Kentucky",
			"dates": 2013,
			"description": "Flood inundation modeling",
			"images": ["images/197x148.gif"]
		},
		{
			"title": "waterapputils",
			"dates": 2015,
			"description": "Python project for Delaware River Basin that adds water use and climage change capabilities to an application developed at the KYWSC called WATER. Command line and graphical user interfaces.",
			"images": ["images/197x148.gif"]
		},
		{
			"title": "nwispy",
			"dates": 2014,
			"description": "Python project to get and process USGS National Water Information Systems (NWIS) data. Command line and graphical user interfaces.",
			"images": ["images/197x148.gif"]
		},
		{
			"title": "hydrocomp",
			"dates": 2014,
			"description": "Python project to compare a hydrologic model's output with USGS National Water Information Systems (NWIS) data. Command line and graphical user interfaces.",
			"images": ["images/197x148.gif"]
		},
		{
			"title": "scientific-computing-group",
			"dates": 2014,
			"description": "Project to teach and continue to learn best practices in scientific computing; Unix commands, Version control with Git and GitHub, Python programming",
			"images": ["images/197x148.gif"]

		},
		{
			"title": "wateruse-map-d3",
			"dates": 2015,
			"description": "Web development and data visualization project using D3.js using 2010 USGS water use data",
			"images": ["images/197x148.gif"]
		}
	]
}

function display_work() {
	// display work section

	for (job in work["jobs"]) {
		// create a new div for work experience
		$("#workExperience").append(HTMLworkStart);

		// concat employer and title
		var formatted_job = HTMLworkEmployer.replace("%data%", work["jobs"][job]["employer"]);
		var formatted_title = HTMLworkTitle.replace("%data%", work["jobs"][job]["title"]);
		var formatted_dates = HTMLworkDates.replace("%data%", work["jobs"][job]["dates"]);
		var formatted_location = HTMLworkLocation.replace("%data%", work["jobs"][job]["location"]);
		var formatted_description = HTMLworkDescription.replace("%data%", work["jobs"][job]["description"]);

		// append the info to the work section of the page
		$(".work-entry:last").append(formatted_job + formatted_title);
		$(".work-entry:last").append(formatted_dates)
		$(".work-entry:last").append(formatted_location)
		$(".work-entry:last").append(formatted_description)		
	}	
}

function locationizer(work_obj) {
	// return array of work locations

    var location_arr = [];
 
    for (job in work_obj.jobs) {
        location_arr.push(work_obj.jobs[job].location);
    }
    return location_arr;
}

function inName(name) {
	// return an internalized name; i.e. Jeremiah Lant -> Jeremiah LANT

	// remove whitespace from front and back
	name = name.trim().split(" ");
	first_name = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	last_name = name[1].toUpperCase();

	internationalized_name = first_name + " " + last_name;

	return internationalized_name;
}


// main
formatted_name = HTMLheaderName.replace("%data%", bio["name"])
formatted_role = HTMLheaderRole.replace("%data%", bio["role"])
formatted_bio_pic = HTMLbioPic.replace("%data%", bio["bio_pic"])
formatted_welcome_msg = HTMLWelcomeMsg.replace("%data%", bio["welcome_msg"])
formatted_mobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"])
formatted_email = HTMLemail.replace("%data%", bio["contacts"]["email"])
formatted_github = HTMLgithub.replace("%data%", bio["contacts"]["github"])
formatted_twitter = HTMLtwitter.replace("%data%", bio["contacts"]["twitter"])
formatted_location = HTMLlocation.replace("%data%", bio["contacts"]["location"])

$("#header").prepend(formatted_role)
$("#header").prepend(formatted_name)
$("#header").append(formatted_bio_pic)
$("#header").append(formatted_welcome_msg)
$("#topContacts").append(formatted_mobile)
$("#topContacts").append(formatted_email)
$("#topContacts").append(formatted_github)
$("#topContacts").append(formatted_twitter)
$("#topContacts").append(formatted_location)

if (bio["skills"].length > 0) {

	$("#header").append(HTMLskillsStart);

	for (skill in bio["skills"]) {
		var formatted_skill = HTMLskills.replace("%data%", bio["skills"][skill]);
		$("#skills").append(formatted_skill);
	}
}

if (work["jobs"].length > 0) {

	display_work();
}

// encapsulate a display method in projects object
projects.display = function() {
	
	for (project in projects["projects"]) {
		$("#projects").append(HTMLprojectStart);

		// concat employer and title
		var formatted_title = HTMLprojectTitle.replace("%data%", projects["projects"][project]["title"]);
		var formatted_dates = HTMLprojectDates.replace("%data%", projects["projects"][project]["dates"]);
		var formatted_description = HTMLprojectDescription.replace("%data%", projects["projects"][project]["description"]);

		// append the info to the project section of the page
		$(".project-entry:last").append(formatted_title);
		$(".project-entry:last").append(formatted_dates);
		$(".project-entry:last").append(formatted_description);

		console.log(projects.projects[project].description)

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formatted_image = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formatted_image);
			}
		}
	}	
}

projects.display()

$("#mapDiv").append(googleMap);

// extras
locations = locationizer(work);
console.log(locations)

console.log(inName("jeremiah lant"))

$("#main").append(internationalizeButton);

// log click locations
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});
