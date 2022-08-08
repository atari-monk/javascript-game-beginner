const spritePage1 = "../Sprites/spritePage1.html";
const spritePage2 = "../Sprites/spritePage2.html";
const parallaxPage1 = "../Parallax/parallaxPage1.html";
const parallaxPage2 = "../Parallax/parallaxPage2.html";
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

function update() {
    var select = document.getElementById('select1');
    var option = select.options[select.selectedIndex];
    if(option.value == "none") 
        return;
    var sample = samples[option.value];
    window.open(sample.page + "?" + sample.script, '_blank');
}

update();