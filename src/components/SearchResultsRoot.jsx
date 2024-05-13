// React
import React, { useEffect, useState } from "react";

import SearchResultsGridView from "./SearchResultsGridView";
import SearchResultsListView from "./SearchResultsListView";
import Constants from "../utils/Constants";

function SearchResultsRoot({ darkMode, viewMode }) {
	const [rooms, setCountries] = useState(undefined);

	useEffect(() => {
		loadRooms();
	}, []);

	const loadRooms = async () => {
		const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/rooms`);
		const data = await response.json();
		setCountries(data);
	};

	return (
		<>
			{viewMode === "grid" && <SearchResultsGridView rooms={rooms} darkMode={darkMode} />}
			{viewMode === "list" && <SearchResultsListView rooms={rooms} darkMode={darkMode} />}
			{viewMode != "grid" && viewMode != "list" && (
				<p>Invalid view mode selected - [{viewMode}]</p>
			)}
		</>
	);
}

export default SearchResultsRoot;
