/*********************
var firstName= 'Anderson';
console.log(firstName)

var lastName = `Henrique`;
var age = 18;

var fullAge = true; 
console.log(fullAge);

var job;
console.log(job);

job = `Junior Technology Assistant`;
console.log(job);
/**************************** */
var firstName = 'Anderson';
var age = 18;
console.log(firstName + ' ' + age );
var job, isMarried 
job = `Junior Technology Assistant`;
isMarried = false;



console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);




//variable mutation
age = 'eighteen';
job = 'driver';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
var lastName = prompt('what is his last Name?');
console.log(firstName + ' ' + lastName);


/***********
* Basic operators
*/
var year, yearAnderson, yearVini;
 now = 2020;
 ageAnderson = 18
 ageVini = 20


 //math operators
 yearVini = now - ageVini
 yearAnderson = now - ageAnderson;
console.log(yearAnderson);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//logical operators
var AndersonOlder = ageAnderson < ageVini;
console.log(AndersonOlder);


//typeof operators
console.log(typeof AndersonOlder);
console.log(typeof ageAnderson);
console.log(typeof 'Vini is older than Anderson');
var x;
console.log(typeof x);



/****************************
 * Operator Precedence 
 */
 var now = 2020;
 var yearAnderson = 2001;
 var fullAge = 18;
 
 

// Multiple Operators


var IsFullAge = now - yearAnderson >= fullAge; //true
console.log(IsFullAge);

// Grouping

var ageAnderson = now - yearAnderson;
var ageVini = 20;
var average = (ageAnderson + ageVini) /2;


console.log(average);



//Multiple assigments

var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6// 26
console.log(x, y);





//More Operators

x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);









var MassAnderson = 80; //kg
var heightAnderson = 1.86; //meters


var MassVini = 90; //kg
var heightVini = 1.92; // meters


var BMIAnderson = MassAnderson / (heightAnderson * heightAnderson);

var BMIVini = MassVini / (heightVini * heightVini);
console.log(BMIAnderson, BMIVini);



var ViniHigherBMI = BMIVini > BMIAnderson; 
console.log('is Vini BMI higher than Anderson ?' + ViniHigherBMI);







/********************
 * If / else elements
 */

 var firstName = 'Anderson';
 var civilStatus = 'single';

 if (civilStatus === 'married') {
     console.log(firstName + ' is married');

     
 } else {
     console.log(firstName + ' will hopefully marry soon :)');
 } 
 var isMarried = true;
 if (isMarried) {
     console.log(firstName + ' is married');
 } else {
     console.log(firstName + ' will hopefully marry soon :)');
     
 }
/***********
 * boolean logic
 */
 /*var firstName = `Anderson`;
 var age = '20'
 if (age < 13) {
     console.log(firstName + ' is a boy');
 } else if (age >= 13 && age < 20) { 
    console.log(firstName + ' is a teenager');
 }else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man');

 } else { console.log(firstName + ' is a man');

 }





 /*******
  * The Ternary Operator and Switch Statements
  */

  var firstName = 'Anderson';
  var age = 14;

  //Ternary Operator
  age >= 18?  console.log(firstName + ' drinks beer.')
  : console.log(firstName + ' drinks juice.');
  var drink = age >= 18? 'beer' : `juice`;
  console.log(drink);


//Switch Statement

var job = 'driver';
switch (job) {
    case 'Junior Technology Assistant':
         console.log( firstName + ' supports computer.');
         break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + 'designes beaultiful websites');
        break;
    default:
        console.log(firstName + ' does something else.');
        }

