$(document).ready(function (){

    var charArray = [{ name: "chewbacca", hp: 200, ap: 100, cap: 100, imgPath: './assets/images/h_chewbacca.png' }, { name: "leia", hp: 90, ap: 100, cap: 100, imgPath: './assets/images/h_leia.png' }, { name: "luke", hp: 120, ap: 100, cap: 100, imgPath: './assets/images/h_luke.png' }, { name: "Obi-Wan", hp: 90, ap: 100, cap: 100, imgPath: './assets/images/h_obiwan.png' }, { name: "wicket", hp: 80, ap: 100, cap: 100, imgPath: './assets/images/h_wicket.png' }, { name: "yoda", hp: 100, ap: 100, cap: 100, imgPath: './assets/images/h_yoda.png' }, { name: "4-Lom", hp: 105, ap: 100, cap: 100, imgPath: './assets/images/e_4_lom.png' }, { name: "boba fett", hp: 115, ap: 100, cap: 100, imgPath: './assets/images/e_boba_fett.png' }, { name: "darth vader", hp: 200, ap: 100, cap: 100, imgPath: './assets/images/e_darth_vader.png' }, { name: "emperor", hp: 180, ap: 100, cap: 100, imgPath: './assets/images/e_emperor.png' }, { name: "IG-88", hp: 100, ap: 100, cap: 100, imgPath: './assets/images/e_ig_88.png' }, { name: "jabba", hp: 250, ap: 100, cap: 100, imgPath: './assets/images/e_jabba.png' }, { name: "greedo", hp: 85, ap: 100, cap: 100, imgPath: './assets/images/e_greedo.png' }];

    var fighterIDs = [{ name: "name-fighter1", src: "img-fighter1", hp: "hp-fighter1" }, { name: "name-fighter2", src: "img-fighter2", hp: "hp-fighter2" }, { name: "name-fighter3", src: "img-fighter3", hp: "hp-fighter3" }, { name: "name-fighter4", src: "img-fighter4", hp: "hp-fighter4" }];

    var fighterNameIDs = ["name-fighter1", "name-fighter2", "name-fighter3", "name-fighter4"];

    var fighters = [];

    for (var i = 0; i < 4; i++) {
        var randomNumber = Math.floor(Math.random() * charArray.length);
        fighters.push(charArray[randomNumber]);
        console.log(charArray[randomNumber]);
        charArray.splice(randomNumber, 1);
        //console.log(fighters);
        $('#' + fighterIDs[i].name).text(fighters[i].name);
        $('#' + fighterIDs[i].src).attr("src", fighters[i].imgPath);
        $('#' + fighterIDs[i].hp).text(fighters[i].hp);
        

    };

    















});



