import datetime

def time_until_january_first():
    # Get today's date
    today = datetime.date.today()

    # Calculate January 1st of the next year
    next_year = today.year + 1
    january_first_next_year = datetime.date(next_year, 1, 1)

    # Calculate the difference between today and January 1st of next year
    time_left = january_first_next_year - today

    # Extract days, hours, minutes, and seconds from the difference
    days = time_left.days
    hours, remainder = divmod(time_left.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    # Format the output string
    time_left_str = f"The 1st of January is in {days} days and {hours}:{minutes:02}:{seconds:02} hours."
    
    return time_left_str

# Example usage (this line is optional and can be removed):
if __name__ == "__main__":
    print(time_until_january_first())
