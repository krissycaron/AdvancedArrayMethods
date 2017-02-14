// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// 1.  Sort the numbers in descending order (10, 9, 8, 7, etc).
// 2.  Remove any integers greater than 19.
// 3.  Multiply each remaining number by 1.5 and then subtract 1.
// 4.  Then output (either in the DOM or the console) the sum of all the resulting numbers.



var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var chainingResult = integers.sort(function(a,b){return b-a}).filter(function(num){return num < 19}).map(function(num){return (num * 1.5)-1}).reduce(function(prev, curr){return prev + curr});

//my first attempt at the # 3 line 
//.reduce(function(num)return (num * 1.5)-1});

console.log("Result ", chainingResult);



//krissys first attempt 
// function reverseTheNums(integers) {
// 	var backwardsNums =[];
// 	for (i = 0; i < array.length; i++){
// 		reverseTheNums.push(array[i].split("").reverse(integers).;
// 	}
// 	console.log(reverseTheNums);
// }