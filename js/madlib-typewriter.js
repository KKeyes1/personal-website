
function newTypewriter() {
	document.getElementById('main').innerHTML = "";
	document.getElementById('main').innerHTML = "<section id='typeWriter'></section>";
	goAgain();
};

function goAgain() {
	var typeWriter = new TypeWriter('#typeWriter',[
		// 'I often struggle to describe myself, so I made this page to help.',
		// 'Let me tell you about what excites me.',
		// 'After, you can click to generate new information and see what else you can learn more.',
		// '',
		'I am <em id="polymath">a polymath</em>.',
		'I love learning. From <em id="interests">fitness</em> to <em id="interests1">web development</em>, I am always willing to try new things.',
		'I also love sharing what I have learned with others, teaching is the most profound learning experience.',
		'I love facing new problems.',
		'I love the the process of breaking down an insurmountable obstacle until the path to overcome it becomes clear.',
		'Recently, my biggest undertaking has been in web development, where I have been diving into <em id="webSkillz">so many languages</em>.',
		'I love iterating through solutions rapidly, failing fast and often, in order to arrive at my best solution.',
		'You can check out my instagram to see some brainteasers I have accomplished, like my <em id="projects">bacon ipsum generator</em>.',
		'I am a critical thinker.',
		'I an an outside the box thinker.',
		'I want to help people.',
		'',
		'<em id="signOff">All my best</em>,',
		'-<em id="name">Ken</em>',
		'',
		'--> <input type="button" class="btn btn-lg button-glow" id="generate" onclick="generate()" value="Click"></input> to see more.'
	]);

	typeWriter.start();
}

function generate() {

	let polymath = ["a polymath", "a multipotentialite", "a scanner", "multi passionate"];

	let interests = ["fencing", "karate'", "violin", "trumpet", "piano", "drums", "guitar", "locksmithing", "graphic design", "web development", "app development", "software development", "construction", "architecture", "engineering", "film", "lifeguarding", "personal training", "jewelry making", "coaching lacrosse", "yo-yoing", "carpentry", "set design", "forensics", "Muay Thai", "tutoring", "teaching", "painting", "sculpting", "olympic weightlifting", "powerlifting", "crossfit", "magic"];

	let interests1 = ["fencing", "karate'", "violin", "trumpet", "piano", "drums", "guitar", "locksmithing", "graphic design", "web development", "app development", "software development", "construction", "architecture", "engineering", "film", "lifeguarding", "personal training", "jewelry making", "coaching lacrosse", "yo-yoing", "carpentry", "set design", "forensics", "Muay Thai", "tutoring", "teaching", "painting", "sculpting", "olympic weightlifting", "powerlifting", "crossfit", "magic"];

	let webSkillz = ["html", "html5", "web development", "full stack web development", "CSS", "JavaScript", "PHP", "Angular", "Object Oriented Programming", "mySQL", "database design", "digital security", "git", "version control", "project management"];

	let projects = ["bacon ipsum generator", "ROT 13 encoder", "anagram maker", "javascript animations", "bootstrap static pages", "palindrome checker", "capstone"];

	let signOff = ["Thank you", "Best", "My best", "My best to you", "All best", "All the best", "Best wishes", "Bests", "Best regards", "Regards", "Rgds", "Warm Regards", "Warmest", "Warmly", "Take care", "Thanks", "Thanks so much", "Many thanks", "Hope this helps", "Be well", "Sincerely", "Cheers", "High five from down low", "See you around", "Sent from a prehistoric stone tablet"];

	let name = ["Ken", "Kenneth", "Ken Keyes", "Kenneth Keyes", "KC"];

	let newPolymath = polymath[Math.floor(Math.random() * polymath.length)];
	let newInterests = interests[Math.floor(Math.random() * interests.length)];
	let newInterests1 = interests1[Math.floor(Math.random() * interests1.length)];
	let newWebSkillz = webSkillz[Math.floor(Math.random() * webSkillz.length)];
	let newProjects = projects[Math.floor(Math.random() * projects.length)];
	let newSignOff = signOff[Math.floor(Math.random() * signOff.length)];
	let newName = name[Math.floor(Math.random() * name.length)];

	document.getElementById("polymath").innerHTML = newPolymath;
	document.getElementById("interests").innerHTML = newInterests;
	document.getElementById("interests1").innerHTML = newInterests1;
	document.getElementById("webSkillz").innerHTML = newWebSkillz;
	document.getElementById("projects").innerHTML = newProjects;
	document.getElementById("signOff").innerHTML = newSignOff;
	document.getElementById("name").innerHTML = newName;

}