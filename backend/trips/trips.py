from utils.distance import get_distance
from utils.helpers import get_coordinates
from costs.calculate import calculate_cost
from emissions.calculate import calculate_emissions
from openapi.openapi_client import fetch_trips


def generate_trips(input):
    generated_trips = fetch_trips(input)

    try:
        print("NAME", generated_trips["trips"])
    except Exception as e:
        print("ERROR", e)
        print("RETRYING OPENAI GENERATIO")
        generated_trips = fetch_trips(input)

    start_coordinates = get_coordinates(input["starting_position"])
    # Calculate emissions based on trips
    for trip in generated_trips["trips"]:
        start = start_coordinates
        end = trip["position"]
        trans_type = trip["transportation"]
        # _get_alternative_routes(input["starting_position"], trip["name"])
        emissions = calculate_emissions(start, end, trans_type)
        trip["emission"] = emissions

        start_airport = trip["start_airport"]
        end_airport = trip["end_airport"]

        cost = calculate_cost(
            start, end, trans_type, start_airport=start_airport, end_airport=end_airport)
        trip["cost"] = cost

        trip["travel_distance"] = get_distance(
            start[0], start[1], end[0], end[1], trans_type)

    return generated_trips
