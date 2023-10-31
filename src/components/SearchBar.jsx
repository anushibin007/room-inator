// Bootstrap
import { useEffect, useState } from "react";
import RoomsService from "../service/RoomsService";
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
	const lunrIndex = lunr(async function () {
		const allRooms = await RoomsService.getAllRooms();

		// id is the primary key
		this.ref("id");

		this.field("c", { boost: 10 }); // index country
		this.field("l", { boost: 50 }); // index location
		this.field("b", { boost: 90 }); // index building
		this.field("f", { boost: 60 }); // index floor
		this.field("n", { boost: 100 }); // index name

		allRooms?.forEach(function (aRoom) {
			this.add(aRoom);
		}, this);
	});

	const handleSearchInputChange = (e) => {
		setSearchInput(e.target.value);
	};

	useEffect(() => {
		filterData();
	}, [searchInput]);

	/**
	 * A new filter method that uses the
	 * lunr index that we build in the
	 * beginning of the app load.
	 *
	 * @param {*} aSearchInput
	 * @returns
	 */
	const filterDataByLunr = async (aSearchInput) => {
		const allRooms = await RoomsService.getAllRooms();
		// Ignore empty string searches
		if (!aSearchInput || aSearchInput.trim().length <= 0) {
			return allRooms;
		}

		const indexSearchResult = lunrIndex.search(`*${aSearchInput}*`);
		console.log(indexSearchResult);
		var searchedRooms = [];
		indexSearchResult.forEach((anIndexResult) => {
			searchedRooms.push(
				allRooms.filter((aRoom) => {
					return aRoom.id == anIndexResult.ref;
				})[0]
			);
		});
		console.log(searchedRooms);
		setRooms(searchedRooms);
	};

	/**
	 * Normal search without lunr
	 *
	 * @param {*} aSearchInput
	 * @returns
	 */
	const filterData = async () => {
		const allRooms = await RoomsService.getAllRooms();
		// Ignore empty string searches
		if (!searchInput || searchInput.trim().length <= 0) {
			setRooms(allRooms);
			return;
		}

		const searchedRooms = allRooms.filter((aRoom) => {
			if (aRoom.n && aRoom.n.toLowerCase().includes(searchInput.toLowerCase())) {
				return true;
			}
		});

		console.log(searchedRooms);
		setRooms(searchedRooms);
	};

	return (
		<>
			<Input
				size="sm"
				placeholder="Search by Room Name"
				aria-label="Search for rooms by Room Name"
				value={searchInput}
				onChange={handleSearchInputChange}
			/>
		</>
	);
}

export default SearchBar;
