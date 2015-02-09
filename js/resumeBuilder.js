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

name = "Jeremiah Lant";
role = "Programmer and Full Stack Web Developer";

formatted_name = HTMLheaderName.replace("%data%", name);
formatted_role = HTMLheaderRole.replace("%data%", role);

// show the name and role before the unordered list in the header tag div
$("#header").prepend(formatted_role)
$("#header").prepend(formatted_name)