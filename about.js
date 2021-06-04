// console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	alert("Your form has been submitted!");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let catPic = document.querySelector('img#catPic')

function petAlert() {
	alert("You give the best pets!")
}

catPic.addEventListener('mouseover', petAlert)