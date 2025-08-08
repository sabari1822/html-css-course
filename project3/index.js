const textbox=document.getElementById("textbox");
const toFar=document.getElementById("toFar");
const toCel=document.getElementById("toCel");
const result=document.getElementById("result");
let temp;





function convert(){
  if(toFar.checked){
     temp=textbox.value;
     temp=temp*9/5+32;
     result.textContent=temp.toFixed(1) +"\u00B0F"
  }
  else if(toCel.checked){
     temp=textbox.value;
     temp=(temp-32)*(5/9);
     result.textContent=temp.toFixed(1) +"\u00B0C"
    
  }
  else{
    result.textContent="select a unit";
  }

}

