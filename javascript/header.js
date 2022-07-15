class Header extends HTMLElement {
    constructor() {
        super();
    }

    <!--The links below give warnings, but they are correctly given-->
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <ul class="header-navigation">
                <a href="/sccprogrammingclub.com/home.html"><li class="club-name">Seattle Central <br> Programming Club</li></a>
                <li class="nav-item"><a href="/sccprogrammingclub.com/html/contact.html">Contact</a></li>
                <li class="nav-item"><a href="#">Members</a>
                    <ul class="sub-nav-items">
                        <li class="sub-item"><a href="/sccprogrammingclub.com/html/past-members.html">Past Members</a></li>
                        <li class="sub-item"><a href="/sccprogrammingclub.com/html/members.html">Current Members</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a href="#">Socials</a></li>
            </ul>
        </nav>
        `
    }
}


customElements.define("header-component", Header);