age = 18
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');   
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;


    default: 
        console.log(firstName + ' is a man');
        break;
}



        /************
         * Truthy and falsy values and equality operators
         */
     
     
     
         // false values: undefined, null, 0, '', NaN

         //truthy values: NOT falsy values


         var height;
         height = 23;
         if (height || height === 0) {
             console.log('variable is defined');
         } else {
             console.log('variable has NOT been defined');
         }


         //Equality Operators
         if (height === '23' ) {
             console.log('The == Operator does type coercion!' );

         }


         /*******************
          * Functions
          */
         function calculateAge(Birthyear) {
             return 2020 - Birthyear;

         }
         var ageAnderson = calculateAge(2001);
         var ageVini = calculateAge(2000);
         var ageMark = calculateAge(1999);
console.log(ageAnderson, ageVini, ageMark);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + 'years');
    } else {
        console.log(firstName + ' is already retired.');
    }
   
     
}

yearsUntilRetirement(2001, 'Anderson');
yearsUntilRetirement(2000, 'Vinicyus');
yearsUntilRetirement(1999, 'Mark' );

/**********
 * Function Statements and Expressions
 */

//Function Declaration 
//var WhatDoYouDo = function(job, firstName) {
//}

 //Function Expression
 var WhatDoYouDo = function(job, firstName) {
switch(job) {
    case 'teacher': 
    return firstName + ' teaches kids how to code';
    case 'driver':
        return firstName + ' drives a uber in Lisbon';
        case 'designer':
            return firstName + ' designs beaultiful websites';
            default: 
            return firstName + ' does something else';
}
 }


 console.log(WhatDoYouDo('teacher', 'Anderson'));
 console.log(WhatDoYouDo('designer', 'Vini'));
 console.log(WhatDoYouDo('driver', 'Mark'));
























 /***************
  * Arrays
  */


  //Initialize new Arrays


 var names = ['Anderson', 'Vini', 'Mark'];
 var years = new Array(2001,2000,1999);


 console.log(names[2]);
 console.log(names.length);



 //Mutate array Data
 names[1] = 'Ben';
 names[names.length] = 'Mary';
 console.log(names);



 // different data types

 var Anderson  = ['Anderson', 'Henrique', 2001, 'teacher', false];
 Anderson.push('blue');
 Anderson.unshift('Mr.')
 console.log(Anderson);
 Anderson.pop();
 Anderson.pop();
 Anderson.shift();
 console.log(Anderson);
 console.log(Anderson.indexOf(18));

 var isDesigner = Anderson.indexOf('designer') === -1 ? 'Anderson is not a designer' : 'Anderson is not a designer';

 console.log(isDesigner);


 /***********************
  * Objects and Properties
  */


  //Object literal
var Anderson = {
    firstName: 'Anderson', 
    lastName: 'Henrique',
    Birthyear: 2001,
    family: ['Carol', 'Mary', 'John'],
    job: 'Teacher',
    isMarried: false,
};

console.log(Anderson.firstName);
console.log(Anderson ['lastName'])
var x = ('birthday');
console.log([x]);

Anderson.job = 'designer';
Anderson['isMarried'] = true;
console.log(Anderson);


//New Object Syntax
var Carol = new Object();
Carol.firstName = 1998;
Carol['lastName'] = 'Henrique';
console.log(Carol);



/**********
 * Objects e Methods
 */

var Anderson = {
    firstName: 'Anderson', 
    lastName: 'Henrique',
    Birthyear: 2001,
    family: ['Carol', 'Mary', 'John'],
    job: 'Teacher',
    isMarried: false,
    calcAge: function() {
         this.age = 2020 -  this.Birthyear;
    }
};
Anderson.calcAge ();
console.log(Anderson);





/***************
 * Loops e iteration
 */



for (var  i=0; i < 10; i++) {
    console.log(i);
    
}



x = 1;
y = 2;
a = ( x + y);
console.log(a);







// testing somethings




function aprovacao(nota, frequencia){
    if (nota>= 7 && frequencia>=0,7){
        aluno = 'aprovado';
    }else{
        aluno = 'reprovado';
    }
    return aluno;
} 

 Anderson = aprovacao (9 , 0.6);
 console.log(Anderson);



 notas = 8, 7, 5;
soma = 8+7+5;
 console.log( soma / 3);

 

