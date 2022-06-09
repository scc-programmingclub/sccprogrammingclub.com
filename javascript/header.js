class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav>
            <ul class="header-navigation">
                <li class="club-name">Seattle Central <br> Programming Club</li>
                <li class="nav-item"><a href="#">Contact</a></li>
                <li class="nav-item"><a href="html/members.html">Members</a>
                    <ul class="sub-nav-items">
                        <li class="sub-item"><a href="#">Past Members</a></li>
                        <li class="sub-item"><a href="#">Current Members</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a href="#">Socials</a></li>
            </ul>
        </nav>
        `
    }
}


customElements.define("header-component", Header);
