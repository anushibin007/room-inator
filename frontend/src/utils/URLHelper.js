import Constants from "./Constants";
import { getJSONKeyForCriteria, getQueryForCriteriaAndValue } from "./JSONHelper";

const goToUrl = (anUrl) => {
	window.location = anUrl;
};

const addHashToCurrentPage = (aHash) => {
	window.location.hash = aHash;
};

const getURLForCriteriaAndValue = (aCriteria, aCriteriaValue) => {
	const backendRoot = Constants.BACKEND_SERVER_ROOT;
	if (!backendRoot) {
		console.error("BACKEND_SERVER_ROOT is undefined");
		return undefined;
	}
	const jsonKey = getJSONKeyForCriteria(aCriteria);
	if (!jsonKey) {
		return undefined;
	}

	var queryFilter = getQueryForCriteriaAndValue(aCriteria, aCriteriaValue);

	return `${backendRoot}/${jsonKey}${queryFilter ? queryFilter : ""}`;
};

export { goToUrl, addHashToCurrentPage, getURLForCriteriaAndValue };
