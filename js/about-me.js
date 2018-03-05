// window.onload = function () {
// 	generate();
// }




function generate() {
	document.getElementById("testDiv").innerHTML = "<div id=\"madLib\">" +
		"<p> Who Is Ken?</p>" +
		"<p> I am a <span id=\"creative\">creative</span> individual that embraces <span id=\"criticalThinking\"></span> and making mistakes.</p>" +
		"<p> I am always willing to try something new and I am adept at connecting relevant previous experiences with current challenges.</p>" +
		"<p> I have an incredible desire to understand the world around me, which is demonstrated by my diverse background ranging from <span id=\"interests\"></span> to <span id=\"interests1\"></span></p>" +
		"<p> Of course I will always love to work with my hands, but my spacial and mechanical mind have proved to be valuable in my foray into web development.</p>" +
		"<p> Recently, I have been learning <span id=\"webSkillz\">new languages and frameworks</span></p>" +
		"<p> With these skills I will one day change the world, but today you can see them in action in my <span id=\"projects\">projects</span>.</p>" +
		"<p> Sometimes, my words escape me and I find that others have said it better. Here is a favorite quote of mine:</p>" +
		"<blockquote><span id=\"quote\"></span></blockquote>" +
		"<p> I am always looking for opportunities for new challenges and experiences, check out some of my other skills and reach out if you would like to know more.</p>" +
		"<p> <span id=\"signOff\">Thank you,</span></p>" +
		"<p><span id=\"name\">Ken</span></p>" +
		"<input type=\"button\" class=\"btn btn-lg border\" id=\"generate\" onclick=\"generate()\" value=\"Regenerate\"></input>" +
		"</div>";




	let creative = ["ambitious", "artistic", "creative", "dependable", "intelligent", "industrious", "reliable", "sympathetic", "sensible", "astute", "fastidious", "assimilator", "sagacious"];
	let criticalThinking = ["critical thinking", "contemplation", "meditation", "deliberation", "problem solving", "free thinking", "conceptualizing", "extreme ownership"];
	let interests = ["fencing", "karate'", "violin", "trumpet", "piano", "drums", "guitar", "locksmithing", "graphic design", "web development", "app development", "software development", "construction", "architecture", "engineering", "film", "lifeguarding", "personal training", "jewelry making", "coaching lacrosse", "yo-yoing", "carpentry", "set design", "forensics", "Muay Thai", "tutoring", "teaching", "painting", "sculpting", "olympic weightlifting", "powerlifting", "crossfit", "magic"];
	let interests1 = ["fencing", "karate'", "violin", "trumpet", "piano", "drums", "guitar", "locksmithing", "graphic design", "web development", "app development", "software development", "construction", "architecture", "engineering", "film", "lifeguarding", "personal training", "jewelry making", "coaching lacrosse", "yo-yoing", "carpentry", "set design", "forensics", "Muay Thai", "tutoring", "teaching", "painting", "sculpting", "olympic weightlifting", "powerlifting", "crossfit", "magic"];
	let webSkillz = ["html", "html5", "web development", "full stack web development", "CSS", "JavaScript", "PHP", "Angular", "Object Oriented Programming", "mySQL", "database design", "digital security", "git", "version control", "project management"];
	let projects = ["bacon ipsum generator", "ROT 13 encoder", "anagram maker", "javascript animations", "bootstrap static pages", "palindrome checker", "capstone"];
	let quote = ["\"If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.\" - Bruce Lee", "\"Here's to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes... the ones who see things differently -- they're not fond of rules... You can quote them, disagree with them, glorify or vilify them, but the only thing you can't do is ignore them because they change things... they push the human race forward, and while some may see them as the crazy ones, we see genius, because the ones who are crazy enough to think that they can change the world, are the ones who do.\" -Steve Jobs", "\"On ne tue point les idees: Ideas cannot be killed\" -"];
	let signOff = ["Thank you", "Best", "My best", "My best to you", "All best", "All the best", "Best wishes", "Bests", "Best regards", "Regards", "Rgds", "Warm Regards", "Warmest", "Warmly", "Take care", "Thanks", "Thanks so much", "Many thanks", "Hope this helps", "Be well", "Sincerely", "Cheers", "High five from down low", "See you around", "Sent from a prehistoric stone tablet"];
	let name = ["Ken", "Kenneth", "Ken Keyes", "Kenneth Keyes", "Doodle", "KC", "Case", "Bro", "Dude", "Little Brother", "Son", "Friend"];


// window.onload = generate();

	let newCreative = creative[Math.floor(Math.random() * creative.length)];
	let newCriticalThinking = criticalThinking[Math.floor(Math.random() * criticalThinking.length)];
	let newInterests = interests[Math.floor(Math.random() * interests.length)];
	let newInterests1 = interests1[Math.floor(Math.random() * interests1.length)];
	let newWebSkillz = webSkillz[Math.floor(Math.random() * webSkillz.length)];
	let newProjects = projects[Math.floor(Math.random() * projects.length)];
	let newQuote = quote[Math.floor(Math.random() * quote.length)];
	let newSignOff = signOff[Math.floor(Math.random() * signOff.length)];
	let newName = name[Math.floor(Math.random() * name.length)];

	document.getElementById("creative").innerHTML = newCreative;
	document.getElementById("criticalThinking").innerHTML = newCriticalThinking;
	document.getElementById("interests").innerHTML = newInterests;
	document.getElementById("interests1").innerHTML = newInterests1;
	document.getElementById("webSkillz").innerHTML = newWebSkillz;
	document.getElementById("projects").innerHTML = newProjects;
	document.getElementById("quote").innerHTML = newQuote;
	document.getElementById("signOff").innerHTML = newSignOff;
	document.getElementById("name").innerHTML = newName;

}