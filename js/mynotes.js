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
};

$("#main").append(bio["name"])
$("#main").append(bio.role)