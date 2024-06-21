import requests
import json

def fetch_gifs():
    # Giphy API endpoint URL
    api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
    search_query = "hilarious"
    rating = "g"
    url = f"https://api.giphy.com/v1/gifs/search?q={search_query}&rating={rating}&api_key={api_key}"

    # Send GET request to Giphy API
    response = requests.get(url)

    # Check if request was successful (status code 200)
    if response.status_code == 200:
        # Convert response to JSON
        data = response.json()

        # Filter gifs with height > 100
        filtered_gifs = [gif for gif in data['data'] if int(gif['images']['original']['height']) > 100]

        # Return the length of the filtered GIFs
        print(f"Number of GIFs with height > 100: {len(filtered_gifs)}")

        # Return only the first 10 GIFs
        return filtered_gifs[:10]
    else:
        # If request was not successful, print an error message
        print(f"Error fetching GIFs: Status Code {response.status_code}")
        return None

# Fetch and process GIFs
gifs = fetch_gifs()

# Print the first 10 GIFs if they are fetched successfully
if gifs:
    print("\nFirst 10 GIFs:")
    for index, gif in enumerate(gifs, start=1):
        print(f"{index}. {gif['images']['original']['url']}")
