
document.getElementById('clickButton2').style.visibility = 'hidden';
document.getElementById('clickButton3').style.visibility = 'hidden';
document.getElementById('clickButton4').style.visibility = 'hidden';
document.getElementById('chatbox').innerHTML ='The game works as followed: Just start the game, and choose the options you think are best. Also press f11 for a fullscreen experience.'

var loot = false;
var name = ''

window.onkeypress = function() {
    if (event.keyCode == 13)
        return false
}

function gameStarting() {
    document.getElementById('startGame').style.display = 'none';
    document.getElementById('chatbox').innerHTML = 'All that’s left to do now is to put your name in the box above, then click on the button and you will be ready to go. Best of luck!';
    document.getElementById('clickButton').setAttribute('startGame','createName();');
    document.getElementById('game-starting').style.display = 'block';
    document.getElementById('temporary-button').setAttribute('onclick','startGame();');
}

function startGame() {
    document.getElementById('clickButton').innerHTML = 'Next';
    name = document.getElementById('nameInput').value;
    document.getElementById('game-starting').style.display = 'none';
    document.getElementById('clickButton').style.visibility = 'visible';
	document.getElementById('startGame').style.display = 'none';
    document.getElementById('image-box').style.backgroundImage = 'url(ElfForest.jpg)';
	document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('chatbox').innerHTML = 'You wake up, the first thing you ask yourself is “Where am I, and how did I get here?” You look around you, the only thing you can see are mostly trees. Next to trees you also see a path that probably leads to the direction of civilisation. You’d decide to follow the path for a bit.';
    document.getElementById('clickButton').style.visibility = 'visible';
    document.getElementById('clickButton').setAttribute('onclick','gameStarted();');
}

function gameStarted() {
    document.getElementById('image-box').style.backgroundImage = 'url(ElfCastle1.jpg)';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('chatbox').innerHTML = 'You follow the path for a little while, suddenly at your right side you see a castle. “Look\'s like I\'m heading the right way” You\'d say to yourself. Walking a little further you find a corpse with all kinds of loot, what do you do?';
    document.getElementById('clickButton').setAttribute('onclick','nextpage1();');
}

function nextpage1() {
    document.getElementById('chatbox').innerHTML = 'Option 1 = Pick up the loot from the corpse, and wear it for yourself. <br> Option 2 = Leave the poor corpse alone.';
    document.getElementById('clickButton').setAttribute('onclick','pickitup();');
    document.getElementById('clickButton2').setAttribute('onclick','donotpickitup();');
    document.getElementById('clickButton').innerHTML = 'Option 1';
    document.getElementById('clickButton2').innerHTML = 'Option 2';
    document.getElementById('clickButton2').style.visibility = 'visible';

}

function pickitup() {
    document.getElementById('clickButton2').style.visibility = 'hidden';
    loot = true;
    document.getElementById('chatbox').innerHTML = 'You\'d decide to pick up the loot from the the corpse';
    document.getElementById('clickButton').innerHTML = 'Next';
    document.getElementById('clickButton').setAttribute('onclick','nextpage2();');

}

function donotpickitup() {
    document.getElementById('clickButton2').style.visibility = 'hidden';
    loot = false;
    document.getElementById('chatbox').innerHTML = 'You\'d decide to leave the poor corpse alone.';
    document.getElementById('clickButton').innerHTML = 'Next';
    document.getElementById('clickButton').setAttribute('onclick','nextpage2();');

}

function nextpage2() {
    document.getElementById('chatbox').innerHTML = 'Continuing your journey you are stopped by a voice.';
    document.getElementById('image-box').style.backgroundImage = 'url(ForestPath4.jpg)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage3();');
}

function nextpage3() {
    document.getElementById('chatbox').innerHTML = '???: “Stop right there!” You see a man standing in the shadows, barely visible.';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizardAno.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage4();');
}

function nextpage4() {
    document.getElementById('chatbox').innerHTML = name +': “Who’s there?”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage5();');
}

function nextpage5() {
    document.getElementById('chatbox').innerHTML = '???: “Who asks!?”';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizardAno.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage6();');
}

function nextpage6() {
    document.getElementById('chatbox').innerHTML = name +': “Uhmm.. just a traveler really, nothing more. I promise you that.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage7();');
}

