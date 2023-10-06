import math
import requests

def haversine_distance(lat1, lon1, lat2, lon2) -> float:
    """Calculate the great-circle distance between two points on the Earth's surface."""
    R = 6371.0  # Earth radius in kilometers
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = (math.sin(dlat / 2) * math.sin(dlat / 2) +
         math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) *
         math.sin(dlon / 2) * math.sin(dlon / 2))
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return R * c

def get_coordinates(place: str):
    base_url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?"
    params = {
        "input": place,
        "inputtype": "textquery",
        "fields": "geometry/location",
        "key": "AIzaSyAWEPohy9CdHpz6j8-_zLDRsSWoDI9b2YU"
    }

    response = requests.get(base_url, params=params)
    data = response.json()

    if 'candidates' in data and len(data['candidates']) > 0:
        location = data['candidates'][0]['geometry']['location']
        return location['lat'], location['lng']
    else:
        return None