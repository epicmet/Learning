import java.text.NumberFormat;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int principal = (int)readNumber("Principal ($1K - $1M): ", 1000, 1_000_000);
        float annualInterestRate = (float)readNumber("Annual Interest rate: ", 1, 30);
        byte periodInYears = (byte)readNumber("Period (Years): ", 1, 30);

        String mortgageFormatted = NumberFormat.getCurrencyInstance().format(calculateMortgage(principal, annualInterestRate, periodInYears));
        System.out.printf("Mortgage: %s\n", mortgageFormatted);
    }

    public static double readNumber(String prompt, double min, double max) {
        Scanner scanner = new Scanner(System.in);
        double value;

        while(true) {
            System.out.print(prompt);
            value = scanner.nextDouble();
            if(value >= min && value <= max) {
                break;
            }
            System.out.println("Enter a value between " + min + " and " + max);
        }

        return value;
    }

    public static double calculateMortgage(int principal, float annualInterestRate, byte periodInYears){
        final byte MONTHS_IN_YEAR = 12;
        final byte PERCENT = 100;

        short numberOfPayments = (short)(periodInYears * MONTHS_IN_YEAR);
        float monthlyInterestPercentage = annualInterestRate / PERCENT / MONTHS_IN_YEAR;

        double up = monthlyInterestPercentage * Math.pow(1 + monthlyInterestPercentage, numberOfPayments);
        double down = Math.pow(1 + monthlyInterestPercentage, numberOfPayments) - 1;

        return principal * (up/down);
    }
}