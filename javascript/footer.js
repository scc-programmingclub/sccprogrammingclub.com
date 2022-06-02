class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="../css/navigation.css">
        <nav>
            <p>Programming Club (S5656546546eatfdfsdftle Central College)</p>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </nav>
        `
    }
}


customElements.define("footer-component", Footer);
