import Constants from "./Constants";
import { getJSONKeyForCriteria } from "./JSONHelper";

const goToUrl = (anUrl) => {
	window.location = anUrl;
};

const addHashToCurrentPage = (aHash) => {
	window.location.hash = aHash;
};

const getURLForCriteria = (aCriteria) => {
	const backendRoot = Constants.BACKEND_SERVER_ROOT;
	if (!backendRoot) {
		console.error("BACKEND_SERVER_ROOT is undefined");
		return undefined;
	}
	const jsonKey = getJSONKeyForCriteria(aCriteria);
	if (!jsonKey) {
		return undefined;
	}
	return `${backendRoot}/${jsonKey}`;
};

export { goToUrl, addHashToCurrentPage, getURLForCriteria };
