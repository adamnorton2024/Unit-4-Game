$(document).ready(function (){

    var charArray = [{ name: "chewbacca", hp: 200, ap: 100, cap: 100, imgPath: './assets/images/h_chewbacca.png', val: "chewbacca" }, { name: "leia", hp: 90, ap: 100, cap: 100, imgPath: './assets/images/h_leia.png', val: "leia" }, { name: "luke", hp: 120, ap: 100, cap: 100, imgPath: './assets/images/h_luke.png', val: "luke" }, { name: "obi-wan", hp: 90, ap: 100, cap: 100, imgPath: './assets/images/h_obiwan.png', val: "obi-wan" }, { name: "wicket", hp: 80, ap: 100, cap: 100, imgPath: './assets/images/h_wicket.png', val: "wicket" }, { name: "yoda", hp: 100, ap: 100, cap: 100, imgPath: './assets/images/h_yoda.png', val: "yoda" }, { name: "4-lom", hp: 105, ap: 100, cap: 100, imgPath: './assets/images/e_4_lom.png', val: "4-lom" }, { name: "boba-fett", hp: 115, ap: 100, cap: 100, imgPath: './assets/images/e_boba_fett.png', val: "boba-fett" }, { name: "darth-vader", hp: 200, ap: 100, cap: 100, imgPath: './assets/images/e_darth_vader.png', val: "darth-vader" }, { name: "emperor", hp: 180, ap: 100, cap: 100, imgPath: './assets/images/e_emperor.png', val: "emperor" }, { name: "ig-88", hp: 100, ap: 100, cap: 100, imgPath: './assets/images/e_ig_88.png', val: "ig-88" }, { name: "jabba", hp: 250, ap: 100, cap: 100, imgPath: './assets/images/e_jabba.png', val: "jabba" }, { name: "greedo", hp: 85, ap: 100, cap: 100, imgPath: './assets/images/e_greedo.png', val: "greedo" }, { name: "tuskan-raider", hp: 100, ap: 100, cap: 100, imgPath: './assets/images/e_tuskan_raider.png', val: "tuskan-raider" }, { name: "storm-trooper", hp: 100, ap: 100, cap: 100, imgPath: './assets/images/e_storm_trooper.png', val: "storm-trooper" }];

    var fighters = [];
    var nonPlayers = [];

    var player = null;
    var enemy = null;

    var defeated = [];

    var defeated1 = null;
    var defeated2 = null;
    var defeated3 = null;

    for (var i = 0; i < 4; i++) {
        var randomNumber = Math.floor(Math.random() * charArray.length);
        fighters.push(charArray[randomNumber]);
        $('#hp-' + fighters[i].name).text(fighters[i].hp);
        charArray.splice(randomNumber, 1);
        
        console.log(fighters);
    };

    for (let i = 0; i < charArray.length; i++) {
        nonPlayers.push(charArray[i]);
        var hide = charArray[i].name;
        console.log(hide);
        $('#' + charArray[i].name).detach();        
    };

    $(".card-fighter").on("click", function () {

        if(player === null){
            player = $(this).attr('id');
            //$(this).attr('id', "player");
            $("#area-player").prepend($(this));
            console.log("Player is: " + player);
            $("#area-opponents").append($(".card-deck"));
        } else if ($(this) !== player && enemy === null) {
            enemy = $(this).attr('id');
            console.log("Enemy is: " + "'" + enemy + "'");
            if(defeated.indexOf(enemy) === -1){
                console.log("Enemy is: " + enemy);
                console.log(typeof enemy);
                $("#area-enemy").append($(this));
            } else {
                console.log("Enemy is defeated.  Choose another.");
                enemy = null;
            }
        } else {
            console.log("Nothing Happens ");            
        }
    });

    $("#btn-attack").on("click", function () {

        console.log("Attack!");
        $('.card-deck').append($('#' + enemy));
        $('#' + enemy).find($("#name-" + enemy).text("DEFEATED") );
        defeated.push((enemy));
        enemy = null;
        console.log(defeated);
    });



    // for (var i = 0; i < 4; i++) {
    //     var randomNumber = Math.floor(Math.random() * charArray.length);
    //     fighters.push(charArray[randomNumber]);
    //     //console.log(charArray[randomNumber]);
    //     charArray.splice(randomNumber, 1);
    //     //console.log(fighters);
    //     $('#' + fighterIDs[i].name).text(fighters[i].name);
    //     $('#' + fighterIDs[i].src).attr("src", fighters[i].imgPath);
    //     $('#' + fighterIDs[i].hp).text(fighters[i].hp);
    // };

    // $(".card-fighter").on("click", function () {

    //     if(player === null){
    //         player = $(this);
    //         $(this).attr('id', "player");
    //         $("#area-player").append($(this));
    //         console.log("Player is: " + player);
    //         $("#area-opponents").append($(".card-deck"));
    //     } else if ($(this) !== player && enemy === null) {
    //         enemy = $(this);
    //         $(this).attr('id', "enemy");
    //         console.log($(this).find("id"));
    //         $(this).find($(".card-title").text("DEAD"));
    //         //console.log("Enemy is: " + enemy);
    //         $("#area-enemy").append($(this));
    //     } else {
    //         //console.log("Nothing Happens ");            
    //     }
    // });

    // $("#btn-attack").on("click", function () {

    //     console.log("Attack!");
    //     $('.card-deck').append($("#enemy"));
    //     $('#enemy').find($(".card-title").text("DEAD") );
    //     enemy = null;
    // });





    
    // function myGeeks() {
    //     $("#parent").append($("#child"));
    // }

    
// If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
        // if (isOperatorChosen) {
        //     secondNumber += $(this).val();
        //     $("#second-number").text(secondNumber);

        // }
        // else {
        //     firstNumber += $(this).val();
        //     $("#first-number").text(firstNumber);
        // }














});



