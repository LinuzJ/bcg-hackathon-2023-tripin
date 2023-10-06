import json
from costs.calculate import _get_flight_prices
from costs.calculate import calculate_cost
from emissions.calculate import calculate_emissions
from openapi.openapi_client import fetch_trips


def generate_trips(input):
    generated_trips = fetch_trips(input)

    print("NAME", generated_trips["trips"])

    star_coordinates = _get_coordinates(input["starting_position"])

    # Calculate emissions based on trips
    for trip in generated_trips["trips"]:
        start = star_coordinates
        end = trip["position"]
        trans_type = trip["transportation"]
        
        emissions = calculate_emissions(start, end, trans_type)
        trip["emission"] = emissions

        start_airport = trip["start_airport"]
        end_airport = trip["end_airport"]

        cost = calculate_cost(start, end, trans_type, start_airport=start_airport, end_airport=end_airport)
        trip["cost"] = cost

    return generated_trips

# TODO: Unhard code
def _get_coordinates(place: str):
    return (51.22, 6.77)