// console.log(1=="1")
//this compairs only values
// console.log(1==="1")
//this compairs values with their types

// var x = 1
// var y = "1"
// var z = "binod"

// console.log(x+y+z)
// console.log(x-y+z)

// var x = null;
// console.log(typeof(x))
// console.log(typeof(typeof(typeof(100))))

// let x =10
// let y ="20"

// console.log(x+y)

// let a = (10).tostring();
// let x = (25).tostring();
// console.log(x)


// let x = (25).toString();
// console.log(typeof(x)); // String
// console.log(x); // 25


// let x = 999999999999999;

// let x = "5"
// let y = 10


//tofixed

let num = 500.12121
console.log(num.toFixed(0))
// console.log(num.toFixed(1))
// console.log(num.toPrecision(5))
// console.log(parseFloat( num))
// console.log(Number( num))
// //

// // let x = 999999999999999999999999;

// //how to swap two numbers

// let a = 5
// let b = 10

// var temp = b
// b = a
// a = temp

// console.log(a,b)


// const course= 'DSA';
// switch (course) {
// case "DSA":
// console.log('Your course is DSA');
// break;
// case "Web-Dev":
// console.log("Your course is");
// break;
// default:
// console.log(`Sorry, course not found`);
// }


// var d;

// console.log(d)
// console.log(typeof(d))

// if(typeof(d)){

//     console.log("ye")
// }
// else{

//     console.log("nope")
// }

// console.log((5* (0 - 32)) / 9);

//     // console.log(micromax)
    
// let micromax = 50
// console.log(micromax)


// const ab = 55
// function find(){

//     // ab = 50005
// const ab = 1000
// }

// find()

// console.log(ab)


// factroial of a numbers in javascript


// function factroial(n){

//         let res = 1
//     for(let i = n ; i  >0; i--){

//         res = res * i
// }
// console.log(res)
// }


// factroial(5)

// FUNCTION ARGUMENTS:

// function arg(a,b,c){

// return a + b + c;


// }


// console.log(arg(50,10,5))

//Default Parameters

// function defultparams(a,c=5,d=10){

//     console.log(a*c+d)
//     // console.log(c)


// }

// defultparams(5,10)

//Rest Parameters

// function rest (a,b,c,d,...numbers){

//     var sum = a+b+c;
// for(var i=0; i<numbers.length; ++i) {
// sum += numbers[i];
// }
// return sum;
// }

// rest(1,5,10,5,10,10,10,10,10,10,10,10)



// HOISTION
// function a( ) {
//     var i = 20;
//     function b( ) {
//     function c( ) {
//     console.log(i); // Prints - 20
//     }
//     c( );
//     }
//     b( );
//     }
//     a( );



//     function host(){

//         var i = 50;

//         function d(){

//             console.log(i);
//         }
//         d( );

//     }

//     host()

//     sum = (a,b)=>{

//         return a+b
//     }
//     console.log(sum(5,10))




var d = 150;

function sum1(){

    d = 50;

    
}

sum1();
console.log(d)