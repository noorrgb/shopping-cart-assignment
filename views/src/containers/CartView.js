import React, { Component, Image } from 'react';
var BrowserHistory = require('react-router').browserHistory;
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as productListActions from '../actions/productListActions';
import * as cartActions from '../actions/cartActions.js';


class CartView extends Component {

    onRemoveFromCartClick(cartProduct){
        this.props.addItemToProductsList(cartProduct);
        this.props.removeProductFromCart(cartProduct.id);
    }

    checkNgetEmptyCartText(){
        if(this.props.cartProductsList.length){
            return 'List of products added in cart'
        }
        else{
            return 'Cart is empty';
        }
    }

    onCheckOutBtnClick(products){
        this.props.addProductsToProductsList(products);
        this.props.removeAllProductFromCart();

        BrowserHistory.push(`/`);

    }

    renderList() {
        return this.props.cartProductsList.map((cartProduct) => {
            return (

                <div className="card product-list-product" key={cartProduct.id}>
                    <div className="card-block">
                        <div className="row">
                            <div className="col-sm-5">
                                <img className="img-responsive img-rounded product-list-product-img" src={cartProduct.image} />
                            </div>
                            <div className="col-sm-7">
                                <h4 className="">{cartProduct.name}</h4>
                                <p className="product-list-price">{'$'+cartProduct.price}</p>
                                <button className="btn btn-primary" type="button" onClick={() => this.onRemoveFromCartClick(cartProduct)}>remove from cart</button>
                            </div>
                        </div>

                    </div>
                </div>
            )
        })
    }

    render() {

        let checkoutBtn = '';

        if(this.props.cartProductsList.length){
            checkoutBtn = (<button onClick={() => this.onCheckOutBtnClick(this.props.cartProductsList)} type="button" className="btn btn-success">Check Out
            </button>);
        }

        return (
            <div>
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">

                    <div className="row">
                        <div className="col-sm-6">
                            <Link to={"/"}>
                                <button type="button" className="btn btn-primary">Go
                                    Back
                                </button>
                            </Link>
                        </div>
                        <div className="col-sm-6">
                            {
                                checkoutBtn
                            }

                        </div>
                    </div>


                    <br/>
                    <br/>
                    <h3>{this.checkNgetEmptyCartText()}</h3>
                    <br/>
                    <div className="row" >
                        <div className="col-sm-12">
                        </div>
                        { this.renderList() }
                    </div>
                </div>

            </div>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cartProductsList: state.cartProductsList.all
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, productListActions, cartActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartView);
