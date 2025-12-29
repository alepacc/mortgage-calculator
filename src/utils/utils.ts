import type { MortgageInput, MortgageResult } from "../types/mortgage";

// function and calc
const calculateMortgage = (input: MortgageInput): MortgageResult => {
  // P = amount
  const {amount: P, rate, term, type } = input;
  // r = monthly interest rate
  const r = (rate/12)/100;
  // n = total monthly rates
  const n = 12*term;

  if (type === "repayment"){
    // M = P × [r(1+r)^n] / [(1+r)^n - 1]
    // monthly repayment
    const M = P * (r*Math.pow((1+r), n)) / (Math.pow((1+r), n) - 1);
    return {monthlyRepayment: M, totalRepay: n*M} //, totalInterest: n*M-P }

  }else if (type === "interest"){
    // TODO: FIX Interest
    const M = P*r;
    return {monthlyRepayment: M, totalRepay: n*M+P}
  }else {
    return {monthlyRepayment: 0, totalRepay: 0}
  }
    
};

export default calculateMortgage;