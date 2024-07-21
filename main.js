let tInterval=false;
const min=document.querySelector(".min");
const sec=document.querySelector(".sec");
const milsec=document.querySelector(".milsec");
const start=document.querySelector(".start");
const stop=document.querySelector(".stop");
const reset=document.querySelector(".reset");
const intervals=document.querySelector(".intervals");
const list=document.querySelector(".list");


let milliseconds=0;
let minutes=0;
let seconds=0;

start.addEventListener("click",()=>{
  
tInterval=setInterval(()=>{

      milliseconds ++;
      milsec.innerHTML=milliseconds;
    
      if (milliseconds==100) {
         
        seconds++;
        sec.innerHTML=seconds;
        milliseconds="00";
        if (seconds==60) {
         
         seconds="00";
         minutes++;
         min.innerHTML=minutes;
        }
      }  
  },10);
});

stop.addEventListener("click",()=>{
  clearInterval(tInterval);
});

reset.addEventListener("click",()=>{
clearInterval(tInterval);
milsec.innerHTML="00";
sec.innerHTML="00";
min.innerHTML="00";
list.innerHTML="";

});

intervals.addEventListener("click",()=>{
  clearInterval(tInterval);
  const item=document.createElement("li");
  item.classList.add("item");
  item.innerHTML=`${minutes}:${seconds}:${milliseconds}`;
  list.append(item);

});


 

   
// setInterval(()=>{
//     msecond++
//     msec.innerHTML=msecond
 
// },10) 

// setInterval(()=>{
//     second++
//     msec.innerHTML=msecond


// },1000) 
// setInterval(()=>{
//     minute++
//     min.innerHTML=minute


// },60000)


//+


stop.addEventListener("click",()=>{
clearInterval(second);

})
