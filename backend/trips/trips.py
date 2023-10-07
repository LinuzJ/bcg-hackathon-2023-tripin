from utils.distance import get_distance
from utils.helpers import get_coordinates
from costs.calculate import calculate_cost
from emissions.calculate import calculate_emissions
from openapi.openapi_client import fetch_trips

def generate_trips(input, max_retries=0):
    
    try:
        generated_trips = fetch_trips(input)
        start_coordinates = get_coordinates(input["starting_position"])

        for trip in generated_trips["trips"]:
            start = start_coordinates
            end = trip["position"]
            trans_type = trip["transportation"]
            
            distance = get_distance(start[0], start[1], end[0], end[1], trans_type, input["starting_position"], trip["name"])
            trip["travel_distance"] = distance
            
            emissions = calculate_emissions(distance, trans_type)
            trip["emission"] = emissions

            start_airport = trip["start_airport"]
            end_airport = trip["end_airport"]

            cost = calculate_cost(distance, trans_type, start_airport=start_airport, end_airport=end_airport)
            trip["cost"] = cost

    except Exception as e:
        if max_retries > 3:
            raise Exception
        else:
            generate_trips(input, max_retries=max_retries+1)

    return generated_trips
