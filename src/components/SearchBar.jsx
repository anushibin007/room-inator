// Bootstrap
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Rooms from "../data/RoomsDB";

function SearchBar({ rooms, setRooms }) {
	const [searchInput, setSearchInput] = useState("");

	const handleSearchInputChange = (e) => {
		setSearchInput(e.target.value);
	};

	useEffect(() => {
		const searchedRooms = Rooms.filter((aRoom) => {
			return aRoom.n.toLowerCase().includes(searchInput.toLowerCase());
		});
		setRooms(searchedRooms);
	}, [searchInput]);

	return (
		<>
			<Form role="search">
				<Form.Control
					type="search"
					placeholder="Search"
					aria-label="Search"
					value={searchInput}
					onChange={handleSearchInputChange}
					autoFocus
				/>
			</Form>
		</>
	);
}

export default SearchBar;
