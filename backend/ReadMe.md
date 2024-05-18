/countries

```json
[
	{
		"id": "IN",
		"name": "India"
	},
	{
		"id": "CA",
		"name": "Canada"
	}
]
```

/countries/IN

```json
{
	"id": "IN",
	"name": "India"
}
```

/locations

```json
[
	{
		"id": "MUM",
		"name": "Mumbai",
		"country_id": "IN"
	},
	{
		"id": "HYD",
		"name": "Hyderabad",
		"country_id": "IN"
	},
	{
		"id": "WA",
		"name": "Waterloo",
		"country_id": "CA"
	}
]
```

/locations/MUM

```json
{
	"id": "MUM",
	"name": "Mumbai",
	"country_id": "IN"
}
```

/locations?country_id=IN

```json
[
	{
		"id": "MUM",
		"name": "Mumbai",
		"country_id": "IN"
	},
	{
		"id": "HYD",
		"name": "Hyderabad",
		"country_id": "IN"
	}
]
```

/buildings

```json
[
	{
		"id": "MUM-B1",
		"name": "Building 1",
		"LOCATION_ID": "MUM"
	},
	{
		"id": "MUM-B2",
		"name": "Building 2",
		"LOCATION_ID": "MUM"
	},
	{
		"id": "HYD-B1",
		"name": "Building 1",
		"LOCATION_ID": "HYD"
	}
]
```

/bulidings?location_id=MUM

```json
[
	{
		"id": "MUM-B1",
		"name": "Building 1",
		"LOCATION_ID": "MUM"
	},
	{
		"id": "MUM-B2",
		"name": "Building 2",
		"LOCATION_ID": "MUM"
	}
]
```

/rooms

```json
[
	{
		"id": "MUM-B1-R1",
		"name": "Room 1",
		"building_id": "MUM-B1"
	},
	{
		"id": "HYD-B1-R1",
		"name": "Room 1",
		"building_id": "HYD-B1"
	}
	//...
]
```

/rooms?building_id=MUM-B1

```json
[
	{
		"id": "MUM-B1-R1",
		"name": "Room 1",
		"building_id": "MUM-B1"
	}
	//...
]
```

/rooms/{id}

```json
{
	"id": "MUM-B1-R1",
	"name": "Room 1",
	"building": { "id": "MUM-B1", "name": "Building 1" },
	"location": { "id": "MUM", "name": "Mumbai" },
	"country": { "id": "IN", "name": "India" },
	"floor": 1,
	"capacity": 100,
	"images": null,
	"stationery": ["whiteboard", "projector"],
	"directions": ["Room 1 Directions"]
}
```
