descriptions = [
    "Code Charmer",
    "l33t H4x0r",
    "The Tinkerer",
    "Bane of CPUs",
    "GPU Tamer",
    "Embodies Integrated Synergy",
    "Frameworks are for Cowards",
    "Jack of all Trades, Master of Some",
    "The 3rd Comming",
    "Ruler of the Underworld"
];

window.addEventListener('load', function() {
    var subtitle = document.getElementById("description");
    subtitle.textContent = descriptions[Math.floor(Math.random() * descriptions.length)];
});
