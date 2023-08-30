import java.text.NumberFormat;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        final byte MONTHS_IN_YEAR = 12;
        final byte PERCENT = 100;

        Scanner scanner = new Scanner(System.in);

        System.out.println("Hello and welcome!");

        System.out.print("Principal: ");
        double principal = Double.parseDouble(scanner.nextLine().trim());


        System.out.print("Annual Interest rate: ");
        double annualInterestRate = Double.parseDouble(scanner.nextLine().trim());
        double monthlyInterestPercentage = annualInterestRate / PERCENT / MONTHS_IN_YEAR;

        System.out.print("Period (Years): ");
        int periodInYears = Integer.parseInt(scanner.nextLine().trim());
        int numberOfPayments = periodInYears * 12;

        double up = monthlyInterestPercentage * Math.pow(1 + monthlyInterestPercentage, numberOfPayments);
        double down = Math.pow(1 + monthlyInterestPercentage, numberOfPayments) - 1;

        String mortgage = NumberFormat.getCurrencyInstance().format(principal * (up / down));
        System.out.printf("Mortgage: %s\n", mortgage);

        scanner.close();
    }
}