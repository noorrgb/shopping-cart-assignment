import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
var BrowserHistory = require('react-router').browserHistory;


import * as productListActions from '../actions/productListActions';
import * as cartActions from '../actions/cartActions.js';

class ProductListItemDetails extends Component {
    componentWillMount() {
        this.props.getItemFromProductList(this.props.params.id);
    }

    onAddToCartClick(product) {
        this.props.addProductToCart(product);
        this.props.removeItemFromProductsList(product.id);
    }

    onViewCartClick() {
        BrowserHistory.push(`/cart`);
    }


    render() {
        const { item } = this.props;
        if (!item) {
            return (<div>Loading...</div>)
        }

        return (
            <div>
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="row">
                            <div className="col-sm-3">
                                <Link to={"/"}>
                                    <button type="button" className="btn btn-primary">Go
                                        Back
                                    </button>
                                </Link>
                            </div>
                            <div className="col-sm-3">
                                <button type="button" className="btn btn-primary"
                                        onClick={() => this.onViewCartClick()}>View Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <br/>

                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="card">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <img className="product-details-product-img" src={item.image}/>
                                    </div>
                                    <div className="col-sm-6">
                                        <h1>{ item.name }</h1>
                                        <br/>

                                        <p className="product-list-price">${item.price}</p>
                                        <br/>

                                        <p>{ item.description }</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <br/>
                                    <br/>
                                    <button className="btn btn-primary" onClick={() => this.onAddToCartClick(item)}>add
                                        to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        item: state.productsList.item,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, productListActions, cartActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListItemDetails);
