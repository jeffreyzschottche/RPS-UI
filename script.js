let scoreUser = 0;
let scoreComp = 0;
let draw = 0;

// let scoreEl = document.querySelector('.score').textContent = score;

function compChoice(){
    let randomNum = Math.floor(Math.random() * 10);
    if(randomNum <= 3.33){
        return 'rock';
    }else if(randomNum <= 6.66){
        return 'paper';
    }else{
        return 'scissors';
    }
}

function runGame(userChoice){
    let comp = compChoice();
    // alert(comp);
    // alert(userChoice);
    if(comp === 'rock' && userChoice === 'scissors' || comp === 'paper' && userChoice === 'rock' || comp === 'scissors' && userChoice === 'paper'){
        calcScore('comp');
    }else if(comp === userChoice){
        calcScore('draw');
    }else{
        calcScore('user');
    }
    
}

function calcScore(winner){
    if(winner === 'comp'){
    if(scoreComp > 4){
        alert('comp has won');
    }else{
        let divcomp = document.querySelector('.comp');
        // let p = document.createElement('p');
        scoreComp++;
        // p.textContent = scoreComp;
        // divcomp.append(p);
        divcomp.textContent = scoreComp;
    }
    }else if(winner === 'user'){
        if(scoreUser > 4){
            alert('user has won');
        }else{
            let divuser = document.querySelector('.user');
            // let p = document.createElement('p');
            scoreUser++;
            // p.textContent = scoreUser;
            // divuser.appendChild(p);
            divuser.textContent = scoreUser;
        }
    }else{
        let divdraw = document.querySelector('.draw');
        // let p = document.createElement('p');
        draw++;
        // p.textContent = draw;
        // divdraw.appendChild(p);
        divdraw.textContent = draw;
    }
}

// function script(a, b) {
//     return a + b;
//   }
//   module.exports = script;