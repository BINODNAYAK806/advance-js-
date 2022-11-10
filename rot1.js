
let n = 6
let arr = [1, 3, 6, 11, 12, 17]
        //    0  1  2  3   4   5    
let sum = 0

let k = 4

 
function rot(arr,k){
    let arr1 = [];
    let arr2 = [];
for(let i =k; i < arr.length; i++){

arr2.push(arr[i]);

}

for(let j =0; j < k; j++){


    arr1.push(arr[j]);

}




return arr2.concat(arr1)


}

console.log(rot(arr,k))