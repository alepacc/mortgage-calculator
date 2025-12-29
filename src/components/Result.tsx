import type { MortgageResult } from "../types/mortgage";

function Result({ result }: { result: MortgageResult | null }) {
    if (!result) {
        return (
            <div className="result">
                <img src="src/assets/images/illustration-empty.svg" className="illustration empty"/>
                <h1>Result shown here</h1>
                <p className="result__info">Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
            </div> 
        )   
    }


    return (
        <div className="result">
            <h1>Your results</h1>
            <p className="result__info">Your results are shown below based on the information you provided. 
                To adjust the results, edit the form and click “calculate repayments” again.</p>
            <p className="result__data">Monthly Repayment: <span className="result__value">£{result.monthlyRepayment.toFixed(2)}</span></p>
            <p className="result__data">Total Interest: <span className="result__value">£{result.totalRepay.toFixed(2)}</span></p>
        </div>
    )     
}

export default Result;