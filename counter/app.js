
let LowerBtn=document.querySelector('.lowerBtn');
let AddBtn=document.querySelector('.prevBtn');

let Buttons=document.querySelectorAll('.buttons')
let count=0;
let Counter=document.querySelector('.counter');
LowerBtn.addEventListener('click',
()=>{
    count--
    Counter.textContent=count;
    if(count<0){
         Counter.style.color='red';
    } else if (count>0){
        Counter.style.color='green'
  }
    
    else{
        Counter.style.color='black';
    }
})
AddBtn.addEventListener('click',
()=>{
    count++;
    Counter.textContent=count;
     if (count>0){
                    Counter.style.color='green'
              }
              else if(count<0){
                Counter.style.color='red';
           }else{
                     Counter.style.color='black'
                }
})







// Buttons.forEach(button=>{
//     button.addEventListener('click',
//     ()=>{
        
//         let Reds=button.classList.contains('lowerBtn');
//         console.log(Reds);
//          if(Reds){
//             count--
//         }
//          else if(button.classList.contains('prevBtn')){
//             count++
//         }
//          let Counter=document.querySelector('.counter');
//          Counter.textContent=count;
//          if(count<0){
//              Counter.style.color='red';
//          }else if (count>0){
//             Counter.style.color='green'
//          }else{
//             Counter.style.color='black'
//         }
//     })
// })








