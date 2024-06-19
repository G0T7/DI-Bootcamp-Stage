from game import Game

def get_user_menu_choice():
    while True:
        choice = input("Menu:\n(g) Play a new game\n(x) Show scores and exit\n: ").lower()
        if choice in ['g', 'x']:
            return choice
        else:
            print("Invalid input. Please enter 'g' or 'x'.")

def print_results(results):
    print("Game Results:")
    print(f"You won {results.get('win', 0)} times")
    print(f"You lost {results.get('loss', 0)} times")
    print(f"You drew {results.get('draw', 0)} times")
    print("\nThank you for playing!\n")

def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}
    while True:
        choice = get_user_menu_choice()
        if choice == 'g':
            game = Game()
            result = game.play()
            results[result] += 1
        else:
            print_results(results)
            break

if __name__ == "__main__":
    main()
