class Aside extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `

        <nav>
            <ul class="aside-navigation">
                <li class="nav-item"><a href="../home.html"><img class="home_icon" src="../images/css_icons/home.png" alt="home_icon">Home</a></li>
                <li class="nav-item"><a href="html/contact.html"><img class="contact_icon"src="../images/css_icons/contact.png" alt="contact_icon">Contact</a></li>
                <li class="nav-item"><a href="#"><img class=members_icon" src="../images/css_icons/members.png" alt="members_icon">Members</a>
                    <ul class="sub-nav-items">
                        <li class="sub-item"><a href="html/past-members.html">Past Members</a></li>
                        <li class="sub-item"><a href="html/members.html">Members</a></li>
                    </ul>
                </li>
            </ul>  
        </nav>
        `
    }
}


customElements.define("aside-component", Aside);
