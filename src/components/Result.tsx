// import { MortgageInput } from "../types/mortgage";
 

function Result() {

    return (
        <div className="result">
            {/* if monthly == 0 */}
            <img src="src/assets/images/illustration-empty.svg" className="illustration empty"/>
            <h1>Result shown here</h1>
            <p className="result__info">Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
            {/* else ......*/}
             
        </div>
    );
}

export default Result;