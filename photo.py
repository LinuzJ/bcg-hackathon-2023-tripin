import requests
import os


def photo_generator(location):
    # Define your API key
    api_key = os.environ.get("GOOGLE_API_KEY")
    # Step 1: Perform a Place Search
    search_endpoint = "https://maps.googleapis.com/maps/api/place/textsearch/json"
    search_params = {
        'query': f"{location}",
        'key': api_key
    }

    response = requests.get(search_endpoint, params=search_params)
    if response.status_code == 200:
        data = response.json()
        # Check if there are results
        if 'results' in data and len(data['results']) > 0:
            # Extract the first result's photo_reference (you can loop through results if needed)
            photo_reference = data['results'][0].get(
                'photos', [])[0].get('photo_reference', None)
            if photo_reference:
                # Step 2: Use the photo_reference to fetch the image
                photo_endpoint = "https://maps.googleapis.com/maps/api/place/photo"
                photo_params = {
                    'maxwidth': '400',
                    'photoreference': photo_reference,
                    'key': api_key
                }
                photo_response = requests.get(
                    photo_endpoint, params=photo_params)
                if photo_response.status_code == 200:
                    # Step 3: Save the image to a file
                    with open('photo.jpg', 'wb') as file:
                        file.write(photo_response.content)
                    print("Photo downloaded successfully.")
                else:
                    print(f"Error downloading photo: {
                          photo_response.status_code} - {photo_response.text}")
            else:
                print("No photo_reference found in the search results.")
        else:
            print("No results found for the search query.")
    else:
        print(f"Error searching for places: {
              response.status_code} - {response.text}")


photo_generator("Brussels")
