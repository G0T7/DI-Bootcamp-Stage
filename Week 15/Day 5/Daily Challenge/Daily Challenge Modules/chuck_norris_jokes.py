import requests
import time

def measure_load_time(url):
    start_time = time.time()
    response = requests.get(url)
    end_time = time.time()
    
    load_time = end_time - start_time
    return load_time, response

def get_jokes(url, num_jokes):
    jokes = []
    total_load_time = 0

    for _ in range(num_jokes):
        try:
            load_time, response = measure_load_time(url)
            total_load_time += load_time
            if response.status_code == 200:
                joke = response.json().get('value')
                jokes.append(joke)
            else:
                jokes.append("Failed to retrieve joke.")
        except requests.exceptions.RequestException as e:
            jokes.append(f"Request failed: {e}")
    
    return jokes, total_load_time

def main():
    url = "https://api.chucknorris.io/jokes/random"
    num_jokes = 30
    
    jokes, total_load_time = get_jokes(url, num_jokes)
    
    print(f"Total load time for {num_jokes} jokes: {total_load_time:.4f} seconds.")
    print(f"Average load time per joke: {total_load_time/num_jokes:.4f} seconds.")
    
    for idx, joke in enumerate(jokes, 1):
        print(f"Joke {idx}: {joke}")

if __name__ == "__main__":
    main()