function nextpage7() {
    document.getElementById('chatbox').innerHTML = '???: “Alright then, but don’t try anything silly!”';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizardAno.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage8();');
}

function nextpage8() {
    document.getElementById('chatbox').innerHTML = 'The wizard would reveal himself from behind the tree.';
    document.getElementById('character-box').style.backgroundImage = 'url()';
    document.getElementById('clickButton').setAttribute('onclick','nextpage9();');
}

function nextpage9() {
    document.getElementById('chatbox').innerHTML = name +': “So.. what are you doing out here master wizard?”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage10();');
}

function nextpage10() {
    document.getElementById('chatbox').innerHTML = '???: “You can call me Gideon”';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage11();');
}

function nextpage11() {
    document.getElementById('chatbox').innerHTML = 'Gideon: “I’m out here to travel back to the castle, but i’m not sure which way to go.”';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage12();');
}

function nextpage12() {
    document.getElementById('chatbox').innerHTML = name +': “Great, let’s travel together then. I’m trying to reach for the castle as well.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage13();');
}

function nextpage13() {
    document.getElementById('chatbox').innerHTML = 'Gideon: “Sure thing mate.”';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage14();');
}

function nextpage14() {
    document.getElementById('chatbox').innerHTML = 'Gideon has joined your party.';
    document.getElementById('character-box').style.backgroundImage = 'url()';
    document.getElementById('clickButton').setAttribute('onclick','nextpage15();');
}

function nextpage14() {
    document.getElementById('image-box').style.backgroundImage = 'url(ForestPath2.jpg)';
    document.getElementById('chatbox').innerHTML = 'You continue your travel along with Gideon, untill you reach a place filled with old ruins.';
    document.getElementById('character-box').style.backgroundImage = 'url()';
    document.getElementById('clickButton').setAttribute('onclick','nextpage15();');
}

function nextpage15() {
    document.getElementById('chatbox').innerHTML = name +': “Let’s take a break Gideon…”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage16();');
}

function nextpage16() {
    document.getElementById('chatbox').innerHTML = 'Gideon: “Sure thing.”';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage17();');
}

function nextpage17() {
    document.getElementById('chatbox').innerHTML = 'Suddenly a rock-like fist slams in the direction of you.';
    document.getElementById('character-box').style.backgroundImage = 'url(Golem.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage18();');
}

function nextpage18() {
    document.getElementById('chatbox').innerHTML = 'Gideon: “Watch out '+ name + '!”';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage19();');
}

function nextpage19() {
    if (!loot) {
        noloot();
        return
    }
    document.getElementById('chatbox').innerHTML = 'Decide quickly! <br> Option 1 = Roll away towards a safe direction. <br> Option 2 = Try blocking the attack with your shield.';
    document.getElementById('image-box').style.backgroundImage = 'url(ForestPath2.jpg)';
    document.getElementById('character-box').style.backgroundImage = 'url(Golem.png)';
    document.getElementById('clickButton').setAttribute('onclick','rollAway();');
    document.getElementById('clickButton').innerHTML = 'Option 1';
    document.getElementById('clickButton2').innerHTML = 'Option 2';
    document.getElementById('clickButton2').style.visibility = 'visible';
    document.getElementById('clickButton2').setAttribute('onclick','blockAttack();');
}

function noloot() {
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('chatbox').innerHTML = 'Since you didn’t have any weapons there was nothing to protect yourself with, or backup Gideon with. The golem would’ve killed Gideon first since it was attracted to his staff, right after that it ran to you and smashed you to bits.';
    document.getElementById('clickButton3').style.visibility = 'hidden';
    document.getElementById('clickButton2').style.visibility = 'hidden';
    document.getElementById('clickButton').style.visibility = 'visible';
    document.getElementById('clickButton').setAttribute('onclick','death2();');
}

function death2() {
    document.getElementById('image-box').style.backgroundImage = 'url(YouAreDead.jpg)';
    document.getElementById('character-box').style.backgroundImage = 'url(BloodAndGore.png)';
    document.getElementById('chatbox').innerHTML = 'You died.';
    document.getElementById('clickButton').innerHTML = 'Retry';
    document.getElementById('clickButton').setAttribute('onclick','startGame();');
}

