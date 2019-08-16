class TipCalculator{

    constructor(){
    
    };

    retrieveData(){
        return document.querySelector("#js-tip-input").value;
    };

    calculateData(){
        let dataToCalculate = this.retrieveData(),
           tipCalculation = Math.round((dataToCalculate * 0.15) * 10) / 10;

           return tipCalculation;
    };

    printTipMessage(){
       
        document.querySelector("#js-tip-message").textContent = this.calculateData();

    };

};

export default TipCalculator;