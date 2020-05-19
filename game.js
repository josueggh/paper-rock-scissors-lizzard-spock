( ()=>{
  console.log('This is the game');

  let buttons   = document.querySelectorAll(".button");
  let user      = document.querySelector("#selections .user");
  let computer  = document.querySelector("#selections .computer");
  let gameboard = document.querySelector("#game-board");

  let score = { won : 0, tie : 0 , lose: 0 };

  const game_logic = {
    'paper': ['rock','spock'],
    'rock' : ['scissors','lizzard'],
    'scissors': ['paper','lizzard'],
    'lizzard' : ['spock','paper'],
    'spock': ['scissors','rock'],
  };

  const whoWon = function( player1, player2){
    if(player1 === player2){
      return 'tie';
    }
    return game_logic[player1].includes(player2) ? 'won' : 'lose';
  }

  const computerOption = function(){
    let game_options = Object.keys(game_logic);
    let computer_selection = game_options[Math.floor(Math.random() * game_options.length)];
    computer.innerHTML = computer_selection;
    return computer_selection;
  }

  const scoreAccumulate = function(value){
    score[value]++;
    document.querySelector(`#score .${value}`).innerHTML = score[value];
  }

  const selectOption = function(event){
    let user_selection = this.dataset.type;
    user.innerHTML = user_selection;
    let computer_selection = computerOption();
    scoreAccumulate ( whoWon(user_selection, computer_selection) );
  };

  const initGame = function(){
    console.log("Starting game");
    let game_options = Object.keys(game_logic);

    for(let index = 0; index < game_options.length; index ++){
      let button = document.createElement("button");
      button.classList.add("button");
      button.textContent = game_options[index];
      button.setAttribute("data-type", game_options[index]);
      button.addEventListener("click", selectOption);
      gameboard.appendChild(button);
    }
  }

  initGame();
} )( );