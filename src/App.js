import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Gets the current theme from a ThemeProvider and pass it to your component as a theme prop
import { withTheme } from 'styled-components';
import styled from 'styled-components';
import Holder from './Holder';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

//https://material-ui.com/customization/themes/

class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="App">
       <Button>hello</Button>
       <Holder/>
      </div>
    );
  }
}

export default withTheme(App);
