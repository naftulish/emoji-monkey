class NafEfro extends HTMLElement{
    
    connectedCallback(){
        this.templete();
        
    }    

    templete(){
       this.innerHTML = `<img id="efro" src="assets/images/efro.png"/>`
    }

}

customElements.define('naf-efro', NafEfro);