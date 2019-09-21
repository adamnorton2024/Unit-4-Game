$(document).ready(function (){

    var charArray = ["chewbacca", "leia", "luke", "obiwan", "wicket", "yoda", "4-lom", "boba fett", "darth vader", "emperor", "ig-88", "jabba", "nikto", "storm tropper", "tuskan raider", "greedo"];

    var fighters = [];

    function chooseFighters(){
        for(var i = 0; i < 4; i++){
            var randomNumber = Math.floor(Math.random()* charArray.length);
            fighters.push(charArray[randomNumber]);
            console.log(charArray[randomNumber]);
            charArray.splice(randomNumber, 1);
            console.log(fighters);
        };
    };

    chooseFighters();











});



