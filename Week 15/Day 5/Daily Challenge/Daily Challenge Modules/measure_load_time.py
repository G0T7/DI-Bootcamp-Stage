import requests
import time

def measure_load_time(url):
    start_time = time.time()
    response = requests.get(url)
    end_time = time.time()
    
    load_time = end_time - start_time
    return load_time

def main():
    urls = [
        "https://www.google.com",
        "https://www.ynet.co.il",
        "https://www.imdb.com",
        "https://www.wikipedia.org",
        "https://www.github.com"
    ]
    
    for url in urls:
        try:
            load_time = measure_load_time(url)
            print(f"The load time for {url} is {load_time:.4f} seconds.")
        except requests.exceptions.RequestException as e:
            print(f"Failed to load {url}: {e}")

if __name__ == "__main__":
    main()
