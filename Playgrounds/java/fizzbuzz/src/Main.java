import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Number: ");
        int input = scanner.nextInt();

        String result = "";

        if(input % 5 == 0) {
            result = result + "Fizz";
        }
        if(input % 3 == 0) {
            result = result + "Buzz";
        }

        if(!result.isEmpty()) {
            System.out.println(result);
        } else {
            System.out.println(input);
        }
    }
}