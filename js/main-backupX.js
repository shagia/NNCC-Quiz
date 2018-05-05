//Structure initializing
$( document ).ready(function() {
    $("#Q2").hide();
    $("#Q3").hide();
});

//Initializing button statements, is there a better way to do this?

//Q1
var q1b1State = false;
var q1b2State = false;
var q1b3State = false;
var q1b4State = false;
var q1Status = 0;

//Q2
var q2b1State = false;
var q2b2State = false;
var q2b3State = false;
var q2Status = 0;

//Q3

//Final solutions
var q1Solution = [];
var q2Solution = [];
var q3Solution = [];

//Each question has a list of responses
//Keep track of responses
//Dictionary of content and possible keywords??

//screen should function like 1 to 2 to 3
//Check if active sits in an element instead, if it does, add it's number to the solution array



/*$(document).ready(function() {
	if(q1Status == 2){
		$("#q1-error").show();
	};
});*/



//Q1 statements
$("#q1b1").click(function() {

	if(q1b1State == false && q1Status < 1) {
		q1b1State = true;
		q1Status = q1Status + 1;
		$(this).addClass('active');

		var buttonContent = $(event.target).text();
		q1Solution.push(buttonContent);
		console.log(buttonContent);


		console.log(this + ' ' + q1b1State + ', ' + q1Status);
	}

	else if (q1b1State == true) {
		/* q1b1State = false;		
		$(this).removeClass('active');
		q1Status = q1Status - 1;
		q1Solution.splice(1, buttonContent);
		console.log(q1Solution);
		console.log(this + ' ' + q1b1State + ', ' + q1Status);*/
	}
});

$("#q1b2").click(function() {
	if(q1b2State == false && q1Status < 1) {
		q1b2State = true;
		q1Status = q1Status + 1;

		var buttonContent = $(event.target).text();
		q1Solution.push(buttonContent);
		console.log(buttonContent);

		$(this).addClass('active');
		console.log(this + ' ' + q1b2State + ', ' + q1Status);
	}

	else if (q1b2State == true) {
		/*q1b2State = false;
		q1Status = q1Status - 1;	
		$(this).removeClass('active');
		console.log(this + ' ' + q1b2State + ', ' + q1Status);*/
	}
});
$("#q1b3").click(function() {
	if(q1b3State == false && q1Status < 1) {
		q1b3State = true;
		q1Status = q1Status + 1;
		$(this).addClass('active');

		var buttonContent = $(event.target).text();
		q1Solution.push(buttonContent);
		console.log(buttonContent);

		console.log(this + ' ' + q1b3State + ', ' + q1Status);
	}

	else if (q1b3State == true) {
		/*q1b3State = false;
		q1Status = q1Status - 1;		
		$(this).removeClass('active');
		console.log(this + ' ' + q1b3State + ', ' + q1Status);*/
	}
});
$("#q1b4").click(function() {
	if(q1b4State == false && q1Status < 1) {
		q1b4State = true;
		q1Status = q1Status + 1;
		$(this).addClass('active');

		var buttonContent = $(event.target).text();
		q1Solution.push(buttonContent);
		console.log(buttonContent);

		console.log(this + ' ' + q1b4State + ', ' + q1Status);
	}

	else if (q1b4State == true) {
		/*q1b4State = false;
		q1Status = q1Status - 1;		
		$(this).removeClass('active');
		console.log(this + ' ' + q1b4State + ', ' + q1Status);*/
	}
});

$("#q1b1, #q1b2, #q1b3, #q1b4").click(function() {
	$("#aDebug").text("Q1 =" + q1Solution);
		$("#Q2").show();
});



$("#q1NP").click(function() {

	/* var buttonContentt = $("#Q1").find(".active");
	console.log(buttonContentt);
	$("#Q2").show();*/



	if ($(".active") [0]){
		console.log(q1Solution);
		//$(".q1Answers").html(q1Solution);
		

	}
	else {
		console.log("You must select at least one option!");
	}
});

//Q2 statements
$("#q2b1").click(function() {

	if(q2b1State == false) {
		q2b1State = true;
		q2Status = q2Status + 1;
		$(this).addClass('active');

		var buttonContent = $(event.target).text();
		q2Solution.push(buttonContent);
		console.log(buttonContent);

		console.log(this + ' ' + q2b1State + ', ' + q2Status);
	}

	/*else if (q2b1State == true) {
		q2b1State = false;		
		$(this).removeClass('active');
		q2Status = q2Status - 1;
		console.log(this + ' ' + q2b1State + ', ' + q2Status);
	}*/



});

$("#q2b2").click(function() {

	if(q2b2State == false) {
		q2b2State = true;
		q2Status = q2Status + 1;
		$(this).addClass('active');

		var buttonContent = $(event.target).text();
		q2Solution.push(buttonContent);
		console.log(buttonContent);


		console.log(this + ' ' + q2b2State + ', ' + q2Status);
	}

	/*else if (q2b2State == true) {
		q2b2State = false;		
		$(this).removeClass('active');
		q2Status = q2Status - 1;
		console.log(this + ' ' + q2b2State + ', ' + q2Status);
	}*/



});

