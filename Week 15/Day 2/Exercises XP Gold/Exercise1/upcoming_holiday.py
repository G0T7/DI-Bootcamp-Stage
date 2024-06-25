from datetime import datetime, timedelta

def display_upcoming_holiday():
    # Get today's date
    today = datetime.now()

    # Define the upcoming holiday (hardcoded for demonstration)
    holiday_name = "Christmas"
    holiday_date = datetime(today.year, 12, 25)  # Christmas Day

    # Check if Christmas for this year has already passed
    if holiday_date < today:
        holiday_date = holiday_date.replace(year=today.year + 1)

    # Calculate the time remaining until the holiday
    time_remaining = holiday_date - today

    # Convert time remaining into days, hours, minutes, and seconds
    days = time_remaining.days
    total_seconds = time_remaining.seconds
    hours, remainder = divmod(total_seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    # Print the result
    print(f"Today's date is: {today.strftime('%Y-%m-%d')}")
    print(f"The next holiday is {holiday_name} which is in {days} days and {hours}:{minutes}:{seconds} hours.")

# Test the function
if __name__ == "__main__":
    display_upcoming_holiday()
