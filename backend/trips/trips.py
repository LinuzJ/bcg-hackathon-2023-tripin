import json
from costs.calculate import calculate_cost
from emissions.calculate import calculate_emissions
from openapi.openapi_client import fetch_trips


def generate_trips(input):
    trips = fetch_trips(input)
    input_dict = json.loads(input)

    # Calculate emissions based on trips
    for trip in trips["trips"]:
        start = input_dict["starting_position"]
        end = trip["position"]
        trans_type = trip["transportation"]
        emissions = calculate_emissions(start, end, trans_type)
        trip["emission"] = emissions
        cost = calculate_cost(start, end, trans_type)
        trip["cost"] = cost

    return trips
