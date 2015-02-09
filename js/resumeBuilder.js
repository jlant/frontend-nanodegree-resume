/*
// use jQuery to add a javascript variable to the id main in the html that loads this javascript file
$("#main").append("Jeremiah Lant");

var email = "jeremiahlant@gmail.com";
var new_email = email.replace("gmail", "att");

console.log(email)
console.log(new_email)

var name = "Jeremiah";
var awesome_thoughts = "I am " + name + " and I am AWESOME!";

var fun_thoughts = awesome_thoughts.replace("AWESOME", "FUN");

console.log(awesome_thoughts);
console.log(fun_thoughts);

// use jQuery to add a javascript variable to the id main in the html that loads this javascript file
$("#main").append(fun_thoughts)
*/

// name = "Jeremiah Lant";
// role = "Programmer and Full Stack Web Developer";

// formatted_name = HTMLheaderName.replace("%data%", name);
// formatted_role = HTMLheaderRole.replace("%data%", role);

// // show the name and role before the unordered list in the header tag div
// $("#header").prepend(formatted_role)
// $("#header").prepend(formatted_name)

// create a bio object
bio = {
	"name": "Jeremiah Lant",
	"role": "Programmer and Full Stack Web Developer",
	"mobile": "502-338-3156",
	"email": "jeremiahlant@gmail.com",
	"picture": "images/jeremiah.jpg",
	"welcome_msg": "Hello and welcome to my page.",
	"skills": ["python", "r", "javascript", "web development", "hydrodynamic modeling", "hydrologic modeling"],
}

formatted_name = HTMLheaderName.replace("%data%", bio.name);
formatted_role = HTMLheaderRole.replace("%data%", bio.role);
formatted_mobile = HTMLmobile.replace("%data%", bio.mobile);
formatted_email = HTMLemail.replace("%data%", bio.email);
formatted_picture = HTMLbioPic.replace("%data%", bio.picture);
formatted_welcome_msg = HTMLWelcomeMsg.replace("%data%", bio.welcome_msg);
formatted_skills = HTMLskills.replace("%data%", bio.skills)

// show the name and role before the unordered list in the header tag div
$("#header").prepend(formatted_mobile);
$("#header").prepend(formatted_email);
$("#header").prepend(formatted_picture);
$("#header").prepend(formatted_welcome_msg);
$("#header").prepend(formatted_skills);
$("#header").prepend(formatted_role);
$("#header").prepend(formatted_name);







