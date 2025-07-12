runGame();

document.querySelector("body").onclick = runGame;

function runGame ()
{
    var randomNumber1 = diceRandom();
    var randomNumber2 = diceRandom();

    changeDie(randomNumber1, ".img1");
    changeDie(randomNumber2, ".img2");

    if (randomNumber1 > randomNumber2)
    {
        document.querySelector(".container h1").textContent = "Player 1 Wins";
    }
    else if (randomNumber1 < randomNumber2)
    {
        document.querySelector(".container h1").textContent = "Player 2 Wins";
    }
    else if (randomNumber1 === randomNumber2)
    {
        document.querySelector(".container h1").textContent = "Draw";
    }
}

function diceRandom ()
{
    return Math.floor((Math.random() * 6) + 1);
}

function changeDie (randomNumber, imgName)
{
    document.querySelector(imgName).src = "./images/dice" + randomNumber + ".png";
}