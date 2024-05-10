// React
import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

// MUI
import { CssBaseline } from "@mui/joy";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";

// Custom CSS
import "./stylesheets/customstyles.css";
import MainPage from "./components/MainPage";
import RoomDetailsRoute from "./components/RoomDetailsRoute";

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
						<Route exact path="/" element={<MainPage display={"countries"} />} />
						<Route path="/">
							<Route path={"country"}>
								<Route
									path={":countryName"}
									element={<MainPage display={"locations"} />}
								/>
							</Route>
						</Route>
						<Route path="/">
							<Route path={"location"}>
								<Route
									path={":locationName"}
									element={<MainPage display={"buildings"} />}
								/>
							</Route>
						</Route>
						<Route path="/">
							<Route path={"building"}>
								<Route
									path={":buildingName"}
									element={<MainPage display={"rooms"} />}
								/>
							</Route>
						</Route>
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
