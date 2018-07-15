class NafMonkey extends HTMLElement{
    
    connectedCallback(){
        this.templete();
        
    }    

    templete(){
       this.innerHTML = `<img src="assets/images/monkey.png"/>`
    }

}

customElements.define('naf-monkey', NafMonkey);