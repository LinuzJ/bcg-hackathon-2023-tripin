import json
from trips.helpers import haversine_distance
from openapi.openapi_client import fetch_trips


def _calculate_emission(start: tuple[float], end: tuple[float], type: str) -> float:
    """
        Calculates the estimated emissions from start to finish point based on transport type

        TODO: Change to use ecternal APIs?

    """
    lat1, lon1 = start
    lat2, lon2 = end

    # Calculate direct (plane) distance using haversine formula
    distance_straight_line = haversine_distance(lat1, lon1, lat2, lon2)

    # Determine if long-haul or short-haul
    if type == "PLANE" and distance_straight_line > 3000:
        type = "PLANE_LONG"
    elif type == "PLANE" and distance_straight_line <= 3000:
        type = "PLANE_SHORT"

    try:
        with open("trips/static/emissions.json") as emission_file:
            emission_data = json.load(emission_file)
        with open("trips/static/distance_multiples.json") as distance_file:
            distance_multiples = json.load(distance_file)

        distance = distance_straight_line * \
            distance_multiples[type] * emission_data[type]
    except Exception as error:
        print(error)
        return distance_straight_line

    return distance


def generate_trips(input):
    trips = fetch_trips(input)

    # Calculate emossions based on trips
    for trip in trips["trips"]:
        start = input["starting_position"]
        end = trip["position"]
        trans_type = trip["transportation"]
        emissions = _calculate_emission(start, end, trans_type)
        trip["emission"] = emissions

    return trips

    # Calculate cost based on trips
    # cost = calculate_cost(trips)

    # Aggregate data into return
    # return_data = {
    # }
    # Return trips + transportation options
    return 1
    # Figure out transport options
