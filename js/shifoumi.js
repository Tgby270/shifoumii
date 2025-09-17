let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let playedP = document.getElementById("playerPlayed");
let playedC = document.getElementById("computerPlayed");
let res = document.getElementById("res");

let victory = document.getElementById("victory");
let defeat = document.getElementById("defeat");
let tie = document.getElementById("tie");

let reset = document.getElementById("resetScore");

vic = 0, def = 0, tieCount = 0; 

rock.addEventListener("click", () => play("rock"));
paper.addEventListener("click", () => play("paper"));
scissors.addEventListener("click", () => play("scissors"));

reset.addEventListener("click", () => {
    resetScore();
});

function play(which) {
    if(which == "rock") {
        playedP.textContent = "Vous avez joué : pierre";
        let computer = computerPlay();
        if(computer == "rock") {
            res.textContent = "Égalité !";
            tieCount++;
            if(tieCount == 1) {
                tie.textContent = tieCount + " égalité";
            } else {
                tie.textContent = tieCount + " égalités";
            }
        } else if(computer == "paper") {
            res.textContent = "Vous avez perdu !";
            def++;
            if(def == 1) {
                defeat.textContent = def + " défaite";
            } else {
                defeat.textContent = def + " défaites";
            }
        } else if(computer == "scissors") {
            res.textContent = "Vous avez gagné !";
            vic++;
            if(vic == 1) {
                victory.textContent = vic + " victoire";
            } else {
                victory.textContent = vic + " victoires";
            }
        }
    } else if(which == "paper") {
        playedP.textContent = "Vous avez joué : papier";
        let computer = computerPlay();
        if(computer == "rock") {
            res.textContent = "Vous avez gagné !";
            vic++;
            if(vic == 1) {
                victory.textContent = vic + " victoire";
            } else {
                victory.textContent = vic + " victoires";
            }
        } else if(computer == "paper") {
            res.textContent = "Égalité !";
            tieCount++;
            if(tieCount == 1) {
                tie.textContent = tieCount + " égalité";
            } else {
                tie.textContent = tieCount + " égalités";
            }
        } else if(computer == "scissors") {
            res.textContent = "Vous avez perdu !";
            def++;
            if(def == 1) {
                defeat.textContent = def + " défaite";
            } else {
                defeat.textContent = def + " défaites";
            }
        }
    } else if(which == "scissors") {
        playedP.textContent = "Vous avez joué : ciseaux";
        let computer = computerPlay();
        if(computer == "rock") {
            res.textContent = "Vous avez perdu !";
            def++;
            if(def == 1) {
                defeat.textContent = def + " défaite";
            } else {
                defeat.textContent = def + " défaites";
            }
        } else if(computer == "paper") {
            res.textContent = "Vous avez gagné !";
            vic++;
            if(vic == 1) {
                victory.textContent = vic + " victoire";
            } else {
                victory.textContent = vic + " victoires";
            }
        } else if(computer == "scissors") {
            res.textContent = "Égalité !";
            tieCount++;
            if(tieCount == 1) {
                tie.textContent = tieCount + " égalité";
            } else {
                tie.textContent = tieCount + " égalités";
            }
        }
    }
}

function resetScore() {
    playedP.textContent = "";
    playedC.textContent = "";
    res.textContent = "";

    vic = 0; def = 0; tieCount = 0;

    victory.textContent = vic + " victoire";
    defeat.textContent = def + " défaite";
    tie.textContent = tieCount + " égalité";
}

function computerPlay() {
    choice = Math.floor(Math.random() * 3);
    if(choice == 0) {
        playedC.textContent = "L'ordinateur a joué : pierre";
        return "rock";
    } else if(choice == 1) {
        playedC.textContent = "L'ordinateur a joué : papier";
        return "paper";
    } else if(choice == 2) {
        playedC.textContent = "L'ordinateur a joué : ciseaux";
        return "scissors";
    }
}
