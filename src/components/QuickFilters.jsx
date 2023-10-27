// React
import React, { useEffect, useState } from "react";
// MUI
import Chip from "@mui/joy/Chip";
// DB
import RoomsService from "../service/RoomsService";
// Utils
import { sortAscending } from "../utils/SortFunctions";

function QuickFilters({ rooms, setRooms }) {
	/**
	 * This variable holds the state of the
	 * the filter that the user has clicked
	 * so far.
	 */
	const [quickFilter, setQuickFilter] = useState({
		c: undefined,
		l: undefined,
		b: undefined,
		f: undefined,
		n: undefined,
		s: undefined,
	});

	/**
	 * This state holds the values of
	 * all available filters in the
	 * filter bar
	 */
	const [filterBar, setFilterBar] = useState({
		c: undefined,
		l: undefined,
		b: undefined,
		f: undefined,
		n: undefined,
		s: undefined,
	});

	const updateFilterBar = (someRooms) => {
		setFilterBar({
			c: [...new Set(someRooms.map((someRoom) => someRoom.c))],
			l: [...new Set(someRooms.map((someRoom) => someRoom.l))],
			b: [...new Set(someRooms.map((someRoom) => someRoom.b))],
			f: [...new Set(someRooms.map((someRoom) => someRoom.f))],
			n: [...new Set(someRooms.map((someRoom) => someRoom.n))],
			s: [...new Set(someRooms.map((someRoom) => someRoom.s))],
		});
	};

	const filterResults = async () => {
		const allRooms = await RoomsService.getAllRooms();
		var currentRooms = rooms;

		// Get the names of all available filters
		// This will be something like :
		// ["c", "l", "b", "f", "n", "s", "i"]
		// Note that even though we are not going to
		// filter by "i", we still have it in our array
		// just for fun.
		const availableFilters = Object.keys(allRooms[0]);

		// Now iterate through each possible filter and
		// set the values according to what has been set
		// in the quickFilter
		availableFilters.forEach((availableFilter) => {
			// We need to explicitly compare
			// this to undefined because
			// if(0) is false
			// just like
			// if(undefined) is false
			if (quickFilter[availableFilter] != undefined) {
				currentRooms = currentRooms.filter(
					(someRooms) => quickFilter[availableFilter] == someRooms[availableFilter]
				);
			}
		});
		setRooms(currentRooms);
		updateFilterBar(currentRooms);
	};

	const clearAllFilters = async () => {
		const allRooms = await RoomsService.getAllRooms();
		setRooms(allRooms);
		updateFilterBar(allRooms);
		setQuickFilter({
			c: undefined,
			l: undefined,
			b: undefined,
			f: undefined,
			n: undefined,
			s: undefined,
		});
	};

	/**
	 * On application load:
	 *
	 * 1. Update the filter bar.
	 */
	useEffect(() => {
		updateFilterBar(rooms);
	}, []);

	/**
	 * Whenever the quick filter changes:
	 *
	 * 1. Filter the results based on the
	 * quick filters clicked.
	 */
	useEffect(() => {
		filterResults();
		console.log(quickFilter);
	}, [quickFilter]);

	const handleFilterClick = (e, filterName, filterValue) => {
		// We need to explicitly compare
		// this to undefined because
		// if(0) is false
		// just like
		// if(undefined) is false
		if (quickFilter[filterName] != undefined) {
			// if this quickfilter already
			// has a value, it means that
			// we have already set this
			// quickfilter. In that case, deselect
			// the quickfilter by setting its value
			// to undefined
			//
			// TODO: For now, enabled only forward filtering
			// because the backward filtering is glitchy. Since
			// we have provided an option to clear all the filters,
			// the users can use that.
			//
			// setQuickFilter({ ...quickFilter, [filterName]: undefined });
		} else {
			setQuickFilter({ ...quickFilter, [filterName]: filterValue });
		}
	};

	return (
		<div className="my-3 mx-2">
			<div>Total Rooms: {rooms.length}</div>
			<>
				Filter: Country:
				{filterBar.c &&
					filterBar.c.map((country) => (
						<Chip
							key={country}
							onClick={(e) => handleFilterClick(e, "c", country)}
							className="mx-1"
							bg={
								quickFilter.c == undefined
									? "primary"
									: quickFilter.c == country
									? "success"
									: "primary"
							}
						>
							{country}
						</Chip>
					))}
			</>
			{quickFilter.c && (
				<>
					Location:
					{filterBar.l.map((location) => (
						<Chip
							key={location}
							onClick={(e) => handleFilterClick(e, "l", location)}
							className="mx-1"
							bg={
								quickFilter.l == undefined
									? "primary"
									: quickFilter.l == location
									? "success"
									: "primary"
							}
						>
							{location}
						</Chip>
					))}
				</>
			)}
			{quickFilter.l && (
				<>
					Building:
					{filterBar.b.map((building) => (
						<Chip
							key={building}
							onClick={(e) => handleFilterClick(e, "b", building)}
							className="mx-1"
							bg={
								quickFilter.b == undefined
									? "primary"
									: quickFilter.b == building
									? "success"
									: "primary"
							}
						>
							{building}
						</Chip>
					))}
				</>
			)}
			{quickFilter.b && (
				<>
					Floor:
					{filterBar.f.sort(sortAscending).map((floor) => (
						<Chip
							key={floor}
							onClick={(e) => handleFilterClick(e, "f", floor)}
							className="mx-1"
							bg={
								quickFilter.f == undefined
									? "primary"
									: quickFilter.f == floor
									? "success"
									: "primary"
							}
						>
							{floor}
						</Chip>
					))}
				</>
			)}
			{quickFilter.f && (
				<>
					Seats:
					{filterBar.s.sort(sortAscending).map((seat) => (
						<Chip
							key={seat}
							onClick={(e) => handleFilterClick(e, "s", seat)}
							className="mx-1"
							bg={
								quickFilter.s == undefined
									? "primary"
									: quickFilter.s == seat
									? "success"
									: "primary"
							}
						>
							{seat}
						</Chip>
					))}
				</>
			)}
			<Chip onClick={clearAllFilters} className="mx-1" bg="warning">
				Clear all
			</Chip>
		</div>
	);
}
export default QuickFilters;
