from num2words import num2words

def number_to_words(number):
    # Convert the number to words
    words = num2words(number)
    return words

# Example usage
number = 100
print(number_to_words(number))
