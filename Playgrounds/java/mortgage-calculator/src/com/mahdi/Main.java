package com.mahdi;

public class Main {


    public static void main(String[] args) {
        int principal = (int) Console.readNumber("Principal ($1K - $1M): ", 1000, 1_000_000);
        float annualInterestRate = (float) Console.readNumber("Annual Interest rate: ", 1, 30);
        byte periodInYears = (byte) Console.readNumber("Period (Years): ", 1, 30);

        var mortgageCalculator =  new MortgageCalculator(principal, annualInterestRate, periodInYears);
        var report = new MortgageReport(mortgageCalculator);

        report.printMortgage();
        report.printPaymentSchedule();
    }

}