function rollAway() {
    document.getElementById('chatbox').innerHTML = 'You would roll sideways, the Golem misses you by an inch.';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton2').style.visibility = 'hidden';
    document.getElementById('clickButton').innerHTML = 'Next';
    document.getElementById('clickButton').setAttribute('onclick','nextpage20();');
}

function blockAttack() {
    document.getElementById('chatbox').innerHTML = 'You would try to block the attack with your shield, but the force of the smash is greater than your blocking power. You get smashed underneath your shield, once the golem lifted it’s fist the only thing that remained of you is a puddle of blood and gore.';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton2').style.visibility = 'hidden';
    document.getElementById('clickButton').innerHTML = 'Next';
    document.getElementById('clickButton').setAttribute('onclick','death();');
}

function death() {
    document.getElementById('image-box').style.backgroundImage = 'url(YouAreDead.jpg)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage19();');
    document.getElementById('character-box').style.backgroundImage = 'url(BloodAndGore.png)';
    document.getElementById('chatbox').innerHTML = 'You died.';
    document.getElementById('clickButton').innerHTML = 'Retry';
}

function nextpage20() {
    document.getElementById('chatbox').innerHTML = 'Gideon: “Are you alright mate?”';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage21();');
}

function nextpage21() {
    document.getElementById('chatbox').innerHTML = name +': “I’m alive and well, atleast for now..”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage22();');
}

function nextpage22() {
    document.getElementById('chatbox').innerHTML = 'Gideon: “Looks like we got ourselves a bit of a situation.”';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage23();');
}

function nextpage23() {
    document.getElementById('chatbox').innerHTML = 'Gideon: “Can you distract the Golem so that I can charge up a spell?”';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage24();');
}

function nextpage24() {
    document.getElementById('chatbox').innerHTML = name +': “Yeah, not a problem.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage25();');
}

function nextpage25() {
    document.getElementById('chatbox').innerHTML = 'Option 1 = Wave your Sword and Shield. <br> Option 2 = Try shooting his head with your Bow and Arrows. <br> Option 3 = Try shouting some words at the Golem.';
    document.getElementById('character-box').style.backgroundImage = 'url(Golem.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage25();');
    document.getElementById('clickButton3').style.visibility = 'visible';
    document.getElementById('clickButton2').style.visibility = 'visible';
    document.getElementById('clickButton').innerHTML = 'Option 1';
    document.getElementById('clickButton3').innerHTML = 'Option 3';
    document.getElementById('clickButton').setAttribute('onclick','wave();');
    document.getElementById('clickButton2').setAttribute('onclick','shoot();');
    document.getElementById('clickButton3').setAttribute('onclick','shout();');
}

function wave() {
    document.getElementById('chatbox').innerHTML = 'You would wave your Sword and Shield but Gideon caught It’s attention by charging his spell. The Golem would slam his fist on Gideon in result Gideon being smashed into a puddle of gore. After that it ran after you and crushed you to bits.';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','death();');
    document.getElementById('clickButton').innerHTML = 'Next';
    document.getElementById('clickButton3').style.visibility = 'hidden';
    document.getElementById('clickButton2').style.visibility = 'hidden';
}

function shoot() {
    document.getElementById('chatbox').innerHTML = 'You’d grab your Bow and Arrows, You would charge a shot and release going straight at It’s head. Coincedentally you hit It’s eye, what seems to be a very vulnerable spot since you heard the Golem scream in pain.';
    document.getElementById('clickButton').setAttribute('onclick','nextpage26();');
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').innerHTML = 'Next';
    document.getElementById('clickButton3').style.visibility = 'hidden';
    document.getElementById('clickButton2').style.visibility = 'hidden';
}

function shout() {
    document.getElementById('chatbox').innerHTML = 'You would get the Golem’s attention for a second untill he turns his head toward Gideon. You shout: “Gideon watch out!” but it was too late. The golem flattened him with his feet into a puddle of gore. Right after that it came for you and finished you off.';
    document.getElementById('clickButton').setAttribute('onclick','death();');
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').innerHTML = 'Next';
    document.getElementById('clickButton3').style.visibility = 'hidden';
    document.getElementById('clickButton2').style.visibility = 'hidden';
}

