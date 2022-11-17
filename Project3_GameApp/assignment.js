'use strict';
    
    alert(`
    ***simple rules,
    **initiall your score is 20 📜,
    **every  wrong guess score will be decrease 1 point 📉'
    **if right guess score will add into higherscore 📈(if it is higher then previous one),
    ** for setting highScore📊  to your self press  Again button`);

    

    let secretNumber = Math.trunc(Math.random()*20) + 1;
    let score = 20;
    let highscore = 0;
    const displayMessage =  function(message) { 
    document.querySelector('.message').textContent = message;
    };

    document.querySelector('.check').addEventListener('click',function(){
    const guess =Number( document.querySelector('.guess').value); 
        if(!guess) {
    displayMessage('⛔ No number!');
    }
    else if(guess === secretNumber){
        displayMessage('🍕 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width ='30rem';
   
        if(score  > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess !== secretNumber){
        if(score > 1) {
            displayMessage(guess >secretNumber ? 'Too high!' :  'Too low!');
            score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage('✨ You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
}); 

    document.querySelector('.again').addEventListener('click',function(){
        document.querySelector('.score').textContent = 20;
        document.querySelector('.number').textContent = '?';
        displayMessage("Start guessing...");
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width ='15rem';
        document.querySelector('.guess').value = "";
        score = 20;
        secretNumber = Math.trunc(Math.random()*20) + 1;

    })