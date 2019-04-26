var myHeading = document.getElementById('myHeader');
if (myHeading) {
	let myName = localStorage.getItem('name');
	if (!myName || myName === 'null') {
		updateTitle();
	} else {
		myHeading.textContent = "Hello, Mozilla is cool, " + myName;
	}
	
}
var myImage = document.getElementById('myImage');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/ava2.jpg') {
		myImage.setAttribute('src', 'images/ava.jpg');
	} else {
		myImage.setAttribute('src', 'images/ava2.jpg');
	}

}

var myButton = document.querySelector('button');
myButton.onclick = updateTitle;

function updateTitle() {
	var myName = prompt('Please enter your name.');
	let prevName = localStorage.getItem('name');
	if (myName === prevName) return;
  	localStorage.setItem('name', myName);
 	myHeading.innerHTML  = 'Mozilla is cool, ' + myName;
}