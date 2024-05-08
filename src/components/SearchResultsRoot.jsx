// React
import React from "react";

import SearchResultsGridView from "./SearchResultsGridView";

function SearchResultsRoot({ rooms, darkMode, viewMode }) {
	return (
		<>
			{viewMode === "grid" && <SearchResultsGridView rooms={rooms} darkMode={darkMode} />}
			{viewMode != "grid" && viewMode != "list" && (
				<p>Invalid view mode selected - [{viewMode}]</p>
			)}
		</>
	);
}

export default SearchResultsRoot;
