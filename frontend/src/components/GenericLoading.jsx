import React from "react";

export default function GenericLoading({ text }) {
	return (
		<>
			<div style={{ padding: "20px" }}>
				⏳ {text}
				{!text && <>Loading. Please wait.</>}
			</div>
		</>
	);
}
