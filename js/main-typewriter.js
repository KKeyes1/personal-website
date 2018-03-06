
	$(function() {
		var typeWriter = new TypeWriter('#typeWriter',[
			'Who Is Ken?',
			'',
			'I am a critical thinker,',
			'Always asking questions in order to understand things inside and out.',
			'I am an artist,',
			'Always striving to see beauty in all things.',
			'I am a student,',
			'Always seeking out new information and experiences.',
			'I am a teacher,',
			'Always looking to share my thoughts.',
			'',
			'I am Ken.',
			'',
			'<input type="button" class="btn btn-lg" id="generate" onclick="newTypewriter()" value="Learn More"></input>'
		]);

		typeWriter.start();
	});


	window.setTimeout(function() {

	}, 1000);