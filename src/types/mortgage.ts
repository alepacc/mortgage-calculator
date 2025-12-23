export type MortgageType = 'Repayment' | 'Interest'

export interface MortgageInput{
    amount: number // mortage amount
    term: number // years
    rate: number // Interest rate
    type: MortgageType // 'Repayment' | 'Interest'
}


export interface MortgageResult {
    monthlyRepayment: number
    totalRepay: number
    totalInterest: number
}