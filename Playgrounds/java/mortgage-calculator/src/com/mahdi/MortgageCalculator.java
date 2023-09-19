package com.mahdi;

import java.text.NumberFormat;

public class MortgageCalculator {
    private static final byte MONTHS_IN_YEAR = 12;
    private static final byte PERCENT = 100;
    private int principal;
    private float annualInterestRate;
    private byte periodInYears;

    public MortgageCalculator(int principal, float annualInterestRate, byte periodInYears) {
        this.principal = principal;
        this.annualInterestRate = annualInterestRate;
        this.periodInYears = periodInYears;
    }

    public double calculateBalance(short numberOfPaymentsMade) {
        float monthlyInterest = getMonthlyInterest();
        float numberOfPayments = getNumberOfPayments();

        double balance = principal
                * (Math.pow(1 + monthlyInterest, numberOfPayments) - Math.pow(1 + monthlyInterest, numberOfPaymentsMade))
                / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

        return balance;
    }

    public double calculateMortgage() {
        float numberOfPayments = getNumberOfPayments();
        float monthlyInterestPercentage = getMonthlyInterest();

        double up = monthlyInterestPercentage * Math.pow(1 + monthlyInterestPercentage, numberOfPayments);
        double down = Math.pow(1 + monthlyInterestPercentage, numberOfPayments) - 1;

        return principal * (up / down);
    }

    private float getMonthlyInterest() {
        return annualInterestRate / PERCENT / MONTHS_IN_YEAR;
    }

    private int getNumberOfPayments() {
        return periodInYears * MONTHS_IN_YEAR;
    }

    public double[] getRemainingBalances() {
        double[] balances = new double[getNumberOfPayments()];
        for(short month = 1; month <= balances.length; month++) {
            balances[month - 1] = calculateBalance(month);;
        }

        return balances;
    }
}
