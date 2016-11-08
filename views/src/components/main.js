import React, { Component } from 'react';
import ProductListView from '../containers/ProductListView';

class Main extends Component {
    render() {
        return(
            <div className="col-sm-4 col-sm-offset-4">
                <ProductListView />
            </div>
        )
    }
}

export default Main;
