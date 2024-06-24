$("#toggle-tab1").click(function() {

    $("#tab-content1").toggle();
    $("#toggle-tab1").toggleClass("flip");
    
});
$("#toggle-tab2").click(function() {

    $("#tab-content2").toggle();
    $("#toggle-tab2").toggleClass("flip");
    
});
$("#toggle-tab3").click(function() {

    $("#tab-content3").toggle();
    $("#toggle-tab3").toggleClass("flip");
    
});
$("#toggle-tab4").click(function() {

    $("#tab-content4").toggle();
    $("#toggle-tab4").toggleClass("flip");
    
});
$("#toggle-tab5").click(function() {

    $("#tab-content5").toggle();
    $("#toggle-tab5").toggleClass("flip");
    
});
$("#toggle-tab6").click(function() {

    $("#tab-content6").toggle();
    $("#toggle-tab6").toggleClass("flip");
    
});

$("#tab-content1").toggle();
$("#toggle-tab1").toggleClass("flip");
$("#tab-content2").toggle();
$("#toggle-tab2").toggleClass("flip");
$("#tab-content3").toggle();
$("#toggle-tab3").toggleClass("flip");
$("#tab-content4").toggle();
$("#toggle-tab4").toggleClass("flip");
$("#tab-content5").toggle();
$("#toggle-tab5").toggleClass("flip");
$("#tab-content6").toggle();
$("#toggle-tab6").toggleClass("flip");

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function openConfig() {
    const configPanel = document.getElementById('configPanel');
    configPanel.style.display = 'block';
}

function closeConfig() {
    const configPanel = document.getElementById('configPanel');
    configPanel.style.display = 'none';
}

function setTheme(theme) {
    document.body.className = theme + '-theme';
    closeConfig();
}