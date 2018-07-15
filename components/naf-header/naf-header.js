class NafHeader extends HTMLElement{
    
    connectedCallback(){
        var score = 0;
        this.templete(score);
    }

    templete(score){
        this.innerHTML = `
            <header>
                <img id="monkeyLogo" src="assets/images/monkeyLogo.png">
                <h1>emoji monkey</h1>
                <h4>Catch the monkey and earn points</h4>
                <button id="start">Start Game</button>
                <div id="scoreWrap">
                    <span class="msgWapp1" id="player">player: </span><br>
                    <span class="msgWapp2" id="highScore">high Score:</span><br>
                    <span class="msgWapp1" id="score" data-score=${score}>points: ${score}</span><br>
                    <span class="msgWapp2" id="timer">Timer: 60s</span>
                </div>
            </header>

        `
    }

}

customElements.define('naf-header' , NafHeader);