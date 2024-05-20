import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Constants from "../utils/Constants";
import Spacer from "./Spacer";
import AboutUs from "./AboutUs";
import { useState } from "react";

function Footer() {
	const [openAboutUs, setOpenAboutUs] = useState(false);
	return (
		<>
			<Spacer spacerForClass="footer" />
			<div className="footer">
				<Typography color="neutral" level="body-xs" sx={{ fontStyle: "italic" }}>
					Version: {Constants.BUILD_NUMBER} //{" "}
					<Link
						onClick={() => {
							setOpenAboutUs(true);
						}}
					>
						About us
					</Link>
				</Typography>
				<AboutUs open={openAboutUs} setOpen={setOpenAboutUs} />
			</div>
		</>
	);
}

export default Footer;
