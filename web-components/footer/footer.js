class CustomFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <footer>
                footer
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);