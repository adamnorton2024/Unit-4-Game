$(document).ready(function (){

    // Array of all of my character objects
    var charArray = [{ name: "chewbacca", hp: 200, ap: 100, cap: 100, imgPath: './assets/images/h_chewbacca.png', val: "chewbacca" }, { name: "leia", hp: 90, ap: 100, cap: 100, imgPath: './assets/images/h_leia.png', val: "leia" }, { name: "luke", hp: 120, ap: 100, cap: 100, imgPath: './assets/images/h_luke.png', val: "luke" }, { name: "obi-wan", hp: 90, ap: 100, cap: 100, imgPath: './assets/images/h_obiwan.png', val: "obi-wan" }, { name: "wicket", hp: 80, ap: 100, cap: 100, imgPath: './assets/images/h_wicket.png', val: "wicket" }, { name: "yoda", hp: 100, ap: 100, cap: 100, imgPath: './assets/images/h_yoda.png', val: "yoda" }, { name: "4-lom", hp: 105, ap: 100, cap: 100, imgPath: './assets/images/e_4_lom.png', val: "4-lom" }, { name: "boba-fett", hp: 115, ap: 100, cap: 100, imgPath: './assets/images/e_boba_fett.png', val: "boba-fett" }, { name: "darth-vader", hp: 200, ap: 100, cap: 100, imgPath: './assets/images/e_darth_vader.png', val: "darth-vader" }, { name: "emperor", hp: 180, ap: 100, cap: 100, imgPath: './assets/images/e_emperor.png', val: "emperor" }, { name: "ig-88", hp: 100, ap: 100, cap: 100, imgPath: './assets/images/e_ig_88.png', val: "ig-88" }, { name: "jabba", hp: 250, ap: 100, cap: 100, imgPath: './assets/images/e_jabba.png', val: "jabba" }, { name: "greedo", hp: 85, ap: 100, cap: 100, imgPath: './assets/images/e_greedo.png', val: "greedo" }, { name: "tuskan-raider", hp: 100, ap: 100, cap: 100, imgPath: './assets/images/e_tuskan_raider.png', val: "tuskan-raider" }, { name: "storm-trooper", hp: 100, ap: 100, cap: 100, imgPath: './assets/images/e_storm_trooper.png', val: "storm-trooper" }];

    var fighters = [];
    var nonPlayers = [];

    var player = null;
    var playerAP = 0;
    var playerHP = 0;
    var playerBaseAP = 0;
    var playerIndex = null;

    var enemy = null;
    var enemyAP = 0;
    var enemyHP = 0;
    var enemyCAP = 0;
    var enemyIndex = null;

    var defeated = [];

    var defeated1 = null;
    var defeated2 = null;
    var defeated3 = null;

    // Four character options are chosen at random to be used in the game.  There are 15 characters for much variety. 
    for (var i = 0; i < 4; i++) {
        var randomNumber = Math.floor(Math.random() * charArray.length);
        fighters.push(charArray[randomNumber]);
        $('#hp-' + fighters[i].name).text(fighters[i].hp);
        charArray.splice(randomNumber, 1);
    };

    // the characters not chosen are hidden away
    for (let i = 0; i < charArray.length; i++) {
        nonPlayers.push(charArray[i]);
        var hide = charArray[i].name;
        $('#' + charArray[i].name).detach();        
    };

    // click a card to choose your player, and it assigns needed player variables. 
    $(".card-fighter").on("click", function () {

        if(player === null){
            
            player = $(this).attr('id');
            $("#area-player").prepend($(this));
            console.log("Player is: " + player);
            for (let i = 0; i < fighters.length; i++) {
                if(fighters[i].name === player){
                    playerIndex = i;
                    playerHP = fighters[playerIndex].hp;
                    playerAP = fighters[playerIndex].ap;
                    playerBaseAP = playerAP;
                    break;
                };
            }; 
            // the non-player characters are moved to enemies area.
            $("#area-opponents").append($(".card-deck"));
            // now choose your enemy
        } else if ($(this) !== player && enemy === null) {
            // needed enemy variables are assigned
            enemy = $(this).attr('id');
            console.log("Enemy is: " + "'" + enemy + "'");
            if(defeated.indexOf(enemy) === -1){
                console.log("Enemy is: " + enemy);
                $("#area-enemy").append($(this));
                for (let i = 0; i < fighters.length; i++) {
                    if (fighters[i].name === enemy) {
                        enemyIndex = i;
                        enemyHP = fighters[enemyIndex].hp;
                        enemyAP = fighters[enemyIndex].ap;
                        enemyCAP = fighters[enemyIndex].cap;
                        break;
                    };
                };
            } else {
                console.log("Enemy is defeated.  Choose another.");
                enemy = null;
            }
        } else {
            console.log("Nothing Happens ");            
        }
    });

    //attack button
    $("#btn-attack").on("click", function () {

        // update stats based on attacking
        enemyHP = enemyHP - playerAP;
        playerHP = playerHP - enemyCAP;
        playerAP = playerAP + playerBaseAP;
        $('#hp-' + fighters[playerIndex].name).text(playerHP);
        $('#hp-' + fighters[enemyIndex].name).text(enemyHP);

        if(enemyHP <= 0){
            console.log("Enemy Loses!");
            //when defeated move back to enemies area, label as "DEFEATED, and cannot be selected again."
            $('.card-deck').append($('#' + enemy));
            $('#' + enemy).find($("#name-" + enemy).text("DEFEATED"));
            $('#' + enemy).find($("#name-" + enemy).css("color", "red"));
            defeated.push((enemy));
            enemy = null;
        };

        if(playerHP <= 0){
            console.log("Player Loses!");
        };
    });

});



