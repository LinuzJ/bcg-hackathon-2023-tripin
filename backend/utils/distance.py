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
                    "latitude": start_long,
                    "longitude": start_lat
                }
            }
        },
        "destination": {
            "location": {
                "latLng": {
                    "latitude": end_long,
                    "longitude": end_lat
                }
            }
        },
        "travelMode": travel_mode
    }

    response = requests.post(url, headers=headers, json=data).json()
    print("inputs : ", start_lat, start_long, end_lat, end_long, travel_mode)
    distance = response["routes"][0]["distanceMeters"]
    
    return distance


def get_distance(start_lat, start_long, end_lat, end_long, travel_mode: str):

    if travel_mode == "PLANE":
        distance = haversine_distance(start_lat, start_long, end_lat, end_long)
    else:
        try:
            distance = get_maps_distance(start_lat, start_long, end_lat, end_long)
            print("GOOGLE")
        except Exception:
            print("FAAAAAILED")
            distance = haversine_distance(start_lat, start_long, end_lat, end_long)*1.3

    return distance
