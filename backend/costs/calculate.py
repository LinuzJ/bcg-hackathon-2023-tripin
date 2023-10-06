import requests
from datetime import datetime
from utils.distance import get_distance

def calculate_cost(start: tuple[float], end: tuple[float], travel_mode: str):
    distance = get_distance(start, end, travel_mode)
    if travel_mode == "CAR":
        return _car_cost(distance, start, end)
    if travel_mode == "PLANE":
        return _plane_cost(distance, start, end)
    if travel_mode == "TRAIN":
        return _train_cost(distance, start, end)
    if travel_mode == "BUS":
        return _train_cost(distance, start, end)


def _car_cost(distance: float, start: tuple[float], end: tuple[float]) -> float:
    # Simple gas price * distance type calculation
    return 1.0


def _train_cost(distance: float, start: tuple[float], end: tuple[float]) -> float:
    # Utilize some external API to calculate train prices from location to destination
    return 1.0


def _plane_cost(distance: float, start: tuple[float], end: tuple[float]) -> float:
    # Utilize some external API to calculate flight prices from location to destination
    start_airport = _get_closest_airport(start[0], start[1])
    end_airport = _get_closest_airport(end[0], end[1])

    prices = _get_flight_prices(start_airport, end_airport, datetime.now().strftime('%Y-%m-%d'))
    print(prices)
    return 1.0

def _get_flight_prices(origin, destination, date):
    url = "https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/{}/{}/{}?apiKey=sh428739766321522266746152871799".format(origin, destination, date)
    
    headers = {
        "Accept": "application/json"
    }

    response = requests.get(url, headers=headers)
    data = response.json()
    print(data)
    # Extract and return the prices (or any other data you need)
    # This is a simplified extraction; the actual API response might be more complex
    prices = [quote["MinPrice"] for quote in data.get("Quotes", [])]
    return prices

def _get_closest_airport(lat, lon):
    base_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
    params = {
        "location": f"{lat},{lon}",
        "radius": 50000,  # Search within 50 km radius. You can adjust this value.
        "type": "airport",
        "key": "AIzaSyAWEPohy9CdHpz6j8-_zLDRsSWoDI9b2YU"
    }
    
    response = requests.get(base_url, params=params)
    data = response.json()

    # Check if results are available
    if data['status'] == 'OK':
        # Take the first result as the closest airport
        airport = data['results'][0]
        return {
            "name": airport['name'],
            "address": airport.get('vicinity', ''),
            "latitude": airport['geometry']['location']['lat'],
            "longitude": airport['geometry']['location']['lng']
        }
    else:
        return None
