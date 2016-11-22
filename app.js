
$('p').hover(function(){
	$('.rules').show()},
	function () {
		$('.rules').hide()
	});

//$('.row').hide(function(){$('h2').hide();});

document.getElementById('myButton').onclick = function () {
        //location.href = "index2.html";
   var player1 = prompt("Player 1: Please enter your last name:")
   var player2 = prompt("Player 2: Please enter your last name:")

   if ((player1)&&(player2)) { // when player enters name
   	  	$('.all').hide()


		$('.gameBoard').show();
		$('#player1').html(player1 + ' FAMILY'); //adds last name to family
   		$('#player2').html(player2 + ' FAMILY');
   		questionCalling();
   		//$('.listQuestion').hide();
   		//$('#question1').show();
	} else if ((player1) || (player2) === "") {// when player leaves it blank.
   		alert("Please enter last name to proceed to the game.");
   console.log('this is true');
   	} else {
   	console.log('nothing was true'); // when cancelling game
   }

};

// var submitAnswer=function(team){
// 	if (team == 'player1'){
// 		var addGrandTotal = parseInt(document.getElementById('player1Score').value)
// 		var total = parseInt(checkAnswer('player1Answer'));

// 		if(total === 0)
// 	 {
// 		strike('player1Incorrect');
// } else if ((question))
// {
// }

var currentQuestion = 0;//made variable so that the index number can be chanaged.
var questions =[
	{
		question: "If a witch was not paying attention to where she was flying, name something she might crash into?",

		answers: [
			{
				answer: 'tree',
				points: 45
			},
			{
				answer: 'building',
				points: 24
			},
			{
				answer: 'pole',
				points: 7
			},
			{
				answer: 'power line',
				points: 6
			},
			{
				answer: 'bird',
				points: 4
			},
			{
				answer: 'bug',
				points: 1
			}

		]
	},

	{
		question: "Name an animal we eat that would never eat us?",
		answers: [
		{     answer: 'cow',
		      points: 58

		},
		{     answer: 'chicken',
	          points: 26
	      },
	      {
	      	answer: 'pig',
	      	points: 4
	      },
	      {
	      	answer: 'rabbit',
	      	points: 3
	      },
	      {
	      	answer: 'deer',
	      	points: 2
	      },
	      {
	      	answer: 'sheep',
	      	points: 2
	      }

           ]
       },

           {
           	question: "Name a fruit that you never buy just one of?",
           	answers:[
           	{
           		answer: 'grapes',
           		points: 44
           	},
           	{
           		answer: 'apples',
           		points: 14
           	},
           	{
           		answer: 'oranges',
           		points: 13
           	},
           	{
           		answer: 'bananas',
           		points: 12
           	},
           	{
           		answer: 'strawberries',
           		points: 8
           	},
           	{
           		answer: 'cherries',
           		points: 5
           	}
           	]
           },

           {
           	questions: " Name a sport that has seen many of its athletes arrested?",
           
           answers:[
           {     answer: 'football',
                  points: 80
              },
            {    answer: 'basketball',
                 points: 10
            },
            {    answer: 'baseball',
                 points: 4
             },
             {
             	answer: 'boxing',
             	points: 2
             }

               ]}
	
];

