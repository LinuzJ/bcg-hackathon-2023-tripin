from random import random
import requests
from datetime import datetime
from utils.distance import get_distance


def calculate_cost(distance, travel_mode: str, start_airport="JFK", end_airport="LAX"):
    if travel_mode == "DRIVE":
        return _car_cost(distance)
    if travel_mode == "PLANE":
        return _plane_cost(start_airport, end_airport)
    if travel_mode == "TRANSIT" or travel_mode=="TRAIN":
        return _train_cost(distance)


def _car_cost(distance: float) -> float:
    # Simple gas price * distance type calculation
    return distance*1.5

def _train_cost(distance: float) -> float:
    # Utilize some external API to calculate train prices from location to destination
    return distance*0.5

def _plane_cost(start_airport, end_airport) -> float:
    # Utilize some external API to calculate flight prices from location to destination
    # start_airport = _get_closest_airport(start[0], start[1])
    # end_airport = _get_closest_airport(end[0], end[1])
    # return _get_flight_prices(start_airport, end_airport, datetime.now().strftime('%Y-%m-%d'))
    try:
        return _get_flight_prices(start_airport, end_airport, datetime.now().strftime('%Y-%m-%d'))
    except Exception as e:
        return None


def _get_flight_prices(origin, destination, max_retrires=0):
    base_url = "https://partners.api.skyscanner.net/apiservices/v3/flights/indicative/search"

    headers = {
        "x-api-key": "sh428739766321522266746152871799",
        "Content-Type": "application/json"
    }

    data = {
        "query": {
            "market": "UK",
            "locale": "en-GB",
            "currency": "GBP",
            "queryLegs": [
                {
                    "originPlace": {
                        "queryPlace": {
                            "iata": origin  # The IATA code for the "London Heathrow" airport
                        }
                    },
                    "destinationPlace": {
                        "queryPlace": {
                            "iata": destination  # The IATA code for the "London Heathrow" airport
                        }
                    },
                    "anytime": True
                }
            ]
        }
    }

    response = requests.post(base_url, headers=headers, json=data)

    try:
        data = response.json()["content"]
        quotes = data['results']['quotes']
    except Exception as e:
        print(e)
        if max_retrires > 3:
            _get_flight_prices(origin, destination, max_retrires+1)
        else:
            return None

    # Finding the cheapest quote based on minPrice
    cheapest_quote = min(
        quotes.values(), key=lambda x: int(x['minPrice']['amount']))
    cheapest_price = cheapest_quote['minPrice']['amount']

    return float(cheapest_price)
