from utils.distance import get_distance

def calculate_cost(start: tuple[float], end: tuple[float], travel_mode: str):
    distance = get_distance(start, end, travel_mode)
    if travel_mode == "CAR":
        return _car_cost(distance, start, end)
    if travel_mode == "PLANE":
        return _plane_cost(distance, start, end)


def _car_cost(distance: float, start: tuple[float], end: tuple[float]) -> float:
    # Simple gas price * distance type calculation
    return 1.0


def _train_cost(distance: float, start: tuple[float], end: tuple[float]) -> float:
    # Utilize some external API to calculate train prices from location to destination
    return 1.0


def _plane_cost(distance: float, start: tuple[float], end: tuple[float]) -> float:
    # Utilize some external API to calculate flight prices from location to destination
    return 1.0
