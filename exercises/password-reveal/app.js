// 🤖: create 2 constants with references to the password input and the reveal button from the DOM
const password = document.getElementById(`password`);
const revealButton = document.getElementById(`togglePassword`)
const passwordHolder = password.value;
let buttonPushed = false;

// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.


// Provided for you - prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit',function(e){
	e.preventDefault();
});

revealButton.addEventListener('submit', x => {
	if(buttonPushed) {
		buttonPushed = false;
		password.value = passwordHolder
	} else {
		buttonPushed = true;
		password.value = '********';
	}

});
