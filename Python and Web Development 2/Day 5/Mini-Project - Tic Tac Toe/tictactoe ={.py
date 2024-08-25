# tic_tac_toe.py
# display.py

def display_board(board):
    print("*************")
    for row in board:
        print("* " + " | ".join(row) + " *")
        print("*************")

# input.py

def player_input(player):
    row = int(input(f"Player {player}, enter row (0, 1, or 2): "))
    col = int(input(f"Player {player}, enter column (0, 1, or 2): "))
    return row, col

# check.py

def check_win(board, player):
    for row in board:
        if all([spot == player for spot in row]):
            return True
    
    for col in range(3):
        if all([board[row][col] == player for row in range(3)]):
            return True
    
    if all([board[i][i] == player for i in range(3)]) or all([board[i][2 - i] == player for i in range(3)]):
        return True
    
    return False

# play.py

def play():
    board = [[" " for _ in range(3)] for _ in range(3)]
    current_player = "X"
    for _ in range(9):
        display_board(board)
        row, col = player_input(current_player)
        
        while board[row][col] != " ":
            print("Position already taken. Try again.")
            row, col = player_input(current_player)
        
        board[row][col] = current_player
        
        if check_win(board, current_player):
            display_board(board)
            print(f"Player {current_player} wins!")
            return
        
        current_player = "O" if current_player == "X" else "X"
    
    display_board(board)
    print("It's a tie!")

if __name__ == "__main__":
    play()
