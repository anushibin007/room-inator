// React
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// MUI
import { CssBaseline } from "@mui/joy";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";

// Custom CSS
import "./stylesheets/customstyles.css";
import MainPage from "./components/MainPage";
import RoomDetailsRoute from "./components/RoomDetailsRoute";
import Constants from "./utils/Constants";

function App() {
	const BASE_PATH = Constants.BASE_PATH;
	const theme = extendTheme({ cssVarPrefix: "dark" });

	return (
		<>
			<CssVarsProvider
				theme={theme}
				modeStorageKey="demo_identify-system-mode"
				disableNestedContext
			>
				<CssBaseline />
				<Router>
					<Routes>
						<Route exact path={BASE_PATH} element={<MainPage />} />
						<Route path={BASE_PATH}>
							<Route path={"room"}>
								<Route path={":roomName"} element={<RoomDetailsRoute />} />
							</Route>
						</Route>
					</Routes>
				</Router>
			</CssVarsProvider>
		</>
	);
}

export default App;
