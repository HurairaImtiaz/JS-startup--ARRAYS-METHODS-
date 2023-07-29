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

// concat methd is used to to add two strings (by  name , by elememts)

let name1 = ['ali', 'umar' , 'ayesha ', 'laiba']
let name2 = ['sonia ',' noor','hashim']
var concatArray = name1.concat(name2);
console.log(concatArray);

// Slice methd is used to to separate two strings (or remove something from array)
// (syntax me apko starting index dena hoga jhan se pehly ki sb values remove hjyngi
// or ending index bhi dena hoga jisse agy ki values remove hngi 

// console.log(concatArray.slice(2));
console.log(concatArray.slice(2,5))

// Spread oprator (ye bhi do arrays ko jorny ka ksm deta hai)

var spread = [...name1,...name2]
console.log(spread)
 
// join method( ye string ko jorny kelie istmal hta hai )
// agar join simple example 1 ki trah estmal krogy to comma ayega har string k bad 
// exapmle 2 me separater ki mdad se comma ni ayega or jo as a separator ap do gy wo ayega

// example 1
var address = ['street 16', 'mansoorabad', 'FSD'];
console.log (address.join());

// example 2 
 console.log(address.join( ' '))
 console.log(address.join( '-'))

 // split method 

 joinAddress = address.join('-')
 console.log(joinAddress.split('-'))