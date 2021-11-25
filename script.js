//Create a variable for place of answer...
let answer = document.getElementById("answer");

//Define the insert function for insertion of numbers in the output area...
function insert(num) {
	answer.value += num;
	
}

//Define the calc function for calculation of the numbers...
function calc() {
	try {

	   answer.value = eval(answer.value);

	} catch (err) {
		answer.value = "Error!!";
	}
	
}

//Define the Clear function for deletion of the numbers #backspace...
function Clear() {
	    answer.value = answer.value.slice(0,-1);
}


//Thanks for Viewing My Basic calculator #Jumanj