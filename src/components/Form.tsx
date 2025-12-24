import { useState } from "react";
import Input from "./Input";

// import { mortgageInput } from "../types/mortgage";

function Form () {  
    const [amount, setAmount] = useState('');
    const [term, setTerm] = useState('');
    const [interestRate, setInterestRate] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        setAmount(amount);
        setTerm(term);
        setInterestRate(interestRate);
        console.log("Form submitted with values:", { amount, term, interestRate });
    }

    return (
        <>
        <div className="form-section">
            <h1>Mortgage Calculator</h1>
            <a href="..." className="txt-color">Clear All</a>
            <form onSubmit={handleSubmit}>
                <Input 
                    label="Mortgage Amount" 
                    inputName="amountInput" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    before={true}
                    measure="£"
                    step={"any"}
                />
                <span className="form__group"> 
                    <Input 
                        label="Mortgage Term" 
                        inputName="termInput" 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        after={true} 
                        measure="years"
                        step={"any"}
                    />
                    <Input 
                        label="Interest Rate" 
                        inputName="interestRateInput" 
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        after={true}
                        measure="%"
                        step={"0.1"}    
                    />
                </span>                
                <p className="txt-color">Mortgage Type</p>
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