function nextpage26() {
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('chatbox').innerHTML = 'Now that the Golem got your attention it would charge your way with rage.';
    document.getElementById('clickButton').setAttribute('onclick','nextpage27();');
    document.getElementById('clickButton').innerHTML = 'Next';
}

function nextpage27() {
    document.getElementById('character-box').style.backgroundImage = 'url(Golem.png)';
    document.getElementById('chatbox').innerHTML = 'Option 1 = Try your luck, and shoot It’s other eye. <br> Option 2 = Try to get some distance between you and the Golem by running away from it. <br> Option 3 = Try sidestepping out of It’s way.';
    document.getElementById('clickButton').setAttribute('onclick','nextpage27();');
    document.getElementById('clickButton').innerHTML = 'Option 1';
    document.getElementById('clickButton3').style.visibility = 'visible';
    document.getElementById('clickButton2').style.visibility = 'visible';
    document.getElementById('clickButton').setAttribute('onclick','luck();');
    document.getElementById('clickButton2').setAttribute('onclick','ditance();');
    document.getElementById('clickButton3').setAttribute('onclick','sidestep();');
}

function luck() {
    document.getElementById('chatbox').innerHTML = 'With skill but mainly alot of luck you manage to hit It’s other eye with your Bow and Arrows. It stopped charging towards you because It was blinded. Now all that’s left is Gideon finishing the job.';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').innerHTML = 'Next';
    document.getElementById('clickButton3').style.visibility = 'hidden';
    document.getElementById('clickButton2').style.visibility = 'hidden';
    document.getElementById('clickButton').setAttribute('onclick','nextpage28();');
}

function distance() {
    document.getElementById('chatbox').innerHTML = 'You’d try to outrun It by creating some distance between you and the Golem. But the Golem is alot faster than you, and crushes you beneath it’s feet into a puddle of blood and gore.';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').innerHTML = 'Next';
    document.getElementById('clickButton3').style.visibility = 'hidden';
    document.getElementById('clickButton2').style.visibility = 'hidden';
    document.getElementById('clickButton').setAttribute('onclick','death();');
}

function sidestep() {
    document.getElementById('chatbox').innerHTML = 'Mid-sidestep you get caught by the Golems foot, kicking you in the direction of a tree branch. The tree branch would impale you, you would slowly close your eyes, losing blood and never to be woken up ever again.';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').innerHTML = 'Next';
    document.getElementById('clickButton3').style.visibility = 'hidden';
    document.getElementById('clickButton2').style.visibility = 'hidden';
    document.getElementById('clickButton').setAttribute('onclick','death();');
}

function nextpage28() {
    document.getElementById('chatbox').innerHTML = name +': “Gideon are you able to finish it off now?!”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage29();');
}

function nextpage29() {
    document.getElementById('chatbox').innerHTML = 'Gideon: “Yes i’m ready, get away from the blastzone!”';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage30();');
}

function nextpage30() {
    document.getElementById('chatbox').innerHTML = 'You would run away while the Golem stood still with It’s hands covering It’s eyes. Gideon would fire a laser across the Golem’s torso.';
    document.getElementById('character-box').style.backgroundImage = 'url(Golem.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage31();');
}

function nextpage31() {
    document.getElementById('chatbox').innerHTML = 'The Golem’s torso would be cut straight into two halves, both halves fell on the ground and the glow in the Golem’s eyes stopped burning. There was no movement in the Golem anymore either, it seems like it finally died.';
    document.getElementById('character-box').style.backgroundImage = 'url(Golem.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage32();');
}

function nextpage32() {
    document.getElementById('chatbox').innerHTML = 'Gideon would look at the golem.';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage33();');
}

function nextpage33() {
    document.getElementById('chatbox').innerHTML = 'Gideon: “Looks pretty dead to me, how about you?”';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage34();');
}

function nextpage33() {
    document.getElementById('chatbox').innerHTML = name +': “Yeah It looks dead to me, looks like we can finally take our break now.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage34();');
}

function nextpage34() {
    document.getElementById('chatbox').innerHTML = 'Gideon: “Indeed.”';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage35();');
}

