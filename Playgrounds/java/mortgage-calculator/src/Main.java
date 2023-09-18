import java.text.NumberFormat;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        final byte MONTHS_IN_YEAR = 12;
        final byte PERCENT = 100;

        int principal = 0;
        float monthlyInterestPercentage = 0;
        int numberOfPayments = 0;

        Scanner scanner = new Scanner(System.in);

        System.out.println("Hello and welcome!");

        while(true) {
            System.out.print("Principal ($1K - $1M): ");
            principal = scanner.nextInt();
            if(principal >= 1_000 && principal <= 1_000_000) {
                break;
            }
            System.out.println("Enter a number between 1,000 and 1,000,000.");
        }

        while(true) {
            System.out.print("Annual Interest rate: ");
            float annualInterestRate = scanner.nextFloat();
            if(annualInterestRate >= 1 && annualInterestRate <= 30){
                monthlyInterestPercentage = annualInterestRate / PERCENT / MONTHS_IN_YEAR;
                break;
            }
            System.out.println("Enter a value between 1 and 30.");
        }

        while(true) {
            System.out.print("Period (Years): ");
            byte periodInYears = scanner.nextByte();
            if(periodInYears >= 1 && periodInYears <= 30) {
                numberOfPayments = periodInYears * 12;
                break;
            }
        }

        double up = monthlyInterestPercentage * Math.pow(1 + monthlyInterestPercentage, numberOfPayments);
        double down = Math.pow(1 + monthlyInterestPercentage, numberOfPayments) - 1;

        String mortgage = NumberFormat.getCurrencyInstance().format(principal * (up / down));
        System.out.printf("Mortgage: %s\n", mortgage);

        scanner.close();
    }
}