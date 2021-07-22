class Statistics {

    constructor(){
        this.arrayOfStats = [];
        this._numbOfWins = 0;
    }

    addGameResult(win, bid){
        if(typeof win === 'boolean' && typeof bid === 'number' && !isNaN(bid)){
            let gameResult = {
                win,
                bid: bid
            }
            this.arrayOfStats.push(gameResult);
            if(win) this._numbOfWins++;
        }
        else throw new Error('Invalid type of arguments');
    }

    showGameStatistic(){
        let numbOfGame = this.arrayOfStats.length;
        let numbOfWins = this._numbOfWins;
        let numbOfLost = numbOfGame - numbOfWins;
        return [numbOfGame, numbOfWins, numbOfLost]
    }
}
