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

export { getJSONKeyForCriteria };
