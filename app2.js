

document.getElementById('myButton').onclick = function () {
        //location.href = "index2.html";
   var player = prompt("Please enter your last name:")
   	if (player === "")// when player leaves it blank.
   	{
   		alert("Please enter last name to proceed to the game.");
   	}

   	  else if (player) // when player enters name
   	  {
   	  	$('.all').hide(function()
   			{
   				$('all').hide();
   				$('#user').html(player + ' FAMILY'); //adds last name to family
   			}) 


		$('.gameBoard').show(function(){//activates game show//
			$('h3').show();
			//$('user').html(player);
		


		   		console.log('hey');
   	})	
	}

    else  {
   	console.log('nothing was true'); // when cancelling game
   }
   
};

//$('.gameBoard').show(function(){
//	$('h3').show();
//});


/*document.getElementById('myButton').onclick = function () {
	let player = prompt('Please enter your last name:')
	{ 
		if (player != null){location.href = "index2.html";
	} else {prompt("Please enter last name to proceed.")
}
};

.active{
	sadasdjaskdjaskdjas;
	.& non-active{
	kjkjzkxcjzxkcjzkxcjzxc;
	}
}

} {
        location.href = "index2.html";
    }*/

    //var promptMe= function(){
    	//prompt('Please enter your last name:');}


    	

    		/*if (player != null)}
    		{
    } else {prompt("Please enter last name to proceed.")}
    		}
    	};*/
  