function nextpage35() {
    document.getElementById('chatbox').innerHTML = 'You and Gideon take a long break after the long and tiring fight.';
    document.getElementById('character-box').style.backgroundImage = 'url()';
    document.getElementById('clickButton').setAttribute('onclick','nextpage36();');
}

function nextpage36() {
    document.getElementById('chatbox').innerHTML = name +': “So where are you from Gideon?”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage37();');
}

function nextpage37() {
    document.getElementById('chatbox').innerHTML = 'Gideon: “I live far away from here, the place I live is called Avalon.';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage38();');
}

function nextpage38() {
    document.getElementById('chatbox').innerHTML = 'Gideon: “I decided to move out of the city, since the city along with It’s people is a mess.”';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage39();');
}

function nextpage39() {
    document.getElementById('chatbox').innerHTML = 'Gideon: “I travelled for a couple of days untill I couldn’t find the way to the castle. That’s where our paths crossed.”';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage40();');
}

function nextpage40() {
    document.getElementById('chatbox').innerHTML = name +': “I see, well i’m glad I met you, I would’ve probably died fighting that Golem on my own.';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage41();');
}

function nextpage41() {
    document.getElementById('chatbox').innerHTML = 'Gideon: “Most likely.” Gideon laughed.';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage42();');
}

function nextpage42() {
    document.getElementById('chatbox').innerHTML = 'Gideon: “Ready to continue travelling now?”';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage43();');
}

function nextpage43() {
    document.getElementById('chatbox').innerHTML = name +': “Yeah I’m ready, let’s go';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage44();');
}

function nextpage44() {
    document.getElementById('chatbox').innerHTML = 'The two of you continue your adventure.';
    document.getElementById('character-box').style.backgroundImage = 'url()';
    document.getElementById('clickButton').setAttribute('onclick','nextpage45();');
}

function nextpage45() {
    document.getElementById('chatbox').innerHTML = 'You both reach a village in the middle of a forest.';
    document.getElementById('character-box').style.backgroundImage = 'url()';
    document.getElementById('image-box').style.backgroundImage = 'url(ElfHouse.jpg)'
    document.getElementById('clickButton').setAttribute('onclick','nextpage46();');
}

// Everything above from this point works, so work below this point. --------------------




//---------------------------------------------------------------------------------------

function nextpage46() {
    document.getElementById('chatbox').innerHTML = 'You both reach a village in the middle of a forest.';
    document.getElementById('character-box').style.backgroundImage = 'url()';
    document.getElementById('clickButton').setAttribute('onclick','nextpage47();');
}

function nextpage47() {
    document.getElementById('chatbox').innerHTML = 'An elf walks towards you to greet you both.';
    document.getElementById('character-box').style.backgroundImage = 'url()';
    document.getElementById('clickButton').setAttribute('onclick','nextpage48();');
}

function nextpage48() {
    document.getElementById('chatbox').innerHTML = '???: “Greetings, I’m Elenor.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Elenor.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage49();');
}

function nextpage49() {
    document.getElementById('chatbox').innerHTML = name +': “Greetings Elenor, I’m '+ name +' and this is Gideon.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage50();');
}

function nextpage50() {
    document.getElementById('chatbox').innerHTML = 'Gideon would wave his hand.';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage51();');
}

function nextpage51() {
    document.getElementById('chatbox').innerHTML = 'Elenor: “So what do you seek at this place?”';
    document.getElementById('character-box').style.backgroundImage = 'url(Elenor.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage52();');
}

function nextpage52() {
    document.getElementById('chatbox').innerHTML = name +': “We’re really tired and looking for a place to sleep. We will continue our travel to the castle tomorrow.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage53();');
}

function nextpage53() {
    document.getElementById('chatbox').innerHTML = 'Elenor: “Ah I see, I can help you with that. Follow me.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Elenor.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage54();');
}

function nextpage54() {
    document.getElementById('chatbox').innerHTML = 'You and Gideon follow Elenor.';
    document.getElementById('character-box').style.backgroundImage = 'url()';
    document.getElementById('clickButton').setAttribute('onclick','nextpage55();');
}

