import matplotlib.pyplot as plt
from datetime import datetime
import pyowm
import pytz

API_KEY = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={54dba0b25b103da08c23ca33773077a1}'  # Replace with your OpenWeatherMap API key
owm = pyowm.OWM(API_KEY)
mgr = owm.weather_manager()

def init_plot():
    plt.ylabel('Humidity (%)')
    plt.title('Humidity Forecast')

def fetch_weather_data(city):
    observation = mgr.weather_at_place(city)
    weather = observation.weather
    return weather

def fetch_forecast_data(city, days=3):
    forecast = mgr.forecast_at_place(city, '3h').forecast
    return forecast

def get_humidity_forecast(forecast, days=3):
    forecast_list = forecast.weathers
    humidity_forecast = []

    for i in range(0, days * 8, 8):  # 8 time intervals in a day for 3-hour intervals
        date = forecast_list[i].reference_time('date')
        humidity = forecast_list[i].humidity
        humidity_forecast.append((date, humidity))
    
    return humidity_forecast

def plot_humidity(humidity_forecast):
    dates = [entry[0].strftime('%m/%d') for entry in humidity_forecast]
    humidities = [entry[1] for entry in humidity_forecast]
    
    fig, ax = plt.subplots()
    bars = ax.bar(dates, humidities, color='blue')

    for bar, humidity in zip(bars, humidities):
        height = bar.get_height()
        ax.text(bar.get_x() + bar.get_width() / 2.0, height, f'{humidity}%', ha='center', va='bottom')

   
