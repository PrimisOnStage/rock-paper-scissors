let player_score = 0;
let comp_score = 0;
function numToObject(num){
    return (num === 0 ? "rock" : num===1 ? "paper" : "scissors");
}


for (let i = 0; i<5; i++){
    let comp_select = Math.floor(Math.random()*3)

    let player_select = parseInt(prompt("Select: Rock (0), Paper(1) or Scissors(2)"));

    console.log(`Player chose ${numToObject(player_select)} and Computer Chose ${numToObject(comp_select)}\n`);
    if (comp_select === player_select){
        console.log("draw");
    }
    else if((comp_select == 0 && player_select == 1) || (comp_select == 1 && player_select == 2) || comp_select==2 && player_select==0){
        console.log("Player Wins!")
        player_score++;
    }
    else{
        console.log("Computer Wins!")
        comp_score++;
    }
    console.log(`Player Score is ${player_score} and Computer Score is ${comp_score}`)
}

console.log(player_score>comp_score?"player wins":"computer wins");