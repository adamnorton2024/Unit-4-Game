$(document).ready(function (){

    // Array of all of my character objects
    var charArray = [{ name: "Chewbacca", hp: 170, ap: 15, cap: 26, imgPath: './assets/images/h_chewbacca.png', id: "chewbacca" }, { name: "Leia", hp: 98, ap: 20, cap: 18, imgPath: './assets/images/h_leia.png', id: "leia" }, { name: "Luke", hp: 120, ap: 17, cap: 25, imgPath: './assets/images/h_luke.png', id: "luke" }, { name: "Obi-Wan", hp: 90, ap: 16, cap: 23, imgPath: './assets/images/h_obiwan.png', id: "obi-wan" }, { name: "Wicket", hp: 110, ap: 15, cap: 18, imgPath: './assets/images/h_wicket.png', id: "wicket" }, { name: "Yoda", hp: 90, ap: 24, cap: 30, imgPath: './assets/images/h_yoda.png', id: "yoda" }, { name: "4-Lom", hp: 100, ap: 18, cap: 18, imgPath: './assets/images/e_4_lom.png', id: "4-lom" }, { name: "Boba-Fett", hp: 115, ap: 19, cap: 22, imgPath: './assets/images/e_boba_fett.png', id: "boba-fett" }, { name: "Darth Vader", hp: 125, ap: 18, cap: 30, imgPath: './assets/images/e_darth_vader.png', id: "darth-vader" }, { name: "Emperor", hp: 130, ap: 16, cap: 20, imgPath: './assets/images/e_emperor.png', id: "emperor" }, { name: "IG-88", hp: 100, ap: 18, cap: 16, imgPath: './assets/images/e_ig_88.png', id: "ig-88" }, { name: "Jabba", hp: 150, ap: 12, cap: 15, imgPath: './assets/images/e_jabba.png', id: "jabba" }, { name: "Greedo", hp: 85, ap: 17, cap: 14, imgPath: './assets/images/e_greedo.png', id: "greedo" }, { name: "Tuskan Raider", hp: 90, ap: 18, cap: 18, imgPath: './assets/images/e_tuskan_raider.png', id: "tuskan-raider" }, { name: "Storm Trooper", hp: 90, ap: 15, cap: 18, imgPath: './assets/images/e_storm_trooper.png', id: "storm-trooper" }];

    var fighters = [];
    var nonPlayers = [];

    var player = null;
    var playerName = null;
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
        $('#hp-' + fighters[i].id).text(fighters[i].hp); 
        charArray.splice(randomNumber, 1);
    };

    // the characters not chosen are hidden away
    for (let i = 0; i < charArray.length; i++) {
        nonPlayers.push(charArray[i]);
        //var hide = charArray[i].name;
        $('#' + charArray[i].id).detach();        
    };

    // click a card to choose your player, and it assigns needed player variables. 
    $(".card-fighter").on("click", function () {

        if(player === null){
            
            player = $(this).attr('id');
            $("#area-player").prepend($(this));

            for (let i = 0; i < fighters.length; i++) {
                if(fighters[i].id === player){         
                    playerIndex = i;
                    playerName = fighters[playerIndex].name;
                    playerHP = fighters[playerIndex].hp;
                    playerAP = fighters[playerIndex].ap;
                    playerBaseAP = playerAP;
                    break;
                };

            }; 
            // the non-player characters are moved to enemies area.
            $("#area-opponents").append($(".card-deck"));
            $('#player-character-text').text('Player');
            $('#enemy-character-text').text('Choose Your Enemy');
            // now choose your enemy
        } else if ($(this) !== player && enemy === null) {
            // needed enemy variables are assigned
            enemy = $(this).attr('id');
            if(defeated.indexOf(enemy) === -1){
                $("#area-enemy").append($(this));
                for (let i = 0; i < fighters.length; i++) {
                    if (fighters[i].id === enemy) {    
                        enemyIndex = i;
                        enemyName = fighters[enemyIndex].name;
                        enemyHP = fighters[enemyIndex].hp;
                        enemyAP = fighters[enemyIndex].ap;
                        enemyCAP = fighters[enemyIndex].cap;
                        break;
                    };
                };
            $('#btn-attack').css("visibility", "visible");
            $('#enemy-character-text').text('Enemy Character');
            } else {
                enemy = null;
            }
        } ;
    });




    //attack button
    $("#btn-attack").on("click", function () {

        // update stats based on attacking
        enemyHP = enemyHP - playerAP;
        $('#text-player-stats').text(`${playerName} hits ${enemyName} for ${playerAP} damage.`);

        if (enemyHP <= 0 && playerHP > 0) {
            $('#hp-' + fighters[enemyIndex].id).text("0");
            //when defeated move back to enemies area, label as "DEFEATED, and cannot be selected again."
            $('.card-deck').append($('#' + enemy));
            $('#' + enemy).find($("#name-" + enemy).text("DEFEATED"));
            $('#' + enemy).find($("#name-" + enemy).css("color", "red"));
            defeated.push((enemy));
            enemy = null;
            if(defeated.length < 3){
                $('#btn-attack').css("visibility", "hidden");
                $('#enemy-character-text').text('Choose Your Enemy');
            } else {
                $('#btn-attack').css("visibility", "hidden");
                $('#enemy-character-text').text('You Win!');
                $('#btn-reset').css("visibility", "visible");
            }
            
        };
        
        if (enemyHP > 0 && playerHP > 0) {
            playerHP = playerHP - enemyCAP;
            playerAP = playerAP + playerBaseAP;
            $('#hp-' + fighters[enemyIndex].id).text(enemyHP);  
            $('#hp-' + fighters[playerIndex].id).text(playerHP); 
            $('#text-enemy-stats').text(`${enemyName} hits ${playerName} for ${enemyCAP} damage.`);
            if(playerHP <= 0) {
                $('#enemy-character-text').text('You Lose!');
                $('#hp-' + fighters[playerIndex].id).text("0");
                //when defeated move back to enemies area, label as "DEFEATED, and cannot be selected again."
                $('#' + player).find($("#name-" + player).text("DEFEATED"));
                $('#' + player).find($("#name-" + player).css("color", "red"));
                $('#btn-attack').css("visibility", "hidden");
                $('#btn-reset').css("visibility", "visible");
            };
        } else if (playerHP <= 0 ) {
            $('#enemy-character-text').text('You Lose!');
            $('#btn-reset').css("visibility", "visible");
        };
    });

    //reset button
    $("#btn-reset").on("click", function () {
        location.reload();
    });

});



