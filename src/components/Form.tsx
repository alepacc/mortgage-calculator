import { useState } from "react";
import Input from "./Input";

// import { mortgageInput } from "../types/mortgage";

function Form () {  
    const [amount, setAmount] = useState(0);
    const [term, setTerm] = useState(0);
    const [interestRate, setInterestRate] = useState(0);

    
    return (
        <>
        <div className="form-section">
            <h1>Mortgage Calculator</h1>
            <a href="...">Clear All</a>
            <form>
                <Input label="Mortgage Amount" 
                inputName="amountInput" 
                value={amount} onChange={setAmount}
                before={true} measure="£"/>
                <span className="form__group"> 
                    <Input label="Mortgage Term" inputName="termInput" value={term} onChange={setTerm}
                    after={true} measure="years"/>
                    <Input label="Interest Rate" inputName="interestRateInput" value={interestRate} onChange={setInterestRate}
                    after={true} measure="%"/>
                </span>                
                <p>Mortgage Type</p>
                <div className="input-radio">
                    <input type="radio" name="mortgageType" id="repayment" value="repayment" />
                    <label htmlFor="repayment">Repayment</label>
                </div>
                <div className="input-radio">
                    <input type="radio" name="mortgageType" id="interest" value="interest"/>
                    <label htmlFor="interest">Interest Only</label>
                </div>

                <button className="form__btn" type="submit">
                    <img src="src/assets/images/icon-calculator.svg" alt="icon calculator"></img>
                    Calculate Repayments
                </button>

           </form>
        </div>
           
        </>
        
    );
}

export default Form;