$("#q2b3").click(function() {

	if(q2b3State == false) {
		q2b3State = true;
		q2Status = q2Status + 1;
		$(this).addClass('active');

		var buttonContent = $(event.target).text();
		q2Solution.push(buttonContent);
		console.log(buttonContent);


		console.log(this + ' ' + q2b3State + ', ' + q2Status);
	}

	/*else if (q2b3State == true) {
		q2b3State = false;		
		$(this).removeClass('active');
		q2Status = q2Status - 1;
		console.log(this + ' ' + q2b3State + ', ' + q2Status);
	}*/



});

$("#q2b1, #q2b2, #q2b3, #q2b4").click(function() {

	if(q2Status == 2) {
		$("#aDebug").text("Q2 =" + q2Solution);
		$("#Q3").show();
		
	}


	
});

$("#q2NP").click(function() {

	var buttonContentt = $("#Q2").find(".active");
	/*$.each(buttonContentt, function(index, value) {

		console.log(value);
		return (value !== text);

	});
	//console.log(buttonContentt.text); */

	if ($(".active") [0]){
		console.log(q2Solution);
		//$(".q2Answers").html(q2Solution);
		$("#aDebug").text("Q2 =" + q2Solution);

		$("#Q3").show();
	}
	else {
		console.log("You must select at least one option!");
	}

});

//Big boxes, jesus

//Row 1


$("#box1").click(function() {

	if ($(this).hasClass('active-box')) {

		$(this).removeClass('active-box');

	}
	else {
		$(this).addClass('active-box');
		var buttonContent = $(event.target).text();
		q3Solution.push(buttonContent);
		console.log(buttonContent);
	};

});
$("#box2").click(function() {

if ($(this).hasClass('active-box')) {

		$(this).removeClass('active-box');

	}
	else {
		$(this).addClass('active-box');
		var buttonContent = $(event.target).text();
		q3Solution.push(buttonContent);
		console.log(buttonContent);
	};

});
$("#box3").click(function() {

if ($(this).hasClass('active-box')) {

		$(this).removeClass('active-box');

	}
	else {
		$(this).addClass('active-box');
		var buttonContent = $(event.target).text();
		q3Solution.push(buttonContent);
		console.log(buttonContent);
	};

});
$("#box4").click(function() {

if ($(this).hasClass('active-box')) {

		$(this).removeClass('active-box');

	}
	else {
		$(this).addClass('active-box');
		var buttonContent = $(event.target).text();
		q3Solution.push(buttonContent);
		console.log(buttonContent);
	};

});

//Row 2

$("#box5").click(function() {

if ($(this).hasClass('active-box')) {

		$(this).removeClass('active-box');

	}
	else {
		$(this).addClass('active-box');
		var buttonContent = $(event.target).text();
		q3Solution.push(buttonContent);
		console.log(buttonContent);
	};

});
$("#box6").click(function() {

if ($(this).hasClass('active-box')) {

		$(this).removeClass('active-box');

	}
	else {
		$(this).addClass('active-box');
		var buttonContent = $(event.target).text();
		q3Solution.push(buttonContent);
		console.log(buttonContent);
	};

});
$("#box7").click(function() {

if ($(this).hasClass('active-box')) {

		$(this).removeClass('active-box');

	}
	else {
		$(this).addClass('active-box');
		var buttonContent = $(event.target).text();
		q3Solution.push(buttonContent);
		console.log(buttonContent);
	};

});
$("#box8").click(function() {

if ($(this).hasClass('active-box')) {

		$(this).removeClass('active-box');

	}
	else {
		$(this).addClass('active-box');
		var buttonContent = $(event.target).text();
		q3Solution.push(buttonContent);
		console.log(buttonContent);
	};

});

//Row 3

$("#box9").click(function() {

if ($(this).hasClass('active-box')) {

		$(this).removeClass('active-box');

	}
	else {
		$(this).addClass('active-box');
		var buttonContent = $(event.target).text();
		q3Solution.push(buttonContent);
		console.log(buttonContent);
	};

});
$("#box10").click(function() {

if ($(this).hasClass('active-box')) {

		$(this).removeClass('active-box');

	}
	else {
		$(this).addClass('active-box');
		var buttonContent = $(event.target).text();
		q3Solution.push(buttonContent);
		console.log(buttonContent);
	};

});
$("#box11").click(function() {

if ($(this).hasClass('active-box')) {

		$(this).removeClass('active-box');

	}
	else {
		$(this).addClass('active-box');
		var buttonContent = $(event.target).text();
		q3Solution.push(buttonContent);
		console.log(buttonContent);
	};

});
$("#box12").click(function() {

if ($(this).hasClass('active-box')) {

		$(this).removeClass('active-box');

	}
	else {
		$(this).addClass('active-box');
		var buttonContent = $(event.target).text();
		q3Solution.push(buttonContent);
		console.log(buttonContent);
	};

});

$("#q3NP").click(function() {

	$("#aDebug").text("Q3 =" + q3Solution);

});



//The logic should let a user click a button and check how many buttons have been clicked. If under 2, let them click another or the same button, if exactly 2, kill the function until they click one that's active, which'll bring them back down to 1 or 0.

//Make a template where only one button in a row can be clicked, and another where multiple can be.

//Maybe the buttons can have a "true" class, and jquery can check each respective chapter's buttons for said 'true' buttons and their attatched number when pressing the "next page" ID.

//In the background after the page is over (when someone presses next page) it can select the outcome based on what the user chose, and display it when the overall quiz is over. 