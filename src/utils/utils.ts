import type { MortgageInput, MortgageResult } from "../types/mortgage";

// function and calc
const calculateMortgage = (input: MortgageInput): MortgageResult => {
  // P = amount
  const {amount: P, rate, term, type } = input;
  // r = monthly interest rate
  const r = (rate/12)/100;
  // n = total months
  const n = 12*term;

  if (type === "repayment"){
    // M = P × [r(1+r)^n] / [(1+r)^n - 1]
    // monthly repayment
    const M = P * (r*Math.pow((1+r), n)) / (Math.pow((1+r), n) - 1);
    return {monthlyRepayment: M, totalRepay: n*M} 

  }else if (type === "interest"){
    // monthly repayment = amount * monthly interest rate
    const M = P*r; 
    // total repay = (total months * monthly repayment ) + amount
    return {monthlyRepayment: M, totalRepay: n*M+P}
  }else {
    return {monthlyRepayment: 0, totalRepay: 0}
  }
    
};

export default calculateMortgage;