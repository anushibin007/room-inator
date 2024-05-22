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

const buildImageSrcUrl = (anImageId) => {
	var url = "";
	if (Constants.IMAGE_ROOT_DIR_URL != undefined) {
		url = url + Constants.IMAGE_ROOT_DIR_URL;
	}
	url = url + anImageId;
	return url;
};

export { goToUrl, addHashToCurrentPage, getURLForCriteriaAndValue, buildImageSrcUrl };
