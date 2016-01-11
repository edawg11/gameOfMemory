'use strict';

$(document).ready(init);

var isFirst = false;
var first;
var second;
var firstGlyph;
var secondGlyph;
var classArray = ["glyphicon-euro", "glyphicon-plus", "glyphicon-search","glyphicon-asterisk","glyphicon-envelope","glyphicon-pencil","glyphicon-star","glyphicon-heart","glyphicon-euro", "glyphicon-plus", "glyphicon-search","glyphicon-asterisk","glyphicon-envelope","glyphicon-pencil","glyphicon-star","glyphicon-heart"];
function init() {
	$('.holder').on('click', clickFirst);
	buildCards();
	
}

function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
		}
		return array;
}

function buildCards(){
	var randArray = shuffle(classArray);
	console.log(randArray);
	console.log('randArray Length:', randArray.length)

	for (var i = 0; i < randArray.length; i++) {
		$('span').eq(i).addClass(randArray[i]);
		console.log('randArray i:', randArray[i]);
	}
}

function clickFirst(){
	if(!isFirst) {
		first = $(this);
		firstGlyph = $(this).find('.glyphicon');
		firstGlyph.toggleClass('invis');
		console.log('first class:', firstGlyph.attr('class'))
		isFirst = true;
		disableClick($(this));
	} else {
		disableClick(first);
		second = $(this);
		secondGlyph = $(this).find('.glyphicon');
		secondGlyph.toggleClass('invis');
		isFirst = false;
		console.log('second class:', secondGlyph.attr('class'));
		clickSecond();
	}	 	 
}

function clickSecond(){
	disableClick(first);
	if (firstGlyph.attr('class') === secondGlyph.attr('class')) {
	 	console.log('match');
	 	disableClick($(second));
	 	$(first).css({'background-color':'blue', 'color':'white'});
	 	$(second).css({'background-color':'blue', 'color':'white'})
	 	isFirst = false;
	 } else {
	 	setTimeout (function(){
	 		$(secondGlyph).toggleClass('invis');
			firstGlyph.toggleClass('invis');
			enableClick(first)
	 	},1000)
	 	
	 }
}	

function disableClick(obj){
	obj.off('click', clickFirst);
}

function enableClick(obj){
	obj.on('click', clickFirst);
}
// function clickSecond() {
// 	// second = $(this).find('.glyphicon');
// 	// second.toggleClass('invis');
// 	// if (first.attr('id') === second.attr('id')) {
// 	// 	second.off('click',clickFirst);
// 	// 	console.log('match');

		

// 	// } else {
		
// 	// 	setTimeout (
// 	// 		function(){
// 	// 		second.toggleClass('invis');
// 	// 		first.toggleClass('invis')
// 	// 	} , 1000)

// 	// 	console.log('noMatch')
// 	// 	// first.on('click', clickFirst)
// 	// }
	
// }

