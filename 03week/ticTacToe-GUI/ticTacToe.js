"use strict";

var gameMarker = "x";
var tieChecker = 0;
const winCombinations =[
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6]
];
var xTracker = [];
var oTracker = [];
const messageBox = document.querySelector("#message_box");
var cellArray = document.getElementsByClassName("cell");


// automatically change players marker

function changeGameMarker() {
    if (gameMarker == "x") {
        gameMarker = "o";
    } else {
        gameMarker = "x";
    }
}

//things to happen on clicks

function placeMark(id) {
    var place = document.getElementById(id);
    if (place.innerHTML == "") {
        place.innerHTML = gameMarker;
        //  Add value to move tracker to compare against winning combo
        function trackerFunction() {
            if(gameMarker == "x") {
                xTracker.push(parseInt(place.dataset.val));
                xTracker.sort();
            } else if (gameMarker == "o") {
                oTracker.push(parseInt(place.dataset.val));
                oTracker.sort();
            }
        }
        trackerFunction();
        tieChecker += 1;
        messageAddFunction();
        changeGameMarker();
    } else {
        alert("Space is already taken");
    }
}

// adds message to show who won or tie

function messageAddFunction() {
    if (winChecker(xTracker) == true) {
        messageBox.innerHTML = "X Wins!"
        disableClicks();
    } else if (winChecker(oTracker) == true) {
        messageBox.innerHTML = "O Wins!"
        disableClicks();
    } else if (tiedGame() == true) {
        messageBox.innerHTML = "Tie!";
        disableClicks();
    }
}

// results in tie game

function tiedGame() {
    if(tieChecker == 9) {
        return true;
    }
}

// winning combo check

function winChecker(arr) {
    for (let i = 0; i < winCombinations.length; i++) {
        if (arr.indexOf(winCombinations[i][0]) >= 0) {
            if (arr.indexOf(winCombinations[i][1]) >= 0) {
                if (arr.indexOf(winCombinations[i][2]) >= 0) {
                    return true;
                }
            }
        }
    }
}

function clearBoard() {
    for(let i = 0; i < cellArray.length; i++) {
        cellArray[i].innerHTML = "";
    }
    tieChecker = 0;
    xTracker = [];
    oTracker = [];
    gameMarker = "x";
    messageBox.innerHTML = "";
    enableClicks();
}

// disable click for other cells when game is won

function disableClicks() {
    for (let i = 0; i < cellArray.length; i++) {
        cellArray[i].removeAttribute("onclick");
        }
}

// reenable cells when reset is clicked

function enableClicks() {
    for (let i = 0; i< cellArray.length; i++) {
        cellArray[i].setAttribute("onclick", "placeMark(this.id)");
    }
}