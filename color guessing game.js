var target;            
var guess_input_text;   
var guess_index;      
var finished = false;   
var guesses = 0;
var color=["aqua" , "beige" , "chocolate" , "coral" , "darkcyan" , "fuchsia" , "grey" , "maroon", "plum" ,"snow" ,  "violet" , "teal" ];

function do_game() {
    var random_number = Math.random() * 12;
    var random_number_integer = Math.floor(random_number);
    target=random_number_integer;
    var color_words=color.join();

     while (!finished) {
        guess_input_text = prompt("I am thinking of one of these colors \n"+color_words+"\n"
                                 + "What is the color?");
        guess_index=color.indexOf(guess_input_text);
        guesses += 1;   
        finished = check_guess();
    }
}

function check_guess(){
if (guess_index==-1){
alert("Sorry , I don't recognize your color \n"+"Please Try Again");
return false;
}
if (guess_index>target){
	alert("Sorry , your guess isn't correct \n"+
		"Hint::your color is alphabetically higher than mine \n"+
		"Please Try Again"
		);
	return false;
}
if (guess_index<target)
{
	alert("Sorry , your guess isn't correct \n"+
		"Hint::your color is alphabetically lower than mine \n"+
		"Please Try Again"
		);
	return false;
}
if (guess_index==target)
{
	alert("Congratulations!!!! You guessed the color! \n"+
		"It took you "+ guesses +" to finish the game \n"+
		"You can see the color in the background"
		);

	myBody=document.getElementsByTagName("body")[0];
myBody.style.background=color[target];

	return true;
}

}