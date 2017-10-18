function webpageJS() {

    var self = this;
    var menu = document.getElementsByClassName('menu-nav')[0];
    var menuNavigation = menu.getElementsByTagName('nav')[0];
    var menuButton = document.getElementById('menuButton');
    var menuAnimations = document.getElementsByClassName('menu-animated');

    /* Callbacks */
    function toggleMenu() {
        menuNavigation.classList.toggle('menu-animated');
        menuButton.classList.toggle('open');
    }

    /* Init Callbacks */
    function initCallbacks(){
        menuButton.addEventListener('click', toggleMenu);
    }

    initCallbacks();

}

webpageJS();