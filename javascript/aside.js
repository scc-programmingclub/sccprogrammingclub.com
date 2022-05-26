class Aside extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <p>Test text</p>
        `
    }
}


customElements.define("aside-component", Header);
