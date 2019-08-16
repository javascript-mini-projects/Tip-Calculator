function retrieveData(){

    let inputDataValue = document.querySelector("#js-tip-input").value;
    return inputDataValue;
        
}

function dataCalculation(){

    let retrievedData = retrieveData(),
        calculationNumber = 10,
        calculatedData = retrievedData * 0.15;
        roundedData = Math.round(calculatedData * calculationNumber) / calculationNumber;
        
    return roundedData;    

}

function displayMessage(){
    let valueToDisplay = dataCalculation();

    document.querySelector("#js-tip-message").textContent = valueToDisplay;
}

(function(){

    document.querySelector("#js-tip-btn").addEventListener("click", displayMessage);


})();