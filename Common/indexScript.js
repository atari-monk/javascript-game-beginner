const samples = [];
samples["sprites-rect-anim"] = {
    page: "sample.html",
    script: "../Sprites/script1.js"
};
samples["sprites-image"] = {
    page: "sample.html",
    script: "../Sprites/script2.js"
};
samples["sprites-frame"] = {
    page: "sample.html",
    script: "../Sprites/script3.js"
};
samples["sprites-animation"] = {
    page: "sample.html",
    script: "../Sprites/script4.js"
};
samples["sprites-animation-notation-trick"] = {
    page: "sample.html",
    script: "../Sprites/script5.js"
};
samples["sprites-animation-data"] = {
    page: "sample.html",
    script: "../Sprites/script6.js"
};
samples["sprites-animation-selector"] = {
    page: "../Sprites/animSelector.html",
    script: "script7.js"
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