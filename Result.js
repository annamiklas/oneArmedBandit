class Result {
    static moneyWinInGame(result, bid){
        if(typeof result === 'boolean' && typeof bid === 'number' && !isNaN(bid)){
            if(result) return bid * 3
            else return 0;
        }
        else throw new Error('Invalid type of arguments')
    }

    static checkIsWin(arrayOfColors){
        if(arrayOfColors[0] === arrayOfColors[1] && arrayOfColors[1] === arrayOfColors[2] ||
            arrayOfColors[0] !== arrayOfColors[1] && arrayOfColors[1] !== arrayOfColors[2] && arrayOfColors[0] !== arrayOfColors[2])
            return true;

        else return false;
        }
}
