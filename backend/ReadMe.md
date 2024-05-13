/countries:
[
    {
        "id": "IN",
        "name": "India",
    }

]
/countries/IN
{
        "id": "IN",
        "name": "India",
		
}

/locations
[
    {
        "id": "MUM",
        "name": "Mumbai",
		"country_id": "IN"
    },
//....
]

/locations/{ID}
{
        "id": "MUM",
        "name": "Mumbai",
		"country_id": "IN"
    }

/locations?country_id=IN
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
	//.....
]
/buildings
[
    {
        "id": "MUM-B1",
        "name": "Building 1",
        "LOCATION_ID": "MUM"
    },
	//...
]
/bulidings?location_id=MUM
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
	//...
]
/rooms
[
    {
        "id": "BGLR-B1-ID1",
        "name": "Room 1",
        "building_id":"MUM-B1",
    },
	    {
        "id": "HYD-B1-ID1",
        "name": "Room 1",
        "building_id":"HYD-B1",
    },
	//...
]
/rooms?building_id=MUM-B1
[
    {
        "id": "BGLR-B1-ID1",
        "name": "Room 1",
        "building_id":"MUM-B1",
    },
	    {
        "id": "BGLR-B1-ID2",
        "name": "Room 2",
        "building_id":"MUM-B1",
    },
	//...
]

/rooms/{id}
{
    "id": "BGLR-B1-ID1",
    "name": "Room 1",
    "building": {id:'MUM-B1', name='Building 1'},
	"location": {id='MUM', name='Mumbai'},
	"country":{id='IN', name='India'},
    "floor": 1,
    "capacity": 100,
    "images": null,
    "whiteboard": null,
    "projector": null,
    "directions": [
        "Room 1 Directions"
    ]
}

