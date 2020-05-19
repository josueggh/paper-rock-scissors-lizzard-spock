( ()=>{
  console.log('This is the game');

  let buttons = document.querySelectorAll(".button");
  let user    = document.querySelector("#selections .user");
  let computer= document.querySelector("#selections .computer");

  let game_options = ['paper','rock', 'scissors'];
  let score = { won : 0, tie : 0 , lose: 0 };

  const game_logic = {
    'paper': ['rock'],
    'rock' : ['scissors'],
    'scissors': ['paper']
  };

  const whoWon = function( player1, player2){
    if(player1 === player2){
      return 'tie';
    }
    return game_logic[player1].includes(player2) ? 'won' : 'lose';
  }

  const computerOption = function(){
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

  for (let index = 0; index < buttons.length; index++){
    buttons[index].addEventListener( "click", selectOption);
  }

} )( );