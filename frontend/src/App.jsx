// React
import React, { useEffect, Suspense, lazy } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

// MUI
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles/CssVarsProvider";
import extendTheme from "@mui/joy/styles/extendTheme";

// Custom CSS
import "./stylesheets/customstyles.css";
import GenericLoading from "./components/GenericLoading";
const MainPage = lazy(() => import("./components/MainPage"));
const RoomDetailsRoute = lazy(() => import("./components/RoomDetailsRoute"));

function App() {
	const theme = extendTheme({ cssVarPrefix: "dark" });

	useEffect(() => {
		// pre-load heavy components
		import("./components/SearchResultsGridView");
		import("./components/SearchResultsListView");
		import("./components/RoomDetails");
	}, []);

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
						<Route
							exact
							path="/"
							element={
								<Suspense
									fallback={
										<>
											<GenericLoading
												text={
													"The Room-inator application is loading. Get ready for something exciting!"
												}
											/>
										</>
									}
								>
									<MainPage display={"buildings"} />
								</Suspense>
							}
						/>
						<Route path="/">
							<Route path={"building"}>
								<Route
									path={":roomId"}
									element={
										<Suspense
											fallback={
												<>
													<GenericLoading
														text={
															"Loading rooms in this building. Please wait."
														}
													/>
												</>
											}
										>
											<MainPage display={"rooms"} />
										</Suspense>
									}
								/>
							</Route>
						</Route>
						<Route path="/">
							<Route path={"room"}>
								<Route
									path={":roomId"}
									element={
										<Suspense
											fallback={
												<>
													<GenericLoading text="Loading room details. Please wait." />
												</>
											}
										>
											<RoomDetailsRoute />
										</Suspense>
									}
								/>
							</Route>
						</Route>
					</Routes>
				</HashRouter>
			</CssVarsProvider>
		</>
	);
}

export default App;
