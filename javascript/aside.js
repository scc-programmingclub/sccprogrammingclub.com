class Aside extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav>
            <ul class="aside-navigation">
                <li class="nav-item"><a href="#">Home</li>
                <li class="nav-item"><a href="#">Contact</li>
                <li class="nav-item"><a href="#">Members</li>
            </ul>
        </nav>
        `
    }
}


customElements.define("aside-component", Aside);