import requests

def fetch_gifs(search_term):
    api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
    rating = "g"
    url = f"https://api.giphy.com/v1/gifs/search?q={search_term}&rating={rating}&api_key={api_key}"

    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        gifs = data.get('data', [])

        if not gifs:
            return None, "No relevant GIFs found. Here are today's trending GIFs:"

        return gifs, None
    else:
        return None, f"Error fetching GIFs: Status Code {response.status_code}"

def fetch_trending_gifs():
    api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
    rating = "g"
    url = f"https://api.giphy.com/v1/gifs/trending?rating={rating}&api_key={api_key}"

    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        gifs = data.get('data', [])

        if not gifs:
            return None, "No trending GIFs found."

        return gifs, None
    else:
        return None, f"Error fetching trending GIFs: Status Code {response.status_code}"

def main():
    search_term = input("Enter a term or phrase to search for GIFs: ").strip()

    if not search_term:
        print("You did not enter a valid search term. Showing today's trending GIFs instead.")
        gifs, message = fetch_trending_gifs()
    else:
        gifs, message = fetch_gifs(search_term)

        if not gifs:
            print(message)
            gifs, message = fetch_trending_gifs()

    if gifs:
        print("\nResults:")
        for index, gif in enumerate(gifs[:10], start=1):
            print(f"{index}. {gif['images']['original']['url']}")

if __name__ == "__main__":
    main()
