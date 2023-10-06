import json
from costs.calculate import calculate_cost
from emissions.calculate import calculate_emissions
from openapi.openapi_client import fetch_trips


def generate_trips(input):
    generated_trips = fetch_trips(input)

    print("NAME", generated_trips["trips"])
    # Calculate emissions based on trips
    for trip in generated_trips["trips"]:
        start = input["starting_position"]
        end = trip["position"]
        trans_type = trip["transportation"]
        emissions = calculate_emissions(start, end, trans_type)
        trip["emission"] = emissions
        cost = calculate_cost(start, end, trans_type)
        trip["cost"] = cost

    return generated_trips
