// Bootstrap
import { useEffect, useState } from "react";
import { Input } from "@mui/joy";
import { useParams } from "react-router-dom";
import Constants from "../utils/Constants";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ rooms, setRooms }) {
	const [searchInput, setSearchInput] = useState("");
	const { roomId } = useParams();
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
		const response = await fetch(
			`${Constants.BACKEND_SERVER_ROOT}/rooms?building_id=${roomId}&room_name=${searchInput}`
		);
		const data = await response.json();
		setRooms(data);
	};

	return (
		<>
			<Input
				size="sm"
				placeholder="Room name search"
				aria-label="Search for rooms by Room Name"
				value={searchInput}
				onChange={handleSearchInputChange}
				startDecorator={<SearchIcon />}
			/>
		</>
	);
}

export default SearchBar;
