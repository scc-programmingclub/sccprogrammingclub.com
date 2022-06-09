class Aside extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `

        <nav>
            <ul class="aside-navigation">
                <li class="nav-item"><a href="../home.html"><i class="fas fa-car"></i>Home</a></li>
                <li class="nav-item"><a href="#">Contact</a></li>
                <li class="nav-item"><a href="html/members.html">Members</a>
                    <ul class="sub-nav-items">
                        <li class="sub-item"><a href="#">Past Members</a></li>
                        <li class="sub-item"><a href="#">Current Members</a></li>
                    </ul>
                </li>
            </ul>  
        </nav>
        `
    }
}


customElements.define("aside-component", Aside);
