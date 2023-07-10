/**
 * This constant contains an array
 * of all the rooms in the company.
 * The keys are shortened to a single
 * character in order to reduce data
 * consumption.
 *
 * c - country
 * l - location
 * b - building
 * f - floor
 * n - name
 * s - seating capacity
 * i - images
 * wb - whiteboard
 * pr - projector
 * di - directions
 */
const Rooms = [
	{
		id: 1,
		c: "India",
		l: "Hyderabad",
		b: "Main",
		f: 3,
		n: "Meeting Room 1",
		s: 10,
		i: [
			"https://picsum.photos/200/200",
			"https://picsum.photos/200/200",
			"https://picsum.photos/200/200",
			"https://picsum.photos/200/200",
		],
		wb: false,
		pr: false,
		di: "<li>Enter Floor 3</li><li>The first room to your left is Meeting Room 1</li>",
	},
	{
		id: 2,
		c: "India",
		l: "Mumbai",
		b: "Main",
		f: 9,
		n: "Discussion Room 1",
		s: 12,
		i: ["https://picsum.photos/200/200"],
		wb: false,
		pr: false,
		di: "<li>Enter Floor 9</li><li>Turn right and keep walking</li><li>The last meeting room in the corner will be Discussion Room 1</li>",
	},
];
export default Rooms;
