public class NumberToWords {

    // Array of words for single digits
    private static final String[] units = {
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"
    };

    // Array of words for two-digit numbers from 10 to 19
    private static final String[] teens = {
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", 
        "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    };

    // Array of words for tens (20, 30, ..., 90)
    private static final String[] tens = {
        "", "", "Twenty", "Thirty", "Forty", "Fifty", 
        "Sixty", "Seventy", "Eighty", "Ninety"
    };

    // Convert number to words
    public static String convertToWords(int number) {
        if (number == 0) {
            return "Zero";
        }
        if (number < 0) {
            return "Minus " + convertToWords(-number);
        }
        return convert(number);
    }

    // Helper method for conversion
    private static String convert(int number) {
        if (number < 10) {
            return units[number];
        }
        if (number < 20) {
            return teens[number - 10];
        }
        if (number < 100) {
            return tens[number / 10] + (number % 10 != 0 ? " " + units[number % 10] : "");
        }
        if (number < 1000) {
            return units[number / 100] + " Hundred" + (number % 100 != 0 ? " and " + convert(number % 100) : "");
        }
        if (number < 1000000) {
            return convert(number / 1000) + " Thousand" + (number % 1000 != 0 ? " " + convert(number % 1000) : "");
        }
        return "Number too large";
    }

    // Main method for testing
    public static void main(String[] args) {
        int number = 123456;
        System.out.println("Number in words: " + convertToWords(number));
    }
}
