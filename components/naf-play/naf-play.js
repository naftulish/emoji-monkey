class NafPlay extends HTMLElement{
    
    connectedCallback(){
        var a="";
        for(var i=0; i<40; i++){
           var newDiv = `<div class="gameUnit" id="boxGame${i}"><naf-monkey></naf-monkey><naf-efro></naf-efro>></div>`;
           a+=newDiv;
        }

        this.templete(a);
    }    

    templete(a){
        this.innerHTML = a;
    }

}

customElements.define('naf-play', NafPlay);