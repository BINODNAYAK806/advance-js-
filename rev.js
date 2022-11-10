function reverse(arr){

    /* Write your code here
   No need to specify return type 
   Input and output already taken care of */

   // You don't need to return anything or keep any new array , just reverse the array in-place

//     arr.reverse()
   
   let arr1 = [];
   
   for(let i=arr.length-1; i>=0; i--){
       
       arr1.push(arr[i])
       
   }
   
   
   return arr1
}



console.log(reverse([1,2,3,4,5,6]))































