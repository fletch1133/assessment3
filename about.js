console.log("hello world");
function mouse (){
	alert('you are the best persom ever')
	let picture = document.querySelector('img').addEventListener('mouseover', mouse)
}


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);