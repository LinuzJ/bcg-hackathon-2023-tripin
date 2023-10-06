Agreed endpoint input

```
/generate-trip
```

Body:

```
{
    starting_position: float[], # List of length 2 with long and lat as float
    activity: float,
    climate: float,
    budget: float,
    distance: float,
    time_of_year: string,
    single_trip: bool,
}
```

Return:
Something

```
{
    trips: [
        {
            location: {
                position: float[], # [long, lat]
                name: string,
                description: string
            },
            emission: float,
            cost: float
        }
    ]
}
```

## JSON <-> trips-client

From trips-client we need:

```
{
    trips: [
        {
            position: float[], # [long, lat]
            name: string,
            description: string
        }
    ]
}
```
