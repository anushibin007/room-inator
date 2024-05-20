// React
import React, { useEffect, useState } from "react";

import SearchResultsGridView from "./SearchResultsGridView";
import SearchResultsListView from "./SearchResultsListView";
import Constants from "../utils/Constants";
import { useParams } from "react-router-dom";

function SearchResultsRoot({ darkMode, viewMode }) {
	const { roomId } = useParams();
	const [rooms, setRooms] = useState(undefined);
	const [buildingData, setBuildingData] = useState(undefined);

	useEffect(() => {
		loadRooms();
	}, []);

	useEffect(() => {
		if (rooms && rooms[0]) {
			loadBuildingData(rooms[0].buildingId);
		}
	}, [rooms]);

	const loadRooms = async () => {
		const response = await fetch(
			`${Constants.BACKEND_SERVER_ROOT}/rooms?building_id=${roomId}`
		);
		const data = await response.json();
		setRooms(data);
	};

	const loadBuildingData = async (aBuildingId) => {
		const response = await fetch(
			`${Constants.BACKEND_SERVER_ROOT}/buildings-details/${aBuildingId}`
		);
		const responseData = await response.json();
		setBuildingData(responseData);
	};

	return (
		<>
			{viewMode === "grid" && (
				<SearchResultsGridView
					rooms={rooms}
					buildingData={buildingData}
					darkMode={darkMode}
				/>
			)}
			{viewMode === "list" && (
				<SearchResultsListView
					rooms={rooms}
					buildingData={buildingData}
					darkMode={darkMode}
				/>
			)}
			{viewMode != "grid" && viewMode != "list" && (
				<p>Invalid view mode selected - [{viewMode}]</p>
			)}
		</>
	);
}

export default SearchResultsRoot;
