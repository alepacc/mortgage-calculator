import { useState } from "react";
import Input from "./Input";

import {type  MortgageInput, type MortgageResult, type MortgageType } from "../types/mortgage";
// import { calculateMortgage } from "../utils/utils";
import calculateMortgage from "../utils/utils";

interface FormProps {
    setResult: (result: MortgageResult | null) => void;
}

function Form({ setResult }: FormProps) {  
    const [amount, setAmount] = useState('');
    const [term, setTerm] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [radioValue, setRadioValue] = useState('');

    // result context
    const [errors, setErrors] = useState({
        amount: '',
        term: '',
        interestRate: '',
        radioValue: ''
    });


    // const [result, setResult] = useState<MortgageResult | null>(null);



    const validateForm = () => {
        const newErrors = {
        amount: '',
        term: '',
        interestRate: '',
        radioValue: ''
        };

        let isValid = true;
        if (amount === ''){
            newErrors.amount = 'This field is required.';
            isValid = false;            
        }

         if (term === ''){
            newErrors.term = 'This field is required.';
            isValid = false;            
        }

        if (interestRate === ''){
            newErrors.interestRate = 'This field is required.';
            isValid = false;            
        }

        if (radioValue === ''){
            newErrors.radioValue = 'This field is required.';
            isValid = false;            
        }

        setErrors(newErrors);
        return isValid;
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        if (validateForm()) {
        
            const mortgageInput: MortgageInput = {
                amount: parseFloat(amount),
                term: parseFloat(term),
                rate: parseFloat(interestRate),
                type: radioValue as MortgageType
            };

            const calculatedResult = calculateMortgage(mortgageInput);
            setResult(calculatedResult);
        }else {
            setResult(null);
        }
      
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
                    min={1}
                    measure="£"
                    step={"any"}
                    error={errors.amount}
                />
                <span className="form__group"> 
                    <Input 
                        label="Mortgage Term" 
                        inputName="termInput" 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        after={true} 
                        min={1}
                        max={100}
                        measure="years"
                        step={"any"}
                        error={errors.term}                        
                    />
                    <Input 
                        label="Interest Rate" 
                        inputName="interestRateInput" 
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        after={true}
                        min={0.1}
                        max={10.0}
                        measure="%"
                        step={"0.1"}  
                        error={errors.interestRate}
                    />
                </span>                
                <p className="txt-color">Mortgage Type</p>
                <div className="input-radio">
                    <input type="radio" name="mortgageType" id="repayment" value="repayment"  onChange={(e) => setRadioValue(e.target.value)}/>
                    <label htmlFor="repayment">Repayment</label>
                </div>
                <div className="input-radio">
                    <input 
                    type="radio" 
                    name="mortgageType" 
                    id="interest" 
                    value="interest" 
                    onChange={(e) => setRadioValue(e.target.value)}/>
                    <label htmlFor="interest">Interest Only</label>
                </div>
                {errors.radioValue && <p className="error">{errors.radioValue}</p>}

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