var questionCalling = function() {
	$('#displayAllQuestions').append('<p>'+questions[currentQuestion].question+'</p>');
	$('.answer1').append('<p>'+questions[currentQuestion].answers[0].answer+'</p>');
	$('.answer1Points').append('<p>'+questions[currentQuestion].answers[0].points+'</p>');

//$('#displayAllQuestions').append('<p>'+questions[currentQuestion].question+'</p>');
	$('.answer2').append('<p>'+questions[currentQuestion].answers[1].answer+'</p>');
	$('.answer2Points').append('<p>'+questions[currentQuestion].answers[1].points+'</p>');

//$('#displayAllQuestions').append('<p>'+questions[currentQuestion].question+'</p>');
	$('.answer3').append('<p>'+questions[currentQuestion].answers[2].answer+'</p>');
	$('.answer3Points').append('<p>'+questions[currentQuestion].answers[2].points+'</p>');

//$('#displayAllQuestions').append('<p>'+questions[currentQuestion].question+'</p>');
	$('.answer4').append('<p>'+questions[currentQuestion].answers[3].answer+'</p>');
	$('.answer4Points').append('<p>'+questions[currentQuestion].answers[3].points+'</p>');

//$('#displayAllQuestions').append('<p>'+questions[currentQuestion].question+'</p>');
	$('.answer5').append('<p>'+questions[currentQuestion].answers[4].answer+'</p>');
	$('.answer5Points').append('<p>'+questions[currentQuestion].answers[4].points+'</p>');

//$('#displayAllQuestions').append('<p>'+questions[currentQuestion].question+'</p>');
	$('.answer6').append('<p>'+questions[currentQuestion].answers[5].answer+'</p>');
	$('.answer6Points').append('<p>'+questions[currentQuestion].answers[5].points+'</p>');

//$('#displayAllQuestions').append('<p>'+questions[currentQuestion].question+'</p>');
	$('.answer7').append('<p>'+questions[currentQuestion].answers[6].answer+'</p>');
	$('.answer7Points').append('<p>'+questions[currentQuestion].answers[6].points+'</p>');

//$('#displayAllQuestions').append('<p>'+questions[currentQuestion].question+'</p>');
	$('.answer8').append('<p>'+questions[currentQuestion].answers[7].answer+'</p>');
	$('.answer8Points').append('<p>'+questions[currentQuestion].answers[7].points+'</p>');



}
           var fam1Score=0;
           var fam2Score=0;

var submitPlayerOneAnswer=function(){
	var answer = $('#playerOneAnswer').val();
	for(var i=0; i < questions[currentQuestion].answers.length; i++){
		if(answer === questions[currentQuestion].answers[i].answer){
			var className = '.answer' + (i+1).toString();
			$(className).css('visibility', 'visible');
			var classPoints = '.answer' + (i+1).toString() + 'Points';
			$(classPoints).css('visibility', 'visible');
			
      var currentTotalPoints = questions[currentQuestion].answers[i].points;
      fam1Score += currentTotalPoints;

      $('#player_one_total').html(fam1Score);


   

	}
	
	
}




}













// var question1=("If a witch was not paying attention to where she was flying, name something she might crash into?");
// var question2= ("Name an animal we eat that would never eat us?")
// var question3= ("Name a fruit you never buy just one of?")
// var question4= ("Name a sport that has seen many of its althlets arrested?")


// *$('#question1').show(function(){
// 	$('').show();
// //})
// //$('p').hide(function(){
// //	$('p').hide();
// //})

// $('#question3').hide(function(){
// 	$('').hide();
// })
// ('#question4').hide(function(){
// $('').hide();
// })


// document.getElementById('questionButton').onclick=function(){
// 	$('#question1').hide(function(){
// 		$('').hide();
// 	})
	
// 	$('#question2').show(function(){
// 		$('#question2').show();
// 	})
// };


/*$(function(){
var allQuestions=

   {
   	text:[

	{que: 'If a witch was not paying attention to where she was flying, name something she might crash into?'},
    
    {que: 'Name a sport where many players end up in jail?'},

    {que: 'Name an animal that we eat that would never eat us?'},

    {que: 'Name a fruit that you never buy just one of?'},

    {que: 'Name an illness that kids give to each other?'}

 ]};

 allQuestions.count= 0;

var query = {
    render: function() {       
        if (allQuestions.length >= allQuestions.length) {
        
          $("#answers","userAnswer").remove();  
        }
      else {      
        var allQuestions = allQuestions.text[allQuestions.count].que;
        $("#listQuestion").html(allQuestions);
        $("#userAnswer").val("");        
      }
    }
  };
  
  query.render();
   
  $("#userAnswer").click(function () {
    if ($("#answers").val() == "") {
      alert("Please enter response for continue");
      return false;
    }
    else {
      allQuestions.text[allQuestions.length].response = $("#userAnswer").val();
      ++allQuestions.length;
      query.render();
    }
  });
  
  
 // Handler for .ready() called.
 });*/


