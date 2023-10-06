Agreed endpoint input

```
/generate-trip
```

Body:

```
{
    starting_position: float[], # List of length 2 with long and lat as float
    activity: string,
    climate: string,
    budget: float,
    time_of_year: string,
    single_trip: bool,
    duration: string,
    <!-- distance: float, --> Add later?
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
            transportation: string,
            emission: float,
            cost: float
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
