var score, roundScore, gamePlaying,activePlayer;
function Warn() {
               alert ("The game is about to start: \nThe Rules are Simple :\n 1. The Player how reaches the maximum score more than 200 wins the Game.\n2. Whenever 1 comes in the adding score the chance is shifted to other player.\n3. Constrains :\n * If a players goes beyond 200 with a multiple of 2 and 5,\n That Player won't win, the game will still go on.\n * You have total 2 minutes to complete the game. \n * The Game will Automatically stop after 2 mins. \n * The Timer is Running below.");
               document.write ("This is a warning message!");
            }
Warn();



function start()
{
    score = [0,0];
    roundScore = 0;
    gamePlaying = true;
    
  
    activePlayer =0;
    
    
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    
    document.getElementById("current-0").textContent = "0";
     document.getElementById("current-1").textContent = "0";
    
    document.getElementById('name-0').textContent = 'Player 1';
     document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    
     document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    
document.querySelector('.player-0-panel').classList.add('active');
    
countdown(2);
    
}
start();


document.querySelector('.btn-roll').addEventListener('click',function()
                                                    {
    if(gamePlaying)
        {
 var var1 = Math.floor(Math.random() * 6) +1;            
            if(var1 !== 1)
                {
                     roundScore += var1;
                    document.querySelector('#current-' + activePlayer).textContent = roundScore;
                }
            else
                {
                    activePlayer === 0 ? activePlayer = 1: activePlayer =0; 
            roundScore =0;
            
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            
                    document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            
            
                }
        }
});

document.querySelector('.btn-hold').addEventListener('click',function()
                                                    {
    if(gamePlaying)
        {
            score[activePlayer] += roundScore;
             document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
            
            if((score[activePlayer] > 200) && (score[activePlayer]%5 !== 0) && (score[activePlayer]%2 !==0))
                {
                    document.querySelector("#name-" + activePlayer).textContent = "WINNER";
                    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
             document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

                gamePlaying = false;
                    setTimeout(method1s, 8000);
                }
             else{
        nextPlayer();
                 
    }
        }
   
});

function nextPlayer()
{
    activePlayer === 0 ? activePlayer = 1: activePlayer =0; 
            roundScore =0;
    
    document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
}


document.querySelector('.btn-new').addEventListener('click',start);

///////////// Timer
var timeoutHandle;
function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter = document.getElementById("timer");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            timeoutHandle=setTimeout(tick, 1000);
        } else {

            if(mins > 1){

               // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
               setTimeout(function () { countdown(mins - 1); }, 1000);

            }
        }
    }
    tick();
    
    
}

setTimeout(method, 120000);

function method()
{
    alert("Time Up :( \n\n Press Ok to restart the game.");
    start();
}
function method1()
{
    alert("The Game has Ended : \n\n Press Ok to restart the game.");
    start();
}

/////////
