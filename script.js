let score = JSON.parse(localStorage.getItem('score'))

    if (score === null) {
      score = {
        Wins: 0,
        losses: 0,
        Ties: 0
      };
    }

    updateScore();

    function playerChoice(playerMove) {

      let computerMove = computerChoice();
      let result = '';
      if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
          result = 'Tie';
        }
        else if (computerMove === 'Paper') {
          result = 'Lost';
        }
        else if (computerMove === 'Scissor') {
          result = 'Won';
        }
      }

      else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
          result = 'Won';
        }
        else if (computerMove === 'Paper') {
          result = 'Tie';
        }
        else if (computerMove === 'Scissor') {
          result = 'Lost';
        }
      }

      else if (playerMove === 'Scissor') {
        if (computerMove === 'Rock') {
          result = 'Lost';
        }
        else if (computerMove === 'Paper') {
          result = 'Won';
        }
        else if (computerMove === 'Scissor') {
          result = 'Tie';
        }
      }

      if (result === 'Won') {
        score.Wins += 1;
      }
      else if (result === 'Lost') {
        score.losses += 1;
      }
      else if (result === 'Tie') {
        score.Ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScore();

      document.querySelector('.js-result').innerHTML = (`Result : ${result}`);

      document.querySelector('.js-moves').innerHTML = (    `You
  
  <img src="${playerMove}.png" alt="" class="moves">
  <img src="${computerMove}.png" alt="" class="moves">
  <img src="${playerMove}.jpeg" alt="" class="moves">
  <img src="${computerMove}.jpeg" alt="" class="moves">
   <img src="${playerMove}.jpg" alt="" class="moves">
  <img src="${computerMove}.jpg" alt="" class="moves">
  Computer`);
    }

    function updateScore() {
      document.querySelector('.js-score').innerHTML = (`Wins: ${score.Wins} ,losses: ${score.losses},Ties: ${score.Ties}`);
    }

    function computerChoice() {
      let randomNumber = Math.random();
      let computerChoice = '';
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerChoice = 'Rock';
      }
      else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerChoice = 'Paper';
      }
      else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerChoice = 'Scissor';
      }

      return computerChoice;
    }