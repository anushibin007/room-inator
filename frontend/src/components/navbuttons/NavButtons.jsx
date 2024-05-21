import React from "react";
import BackButton from "./BackButton";
import HomeButton from "./HomeButton";

const NavButtons = ({ href }) => {
	return (
		<>
			<BackButton href={href} />
			<HomeButton />
		</>
	);
};

export default NavButtons;
