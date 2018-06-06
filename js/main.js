$.wait = function(ms) {
    var defer = $.Deferred();
    setTimeout(function() { defer.resolve(); }, ms);
    return defer;
};

//Structure initializing
$(document).ready(function() {
    $("#Q2").hide();
    $("#Q3").hide();
    $("#Q4").hide();
});

//Restart init
$("#replay").click(function(){

    location.reload();

});

//Q1
var q1b1State = false;
var q1b2State = false;
var q1b3State = false;
var q1b4State = false;
var q1b5State = false;
var q1b6State = false;
var q1Status = 0;

//Q2
var q2b1State = false;
var q2b2State = false;
var q2b3State = false;
var q2b4State = false;
var q2b5State = false;
var q2b6State = false;
var q2Status = 0;

//Q3
var q3b1State = false;
var q3b2State = false;
var q3b3State = false;
var q3b4State = false;
var q3b5State = false;
var q3b6State = false;
var q3b7State = false;
var q3b8State = false;
var q3b9State = false;
var q3Status = 0;

//Final solutions
var q1Solution = "";
var q2Solution = [];
var q3Solution = [];





//Q1 statements
$("#q1b1").click(function() {

    if (q1b1State == false && q1Status < 1) {
        q1b1State = true;
        q1Status = q1Status + 1;
        $(this).addClass('active');

        q1Solution = ("A");
        console.log(q1Solution);


        console.log(this + ' ' + q1b1State + ', ' + q1Status);
    } else if (q1b1State == true) {}
});



$("#q1b2").click(function() {
    if (q1b2State == false && q1Status < 1) {
        q1b2State = true;
        q1Status = q1Status + 1;

        q1Solution = ("B");
        console.log(q1Solution);

        $(this).addClass('active');
        console.log(this + ' ' + q1b2State + ', ' + q1Status);
    }
});
$("#q1b3").click(function() {
    if (q1b3State == false && q1Status < 1) {
        q1b3State = true;
        q1Status = q1Status + 1;
        $(this).addClass('active');

        q1Solution = ("C");
        console.log(q1Solution);

        console.log(this + ' ' + q1b3State + ', ' + q1Status);
    }
});
$("#q1b4").click(function() {
    if (q1b4State == false && q1Status < 1) {
        q1b4State = true;
        q1Status = q1Status + 1;
        $(this).addClass('active');

        q1Solution = ("D");
        console.log(q1Solution);

        console.log(this + ' ' + q1b4State + ', ' + q1Status);
    }
});
$("#q1b5").click(function() {
    if (q1b5State == false && q1Status < 1) {
        q1b5State = true;
        q1Status = q1Status + 1;
        $(this).addClass('active');

        q1Solution = ("E");
        console.log(q1Solution);

        console.log(this + ' ' + q1b5State + ', ' + q1Status);
    }
});
$("#q1b6").click(function() {
    if (q1b6State == false && q1Status < 1) {
        q1b6State = true;
        q1Status = q1Status + 1;
        $(this).addClass('active');

        q1Solution = ("F");
        console.log(q1Solution);

        console.log(this + ' ' + q1b6State + ', ' + q1Status);
    }
});

$("#q1b1, #q1b2, #q1b3, #q1b4, #q1b5, #q1b6").click(function() {
    $("#aDebug").text("Q1 =" + q1Solution);
    $("#Q2").show();
    
    $('html, body').animate({
            scrollTop: $("#Q2").offset().top
        }, 1000);
});

//Q2 statements
$("#q2b1").click(function() {

    if (q2b1State == false && q2Status < 1) {
        q2b1State = true;
        q2Status = q2Status + 1;
        $(this).addClass('active');

        q1Solution += "1";
        console.log(q1Solution);

        console.log(this + ' ' + q2b1State + ', ' + q2Status);
    }
});

$("#q2b2").click(function() {

    if (q2b2State == false && q2Status < 1) {
        q2b2State = true;
        q2Status = q2Status + 1;
        $(this).addClass('active');

        q1Solution += "2";
        console.log(q1Solution);


        console.log(this + ' ' + q2b2State + ', ' + q2Status);
    }

});

$("#q2b3").click(function() {

    if (q2b3State == false && q2Status < 1) {
        q2b3State = true;
        q2Status = q2Status + 1;
        $(this).addClass('active');

        q1Solution += "3";
        console.log(q1Solution);


        console.log(this + ' ' + q2b3State + ', ' + q2Status);
    }
});

