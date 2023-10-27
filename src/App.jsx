// React
import React from "react";
import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";

// MUI
import { CssBaseline } from "@mui/joy";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";

// Custom CSS
import "./stylesheets/customstyles.css";
import MainPage from "./components/MainPage";
import RoomDetailsRoute from "./components/RoomDetailsRoute";
import Constants from "./utils/Constants";

function App() {
	const theme = extendTheme({ cssVarPrefix: "dark" });

	return (
		<>
			<CssVarsProvider
				theme={theme}
				modeStorageKey="demo_identify-system-mode"
				disableNestedContext
			>
				<CssBaseline />
				<HashRouter>
					<Routes>
						<Route exact path="/" element={<MainPage />} />
						<Route path="/">
							<Route path={"room"}>
								<Route path={":roomName"} element={<RoomDetailsRoute />} />
							</Route>
						</Route>
					</Routes>
				</HashRouter>
			</CssVarsProvider>
		</>
	);
}

export default App;
