import React, { Component } from 'react';
import { withTheme } from 'styled-components';



class Holder extends Component{
    render(){
        console.log(this.props)
        return(
            <div>Holder</div>
        )
    }
}

export default withTheme(Holder);