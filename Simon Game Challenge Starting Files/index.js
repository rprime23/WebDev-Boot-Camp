var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(
    function () { 
        if (!started) {
            started = true;
            nextSequence();
        } 
    }
);

$(".btn").click(function (event) {if (started) {clickHandler(this.id)}});

function clickHandler (id)
{
    var userChosenColor = id;
    userClickedPattern.push(userChosenColor);
    playSound("./sounds/" + userChosenColor + ".mp3");
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
}

function nextSequence() {

    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

    var colorNum = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[colorNum];

    gamePattern.push(randomChosenColour);

    var element = $("#" + randomChosenColour);
    console.log(randomChosenColour + " " + element.text);
    element.fadeOut(100).fadeIn(100);
    playSound("./sounds/" + randomChosenColour + ".mp3");
}

function playSound (name)
{
    var audio = new Audio(name);
    audio.play();
}

function animatePress(currentColor)
{
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {$("#" + currentColor).removeClass("pressed");}, 100);
}

function checkAnswer (currentLevel)
{
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) 
    {
        if (userClickedPattern.length == gamePattern.length)
        {
            setTimeout(nextSequence, 1000);
        }
    }
    else 
    {
        playSound("./sounds/wrong.mp3");
        $("body").addClass("game-over");
        setTimeout(function () {$("body").removeClass("game-over");}, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }
}

function startOver ()
{
    started = false;
    level = 0;
    gamePattern = [];
}