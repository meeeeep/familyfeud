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

   if ((player1)&&(player2)) // when player enters name
   	  {
   	  	$('.all').hide(function()
   			{
   				$('all').hide();
   				//$('#player1').html(player1 + ' FAMILY'); //adds last name to family
   		        //$('#player2').html(player2 + ' FAMILY'); 
   			}) 


		$('.gameBoard').show(function(){//activates game show//
			$('').show();
			$('#player1').html(player1 + ' FAMILY'); //adds last name to family
   		        $('#player2').html(player2 + ' FAMILY'); 


{console.log('this is also true');}

 })

} else if ((player1) || (player2) === "")// when player leaves it blank.
   	{
   		alert("Please enter last name to proceed to the game.");
   console.log('this is true');
   	}

   	 else  {
   	console.log('nothing was true'); // when cancelling game
   }

   };

$(function(){
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
 });


