class Wallet {
    
    constructor(amount){
        let _amount = amount;
        this.getValueOfWallet = () => _amount
        this.checkIfValueIsCorrect = value => value <= _amount
        this.changeWallet = (value, type = '+') => {
            if(typeof value === 'number' && !isNaN(value)){
                if(type === '+') return _amount += value
                else if(type === '-') return _amount -= value
                else throw new Error("Operation is not defined");
            }
            else throw new Error("Value is incorrect");
        }
    }
}