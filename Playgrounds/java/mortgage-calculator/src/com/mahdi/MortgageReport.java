package com.mahdi;

import java.text.NumberFormat;

public class MortgageReport {
    private final NumberFormat currency;
    private MortgageCalculator mortgageCalculator;

    public MortgageReport(MortgageCalculator mortgageCalculator) {
        this.mortgageCalculator = mortgageCalculator;
        this.currency = NumberFormat.getCurrencyInstance();
    }

    public void printMortgage() {
        String mortgageFormatted = currency.format(mortgageCalculator.calculateMortgage());
        System.out.printf("Mortgage: %s\n", mortgageFormatted);
    }

    public void printPaymentSchedule() {
        System.out.println();
        System.out.println("PAYMENT SCHEDULE");
        System.out.println("----------------");
        for (double balance : mortgageCalculator.getRemainingBalances()) {
            System.out.println(currency.format(balance));
        }
    }
}
