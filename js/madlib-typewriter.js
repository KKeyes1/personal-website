
function newTypewriter() {
	document.getElementById('main').innerHTML = "";
	document.getElementById('main').innerHTML = "<section id='typeWriter'></section>";
	goAgain();
};

function goAgain() {
	var typeWriter = new TypeWriter('#typeWriter',[
		'So who is Ken?',
		'Read this, and regenerate it as many times as you like to replace some content.',
		'<section id="iLove">I love learning</section>',
		'<section id="iAm">I am an artist of thought</section>',
		'<section id="iWant">I want to help people</section>',
		'Get in touch if you want to get to know me better, or work with me',
		'',
		'<em id="signOff">All my best</em>',
		'    <em id="name">Ken</em>',
		'',
		'--> <input type="button" class="btn" id="generate" onclick="generate()" value="Click"></input> to see more.'
	]);

	typeWriter.start();
}

function generate() {

	let iLoveArray = [
		"<section id='iLove'>I love learning</section>",
		"<section id='iLove'>I love facing new problems</section>",
		"<section id='iLove'>I love sharing what I have learned with others</section>",
		"<section id='iLove'>I love the the process of breaking down an insurmountable obstacle until the path to overcome it becomes clear</section>"
	];

	let iAmArray = [
		"<section id='iAm'>I am an artist of thought</section>",
		"<section id='iAm'>I am a critical thinker</section>",
		"<section id='iAm'>I am <em id='polymath'>a polymath</em></section>"
	];

	let iWantArray = [
		"<section id='iWant'>I want to help people</section>",
		"<section id='iWant'>I want to make the world a better place</section>",
		"<section id='iWant'>I want to work with you</section>",
		"<section id='iWant'>I want to make a difference</section>",
	];

	// let polymath = ["a polymath", "a multipotentialite", "a scanner", "multi passionate"];
	//
	// let interests = ["fencing", "karate'", "violin", "trumpet", "piano", "drums", "guitar", "locksmithing", "graphic design", "web development", "app development", "software development", "construction", "architecture", "engineering", "film", "lifeguarding", "personal training", "jewelry making", "coaching lacrosse", "yo-yoing", "carpentry", "set design", "forensics", "Muay Thai", "tutoring", "teaching", "painting", "sculpting", "olympic weightlifting", "powerlifting", "crossfit", "magic"];
	//
	// let interests1 = ["fencing", "karate'", "violin", "trumpet", "piano", "drums", "guitar", "locksmithing", "graphic design", "web development", "app development", "software development", "construction", "architecture", "engineering", "film", "lifeguarding", "personal training", "jewelry making", "coaching lacrosse", "yo-yoing", "carpentry", "set design", "forensics", "Muay Thai", "tutoring", "teaching", "painting", "sculpting", "olympic weightlifting", "powerlifting", "crossfit", "magic"];
	//
	// let webSkillz = ["html", "html5", "web development", "full stack web development", "CSS", "JavaScript", "PHP", "Angular", "Object Oriented Programming", "mySQL", "database design", "digital security", "git", "version control", "project management"];
	//
	// let projects = ["bacon ipsum generator", "ROT 13 encoder", "anagram maker", "javascript animations", "bootstrap static pages", "palindrome checker", "capstone"];

	let signOff = ["Thank you", "Best", "My best", "My best to you", "All best", "All the best", "Best wishes", "Bests", "Best regards", "Regards", "Rgds", "Warm Regards", "Warmest", "Warmly", "Take care", "Thanks", "Thanks so much", "Many thanks", "Hope this helps", "Be well", "Sincerely", "Cheers", "High five from down low", "See you around", "Sent from a prehistoric stone tablet"];

	let name = ["Ken", "Kenneth", "Ken Keyes", "Kenneth Keyes", "KC"];

	let newILoveArray = iLoveArray[Math.floor(Math.random() * iLoveArray.length)];
	let newIAmArray = iAmArray[Math.floor(Math.random() * iAmArray.length)];
	let newIWantArray = iWantArray[Math.floor(Math.random() * iWantArray.length)];

	document.getElementById("iLove").innerHTML = newILoveArray;
	document.getElementById("iAm").innerHTML = newIAmArray;
	document.getElementById("iWant").innerHTML = newIWantArray;


	// let newPolymath = polymath[Math.floor(Math.random() * polymath.length)];
	// let newInterests = interests[Math.floor(Math.random() * interests.length)];
	// let newInterests1 = interests1[Math.floor(Math.random() * interests1.length)];
	// let newWebSkillz = webSkillz[Math.floor(Math.random() * webSkillz.length)];
	// let newProjects = projects[Math.floor(Math.random() * projects.length)];
	let newSignOff = signOff[Math.floor(Math.random() * signOff.length)];
	let newName = name[Math.floor(Math.random() * name.length)];
	//
	// document.getElementById("polymath").innerHTML = newPolymath;
	// document.getElementById("interests").innerHTML = newInterests;
	// document.getElementById("interests1").innerHTML = newInterests1;
	// document.getElementById("webSkillz").innerHTML = newWebSkillz;
	// document.getElementById("projects").innerHTML = newProjects;
	document.getElementById("signOff").innerHTML = newSignOff;
	document.getElementById("name").innerHTML = newName;

}