class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav>
            <ul class="header-navigation">
                <li class="club-name">Seattle Central <br> Programming Club</li>
                <li class="nav-item"><a href="html/contact.html">Contact</a></li>
                <li class="nav-item"><a href="#">Members</a>
                    <ul class="sub-nav-items">
                        <li class="sub-item"><a href="html/past-members.html">Past Members</a></li>
                        <li class="sub-item"><a href="html/contact.html">Current Members</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a href="#">Socials</a></li>
            </ul>
        </nav>
        `
    }
}


customElements.define("header-component", Header);
