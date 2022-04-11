const arr=[1,2,3];

// // for each
// arr.forEach((item)=>{
// console.log(item);

// });

// // for of

// for(const item of arr){
//     console.log(item);
// }

// arr filter
const returnedArr=arr.filter((item)=>{
 if(item!=2){
     return true;
    }else{
        return false;
    }
});

console.log(returnedArr);




