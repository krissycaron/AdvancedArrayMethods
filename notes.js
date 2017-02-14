var fruits = ["apples", "bananas", "cherry"]; 

// function outputFruitOld(array) {
// 	for (i = 0; i < array.length; i++){
// 		console.log(array[i]);
// 	}
// }

// outputFruitOld(fruits);
// console.log("hi");




// function outputFruit (element,index){
// 	console.log(element);
// 	console.log("array[" + index + "] " + element);
// }
// // fruits.forEach(outputFruit);

// fruits.forEach(function(fruit){
// 	console.log(fruit);
// })

// what is element? it is the value in that instance of the loop. more common the array is plural
// and the element is the singular


// for loops performs better in terms of tiem on the computer. 
// for each takes more computing power. 

// function backwardFruitsOld(array) {
// 	var backwardsFruit = []; 
// 	//need to reiterate through the array so we need a for loop 
// 	for (i = 0; i < array.length; i++){
// 		//taking the current index in the array to have a starting point
// 		backwardsFruit.push(array[i].split("").reverse().join(""));
// 	}
// 	console.log(backwardsFruit);
// }


// backwardFruitsOld(fruits);


//rewrite using map array method

// var backwardsFruit = fruits.map(function(fruit){
// 	return fruit.split("").reverse().join("");
// });
// console.log(backwardsFruit);


// function fiveLettersOnlyOld (array){
// 	var	filteredFruits = [];
// 	for (var i = 0; i < array.length; i++){
// 		if(array[i].length === 5){
// 			filteredFruits.push(array[i]);
// 		}
// 	}
// 	console.log(filteredFruits);
// }

// fiveLettersOnlyOld(fruits);



// function filterIt (cat){
// 	if (cat.length == 5) {
// 		return cat;
// 	}
// }

// var	filteredFruits = fruits.filter(filterIt);



//write a function that is returns the sum of an array.

var numbers = [0,1,2,3,4]

function addzOld(array){
	var sum	= 0;
	for (var i = 0; i < array.length; i++){
		sum = sum + array[i];
	}
	console.log(sum);
}
addzOld(numbers);


var sum = [0,1,2,3,4].reduce(function(previousValue, currentValue, index){
	console.log("current index", index);
	console.log("previousValue", previousValue);
	console.log("currentValue", currentValue);
	return previousValue + currentValue; 
}); 
console.log(sum);




