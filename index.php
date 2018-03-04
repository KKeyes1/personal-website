<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="refresh" content="5" >
		<title>Who Is Ken</title>

<!--		Bootstrap CSS-->
		<link
			rel="stylesheet"
			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
			integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
			crossorigin="anonymous" />

<!--		Custom CSS-->
		<link
			rel="stylesheet"
			href="css/style.css" />

<!--		Bootstrap JS Dependencies-->
		<script
			src="https://code.jquery.com/jquery-3.3.1.min.js"
			integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
			crossorigin="anonymous"></script>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
			integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
			crossorigin="anonymous"></script>
		<script
			src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
			integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
			crossorigin="anonymous"></script>

		<!-- jQuery Form, Additional Methods, Validate -->
		<script
			type="text/javascript"
			src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.min.js"></script>
		<script
			type="text/javascript"
			src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>
		<script
			type="text/javascript"
			src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/additional-methods.min.js"></script>

		<!-- Your JavaScript Form Validator -->
		<script src="js/form-validate.js"></script>

		<!-- Google reCAPTCHA -->
		<script src='https://www.google.com/recaptcha/api.js'></script>

<!--		Font Awesome JS-->
		<script
			defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
		<!--		<!--		Custom JS-->
		<script
			src="js/rain.js"></script>
	</head>
	<body>
		<div class="jumbotron rounded-0 bg-dark">
			<div class="container">

			</div>
		</div>

<!--		Contact Form-->
		<div class="modal animated fadeIn" id="myModal">
			<div class="modal-dialog modal-lg border" id="myModal">
				<div class="modal-content">
					<div class="modal-header">
						<div class="row m-2 w-100">
							<div class="col">
								<h1>Contact</h1>
							</div>
							<div class="col text-right">
								<a class="mx-2" target="_blank" href="https://www.linkedin.com/in/ken-keyes/"><i class="fab fa-linkedin fa-3x"></i></a>
								<a class="mx-2" target="_blank" href="https://github.com/KKeyes1"><i class="fab fa-github-square fa-3x"></i></a>
								<a class="mx-2" data-dismiss="modal" href="#"><i class="fas fa-times fa-3x"></i></a>
							</div>
						</div>
					</div>
					<div class="modal-body">


						<form class="form-horizontal" role="form" method="post" action="php/mailer.php" id="contactForm">
							<div class="form-group">
								<label for="name" class="col-sm-3 control-label">
									<span class="required">*</span> Name:</label>
								<div class="col-sm-12">
									<input type="text" class="form-control" id="name" name="name" placeholder="First & Last" required>
								</div>
							</div>
							<div class="form-group">
								<label for="email" class="col-sm-3 control-label">
									<span class="required">*</span> Email: </label>
								<div class="col-sm-12">
									<input type="email" class="form-control" id="email" name="email" placeholder="you@domain.com" required>
								</div>
							</div>
							<div class="form-group">
								<label for="subject" class="col-sm-3 control-label">
									<span class="required">*</span> Subject:</label>
								<div class="col-sm-12">
									<input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" required>
								</div>
							</div>
							<div class="form-group">
								<label for="message" class="col-sm-3 control-label">
									<span class="required">*</span> Message:</label>
								<div class="col-sm-12">
									<textarea name="message" rows="4" required class="form-control" id="message" placeholder="Comments"></textarea>
								</div>
							</div>
							<div class="form-group px-3">
								<span class="required">* Required</span>
								<div class="row">
									<div class="col-6">
										<div class="g-recaptcha" data-theme="dark" data-sitekey="6LdL90cUAAAAAAAVEvxsqj4n0BT2MpfG1rJjcsbu"></div>
									</div>
									<div class="col-6 text-right">
										<input type="submit" class="btn-lg btn-primary p-4" value="Send" name="enter" id="sendButton">
									</div>
								</div>
							</div>
						</form>
						<div class="modal-footer">
							<div id="success-output-area"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

<!--		Links/Navigation-->
		<nav class="navbar fixed-bottom navbar-dark justify-content-center">
			<a class="navbar-item console-color p-2" href="https://www.instagram.com/_who_is_ken/"><i class="fab fa-instagram fa-3x"></i></a>
			<a class="navbar-item console-color p-2" href="https://www.linkedin.com/in/ken-keyes/"><i class="fab fa-linkedin fa-3x"></i></a>
			<a class="navbar-item console-color p-2" href="https://github.com/KKeyes1"><i class="fab fa-github-square fa-3x"></i></a>
			<button class="btn nav-link text-white" data-toggle="modal" data-target="#myModal"><i class="fas fa-envelope fa-3x"></i></button>
<!--			<a class="navbar-item console-color p-2" data-toggle="modal" data-target="#myModal"><i class="far fa-envelope fa-3x"></i></a>-->
		</nav>
	</body>
</html>