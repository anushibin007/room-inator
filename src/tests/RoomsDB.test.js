import { describe, it, expect, test } from "vitest";
import Rooms from "../data/RoomsDB";

describe("Validate RoomsDB", () => {
	const allRooms = Rooms;

	allRooms.forEach((room) => {
		it(`checking undefined for Room ID ${room.id}`, () => {
			// Check RoomsDB.js to
			// understand the meaning of each key
			expect(room.id).not.toBeUndefined();
			expect(room.c).not.toBeUndefined();
			expect(room.l).not.toBeUndefined();
			expect(room.b).not.toBeUndefined();
			expect(room.f).not.toBeUndefined();
			expect(room.n).not.toBeUndefined();
			expect(room.s).not.toBeUndefined();
			expect(room.i).not.toBeUndefined();
			expect(room.wb).not.toBeUndefined();
			expect(room.pr).not.toBeUndefined();
		});
	});

	allRooms.forEach((room) => {
		it(`checking correct datatype for Room ID ${room.id}`, () => {
			expect(typeof room.id).toBe("number");
			expect(typeof room.c).toBe("string");
			expect(typeof room.l).toBe("string");
			expect(typeof room.b).toBe("string");
			expect(typeof room.f).toBe("number");
			expect(typeof room.n).toBe("string");
			expect(typeof room.s).toBe("number");
			expect(typeof room.i).toBe("object");
			expect(typeof room.wb).toBe("boolean");
			expect(typeof room.pr).toBe("boolean");
		});
	});
});
