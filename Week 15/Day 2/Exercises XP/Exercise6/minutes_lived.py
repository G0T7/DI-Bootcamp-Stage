import datetime

def minutes_lived(birthdate):
    # Calculate the difference between the current datetime and the birthdate
    current_datetime = datetime.datetime.now()
    delta = current_datetime - birthdate

    # Calculate the total number of minutes lived
    minutes_lived = delta.total_seconds() / 60

    # Format the output message
    message = f"You have lived approximately {int(minutes_lived):,} minutes in your life."
    
    return message

# Example usage (this line is optional and can be removed):
if __name__ == "__main__":
    # Example birthdate (change as per your format)
    birthdate = datetime.datetime(1990, 5, 15, 8, 30)  # May 15th, 1990 at 08:30 AM
    print(minutes_lived(birthdate))
