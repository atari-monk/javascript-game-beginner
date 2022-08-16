const spritePage1 = "Sprite/spritePage1.html";
const spritePage2 = "Sprite/spritePage2.html";
const parallaxPage1 = "Parallax/parallaxPage1.html";
const parallaxPage2 = "Parallax/parallaxPage2.html";
const npcAnimPage = "NPCAnim/npcAnim.html";
const animTriggerPage = "AnimTrigger/animTrigger.html";
const gamePage1 = "Game/gamePage1.html";
const gamePage2 = "Game/gamePage2.html";
const enemyPage = "EnemyClass/enemy.html";
const script = "script";
const js = ".js"
const samples = [];
samples["sprites-rect-anim"] = {
    page: spritePage1,
    script: script + "1" + js
};
samples["sprites-image"] = {
    page: spritePage1,
    script: script + "2" + js
};
samples["sprites-frame"] = {
    page: spritePage1,
    script: script + "3" + js
};
samples["sprites-animation"] = {
    page: spritePage1,
    script: script + "4" + js
};
samples["sprites-animation-notation-trick"] = {
    page: spritePage1,
    script: script + "5" + js
};
samples["sprites-animation-data"] = {
    page: spritePage1,
    script: script + "6" + js
};
samples["sprites-animation-selector"] = {
    page: spritePage2,
    script: script + "7" + js
};
samples["parallax-gap"] = {
    page: parallaxPage1,
    script: script + "1" + js
};
samples["parallax-gap-fix"] = {
    page: parallaxPage1,
    script: script + "2" + js
};
samples["parallax-layers"] = {
    page: parallaxPage1,
    script: script + "3" + js
};
samples["parallax-speed-input"] = {
    page: parallaxPage2,
    script: script + "4" + js
};
samples["parallax-refactor"] = {
    page: parallaxPage2,
    script: script + "5" + js
};
samples["npc-anim-proto"] = {
    page: npcAnimPage,
    script: script + "1" + js
};
samples["npc-anim-class"] = {
    page: npcAnimPage,
    script: script + "2" + js
};
samples["npc-anim1"] = {
    page: npcAnimPage,
    script: script + "3" + js
};
samples["npc-anim2"] = {
    page: npcAnimPage,
    script: script + "4" + js
};
samples["npc-anim3-pattern1"] = {
    page: npcAnimPage,
    script: script + "5" + js
};
samples["npc-anim3-pattern2"] = {
    page: npcAnimPage,
    script: script + "6" + js
};
samples["npc-anim3-pattern3"] = {
    page: npcAnimPage,
    script: script + "7" + js
};
samples["npc-anim3-pattern4"] = {
    page: npcAnimPage,
    script: script + "8" + js
};
samples["npc-anim4"] = {
    page: npcAnimPage,
    script: script + "9" + js
};
samples["anim-trigger1"] = {
    page: animTriggerPage,
    script: script + "1" + js
};
samples["anim-trigger2"] = {
    page: animTriggerPage,
    script: script + "2" + js
};
samples["anim-trigger3"] = {
    page: animTriggerPage,
    script: script + "3" + js
};
samples["anim-trigger-audio"] = {
    page: animTriggerPage,
    script: script + "4" + js
};
samples["game-rect"] = {
    page: gamePage1,
    script: script + "1" + js
};
samples["game-group"] = {
    page: gamePage1,
    script: script + "2" + js
};
samples["game-anim"] = {
    page: gamePage1,
    script: script + "3" + js
};
samples["game-score"] = {
    page: gamePage1,
    script: script + "4" + js
};
samples["game-collision"] = {
    page: gamePage2,
    script: script + "5" + js
};
samples["game-explosionAnim-sound"] = {
    page: gamePage2,
    script: script + "6" + js
};
samples["game-particles"] = {
    page: gamePage2,
    script: script + "7" + js
};
samples["enemy-subclassing1"] = {
    page: enemyPage,
    script: script + "1" + js
};

function update() {
    var select = document.getElementById('select1');
    var option = select.options[select.selectedIndex];
    if(option.value == "none") 
        return;
    var sample = samples[option.value];
    window.open(sample.page + "?" + sample.script, '_blank');
}

update();