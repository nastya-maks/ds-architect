import React from "react";
import { GlobalStyle } from "./lib/theme";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./lib/theme";
import { Button, ButtonLink } from "./lib/button";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={switcher ? lightTheme : darkTheme}>
			<GlobalStyle />
			<main>
				<Button iconBefore='globe' appearance='commerce' text='Button'/>
				<ButtonLink iconBefore='globe' text='Button'/>
			</main>
		</ThemeProvider>
	);
}

export default App;
