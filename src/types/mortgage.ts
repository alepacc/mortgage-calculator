export type MortgageType = 'repayment' | 'interest'

export interface MortgageInput{
    amount: number // mortage amount
    term: number // years
    rate: number // Interest rate
    type: MortgageType // 'repayment' | 'interest'
}

export interface MortgageResult {
    monthlyRepayment: number
    totalRepay: number
}