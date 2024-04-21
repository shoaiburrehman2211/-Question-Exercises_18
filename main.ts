/*Think of at least five places in the world you’d like to visit.
• Store the locations in an array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
order has changed.
*/


let myPlace: string [] = ["Karachi", "Lahore", "Uk", "London", "Haripure", "Kpk",];
//console.log(myPlace);


// making a copy of an array
let copyofArry = myPlace.slice();
let sortedArry = copyofArry.sort();
//console.log(sortedArry);

// printing original arry
//console.log(myPlace);

// reversing original arry
// first we have make a copy of original arry
let copyofArry2 = myPlace.slice();
let reverseoriArry = copyofArry2.reverse();
//console.log(reverseoriArry);

//printing original arry
//console.log(myPlace);


//reverse the order of original arry
let reverseoriArry2 = myPlace.reverse();
//console.log(reverseoriArry2);

let againReverse = reverseoriArry2.reverse();
//console.log(againReverse);   // same as original arryay



//sorting original array
let sortoriArray = myPlace.sort();
console.log(sortoriArray);


let reversesortedArray = sortoriArray.reverse();
console.log(reversesortedArray);


