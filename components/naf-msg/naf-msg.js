class NafMsg extends HTMLElement{
  
    get msgType(){
        const msg = this.getAttribute('data-msg');
        return msg;
    }
    
    connectedCallback(){
        var a = this.msgType;
        this.templete(a);
    }    

    templete(msg){
        if(msg==1){
            this.innerHTML = `
                <div id="msg1">
                    <h3>welcome!</h3>
                    <span>its your first time to play, please enter your name </span><br>
                    <input type="text" placeholder="nick name:"></input><br>
                    <button id="submit">let's play!</button>        
                </div>
            `
        }else if(msg==2){
            this.innerHTML = `
                <div id="msg2">
                    <h3>welcome back <br> ${localStorage.getItem("user")}!</h3>
                    <span>Your record is ${localStorage.getItem("score")} points, <br> Let's try to pass it</span><br>
                    <button id="continue">let's play!</button>        

                </div>
            `
        }else if(msg==3){
            this.innerHTML = `
                <div id="msg3">
                    <h3>game finished</h3>
                    <span>You have not set a new record :-( </span><br>
                    <button id="playAgin">let's play agin!</button>        
                </div>
            `
        }else if(msg==4){
            this.innerHTML = `
                <div id="msg4">
                    <h3>Congratulations</h3>
                    <span>You have set a new record :-) <br> Let's try to pass it </span><br>
                    <button id="playAgin">let's play!</button>        
                </div>
            `
        }
    }




}

customElements.define('naf-msg', NafMsg);