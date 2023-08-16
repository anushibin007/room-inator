// Bootstrap
import { useEffect, useState } from "react";
import Rooms from "../data/RoomsDB";
import lunr from "lunr";
import { Input } from "@mui/joy";

function SearchBar({ rooms, setRooms }) {
	const [searchInput, setSearchInput] = useState("");

	/**
	 *
	 * The lunr index is built locally when
	 * the app renders for the first time in
	 * the UI.
	 *
	 * TODO: change this to happen at build
	 * and just bundle the index with the
	 * app artifact. Read more here:
	 * https://lunrjs.com/guides/index_prebuilding.html
	 *
	 */
	const lunrIndex = lunr(function () {
		// id is the primary key
		this.ref("id");

		this.field("c", { boost: 10 }); // index country
		this.field("l", { boost: 50 }); // index location
		this.field("b", { boost: 90 }); // index building
		this.field("f", { boost: 60 }); // index floor
		this.field("n", { boost: 100 }); // index name

		Rooms.forEach(function (aRoom) {
			this.add(aRoom);
		}, this);
	});

	const handleSearchInputChange = (e) => {
		setSearchInput(e.target.value);
	};

	useEffect(() => {
		setRooms(filterData(searchInput));
	}, [searchInput]);

	/**
	 * This is the old simple JS
	 * method that uses plain JS
	 * functions to perform the search.
	 *
	 * @deprecated use filterData instead
	 * @param {*} aSearchInput
	 * @returns
	 */
	const oldFilterData = (aSearchInput) => {
		const searchedRooms = Rooms.filter((aRoom) => {
			return aRoom.n.toLowerCase().includes(aSearchInput.toLowerCase());
		});
		return searchedRooms;
	};

	/**
	 * A new filter method that uses the
	 * lunr index that we build in the
	 * beginning of the app load.
	 *
	 * @param {*} aSearchInput
	 * @returns
	 */
	const filterData = (aSearchInput) => {
		// Ignore empty string searches
		if (!aSearchInput || aSearchInput.trim().length <= 0) {
			return Rooms;
		}

		// TODO: Search partial words too
		const indexSearchResult = lunrIndex.search(`${aSearchInput}`);
		console.log(indexSearchResult);
		var searchedRooms = [];
		indexSearchResult.forEach((anIndexResult) => {
			searchedRooms.push(
				Rooms.filter((aRoom) => {
					return aRoom.id == anIndexResult.ref;
				})[0]
			);
		});
		console.log(searchedRooms);
		return searchedRooms;
	};

	return (
		<>
			<Input
				size="sm"
				placeholder="Search"
				aria-label="Search for rooms"
				value={searchInput}
				onChange={handleSearchInputChange}
			/>
		</>
	);
}

export default SearchBar;
