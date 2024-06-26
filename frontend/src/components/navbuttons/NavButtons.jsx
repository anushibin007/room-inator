import React from "react";
import BackButton from "./BackButton";
import HomeButton from "./HomeButton";
import { Grid } from "@mui/joy";

const NavButtons = ({ href, hideBackButton }) => {
	return (
		<>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				sx={{ height: "100%" }}
			>
				{!hideBackButton && (
					<>
						<Grid>
							<BackButton href={href} />
						</Grid>
					</>
				)}
				<Grid>
					<HomeButton />
				</Grid>
			</Grid>
		</>
	);
};

export default NavButtons;
