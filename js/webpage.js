function webpageJS() {
  var self = this;
  var menu = document.getElementsByClassName("menu-nav")[0];
  var menuNavigation = menu.getElementsByTagName("nav")[0];
  var menuButton = document.getElementById("menuButton");
  var menuAnimations = document.getElementsByClassName("menu-animated");
  var loginBtn = document.getElementById("loginBtn");
  var loginWindow = document.getElementsByClassName("login-window")[0];
  var mainWrapper = document.getElementsByClassName("main-wrapper")[0];
  var downButton = document.getElementById("downBtn");
  var logo = document.getElementById("logo");

  var menuBtnsList = [
    { id: "homeBtn", content: "Home" },
    { id: "aboutBtn", content: "Sobre" },
    { id: "projectsBtn", content: "Projectos" },
    { id: "contactsBtn", content: "Contactos" }
  ];

  /* Callbacks */
  function toggleMenu() {
    menuNavigation.classList.toggle("menu-animated");
    menuButton.classList.toggle("open");
  }

  function readScroll() {
    switch (window.scrollY) {
    }
  }

  function menuActions(event) {
    var pageSections = document.getElementsByTagName("section");
    if (event.target.id === "downBtn") {
      window.scroll({
        top: pageSections[0].offsetTop - 35,
        left: 0,
        behavior: "smooth"
      });
    } else {
      menuBtnsList.forEach(function(el, idx) {
        if (event.target.id === el.id) {
          if (idx === 0) {
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
          } else {
            idx--;
            window.scroll({
              top: pageSections[idx].offsetTop - 35,
              left: 0,
              behavior: "smooth"
            });
          }
        }
      });
    }
  }

  function toggleLogin() {
    loginWindow.classList.toggle("login-window-on");
  }

  /* Init */
  function initCallbacks() {
    menuButton.addEventListener("click", toggleMenu);
    loginBtn.addEventListener("click", toggleLogin);
    window.addEventListener("scroll", readScroll);
    menuNavigation.addEventListener("click", menuActions);
    downButton.addEventListener("click", menuActions);
  }

  function buildMenu() {
    for (var el in menuBtnsList) {
      var menuElement = document.createElement("a");
      menuElement.id = menuBtnsList[el].id;
      menuElement.innerText = menuBtnsList[el].content;
      menuNavigation.appendChild(menuElement);
    }
  }

  initCallbacks();
  buildMenu();
}

webpageJS();
