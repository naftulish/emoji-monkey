class NafMonkey extends HTMLElement{
    
    connectedCallback(){
        this.templete();
        
    }    

    templete(){
       this.innerHTML = `<img id="monkey" src="assets/images/monkey.png"/>`
    }

}

customElements.define('naf-monkey', NafMonkey);