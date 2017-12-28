console.log(window.location.href);
$("#headerSection").html(
    '<div class="sidebar">'
    + '    <span class="sidebarTitle">Soosh Repositories</span>'
    + '    <ul class="sidebarNav">'
    + '        <li id="sidenavIndex"><a href="index.html">Home</a></li>'
    + '        <li id="sidenavSoosh"><a href="http://www.kathryndipippo.com/WebDevSandbox/sooshTraitVisualizer.html">Soosh Trait Visualizer</a></li>'
    + '        <li id="sidenavPersonality"><a href="http://www.kathryndipippo.com/SooshARPG/kumo.html">SooshARPG - Kumo Tracker</a></li>'
    + '        <li id="sidenavSprite"><a href="http://www.kathryndipippo.com/SooshARPG/mod.html">SooshARPG - Moderator Tools</a></li>'
    + '        <li id="sidenavData"><a href="http://www.kathryndipippo.com/SooshARPG2/">SooshARPG 2.0</a></li>'
    + '        <li id="sidenavSalem"><a href="http://www.kathryndipippo.com/SooshARPG/tradecenter.html">Soosh Trade Center</a></li>'
    + '        <li id="sidenav"><a href="http://www.kathryndipippo.com/SooshARPG/database.html">Soosh Database</a></li>'
    + '        <li id="sidenav"><a href="http://www.kathryndipippo.com/SooshARPG/witchhex.html">WitchHex DB</a></li>'
    + '    </ul>'
    + '</div>'
    + '<div class="headerOverlay"></div>'
    + '<header>'
    + '    <div><i id="sidebarTrigger" class="material-icons">dehaze</i></div>'
    + '    <div><a class="headerLink" href="index.html">'
    + '        <img class="headerIcon" src="img/favicon.png">'
    + '        Sushi Dogs'
    + '    </a></div>'
    + '</header>'
    + '<div class="headerblankspace"></div>'
);

$("#sidebarTrigger").click(function() {
    $(".headerOverlay").fadeIn();
    $(".sidebar").css("left","0");
});
$(".headerOverlay").click(function() {
    $(".headerOverlay").fadeOut();
    $(".sidebar").css("left","-30%");
});
