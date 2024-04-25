const goToUrl = (anUrl) => {
	window.location = anUrl;
};

const addHashToCurrentPage = (aHash) => {
	window.location.hash = aHash;
};

export { goToUrl, addHashToCurrentPage };
