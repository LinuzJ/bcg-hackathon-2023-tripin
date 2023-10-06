def car_cost(distance: float) -> float:
    # Simple gas price * distance type calculation
    return 1.0


def train_cost(distance: float, start: tuple[float], end: tuple[float]) -> float:
    # Utilize some external API to calculate train prices from location to destination
    return 1.0


def plane_cost(distance: float, start: tuple[float], end: tuple[float]) -> float:
    # Utilize some external API to calculate flight prices from location to destination
    return 1.0
