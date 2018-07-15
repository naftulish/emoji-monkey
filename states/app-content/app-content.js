class AppContent extends HTMLElement{

    connectedCallback(){
        this.templete();
    }
    
    templete(){
        this.innerHTML = `
            <naf-header></naf-header>
            <naf-game></naf-game>
            <naf-footer></naf-footer> 
        ` 
    }
}

customElements.define('app-content', AppContent);