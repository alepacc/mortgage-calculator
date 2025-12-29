import type { MortgageResult } from "../types/mortgage";
import illustrationEmpty from "/src/assets/images/illustration-empty.svg";

function Result({ result }: { result: MortgageResult | null }) {
    if (!result) {
        return (
            <div className="result">
                <img src={illustrationEmpty} className="illustration empty"/>
                <h1>Result shown here</h1>
                <p className="result__info">Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
            </div> 
        )   
    }


    return (
        <div className="result">
            <h1>Your results</h1>
            <p className="result__label">Your results are shown below based on the information you provided. 
                To adjust the results, edit the form and click “calculate repayments” again.</p>
            <div className="result__box">
                <p className="result__label">Your monthly repayments</p>
                <span className="result__monthly">£{result.monthlyRepayment.toFixed(2)}</span>
                <hr/>
                <p className="result__label">Total you'll repay over the term</p>
                <span className="result__total">£{result.totalRepay.toFixed(2)}</span>
            </div>
        </div>
    )     
}

export default Result;