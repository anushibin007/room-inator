import Constants from "../utils/Constants";

function Footer() {
	return (
		<p className="my-3">
			An{" "}
			<a href="https://github.com/anushibin007" target="_blank">
				anushibin007
			</a>{" "}
			Side Project // Contribute on{" "}
			<a href="https://github.com/anushibin007/room-inator" target="_blank">
				GitHub
			</a>{" "}
			// Version: {Constants.BUILD_NUMBER}
		</p>
	);
}

export default Footer;
