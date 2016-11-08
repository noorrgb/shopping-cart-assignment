import React, { Component } from 'react';
var BrowserHistory = require('react-router').browserHistory;


class Header extends Component {

    render(){
        return(
            <div style={{ marginTop: 20 }}>
                <h1>Simple Online Shopping Cart</h1>
                <br/>
                <br/><br/>
                { this.props.children }
            </div>
        )
    }
}

export default Header;
