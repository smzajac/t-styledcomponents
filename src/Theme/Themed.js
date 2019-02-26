import React from 'react';
import {ThemeProvider} from 'styled-components';


//changing the color of this will change the color used for the button
const base = {
    main: "red"
  };

// A helper for wrapping something in the default theme.
// Replaces a regular ThemeProvider from styled-components
// https://www.styled-components.com/docs/advanced#theming
  const Themed = ({ children }) => {
    return <ThemeProvider theme={base}>{children}</ThemeProvider>;
  };

  export default Themed;