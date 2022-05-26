class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <p>Test text</p>
        `
    }
}


customElements.define("header-component", Header);
