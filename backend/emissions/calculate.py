from utils.distance import get_distance, get_maps_distance
from static.static_data import get_emission_factors
from utils.helpers import haversine_distance

def calculate_emissions(start: tuple[float], end: tuple[float], travel_mode: str):
    distance = get_distance(start, end, travel_mode)
    
    emission_factor = get_emission_factors()[travel_mode]

    return distance * emission_factor


