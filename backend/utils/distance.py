import requests
from utils.helpers import haversine_distance

def get_distance(start_lat, start_long, end_lat, end_long, travel_mode: str, start_place, end_place):

    if travel_mode == "PLANE":
        distance = haversine_distance(start_lat, start_long, end_lat, end_long)
    else:
        try:
            distance = get_maps_distance_location_params(start_place, end_place)
        except Exception as e:
            distance = haversine_distance(start_lat, start_long, end_lat, end_long)*1.3
    return distance

def get_maps_distance_location_params(start, end):
    base_url = "https://maps.googleapis.com/maps/api/directions/json?"
    params = {
        "origin": start,
        "destination": end,
        "alternatives": "false",
        "key": "AIzaSyAWEPohy9CdHpz6j8-_zLDRsSWoDI9b2YU"
    }
    response = requests.get(base_url, params=params)
    data = response.json()
    if data['status'] == 'OK':
        routes = []
        for route in data['routes']:
            route_info = {
                "summary": route['summary'],
                "distance": route['legs'][0]['distance']['text'],
                "duration": route['legs'][0]['duration']['text'],
            }
            routes.append(route_info)
        return float(routes[0]["distance"].split(" ")[0].replace(",", ""))