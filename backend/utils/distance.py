import requests
from utils.helpers import haversine_distance


def get_maps_distance(start_lat, start_long, end_lat, end_long, travel_mode):
    url = "https://routes.googleapis.com/directions/v2:computeRoutes"

    headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": "AIzaSyAWEPohy9CdHpz6j8-_zLDRsSWoDI9b2YU",
        "X-Goog-FieldMask": "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline"
    }

    data = {
        "origin": {
            "location": {
                "latLng": {
                    "latitude": start_lat,
                    "longitude": start_long
                }
            }
        },
        "destination": {
            "location": {
                "latLng": {
                    "latitude": end_lat,
                    "longitude": end_long
                }
            }
        },
        "travelMode": travel_mode
    }

    response = requests.post(url, headers=headers, json=data).json()
    distance = response["routes"][0]["distanceMeters"]

    return distance


def get_distance(start: tuple[float], end: tuple[float], travel_mode: str):
    start_lat, start_long = start[0], start[1]
    end_lat, end_long = end[0], start[1]

    calc_func = haversine_distance if travel_mode == "PLANE" else get_maps_distance

    return calc_func(start_lat, start_long, end_lat, end_long)
