

var bio = {	
	"name" : "Wenshuo Chen",
	"role" : "Game Developer",
	"contacts" : {
		"location" : "Cupertino,San Jose,CA",
		"mobile" : "4087484705",
		"email" :	"wenyuc26@gmail.com",
		"github" : "https://github.com/Kakarhot"
	},
	"bioPic" : "images/IMG_0088.JPG",
	"welcomeMessage" : "Stay hungry, stay foolish.",
	"skills" : ["Android Development","Javascript","Python"],
	"display" : function displayBio() {
		$("#header").append(HTMLheaderName.replace("%data%",bio.name));
		$("#header").append(HTMLheaderRole.replace("%data%",bio.role));
		$("#header").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
		$("#header").append(HTMLemail.replace("%data%",bio.contacts.email));
		$("#header").append(HTMLgithub.replace("%data%",bio.contacts.github));
		$("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
			$("#skills").append(formattedSkills);
			formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
			$("#skills").append(formattedSkills);
			formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
			$("#skills").append(formattedSkills);
		}		
	}
};

var work = {
	"jobs" : [
  		{
			"title" : "Pokemon Trainer",
			"employer" : "Nintendo",
			"location" : "Osaka, Japan",
			"dates" : "2014/7/1",
			"description" : "Working as a full time game developer"
		},
		{
			"title" : "System Engineer",
			"employer" : "Udacity",
			"location" : "San Jose",
			"dates" : "2015/4/1",
			"description" : "Working as a full time system engineer"
		}
	],
	"display" : function displayWork() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
		}	
	}
};


var education = {
	"schools" : [
	  {
	  	"name" : "Monta Vista High School",
	  	"location" : "Cupertino",
	  	"degree" : "Master",
	  	"major" : ["Comperter Engineering"],
	  	"dates" : "2020",
	  	"url" : "http://www.bu.edu/eng/departments/ece/"
	  },
	  {
	  	"name" : "Asia-Pacific Experimental School of Beijing Normal University",
	  	"location" : "Beijing",
	  	"degree" : "BS",
	  	"major" : ["E-commerce and law"],
	  	"dates" : "2012",
	  	"url" : "http://www.bupt.edu.cn/"
	  }
	],
	"onlineCourses" : [
		{
			"title" : "Android Basic Nanodegree",
			"school" : "Udacity",
			"date" : "2016",
			"url" : "https://www.udacity.com/course/android-basics-nanodegree-by-google--nd803"
		},
		{
			"title" : "Javascript Syntax",
			"school" : "Udacity",
			"date" : "2016",
			"url" : "https://www.udacity.com/course/javascript-basics--ud804"
		}
	],
	"display" : function displayEducation() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			var formattedNameDegree = formattedName + formattedDegree;
			$(".education-entry:last").append(formattedNameDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			for (major in education.schools[school].major) {
				var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
		$("#education").append(HTMLonlineClasses);
		for (onlineCourse in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
			var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].date);
			var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);
			var formattedTitleSchool = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedTitleSchool);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedUrl);
		}
	}

};

var project = {
	"projects" : [
		{
			"title" : "Inventory",
			"dates" : "2016/10/14",
			"description" : "Use sqlite as the database to store and display the information of a store's inventory",
			"image" : ["images/inventory.JPG"]
		},
		{ 
			"title" : "BookSearch",
			"dates" : "2016/10/01",
			"description" : "Use Google Book API to search books online",
			"image" : ["images/bookSearch.jpg"]
	 	}	 
	 ],
	"display" : function() {
		for (each in project.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%",project.projects[each].title);
			var formattedDates = HTMLprojectDates.replace("%data%",project.projects[each].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%",project.projects[each].description);

			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);
			if (project.projects[each].image.length > 0) {
				for (image in project.projects[each].image) {
					var formattedImage = HTMLprojectImage.replace("%data%",project.projects[each].image[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}		
		}	
	}

};


bio.display();

project.display();

education.display();

work.display();

// $("#main").append(internationalizeButton);

// function inName() {
// 	var nameArray = bio.name.split(" ");
// 	var firstChar = nameArray[0].slice(0,1).toUpperCase();
// 	nameArray[0] = firstChar + nameArray[0].slice(1).toLowerCase();
// 	nameArray[1] = nameArray[1].toUpperCase();
// 	return nameArray.join(" ");
// }

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

