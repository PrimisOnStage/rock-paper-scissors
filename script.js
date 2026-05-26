let player_score = 0;
let comp_score = 0;
function numToObject(num){
    return (num === 0 ? "rock" : num===1 ? "paper" : "scissors");
}

function playRound(player_select){
    let comp_select = Math.floor(Math.random()*3);
    comp_select = numToObject(comp_select);

    console.log(`Player chose ${player_select} and Computer Chose ${comp_select}\n`);
    if (comp_select === player_select){
        console.log("draw");
    }
    else if((comp_select == "rock" && player_select == "paper") || (comp_select == "paper" && player_select == "scissors") || comp_select=="scissors" && player_select=="rock"){
        console.log("Player Wins!");
        player_score++;
    }
    else{
        console.log("Computer Wins!");
        comp_score++;
    }
    console.log(`Player Score is ${player_score} and Computer Score is ${comp_score}`);
}

const buttons = document.querySelectorAll("#playerSelection button");
console.log(buttons);
buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        playRound(button.className);

    });
});


