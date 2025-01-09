// Menu Amburguer Para Página Reduzida / Mobile
class MobileNavBar {
    // método construtor
    constructor(mobileMenu,navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";

        // refere this à classe MobileNavBar
        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            // console.log();
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }
    handleClick() {
        // console.log(this);
        this.navList.classList.toggle(this.activeClass);
        // Transforma o Hamburguer num X:
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent() {
        // this.mobileMenu.addEventListener("click", () => console.log ("Hey!"));
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavBar = new MobileNavBar (
    // usar os seletores da classe
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
// iniciar a class:
mobileNavBar.init();

// ====================================================================================