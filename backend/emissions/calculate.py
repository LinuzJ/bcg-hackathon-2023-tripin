from utils.distance import get_distance, get_maps_distance
from static.static_data import get_emission_factors

def calculate_emissions(start: tuple[float], end: tuple[float], travel_mode: str):
    
    distance = get_distance(start[0], start[1], end[0], end[1], travel_mode)
    
    emission_factor = get_emission_factors()[travel_mode]

    return distance * emission_factor


