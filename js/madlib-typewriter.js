
function newTypewriter() {
	document.getElementById('main').innerHTML = "";
	document.getElementById('main').innerHTML = "<section id='typeWriter'></section>";
	goAgain();
};

function goAgain() {
	var typeWriter = new TypeWriter('#typeWriter',[
		'It’s hard for me to capture the breadth of knowledge and experience that I’ve acquired, so I’ve made a game out of introducing the various aspects of myself.',
		'Click to ',
		'I am a critical thinker.',
		'I am a problem solver.',
		'I am a developer.',
		'I am a polymath.',
		'',
		'',
		'<input type="button" class="btn btn-lg" id="generate" onclick="generate()" value="See More!"></input>'
	]);

	typeWriter.start();
}

function generate() {

	let creative = ["ambitious", "artistic", "creative", "dependable", "intelligent", "industrious", "reliable", "sympathetic", "sensible", "astute", "fastidious", "assimilator", "sagacious"];
	let interests = ["fencing", "karate'", "violin", "trumpet", "piano", "drums", "guitar", "locksmithing", "graphic design", "web development", "app development", "software development", "construction", "architecture", "engineering", "film", "lifeguarding", "personal training", "jewelry making", "coaching lacrosse", "yo-yoing", "carpentry", "set design", "forensics", "Muay Thai", "tutoring", "teaching", "painting", "sculpting", "olympic weightlifting", "powerlifting", "crossfit", "magic"];
	let interests1 = ["fencing", "karate'", "violin", "trumpet", "piano", "drums", "guitar", "locksmithing", "graphic design", "web development", "app development", "software development", "construction", "architecture", "engineering", "film", "lifeguarding", "personal training", "jewelry making", "coaching lacrosse", "yo-yoing", "carpentry", "set design", "forensics", "Muay Thai", "tutoring", "teaching", "painting", "sculpting", "olympic weightlifting", "powerlifting", "crossfit", "magic"];
	let webSkillz = ["html", "html5", "web development", "full stack web development", "CSS", "JavaScript", "PHP", "Angular", "Object Oriented Programming", "mySQL", "database design", "digital security", "git", "version control", "project management"];
	let projects = ["bacon ipsum generator", "ROT 13 encoder", "anagram maker", "javascript animations", "bootstrap static pages", "palindrome checker", "capstone"];
	let quote = ["\"If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.\" - Bruce Lee", "\"Here's to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes... the ones who see things differently -- they're not fond of rules... You can quote them, disagree with them, glorify or vilify them, but the only thing you can't do is ignore them because they change things... they push the human race forward, and while some may see them as the crazy ones, we see genius, because the ones who are crazy enough to think that they can change the world, are the ones who do.\" -Steve Jobs", "\"On ne tue point les idees: Ideas cannot be killed\" -"];
	let signOff = ["Thank you", "Best", "My best", "My best to you", "All best", "All the best", "Best wishes", "Bests", "Best regards", "Regards", "Rgds", "Warm Regards", "Warmest", "Warmly", "Take care", "Thanks", "Thanks so much", "Many thanks", "Hope this helps", "Be well", "Sincerely", "Cheers", "High five from down low", "See you around", "Sent from a prehistoric stone tablet"];
	let name = ["Ken", "Kenneth", "Ken Keyes", "Kenneth Keyes", "Doodle", "KC", "Case", "Bro", "Dude", "Little Brother", "Son", "Friend"];

	let newCreative = creative[Math.floor(Math.random() * creative.length)];
	let newInterests = interests[Math.floor(Math.random() * interests.length)];
	let newInterests1 = interests1[Math.floor(Math.random() * interests1.length)];
	let newWebSkillz = webSkillz[Math.floor(Math.random() * webSkillz.length)];
	let newProjects = projects[Math.floor(Math.random() * projects.length)];
	let newQuote = quote[Math.floor(Math.random() * quote.length)];
	let newSignOff = signOff[Math.floor(Math.random() * signOff.length)];
	let newName = name[Math.floor(Math.random() * name.length)];

	document.getElementById("creative").innerHTML = newCreative;
	document.getElementById("interests").innerHTML = newInterests;
	document.getElementById("interests1").innerHTML = newInterests1;
	document.getElementById("webSkillz").innerHTML = newWebSkillz;
	document.getElementById("projects").innerHTML = newProjects;
	document.getElementById("quote").innerHTML = newQuote;
	document.getElementById("signOff").innerHTML = newSignOff;
	document.getElementById("name").innerHTML = newName;

}