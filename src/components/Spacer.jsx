import { useEffect, useState } from "react";

function Spacer({ spacerForClass }) {
	const [spacerHeight, setSpacerHeight] = useState(0);

	useEffect(() => {
		window.addEventListener("resize", resizeSpacer);
		window.addEventListener("load", resizeSpacer);
	}, []);

	const calculateHeaderHeight = () => {
		const headers = document.getElementsByClassName(spacerForClass);
		if (!headers) {
			return 0;
		}
		const header = headers[0];
		if (!header) {
			return 0;
		}
		return header.clientHeight;
	};

	const resizeSpacer = () => {
		setSpacerHeight(calculateHeaderHeight());
	};

	return (
		<>
			<div id="spacer" style={{ height: spacerHeight }}></div>
		</>
	);
}

export default Spacer;
