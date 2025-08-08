const choices=["ROCK","PAPER","SCISSORS"];
const playerdisplay= document.getElementById("playerdisplay");
const computerdisplay= document.getElementById("computerdisplay");
const resultdisplay= document.getElementById("resultdisplay");
const playerscoredisplay=document.getElementById("playerscoredisplay");
const computerscoredisplay= document.getElementById("computerscoredisplay");
let playerscore=0;
let computerscore=0;

function playgame(playerchoice){
  const computerchoice= choices[Math.floor(Math.random()*3)];
  let result="";

  if (playerchoice==computerchoice){
    result="ITS A TIE!";
  }

    else {
      switch(playerchoice){
        case "ROCK":
         result= (computerchoice=="SCISSORS")? "YOU WIN!":"YOU LOSE!"
         break;

         case "PAPER":
         result= (computerchoice=="SCISSORS")? "YOU LOSE!":"YOU WIN!"
         break;

         case "SCISSORS":
         result= (computerchoice=="PAPER")? "YOU WIN!":"YOU LOSE!"
         break;
      }
    }

        playerdisplay.textContent=`PLAYER: ${playerchoice}`;
        computerdisplay.textContent=`COMPUTER: ${computerchoice}`;
        resultdisplay.textContent=result;
        resultdisplay.classList.remove("greentext","redtext","blacktext");
        
        switch(result){
          case "YOU WIN!":
            resultdisplay.classList.add("greentext")
            playerscore++;
            playerscoredisplay.textContent= playerscore;
            break;
            case "ITS A TIE!":
            resultdisplay.classList.add("blacktext")
            break;
            case "YOU LOSE!":
              resultdisplay.classList.add("redtext")
              computerscore++;
              computerscoredisplay.textContent= computerscore;
              break;

          

        }


}
