// React
import React from "react";

import SearchResultsGridView from "./SearchResultsGridView";
import SearchResultsListView from "./SearchResultsListView";

function SearchResultsRoot({ rooms, darkMode, viewMode }) {
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
