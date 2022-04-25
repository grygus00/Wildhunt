
// _________________start the GAME _________________
var startScreen = document.querySelector("#start");
var startSkyMoving = document.querySelector("#game_sky ");
var bgDark = document.querySelectorAll(".black_bord");
var showAnimals = document.querySelectorAll(".game_stop");


let eliteScreenAction = document.querySelector("#eliteScreen");
let wonScreenAction = document.querySelector("#wonScreen");
let loseScreenAction = document.querySelector("#loseScreen");
let cruelScreenAction = document.querySelector("#cruelScreen");


let startTheGame = document.querySelector(".start_b_1");
startTheGame.addEventListener("click", startGame);
// startTheGame.addEventListener("click", console.log("CLICK1"));
let showTheInstructions = document.querySelector(".start_b_2");
showTheInstructions.addEventListener("click", showOptions);

function startGame() {
    // START SCREEN OPACITY
    eliteScreenAction.classList.add("hide");
    startScreen.classList.add("startOpacity");

    wonScreenAction.classList.add("hide");
    loseScreenAction.classList.add("hide");
    cruelScreenAction.classList.add("hide");
    //MOVE SKY
    startSkyMoving.classList.add("skyMove");

    // REMOVE BG BLUR & DARKER

    for (i = 0; i < bgDark.length; i++) {
        bgDark[i].classList.remove('black_bord');
        bgDark[i].classList.remove('.game_stop');
    }

    // SHOW ANIMALS

    for (i = 0; i < showAnimals.length; i++) {
        showAnimals[i].classList.remove('game_stop');
    }


    // SHOWING THE HEARTS WHEN THE GAME STARTS
    for (let i = lives; i > 0; i--) {
        console.log("heart");
        src.innerHTML = src.innerHTML + "<img src=\"images/Stats/Heart_1.svg\">";
    }


    // SHOWING THE AMMO WHEN THE GAME STARTS
    for (let i = ammo; i > 0; i--) {
        console.log("ammo");
        srcAmmo.innerHTML = srcAmmo.innerHTML + "<img src=\"images/Stats/Ammo.svg\">";
    }

    // SHOWING POINTS WHEN THE GAME STARTS
    showPoints.textContent = `Points: ${points}`;


}
// _________________ DECREASE AMMO _________________
let ammo = 5;
let srcAmmo = document.querySelector("#ammocontainer");


//munusAmmo function
function minusAmmo() {
    ammo--;
    console.log("THIS IS AMMO" + ammo);

    srcAmmo.innerHTML = "";
    for (let i = ammo; i > 0; i--) {
        console.log("ammo");
        srcAmmo.innerHTML = srcAmmo.innerHTML + "<img src=\"images/Stats/Ammo.svg\">";
    }

    if (ammo == 0) {
        gameOver();
    }

}
// _________________ CLICK GOOD OBJECT _________________
let points = 0;
let shootDuck = document.querySelector("#game_duck_sprite").addEventListener("click", clickGoodObject);
let shootRabbit = document.querySelector("#game_rabbit_sprite").addEventListener("click", clickGoodObject);
let showPoints = document.querySelector("#pointscontainer_h2")

function clickGoodObject() {
    points++;

    console.log("Thats the points" + points);
    showPoints.textContent = `Points: ${points}`;

    minusAmmo();
}


// _________________ CLICK BAD OBJECT _________________
//lives COUNTER
let lives = 5;
// let img = document.createElement("img");
let src = document.querySelector("#heartcontainer");
let shootDisc = document.querySelector("#game_disc_sprite").addEventListener("click", clickBadObject);
function clickBadObject() {

    lives--;
    console.log("clickBadObjct");

    // It is makeing the header elememnt empty every time function is starting (without is 6 previous lives would still be on the screen)
    src.innerHTML = "";
    for (let i = lives; i > 0; i--) {
        src.innerHTML = src.innerHTML + "<img src=\"images/Stats/Heart_1.svg\">";
    }

    minusAmmo();

    console.log(lives);
    if (lives == 0) {
        gameOver();
    } else {
        return lives;
    }
}
// _________________ CLICK DOG _________________
document.querySelector("#game_dog_sprite").addEventListener("click", shootDog);
function shootDog() {
    points = -1;
    gameOver();
}


// _________________ SHOW OPTIONS _________________
function showOptions() {

    var hideStartScreen = document.querySelector("#start_interface");
    hideStartScreen.classList.add("hide");

    var showInstructions = document.querySelector("#instruction_interface");
    showInstructions.classList.remove("hide");

}


function gameOver() {
    //STOP SKY
    startSkyMoving.classList.remove("skyMove");

    //Hide Stats
    src.classList.add("hide");
    srcAmmo.classList.add("hide");
    showPoints.classList.add("hide");

    // REMOVE BG BLUR & DARKER
    for (i = 0; i < bgDark.length; i++) {
        bgDark[i].classList.add('black_bord');
        bgDark[i].classList.add('.game_stop');
    }

    // SHOW ANIMALS
    for (i = 0; i < showAnimals.length; i++) {
        showAnimals[i].classList.add('game_stop');
    }


    if (points == 5) {
        console.log("elite");
        eliteScreen();
    } else if (points >= 3) {
        console.log("won");
        wonScreen();
    } else if (points < 3 && points > -1) {
        console.log("lose");
        loseScreen();
    } else {
        console.log("god shooted");
        cruelScreen();
    }

}


function eliteScreen() {
    eliteScreenAction.classList.remove("hide");
}
function wonScreen() {
    wonScreenAction.classList.remove("hide");
}
function loseScreen() {
    loseScreenAction.classList.remove("hide");
}
function cruelScreen() {
    cruelScreenAction.classList.remove("hide");
}