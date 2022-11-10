// let a =-1732584194
// // var d = 5
// function check(){

//    var d = 5000
//    var a1 = -1732584194
// //    var b = -1732584194
//     a = 505
//     console.log(a1)

    
// }


// check()
// // check()

// console.log(a)








//FOR EACH

// var items = [ 1 , 2 , 3 ] ;



// items.forEach(function(item,ind,at){

//     console.log(item*5,ind,at)

// })

// strings


// let str = "my \\name\\ is b"
// console.log(str)

//object


// let obj = {

//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: 6,
// }

// let ob2 = {

//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 10,
//     f: 6,
// }
// // console.log(obj.f)
// for (key in obj){

//     // console.log(obj[key],key)
//     if(obj[key] !== ob2[key]){

//         console.log(false) ;
//         return
//     }


// }
// console.log(true)

// "10" + 5 ;// returns "15" as a String "10" - 5 ;// returns 5 as a Number 10 + null ;// returns 10 because null is convertedto 0 "10" + null ;// returns "10null"  as a String “10” + undefined ; // returns “10undefined” as a String "10" * "5"  ;// returns 50 as a Number


// console.log("1000"+ 5)//15
// console.log("10"- 100)//10
// console.log(10+null)//10
// console.log("10"+null) //10null
// console.log("10"*"10")//


// function dec2bin(dec) {
//     return (dec >>> 0).toString(2);
//   }


//   console.log(dec2bin(13))

//cheake for prime numbers


// function prime(n){


//     if(n==1){

//         return false
//     }

//     let m = Math.sqrt(n)

//     for(let i = 2; i <=m; i++){

//         if(n % i == 0){
//             return false
//     }




//     }
//     return true
// }

// console.log(prime(17))


// find the target element exists or not in the array


function find(str,x){

    for(let i = 0; i < str.length; i++){

        if(str[i] == x){
            return true
        }
    }
    
     return false


}


console.log(find("binod","d"))