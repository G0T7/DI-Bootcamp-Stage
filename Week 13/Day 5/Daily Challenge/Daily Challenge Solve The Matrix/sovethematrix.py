def decrypt_matrix(matrix_string):
    # Split the matrix_string into rows
    rows = matrix_string.strip().split("\n")
    
    # Determine the number of columns
    num_cols = len(rows[0])  # Assuming all rows have the same length
    
    # Initialize an empty list to store the decoded message for each column
    decoded_columns = []
    
    # Loop through each column
    for col in range(num_cols):
        decoded_column = ""
        # Loop through each row and concatenate the characters in the current column
        for row in rows:
            if col < len(row):  # Check if the column index is within the row length
                char = row[col]
                if char.isalnum():  # Check if the character is alphanumeric
                    decoded_column += char
                else:
                    decoded_column += " "  # Replace non-alphanumeric characters with space
        # Append the decoded column to the list
        decoded_columns.append(decoded_column.strip())  # Strip leading/trailing spaces
    
    # Join all decoded columns to form the final message
    decoded_message = "".join(decoded_columns)
    
    return decoded_message

# Matrix string
matrix_string = """
7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!
"""

# Decrypt the matrix and print the message
decoded_message = decrypt_matrix(matrix_string)
print(decoded_message)
