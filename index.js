var het = Math.random();
het = Math.floor(het*6+1);
console.log(het);


var preet = Math.random();
preet = Math.floor(preet*6+1);
console.log(preet);





if(het == 1){
    var imageOneFirstDice = document.querySelector('#imga-1').classList.remove('img-n1')

    
}
else if(het == 2){
    var imageOneSecondDice = document.querySelector('#imga-2').classList.remove('img-n2')

    
}
else if(het == 3){
    var imageOneThirdDice = document.querySelector('#imga-3').classList.remove('img-n3')

    
}
else if(het == 4){
    var imageOneFourthDice = document.querySelector('#imga-4').classList.remove('img-n4')

    
}
else if(het == 5){
    var imageOneFifthDice = document.querySelector('#imga-5').classList.remove('img-n5')

    
}
else{
    var imageOnesixthDice = document.querySelector('#imga-6').classList.remove('img-n6')
    
}




if(preet == 1){
    var imageSecondFirstDice = document.querySelector('#im-1').classList.remove('img-01')

    
}
else if(preet == 2){
    var imageSecondSecondDice = document.querySelector('#im-2').classList.remove('img-02')

    
}
else if(preet == 3){
    var imageSecondThirdDice = document.querySelector('#im-3').classList.remove('img-03')

    
}
else if(preet == 4){
    var imageSecondFourthDice = document.querySelector('#im-4').classList.remove('img-04')

    
}
else if(preet == 5){
    var imageSecondFifthDice = document.querySelector('#im-5').classList.remove('img-05')

    
}
else{
    var imageSecondSixthDice = document.querySelector('#im-6').classList.remove('img-06')
    
}

if(het>preet){
    change = document.querySelector('#hel1').textContent = '🚩Player-1 had won the game'
}
else if(het<preet){
    changing = document.querySelector('#hel1').textContent = 'Player-2 had won the game🚩'
}
else if(het==preet){
    changed = document.querySelector('#hel1').textContent = '🚩This match was Draw🚩'
}

 

