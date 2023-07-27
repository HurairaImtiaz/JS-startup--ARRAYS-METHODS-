var numbersArray = [2,4,6,8,10];
console.log(numbersArray);
// push method (used to add element in the end of array)
numbersArray.push(12);
console.log(numbersArray);
numbersArray.push(14,16,18,20);
console.log(numbersArray);

// pop method (used to remove element in the end of array)
numbersArray.pop()
numbersArray.pop()
console.log(numbersArray)

// shift method (used to remove element at the start of array)
numbersArray.shift();
console.log(numbersArray);

// UnShift method (used to Add element at the start of array)
numbersArray.unshift(2)
numbersArray.unshift(0)
console.log(numbersArray);

//indexOf method (ye method jab pehla occurance find hjyga to usi ka index dega agar us occurence ke bad koi occurence hui to wo ye include nhi krega us k lie hamy , lga kr dubara se search start krwani hogi )

const animalNames = [ 'lion' , 'tiger', 'horse' , 'hen' , 'lion', 'hen'];
console.log(animalNames.indexOf('lion'));
console.log(animalNames.indexOf('lion',1));