$("#q2b4").click(function() {

    if (q2b4State == false && q2Status < 1) {
        q2b4State = true;
        q2Status = q2Status + 1;
        $(this).addClass('active');

        q1Solution += "4";
        console.log(q1Solution);


        console.log(this + ' ' + q2b4State + ', ' + q2Status);
    }
});

$("#q2b5").click(function() {

    if (q2b5State == false && q2Status < 1) {
        q2b5State = true;
        q2Status = q2Status + 1;
        $(this).addClass('active');

        q1Solution += "5";
        console.log(q1Solution);


        console.log(this + ' ' + q2b5State + ', ' + q2Status);
    }
});

$("#q2b6").click(function() {

    if (q2b6State == false && q2Status < 1) {
        q2b6State = true;
        q2Status = q2Status + 1;
        $(this).addClass('active');

        q1Solution += "6";
        console.log(q1Solution);


        console.log(this + ' ' + q2b6State + ', ' + q2Status);
    }
});

$("#q2b1, #q2b2, #q2b3, #q2b4, #q2b5, #q2b6").click(function() {

    if (q2Status == 1) {
        $("#aDebug").text("Q2 =" + q2Solution);
        $("#Q3").show();

        $('html, body').animate({
            scrollTop: $("#Q3").offset().top
        }, 1000);
    }



});

//Q3 statements
$("#q3b1").click(function() {

    if (q3b1State == false) {
        q3b1State = true;
        q3Status = q3Status + 1;
        $(this).addClass('active');

        var buttonContent = $(event.target).text();
        q3Solution.push(buttonContent);
        console.log(buttonContent);

        console.log(this + ' ' + q3b1State + ', ' + q3Status);
    }

    else {q3b1State = false;
        q3Status = q3Status - 1;
        $(this).removeClass('active');

        var buttonContent = $(event.target).text();
        //Need to remove the specific text from the array using this.

        console.log(this + ' ' + q3b1State + ', ' + q3Status);
        };
});

$("#q3b2").click(function() {

    if (q3b2State == false) {
        q3b2State = true;
        q3Status = q3Status + 1;
        $(this).addClass('active');

        var buttonContent = $(event.target).text();
        q3Solution.push(buttonContent);
        console.log(buttonContent);


        console.log(this + ' ' + q3b2State + ', ' + q3Status);
    }

    else {q3b2State = false;
        q3Status = q3Status - 1;
        $(this).removeClass('active');

        var buttonContent = $(event.target).text();
        //Need to remove the specific text from the array using this.

        console.log(this + ' ' + q3b2State + ', ' + q3Status);
        }

});

$("#q3b3").click(function() {

    if (q3b3State == false) {
        q3b3State = true;
        q3Status = q3Status + 1;
        $(this).addClass('active');

        var buttonContent = $(event.target).text();
        q3Solution.push(buttonContent);
        console.log(buttonContent);


        console.log(this + ' ' + q3b3State + ', ' + q3Status);
    }

    else {q3b3State = false;
        q3Status = q3Status - 1;
        $(this).removeClass('active');

        var buttonContent = $(event.target).text();
        //Need to remove the specific text from the array using this.

        console.log(this + ' ' + q3b3State + ', ' + q3Status);
        }
});

$("#q3b4").click(function() {

    if (q3b4State == false) {
        q3b4State = true;
        q3Status = q3Status + 1;
        $(this).addClass('active');

        var buttonContent = $(event.target).text();
        q3Solution.push(buttonContent);
        console.log(buttonContent);


        console.log(this + ' ' + q3b4State + ', ' + q3Status);
    }

    else {q3b4State = false;
        q3Status = q3Status - 1;
        $(this).removeClass('active');

        var buttonContent = $(event.target).text();
        //Need to remove the specific text from the array using this.

        console.log(this + ' ' + q3b4State + ', ' + q3Status);
        }
});

$("#q3b5").click(function() {

    if (q3b5State == false) {
        q3b5State = true;
        q3Status = q3Status + 1;
        $(this).addClass('active');

        var buttonContent = $(event.target).text();
        q3Solution.push(buttonContent);
        console.log(buttonContent);


        console.log(this + ' ' + q3b5State + ', ' + q3Status);
    }

    else {q3b5State = false;
        q3Status = q3Status - 1;
        $(this).removeClass('active');

        var buttonContent = $(event.target).text();
        //Need to remove the specific text from the array using this.

        console.log(this + ' ' + q3b5State + ', ' + q3Status);
        }
});

