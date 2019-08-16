import '../../css/main.css';
import TipCalculator from './TipCalculator';

window.addEventListener("load", function(){
    let tipCalulator = new TipCalculator();
    
    document.querySelector("#js-tip-btn").addEventListener("click", function(){
        tipCalulator.printTipMessage();
    });

    // vs: why does below always show 0 as input when page loads?

    // document.querySelector("#js-tip-btn").addEventListener("click", tipCalulator.printTipMessage());

});



