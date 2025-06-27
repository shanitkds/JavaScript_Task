// const arr=[1,2,13,4];

// let larg=0;

// for(let i=0;i<arr.length;i++){
//      if(larg<arr[i]){
//         larg=arr[i]
//      }
// }

// console.log(larg);



//LARG NUMBER IN A ARRAY
// -------------------------------------------------------------------------------------------------------------

// const arr=[34,2,13,4];

// let small=arr[0];

// for(let i=0;i<arr.length;i++){
//      if(small>arr[i]){
//         small=arr[i]
//      }
// }

// console.log(small);


//SMALL NUMBER IN A ARRAY
// -------------------------------------------------------------------------------------------------------------


// const arr=[1,2,3,4];

// let sum=0;

// for(let i=0;i<arr.length;i++){
//      sum+=arr[i]
//      }


// console.log(sum);


//SUM OF THE ELEMENTS IN ARRAY
// -------------------------------------------------------------------------------------------------------------

// const arr=[1,2,13,4,78];

// let end=arr.length-1;
// let dummy=0;

// for(let i=0;i<=end;i++){
//     let k=end-i
//           if(i<=k){
//                dummy=arr[i]
//                arr[i]=arr[k]
//                arr[k]=dummy
               
          
//      }
// }

// console.log(arr);

//REVARSE OF ELEMENT
// ----------------------------------------------------------------------------------------------------------------


// const arr=[1,2,3,4,2,2,2,2,2,2,2,2,2,2,1];

// let odd=0;
// let even=0;

// for(let i=0;i<arr.length;i++){
    
//     if(arr[i]%2==0){

//         even++
//     }else{

//         odd++
    
//     }

//      }


// console.log(odd,even);

// ODD OR EVEN
// ----------------------------------------------------------------------------------------------------------------

// const arr=[1,2,3,4];

// let search=4;

// let flag=false;

// for(let i=0;i<arr.length;i++){

     

//      if(arr[i]==search){

          
//           flag=true;
//           break;     
//      }

// }

// if(flag==true){
//      console.log(search+" fount");
     
// }else{
//      console.log("not fount");
     
// }

// SEARCH
// ------------------------------------------------------------------------------------------------------------

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const mergr=[]
// pointer=0
// for(i=0;i<arr1.length;i++){

//      mergr[pointer]=arr1[i]
//      pointer++
// }
// for(i=0;i<arr2.length;i++){
//      mergr[pointer]=arr2[i]
//       pointer++
// }

// console.log(mergr);


// MERG TWO ARRAY
// ----------------------------------------------------------------------------------------------------

// const arr = [10]
// let larg=-1
// let secont=-1

// for(i=0;i<arr.length;i++){

//      if (larg<arr[i]) {
//           secont=larg
//           larg=arr[i]
          
//      }else if(arr[i]>secont && arr[i]<larg){
//           secont=arr[i]
//      }
// }

// if(secont===-1){
//       console.log("not found")

// }else{
// console.log(secont);
// }
     

     // SECONT LARGEST NUMBER
     // -----------------------------------------------------------------------------------------

// const arr=[1,2,4,9,5,6,7,8]
// let first=0
// let secont=0
// flag=false
// for(i=0;i<arr.length;i++){
//      secont=first
//      first=arr[i]
     
//      if(first<secont){
//           flag=true
//           break
//      }
     
// }

// if(flag==true){
//      console.log("not sorted")
// }else{
//      console.log("sorted")
// }

// TWO CHECKING THE ARRAY IS SORTED OR NOT
// --------------------------------------------------------------------------------------

const arr=[1,2,2,2,3,4,3,3,4,2,3,6,7,4]

const count={}
 var num
for(i=0;i<arr.length;i++){
      num=arr[i]
     if(count[num]){
          count[num]++
     }else{

          count[num]=1
     }
}

for(let key in count){
     console.log(key +" : "+ count[key]);
}

// FREQUNCY OF EACH ELEMENT IN ARRAY