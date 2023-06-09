//// Array Chapter

var array = [1,2,3,4,5,6,7,8];
var array1 = ["umair", "zain", "ali"];

//// 1st method of array is concat()... is mein hum 2 array ko apas mein milaty hain hain

var newArray = array.concat(array1);

console.log("Concat array result => ", newArray);
console.log(newArray.concat(array));

//// 2nd method of array is filter()... is mein hum array mein sy ak new array hasil kr skty hain kam kr k ya phr pori..

var filterFunction = newArray.filter(function (value) {
    return value > 0 
});
console.log(filterFunction);

var studentsArray = [{name:"saqib", class:"Tenth", Teacher:"Maham"},{name:"Azan", class:"Ninth", Teacher:"Sidra"}];

 var students = studentsArray.filter(function (value) {
    return value.Teacher = "Maham"; /// studentsArray mein ik object mein teacher ka name sidra likha tha .. uska name change krny k liay filter istimal kia
 })
 console.log(students);

 //// forEach is the loop which used only in array function

 var studentsArrayOutput = array1.forEach(myFunction);

 function myFunction(element, index, arr) {
   console.log("Hi i am " + " 2 " + element , index, arr);
 }
/// sum array using for loop
 var sum = 0;

 var sumArr = [1,33,44,65,33,44,55,66];

 sumArr.forEach(function (mySum) {
   console.log( sum += mySum);
 });

 /// indexOf().... yh hum array mein start sy koi cheez dohndny krny k liay istimal krty hain.. agr wo cheez array mein hu gi tu just index number print kry ga,,ni tu -1
 console.log(sumArr.indexOf(33));
 console.log(sumArr.indexOf(44)); 
 //// lastIndexOf().....yh hum array mein start sy koi cheez dohndny krny k liay istimal krty hain.. agr wo cheez array mein hu gi tu just index number print kry ga,,ni tu -1
 console.log(sumArr.lastIndexOf(33));
 console.log(sumArr.lastIndexOf(44));

 /////jion()....join() method joins all the elements of an array into a string.

 console.log(sumArr.join());
 console.log(array1.join());

 //// map()....
