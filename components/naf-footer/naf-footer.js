class NafFooter extends HTMLElement{

    connectedCallback(){
        this.templete();
    }
    
    templete(){
        this.innerHTML = `
            <footer>
                <span> emoji monkey v1.0 | dev by naftali stein | <a href="mailto:naftulish@gmail.com">naftulish@gmail.com </a></span>
            </footer>
        ` 
    }
}

customElements.define('naf-footer', NafFooter);