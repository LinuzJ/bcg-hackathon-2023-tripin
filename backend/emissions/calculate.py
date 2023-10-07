from static.static_data import get_emission_factors

def calculate_emissions(distance, travel_mode: str):    
    emission_factor = get_emission_factors()[travel_mode]

    return distance * emission_factor


