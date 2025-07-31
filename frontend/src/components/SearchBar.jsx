// Bootstrap
import { useEffect, useState } from "react";
import Input from "@mui/joy/Input";
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
				sx={{
					borderRadius: "12px",
					border: "1px solid rgba(0,0,0,0.08)",
					background: "rgba(255,255,255,0.9)",
					backdropFilter: "blur(10px)",
					transition: "all 0.2s ease",
					"&:hover": {
						borderColor: "#667eea",
						boxShadow: "0 4px 12px rgba(102, 126, 234, 0.15)"
					},
					"&:focus-within": {
						borderColor: "#667eea",
						boxShadow: "0 4px 12px rgba(102, 126, 234, 0.25)"
					}
				}}
			/>
		</>
	);
}

export default SearchBar;
