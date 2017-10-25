function webpageJS() {

    var self = this;
    var menu = document.getElementsByClassName('menu-nav')[0];
    var menuNavigation = menu.getElementsByTagName('nav')[0];
    var menuButton = document.getElementById('menuButton');
    var menuAnimations = document.getElementsByClassName('menu-animated');
    var loginBtn = document.getElementById('loginBtn');
    var loginWindow = document.getElementsByClassName('login-window')[0];

    /* Callbacks */
    function toggleMenu() {
        menuNavigation.classList.toggle('menu-animated');
        menuButton.classList.toggle('open');
    }

    function toggleLogin(){
        loginWindow.classList.toggle('login-window-on');
    }

    /* Init Callbacks */
    function initCallbacks(){
        menuButton.addEventListener('click', toggleMenu);
        loginBtn.addEventListener('click', toggleLogin);
    }

    initCallbacks();

}

webpageJS();