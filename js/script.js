//selector section
const character = document.querySelector('#character');
const block = document.querySelector('#block');
const gameCon = document.querySelector('#game');

//function section - 
//creating a function thats 
//everytime a 'click' get pressed 
//a class( jump() ) will be added to character element
//the character element move accurding to the 
// given properties
function jump(){
//using a condition to check if the element 
//has a class name(animate) and if e dos'nt 
//the class 'animate' will be added 	
	if(character.classList != 'animate'){
	character.classList.add('animate');
	}	
//using a timer method to set a function that will
//remove the class after
//the action of the function heve been excuted	
	setTimeout(function(){
		character.classList.remove('animate');
	},500);
}


//creating a function that check for interaction between 
//the character element and the block element
const checkDead = setInterval(function(){

//getting the character element  top height	
	const characterTop = parseInt(window.getComputedStyle(character).
	getPropertyValue('top'));

//getting the block element (trew the window BOM ) left width	
	const blockLeft = parseInt(window.getComputedStyle(block).
	getPropertyValue('left'));

//set a conditions 
	if(blockLeft < 250 && blockLeft > 230 && characterTop >= 130){
		block.style.animation = 'none';
		block.style.display = 'none';
		alert('you Lose.');
	}

},10);//set the function to check every 10 ml


// event listener section
gameCon.addEventListener('click',jump);

