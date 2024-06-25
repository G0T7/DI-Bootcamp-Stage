# anagrams.py
from anagram_checker import AnagramChecker

def get_user_input():
    while True:
        user_input = input("Enter a word (or 'exit' to quit): ").strip()
        
        if user_input.lower() == 'exit':
            return None
        
        # Check for valid input
        if ' ' in user_input:
            print("Error: Only a single word is allowed.")
            continue
        if not user_input.isalpha():
            print("Error: Only alphabetic characters are allowed.")
            continue
        
        return user_input

def main():
    wordlist_file = 'wordlist.txt'  # Replace with your word list file path
    checker = AnagramChecker(wordlist_file)
    
    while True:
        print("\n=== Anagram Checker ===")
        print("1. Enter a word")
        print("2. Exit")
        
        choice = input("Enter your choice (1 or 2): ").strip()
        
        if choice == '1':
            word = get_user_input()
            if word:
                if checker.is_valid_word(word):
                    anagrams = checker.get_anagrams(word)
                    print(f"\nYOUR WORD: \"{word.upper()}\"")
                    print("This is a valid English word.")
                    print(f"Anagrams for your word: {', '.join(anagrams)}.\n")
                else:
                    print(f"\nYOUR WORD: \"{word.upper()}\"")
                    print("This is not a valid English word.\n")
        elif choice == '2':
            print("Exiting program. Goodbye!")
            break
        else:
            print("Invalid choice. Please enter 1 or 2.")

if __name__ == "__main__":
    main()
