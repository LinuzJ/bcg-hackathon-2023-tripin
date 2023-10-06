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
            position: float[], # [long, lat]
            name: string,
            description: string
            transportation: [
                {
                    emission: float,
                    cost: float,
                    type: string # car, plane, train
                }
            ]
        },
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
