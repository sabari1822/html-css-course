const display = document.getElementById("display");

function appendtodisplay(input){
   if(input!=='--'){
   display.value+=input;
    input+=input;
  }
  else{
     display.value = display.value.slice(0, -1);
   
  }

}
 

function cleardisplay(){
  display.value="";
}



function calculate(){
try{
  display.value= eval(display.value);

}
catch(error){
  display.value="Error";
}

}