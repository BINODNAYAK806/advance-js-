


// function rot(arr,k){

//     let arr1 = []
//     let arr2 = []

//     for(let i=0; i<k ; i++){

//         arr1.push(arr[i])

//     }

//     for(let i=k; i<arr.length; i++) {
//         arr2.push(arr[i])

        

//     }

//     return arr2.concat(arr1)



// }


let arr =   [7, 5, 2, 11, 2 ,43, 1, 1]

let k = 2
// console.log(rot(arr,k))



// const rotateArray2 = function(nums, k) {

//     // reverse helper function
//     function reverse(arr, start, end) {
//       while (start < end) {
//         [arr[start], arr[end]] = [arr[end], arr[start]];
//         start++;
//         end--;
//       }
//     }
  
//     k %= nums.length;
  
//     reverse(nums, 0, (nums.length - 1));
//     reverse(nums, 0, (k - 1));
//     reverse(nums, k, (nums.length - 1));
  
//     return nums;
//   }
//   console.log(rotateArray2(arr, k))

  
  const rotateArray = (arr, k) => arr.slice(k).concat(arr.slice(0, k));
console.log(rotateArray(arr,k))