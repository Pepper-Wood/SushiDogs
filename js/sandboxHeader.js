console.log(window.location.href);
$("#headerSection").html(
    '<div class="sidebar">'
    + '    <h2 class="sidebarTitle">Soosh Repositories</h2>'
    + '    <ul class="sidebarNav">'
    + '        <li id="sidenavIndex"><a href="index.html">Home</a></li>'
    + '        <li id="sidenavTradeCenter"><a href="tradecenter.html">Soosh Trade Center</a></li>'
    + '        <li><a href="http://www.kathryndipippo.com/WebDevSandbox/sooshTraitVisualizer.html">Soosh Trait Visualizer</a></li>'
    + '        <li><a href="http://www.kathryndipippo.com/SooshARPG/kumo.html">SooshARPG - Kumo Tracker</a></li>'
    + '        <li><a href="http://www.kathryndipippo.com/SooshARPG/mod.html">SooshARPG - Moderator Tools</a></li>'
    + '        <li><a href="http://www.kathryndipippo.com/SooshARPG2/">SooshARPG 2.0</a></li>'
    + '        <li><a href="http://www.kathryndipippo.com/SooshARPG/database.html">Soosh Database</a></li>'
    + '    </ul>'
    + '</div>'
    + '<div class="headerOverlay"></div>'
    + '<header>'
    + '    <div><i id="sidebarTrigger" class="material-icons">dehaze</i></div>'
    + '    <div><img class="headerIcon" src="img/favicon.png"></div>'
    + '    <div><a class="headerLink" href="index.html">Sushi Dogs: <span class="headerMarker">Pepper-Wood\'s Tools</span></a></div>'
    + '</header>'
    + '<div class="headerblankspace"></div>'
);

function addActiveTab() {
    var sidenavTabs = ["Index","TradeCenter"];
    var currentPage = window.location.href;
    for (i=0; i<sidenavTabs.length; i++) {
        if (currentPage.includes(sidenavTabs[i].toLowerCase())) {
            $("#sidenav" + sidenavTabs[i]).addClass("active");
            return;
        }
    }
}

addActiveTab();

$("#sidebarTrigger").click(function() {
    $(".headerOverlay").fadeIn();
    $(".sidebar").css("left","0");
});
$(".headerOverlay").click(function() {
    $(".headerOverlay").fadeOut();
    $(".sidebar").css("left","-30%");
});
