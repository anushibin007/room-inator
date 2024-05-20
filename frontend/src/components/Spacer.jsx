import { useEffect, useLayoutEffect, useState } from "react";

/**
 * This component creates a spacer
 * below and above the header and
 * footer divs based on the size of
 * those divs.
 * We calculate the size of the spacer
 * on page load and also whenever the
 * window resizes.
 */
function Spacer({ spacerForClass }) {
	const [spacerHeight, setSpacerHeight] = useState(0);

	useEffect(() => {
		registerEventHandlers();
		return () => {
			unregisterEvnentHandlers();
		};
	}, []);

	// Experimental: This is a React JS
	// alternative to the now commented
	// out useEffect below that is based
	// on document.readyState.
	// If you don't see the Spacer
	// resizing automatically on page load,
	// then comment out this function and
	// uncomment the below legacy code.
	useLayoutEffect(() => {
		resizeSpacer();
	}, []);

	// useEffect(() => {
	// 	if (document.readyState === "complete") {
	// 		console.log({ "document.readyState": document.readyState });
	// 		resizeSpacer();
	// 	}
	// }, [document.readyState]);

	const registerEventHandlers = () => {
		window.addEventListener("resize", resizeSpacer);
	};

	const unregisterEvnentHandlers = () => {
		window.removeEventListener("resize", resizeSpacer);
	};

	const calculateSpacerHeight = () => {
		const spacerReferenceClasses = document.getElementsByClassName(spacerForClass);
		if (!spacerReferenceClasses) {
			console.log(`headers is null for ${spacerForClass}`);
			return 0;
		}
		const spacerReferenceClass = spacerReferenceClasses[0];
		if (!spacerReferenceClass) {
			console.log(`header is null for ${spacerForClass}`);
			return 0;
		}
		return spacerReferenceClass.clientHeight;
	};

	const resizeSpacer = () => {
		setSpacerHeight(calculateSpacerHeight());
	};

	return (
		<>
			<div id="spacer" style={{ height: spacerHeight }}></div>
		</>
	);
}

export default Spacer;
