descriptions = [
    "Code Charmer",
    "l33t H4x0r",
    "Journeyman Tinkerer",
    "Bane of CPUs",
    "Script Wrangler",
    "Embodies Integrated Synergy",
    "Afraid of Frameworks",
    "Jack of all Trades, Master of Some",
    "The 42nd Comming",
    "Underworld Dreadlord"
];

window.addEventListener('load', function() {
    var subtitle = document.getElementById("description");
    subtitle.textContent = descriptions[Math.floor(Math.random() * descriptions.length)];
});
