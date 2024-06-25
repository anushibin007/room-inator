const getJSONKeyForCriteria = (aCriteria) => {
	if (aCriteria === "Country") {
		return "countries";
	}
	if (aCriteria === "Location") {
		return "locations";
	}
	if (aCriteria === "Building") {
		return "buildings";
	}
	if (aCriteria === "Room") {
		return "rooms";
	}
	console.error(`No JSON key is defined for criteria [${aCriteria}]`);
	return undefined;
};

const getQueryForCriteriaAndValue = (aCriteria, aCriteriaValue) => {
	if (!aCriteriaValue) {
		// if no criteria is requested, make no query
		return "";
	}

	var queryFilter = undefined;
	if (aCriteria === "Country") {
		queryFilter = undefined;
	}
	if (aCriteria === "Location") {
		queryFilter = "?country_id";
	}
	if (aCriteria === "Building") {
		queryFilter = "?location_id";
	}
	if (aCriteria === "Room") {
		queryFilter = "?building_id";
	}
	if (queryFilter) {
		queryFilter = queryFilter + "=" + aCriteriaValue;
	}
	return queryFilter;
};

export { getJSONKeyForCriteria, getQueryForCriteriaAndValue };
