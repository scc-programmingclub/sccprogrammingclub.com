class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="../css/navigation.css">
        <nav>
            <ul class="header-navigation">
                <li class="club-name">Seattle Central Programming Club</li>
                <li class="nav-item"><a href="#">Contact</li>
                <li class="nav-item"><a href="#">Members</li>
                <li class="nav-item"><a href="#">Socials</li>
            </ul>

        </nav>
        `
    }
}


customElements.define("header-component", Header);
