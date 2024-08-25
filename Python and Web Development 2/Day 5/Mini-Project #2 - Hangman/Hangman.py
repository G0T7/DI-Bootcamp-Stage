import random

def choose_word():
    wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
    return random.choice(wordslist)

def display_word(word, guessed_letters):
    """
    Display the current state of the word with letters revealed and others as stars (*).
    """
    display = ""
    for char in word:
        if char.lower() in guessed_letters:
            display += char + " "
        elif char == ' ':
            display += " / "
        else:
            display += "* "
    return display.strip()

def hangman():
    word = choose_word()
    guessed_letters = []
    attempts = 6  # Total body parts before game over
    print("Welcome to Hangman!")
    
    while True:
        print("\n" + display_word(word, guessed_letters))
        
        if display_word(word, guessed_letters).replace(" ", "").replace("/", "").replace("*", "") == word:
            print("\nCongratulations! You guessed the word correctly: " + word)
            break
        
        if attempts == 0:
            print("\nSorry, you are out of attempts! The word was: " + word)
            break
        
        guess = input("Guess a letter or the whole word(s): ").lower()
        
        if len(guess) > 1 and guess == word: # Check if the whole word(s) is correct
            print("\nCongratulations! You guessed the word correctly: " + word)
            break
        elif len(guess) > 1 and guess != word: # Check if the whole word(s) is wrong
            print("\nSorry, that's not the word! Try again.")
            attempts -= 1
            continue
        
        if guess in guessed_letters:
            print("\nYou've already guessed the letter '{}'.".format(guess))
            continue
        
        guessed_letters.append(guess)
        
        if guess in word:
            print("\nCorrect!")
        else:
            print("\nWrong guess!")
            attempts -= 1
        
        print("Attempts left: ", attempts)
    
    print("\nGame Over. Thanks for playing Hangman!")

# Run the game
hangman()
