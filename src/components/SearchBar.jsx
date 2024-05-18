// Bootstrap
import { useEffect, useState } from "react";
import { Input } from "@mui/joy";

function SearchBar({ rooms, setRooms }) {
	const [searchInput, setSearchInput] = useState("");
	const handleSearchInputChange = (e) => {
		setSearchInput(e.target.value);
	};
	useEffect(() => {
		filterData();
	}, [searchInput]);

	/**
	 * Normal search without lunr
	 *
	 * @param {*} aSearchInput
	 * @returns
	 */
	const filterData = async () => {
		// TODO
		console.log("Search feature under development");
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