$("#q3b6").click(function() {

    if (q3b6State == false) {
        q3b6State = true;
        q3Status = q3Status + 1;
        $(this).addClass('active');

        var buttonContent = $(event.target).text();
        q3Solution.push(buttonContent);
        console.log(buttonContent);


        console.log(this + ' ' + q3b6State + ', ' + q3Status);
    }

    else {q3b6State = false;
        q3Status = q3Status - 1;
        $(this).removeClass('active');

        var buttonContent = $(event.target).text();
        //Need to remove the specific text from the array using this.

        console.log(this + ' ' + q3b6State + ', ' + q3Status);
        }
});

$("#q3b7").click(function() {

    if (q3b7State == false) {
        q3b7State = true;
        q3Status = q3Status + 1;
        $(this).addClass('active');

        var buttonContent = $(event.target).text();
        q3Solution.push(buttonContent);
        console.log(buttonContent);


        console.log(this + ' ' + q3b7State + ', ' + q3Status);
    }
    else {q3b7State = false;
        q3Status = q3Status - 1;
        $(this).removeClass('active');

        var buttonContent = $(event.target).text();
        //Need to remove the specific text from the array using this.

        console.log(this + ' ' + q3b7State + ', ' + q3Status);
        }
});

$("#q3b8").click(function() {

    if (q3b8State == false) {
        q3b8State = true;
        q3Status = q3Status + 1;
        $(this).addClass('active');

        var buttonContent = $(event.target).text();
        q3Solution.push(buttonContent);
        console.log(buttonContent);


        console.log(this + ' ' + q3b8State + ', ' + q3Status);
    }
    else {q3b8State = false;
        q3Status = q3Status - 1;
        $(this).removeClass('active');

        var buttonContent = $(event.target).text();
        //Need to remove the specific text from the array using this.

        console.log(this + ' ' + q3b8State + ', ' + q3Status);
        }
});

$("#q3b9").click(function() {

    if (q3b9State == false) {
        q3b9State = true;
        q3Status = q3Status + 1;
        $(this).addClass('active');

        var buttonContent = $(event.target).text();
        q3Solution.push(buttonContent);
    }
    else {q3b9State = false;
        q3Status = q3Status - 1;
        $(this).removeClass('active');

        var buttonContent = $(event.target).text();
        //Need to remove the specific text from the array using this.
        }
});

$("#endButton").click(function(){

    $("#Q4").show();
        $("#Q3").hide();
        $("#Q2").hide();
        $("#Q1").hide();
        $("#intro").hide();
       
        //Assess the final content in the array

        if (q1Solution == "A1") {
            A1();
        }
        else if (q1Solution == "A2") {
            A2();
        }
        else if (q1Solution == "A3") {
            A3();
        }
        else if (q1Solution == "A4") {
            A4();
        }
        else if (q1Solution == "A5") {
            A5();
        }
        else if (q1Solution == "A6") {
            A6();
        }
        else if (q1Solution == "B1") {
            B1();
        }
        else if (q1Solution == "B2") {
            B2();
        }
        else if (q1Solution == "B3") {
            B3();
        }
        else if (q1Solution == "B4") {
            B4();
        }
        else if (q1Solution == "B5") {
            B5();
        }
        else if (q1Solution == "B6") {
            B6();
        }
        else if (q1Solution == "C1") {
            C1();
        }
        else if (q1Solution == "C2") {
            C2();
        }
        else if (q1Solution == "C3") {
            C3();
        }
        else if (q1Solution == "C4") {
            C4();
        }
        else if (q1Solution == "C5") {
            C5();
        }
        else if (q1Solution == "C6") {
            C6();
        }
        else if (q1Solution == "D1") {
            D1();
        }
        else if (q1Solution == "D2") {
            D2();
        }
        else if (q1Solution == "D3") {
            D3();
        }
        else if (q1Solution == "D4") {
            D4();
        }
        else if (q1Solution == "D5") {
            D5();
        }
        else if (q1Solution == "D6") {
            D6();
        }
        else if (q1Solution == "E1") {
            E1();
        }
        else if (q1Solution == "E2") {
            E2();
        }
        else if (q1Solution == "E3") {
            E3();
        }
        else if (q1Solution == "E4") {
            E4();
        }
        else if (q1Solution == "E5") {
            E5();
        }
        else if (q1Solution == "E6") {
            E6();
        }
        else if (q1Solution == "F1") {
            F1();
        }
        else if (q1Solution == "F2") {
            F2();
        }
        else if (q1Solution == "F3") {
            F3();
        }
        else if (q1Solution == "F4") {
            F4();
        }
        else if (q1Solution == "F5") {
            F5();
        }
        else if (q1Solution == "F6") {
            F6();
        }

         $('html, body').animate({
            scrollTop: $("#Q4").offset().top
        }, 1000);

    });

