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
		b: "South Building",
		f: 3,
		n: "Meeting Room 1",
		s: 10,
		i: [
			"https://picsum.photos/1024/1024",
			"https://picsum.photos/1024/1024",
			"https://picsum.photos/1024/1024",
			"https://picsum.photos/1024/1024",
		],
		wb: false,
		pr: false,
		di: "<li>Enter Floor 3</li><li>The first room to your left is Meeting Room 1</li>",
	},
	{
		id: 2,
		c: "India",
		l: "Mumbai",
		b: "Synergy Park Phase 1",
		f: 9,
		n: "Discussion Room 1",
		s: 12,
		i: ["https://picsum.photos/1024/1024"],
		wb: false,
		pr: false,
		di: "<li>Enter Floor 9</li><li>Turn right and keep walking</li><li>The last meeting room in the corner will be Discussion Room 1</li>",
	},
	{
		id: 3,
		c: "UAE",
		l: "Dubai",
		b: "Building 10",
		f: 18,
		n: "Conference Room 1",
		s: 120,
		i: ["https://picsum.photos/1024/1024"],
		wb: true,
		pr: true,
		di: "<li>Enter Floor 18</li><li>Turn right and keep walking</li><li>Walk 15 more minutes and turn right</li><li>Walk 20 more minutes and jump twice</li><li>The last meeting room in the corner will be Discussion Room 1</li>",
	},
];
export default Rooms;
