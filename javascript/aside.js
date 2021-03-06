class Aside extends HTMLElement {
    constructor() {
        super();
    }

    <!--The links below give warnings, but they are correctly given-->
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <ul class="aside-navigation">
                <li class="nav-item" ><a href="http://www.sccprogrammingclub.com/home.html"><img class="home_icon" src="http://www.sccprogrammingclub.com/images/css_icons/home.png" alt="home_icon" style="transform: translateY(20%)">Home</a></li>
                <li class="nav-item" ><a href="http://www.sccprogrammingclub.com/html/contact.html"><img class="contact_icon" src="http://www.sccprogrammingclub.com/images/css_icons/contact.png" alt="contact_icon" style="transform: translateY(20%)">Contact</a></li>
                <li class="nav-item" ><a href="#"><img class=members_icon" src="http://www.sccprogrammingclub.com/images/css_icons/members.png" alt="members_icon" style="transform: translateY(20%)">Members</a>
                    <ul class="sub-nav-items">
                        <li class="sub-item"><a href="http://www.sccprogrammingclub.com/html/past-members.html">Past Members</a></li>
                        <li class="sub-item"><a href="http://www.sccprogrammingclub.com/html/2021-2022members.html">Members</a></li>
                    </ul>
                </li>
            </ul>  
        </nav>
        `
    }
}


customElements.define("aside-component", Aside);
