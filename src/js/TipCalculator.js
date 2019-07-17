class TipCalculator {
    constructor() {
        this.tip = 0.15;
        this.btn = document.querySelector('#js-tip-btn');
        this.input = document.querySelector('#js-tip-input');

        this.btn.addEventListener("click", this.userMessage.bind(this));
        
    }

    userMessage() {
        document.querySelector('#js-tip-message').innerText = this.calculateTip();
    }

    calculateTip() {
        return `$${(this.input.value * this.tip).toFixed(2)}`;
    }

}

export default TipCalculator;