class NafGame extends HTMLElement{
    
    connectedCallback(){
        this.templete();
    }
    

    templete(){
        this.innerHTML =  `
            <naf-play></naf-play>
        `
    }
}

customElements.define('naf-game', NafGame);