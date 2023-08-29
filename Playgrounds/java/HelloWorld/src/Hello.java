import java.util.Scanner;

public class Hello {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("And you are?");
        String name = scanner.nextLine();

        scanner.close();

        int power = 1000;
        long pp = 100L;

        byte myAss = 10;
        byte halfMyAss = (byte)(myAss / 2);

        System.out.printf("Hello %s\nYour power is %s\n", name, power);
        System.out.println("Your pp size: " + pp);
        System.out.println("You can half of ass: " + halfMyAss);

        char li = 'e';
        char unicodeChar = '\u0044';
        boolean epic = true;

        if(epic) {
            System.out.println("" + li + unicodeChar + unicodeChar + "i" + li);
        }
    }
}