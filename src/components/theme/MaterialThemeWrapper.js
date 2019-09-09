import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
    palette: {
        primary: { main: purple[500] },
        secondary: { main: '#11cb5f' },
        myRandomThing: { main: '#FF0000' }
    },
    typography: { useNextVariants: true }
});

export default (props) => {
    return (
        <MuiThemeProvider theme={theme}>
            { props.children }
        </MuiThemeProvider>
    );
};
