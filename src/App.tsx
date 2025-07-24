import React from "react";
import { GlobalStyle } from "./lib/theme";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./lib/theme";
import { Button, ButtonIcon, ButtonLink } from "./lib/button";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={switcher ? lightTheme : darkTheme}>
			<GlobalStyle />
			<main>
				<ButtonIcon icon='repeat' appearance='commerce'/>
			</main>
		</ThemeProvider>
	);
}

export default App;