function nextpage55() {
    document.getElementById('chatbox').innerHTML = 'The three of you enter a house.';
    document.getElementById('character-box').style.backgroundImage = 'url()';
    document.getElementById('clickButton').setAttribute('onclick','nextpage56();');
    document.getElementById('image-box').style.backgroundImage = 'url(ElfHome.jpg)';
    document.getElementById('passports').style.visibility = 'visible';
}

function nextpage56() {
    document.getElementById('chatbox').innerHTML = 'Elenor: “Here we are, It’s not much but… It’s something.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Elenor.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage57();');
}

function nextpage57() {
    document.getElementById('chatbox').innerHTML = name +': “This place will just do fine, Thanks.';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage58();');
}

function nextpage58() {
    document.getElementById('chatbox').innerHTML = 'Elenor: “If you need something you can call out for me.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Elenor.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage59();');
}

function nextpage59() {
    document.getElementById('chatbox').innerHTML = 'Elenor: “Oh, before I forget. I assume you both don’t have passports for the castle entrance, I happen to have a spare of them. Both of you could take one since you’ll really need them. They are located on the cupboard”';
    document.getElementById('character-box').style.backgroundImage = 'url(Elenor.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage60();');
}

function nextpage60() {
    document.getElementById('chatbox').innerHTML = 'Pick up the passports from the cupboard.';
    document.getElementById('character-box').style.backgroundImage = 'url()';
    document.getElementById('passports').setAttribute('onclick','passports();');
    document.getElementById('clickButton').style.visibility = 'hidden';
    document.getElementById('passports').style.cursor = 'pointer'
}

var passport = false;

function passports() {
    document.getElementById('chatbox').innerHTML = 'You picked up the passports.';
    passport =  true;
    document.getElementById('clickButton').style.visibility = 'visible';
    document.getElementById('passports').style.visibility = 'hidden';
    document.getElementById('clickButton').setAttribute('onclick','nextpage61();');
}

function nextpage61() {
    document.getElementById('chatbox').innerHTML = 'Elenor would leave the house as soon as you picked up the passports, not long after you both decide to go to sleep.';
    document.getElementById('character-box').style.backgroundImage = 'url()';
    document.getElementById('clickButton').setAttribute('onclick','nextpage62();');
}

function nextpage62() {
    document.getElementById('chatbox').innerHTML = 'The next morning after gearing up and packing your stuff you both exit the house.';
    document.getElementById('character-box').style.backgroundImage = 'url()';
    document.getElementById('clickButton').setAttribute('onclick','nextpage63();');
}

function nextpage63() {
    document.getElementById('chatbox').innerHTML = 'Leaving the house you see Elenor outside waiting for you both.';
    document.getElementById('character-box').style.backgroundImage = 'url(Elenor.png)';
    document.getElementById('image-box').style.backgroundImage = 'url(ElfHouse.jpg)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage64();');
}

function nextpage64() {
    document.getElementById('chatbox').innerHTML = 'Elenor: “Had a good rest?”';
    document.getElementById('character-box').style.backgroundImage = 'url(Elenor.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage65();');
}

function nextpage65() {
    document.getElementById('chatbox').innerHTML = name +': “Yeah I’ve had a great rest.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage66();');
}

function nextpage66() {
    document.getElementById('chatbox').innerHTML = 'Elenor: “I was wondering if I could join the both of you on your adventure since I have to go to the castle as well.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Elenor.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage67();');
}

function nextpage67() {
    document.getElementById('chatbox').innerHTML = name +': “Yeah of course, we could also use a helping hand if we cross a monster again.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage68();');
}

function nextpage68() {
    document.getElementById('chatbox').innerHTML = 'Elenor has joined your party.';
    document.getElementById('character-box').style.backgroundImage = 'url()';
    document.getElementById('clickButton').setAttribute('onclick','nextpage69();');
}

function nextpage69() {
    document.getElementById('chatbox').innerHTML = 'Elenor: “Very well, let’s head to the castle then.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Elenor.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage70();');
}

function nextpage70() {
    document.getElementById('chatbox').innerHTML = name +': “Agreed.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage71();');
}

function nextpage71() {
    document.getElementById('chatbox').innerHTML = 'You, Elenor and Gideon continue following the path tot the castle.';
    document.getElementById('character-box').style.backgroundImage = 'url()';
    document.getElementById('clickButton').setAttribute('onclick','nextpage72();');
}

