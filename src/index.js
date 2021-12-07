import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Theme from './components/theme/index';
import App from "./components/App";


ReactDOM.render(
<ThemeProvider theme={Theme}>
	<App />
</ThemeProvider>
, document.getElementById('root'));