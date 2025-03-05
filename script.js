var fiftyWords = ["WORLD","CANDY","BRICK","FLAME","STORM","LIGHT","FLINT","VAPOR","SQUAD","BAKER","GHOST","PIANO","JUMPY","ZEBRA","CROWN","FROST","MIRTH","KNELT","VIPER","DWARF","GAMER","TRUNK","SLOPE","BISON","MERIT","CAPER","SHEAR","BLUNT","FABLE","FLINT","BRINK","CRISP","WALTZ","YACHT","PORCH","ZESTY","PUNCH","VOCAL","SHINY","LODGE","NIFTY","QUERY","MOLAR","TIGER","CIDER","GROVE","SPOKE","MACHO","JOKES","BLAZE"];
var fiftyHints = ["A vast expanse", "A temptation for some", "Stacked and sturdy", "Born from heat", "A force of nature", "Chases away darkness", "Strikes in a spark", "Seen but never held", "Strength in numbers", "Rises early", "Lingers unseen", "Black and white harmony", "Can't sit still", "Patterned traveler", "Sits atop power", "Cold to the touch", "Laughter's cousin", "Bowed in silence", "Fangs and fear", "Small but mighty", "Plays for the win", "Hides treasures within", "Not quite level", "Roams the plains", "Earned, not given", "A mischievous move", "Cuts close", "Lacks a point", "A tale with a lesson", "Hard and sharp", "A dangerous edge", "Breaks with ease", "A dance of precision", "A floating escape", "A resting place, but not inside", "Full of zest", "A sudden impact", "Heard, not seen", "Gleams in the light", "A home away from home", "Slick and clever", "A search begins", "A strong foundation", "A hunter in stripes", "Pressed from fruit", "Where the trees gather", "A message from the past", "Bold and unyielding", "Found in laughter", "Consumes all around it"];
var arrayNumber = Math.trunc(Math.random() * 50);
var randomWord = fiftyWords[arrayNumber];
var randomHint = fiftyHints[arrayNumber];
var life = 5;
var imageNumber = 0;
var inputField;

function loseChecker() {
    if (life === 0) {
        document.getElementsByTagName('button').disabled = true;
        document.getElementById('inputField').style.opacity = 0.5;
        document.getElementById('loss').style.display = "block";
        document.getElementById('wordDisplay').innerHTML = "The word was " + randomWord + ".";
        document.getElementById('audioIfLose').play();
    }
}

function imageUpdate() {
    life--;

    imageNumber++;

    document.getElementById("l-" + imageNumber).style.display = "block";
    document.getElementById("heart" + imageNumber).remove();
}

function checker(valueInputted, idOfLetterInputted) {
    inputOfUser = valueInputted;
    let element = document.getElementById(idOfLetterInputted);

    if (inputOfUser === randomWord[0] || inputOfUser === randomWord[1] || inputOfUser === randomWord[2] || inputOfUser === randomWord[3] || inputOfUser === randomWord[4]) {
        element.style.backgroundColor = "green";

        document.getElementById('letter' + (randomWord.indexOf(inputOfUser) + 1)).innerHTML = inputOfUser;

        document.getElementById("l" + inputOfUser).disabled = true;

        if ((document.getElementById("letter1").innerHTML + document.getElementById("letter2").innerHTML + document.getElementById("letter3").innerHTML + document.getElementById("letter4").innerHTML + document.getElementById("letter5").innerHTML) == randomWord) {
            document.getElementById('audioIfWin').play();
            document.getElementById('celebration').style.display = "block";
            document.getElementsByTagName('button').disabled = true;
        }
    }

    else {
        document.getElementById("l" + inputOfUser).disabled = true;

        element.style.backgroundColor = "red";

        imageUpdate();
    }

    loseChecker();
}