function nextpage72() {
    document.getElementById('chatbox').innerHTML = 'The three of you are walking down a path when suddenly a Treant is blocking your way.';
    document.getElementById('character-box').style.backgroundImage = 'url()';
    document.getElementById('image-box').style.backgroundImage = 'url(ForestPath6.jpg)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage73();');
}

function nextpage73() {
    document.getElementById('chatbox').innerHTML = 'Treant: “What may you three be doing here?”';
    document.getElementById('character-box').style.backgroundImage = 'url(Treant.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage74();');
}

function nextpage74() {
    document.getElementById('chatbox').innerHTML = name +': “We’re just wanting to cross so that we can head to the castle.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage75();');
}

function nextpage75() {
    document.getElementById('chatbox').innerHTML = 'Treant: “I see, but I’m afraid I can’t let that happen.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Treant.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage76();');
}

function nextpage76() {
    document.getElementById('chatbox').innerHTML = name +': “And… why not?”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage77();');
}

function nextpage77() {
    document.getElementById('chatbox').innerHTML = 'Treant: “Because I’m here to shed human blood.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Treant.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage78();');
}

function nextpage78() {
    document.getElementById('chatbox').innerHTML = 'Elenor: “I was afraid this would happen..”';
    document.getElementById('character-box').style.backgroundImage = 'url(Elenor.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage79();');
}

function nextpage79() {
    document.getElementById('chatbox').innerHTML = name +': “What are you trying to say Elenor?”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage80();');
}

function nextpage80() {
    document.getElementById('chatbox').innerHTML = 'Elenor: “The Treants in this forest are a little mentally… under-developed”';
    document.getElementById('character-box').style.backgroundImage = 'url(Elenor.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage81();');
}

function nextpage81() {
    document.getElementById('chatbox').innerHTML = name +': “Oh, so you’re saying It’s retarded right?”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage82();');
}

function nextpage82() {
    document.getElementById('chatbox').innerHTML = 'The Treant heard what you said and smashed his fist into the direction of you.';
    document.getElementById('character-box').style.backgroundImage = 'url(Treant.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage83();');
}

function nextpage83() {
    document.getElementById('chatbox').innerHTML = 'You and Elenor would strafe backwards, the Treant’s fist would hit the ground instead of you and Elenor.';
    document.getElementById('character-box').style.backgroundImage = 'url()';
    document.getElementById('clickButton').setAttribute('onclick','nextpage84();');
}

function nextpage84() {
    document.getElementById('chatbox').innerHTML = 'Elenor: “Yes '+ name +'... It’s retarded.” Elenor sighed.';
    document.getElementById('character-box').style.backgroundImage = 'url(Elenor.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage85();');
}

function nextpage85() {
    document.getElementById('chatbox').innerHTML = name +': “Ah my apologies.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage86();');
}

function nextpage86() {
    document.getElementById('chatbox').innerHTML = name +': “Well, looks like we got ourselves into another fight Gideon.”';
    document.getElementById('character-box').style.backgroundImage = 'url(Anonymous.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage87();');
}

function nextpage87() {
    document.getElementById('chatbox').innerHTML = 'Gideon: “And no way to avoid it either now...”';
    document.getElementById('character-box').style.backgroundImage = 'url(HumanWizard.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage88();');
}

function nextpage88() {
    document.getElementById('chatbox').innerHTML = 'The Treant grabbed a large boulder from the ground.';
    document.getElementById('character-box').style.backgroundImage = 'url(Treant.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage89();');
}

function nextpage89() {
    document.getElementById('chatbox').innerHTML = 'Elenor: “'+ name +' watch out!”';
    document.getElementById('character-box').style.backgroundImage = 'url(Elenor.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage90();');
}

function nextpage90() {
    document.getElementById('chatbox').innerHTML = 'The Treant took aim and threw the boulder at you.';
    document.getElementById('character-box').style.backgroundImage = 'url(Treant.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage91();');
}

function nextpage91() {
    document.getElementById('chatbox').innerHTML = 'The Treant took aim and threw the boulder at you.';
    document.getElementById('character-box').style.backgroundImage = 'url(Treant.png)';
    document.getElementById('clickButton').setAttribute('onclick','nextpage92();');
}