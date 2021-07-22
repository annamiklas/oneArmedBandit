class Game {
    constructor(value){
        this.value = value;
        this.stats = new Statistics();
        this.wallet = new Wallet(value);
        document.querySelector('.playButton').addEventListener('click', this.startGame.bind(this));
        this.spanWallet = document.querySelector('.amount');
        this.spanLosses = document.querySelector(".losses");
        this.spanGameNumb = document.querySelector(".numbOfGame");
        this.spanWinGame = document.querySelector('.numbOfWin');
        this.spanLostGame = document.querySelector('.numbOfLoses');
        this.inputBid = document.querySelector('.money');
        this.boards = document.querySelectorAll("div.color")

        this.render()
    }

    render(money = this.wallet.getValueOfWallet(), stats = [0,0,0], result = "", colors = ['grey','grey','grey'], bid = 0) {
        this.spanWallet.textContent = money;
        if(result) result = `Wygrałeś_aś ${bid}$ -`;
        else if(!result && result !== "") result = `Przegrałeś_aś ${bid}$`
        this.spanLosses.textContent = result;
        this.spanGameNumb.textContent = stats[0];
        this.spanWinGame.textContent = stats[1];
        this.spanLostGame.textContent = stats[2];
        this.boards.forEach((board, id) => {
            board.style.backgroundColor = colors[id];
        })
        this.inputBid.value = "";
    }

    startGame(){
        if(this.inputBid.value < 1){
            this.inputBid.value = "";
             return alert("Podana kwota jest za mała!")
        }
        let bid = Math.floor(this.inputBid.value);
        if(!this.wallet.checkIfValueIsCorrect(bid)){ 
            this.inputBid.value = "";
            return alert("Masz za mało środków!")
        }
        this.wallet.changeWallet(bid, '-');
        this.draw = new Drow();
        const colors = this.draw.getDrawResult();
        const result = Result.checkIsWin(colors);
        const winMoney = Result.moneyWinInGame(result, bid);
        this.wallet.changeWallet(winMoney);
        if(this.wallet.getValueOfWallet() <= 0){
            this.resetGame();      
        }
        else{
            this.stats.addGameResult(result, bid);
            const stats = this.stats.showGameStatistic();
            this.render(this.wallet.getValueOfWallet(), stats, result, colors, bid)
        }

    }

    resetGame() {
        this.stats = new Statistics();
        this.wallet = new Wallet(this.value);
        this.render();
        return alert("Przegrałeś!")      
    }


}
