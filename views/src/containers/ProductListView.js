import React, { Component, Image } from 'react';
var BrowserHistory = require('react-router').browserHistory;
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productListActions from '../actions/productListActions';
import * as cartActions from '../actions/cartActions.js';

var http = require('iso-http');

class ProductListView extends Component {


    componentDidMount (){
        var requestOptions = {
            url: '/api/products',
            method: 'GET',
        };
        var request = http.request(requestOptions, (response) => {
            this.props.addProductsToProductsList(JSON.parse(response.text));
        });

    }

    onProductSelected(product){
        BrowserHistory.push(`/products/${product.id}`);
    }

    onAddToCartClick(product){

        this.props.addProductToCart(product);
        this.props.removeItemFromProductsList(product.id);
    }

    onViewCartClick(){
        BrowserHistory.push(`/cart`);
    }

    renderList() {
        return this.props.productsList.map((product) => {
            return (

                <div className="card product-list-product" key={product.id}>
                    <div className="card-block">
                        <div className="row">
                            <div className="col-sm-5">
                                <img className="img-responsive img-rounded product-list-product-img" src={product.image} />
                            </div>
                            <div className="col-sm-7">
                                <h4 className="">{product.name}</h4>
                                <p className="product-list-price">{'$'+product.price}</p>

                                <div><button className="btn btn-primary" type="button" onClick={() => this.onProductSelected(product)}>view details</button></div>
                                <br/>
                                <div><button className="btn btn-primary" type="button" onClick={() => this.onAddToCartClick(product)}>add to cart</button></div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="row">
                            <div className="col-sm-3">
                                <button type="button" className="btn btn-primary" onClick={() => this.onViewCartClick()}>View Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <h3>List of products</h3>
                <br/>
                <div className="row" >
                    <div className="col-sm-12">
                        </div>
                    { this.renderList() }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        productsList: state.productsList.all
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, productListActions, cartActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListView);
