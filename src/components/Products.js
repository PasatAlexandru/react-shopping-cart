import React, {Component} from 'react';
import formatCurrency from "./utill";

export class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map((product) => (
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#" + product._id}>
                                    <img src={product.image} alt={product.title}/>
                                    <p>{product.title}</p>
                                </a>
                                <div className="product-price">
                                    <div style={{
                                        display: "inline-block",
                                        width:"50%"
                                    }}>{formatCurrency(product.price)}</div>
                                    <button onClick = { ()=>this.props.addToCart(product)}   className="button primary"
                                         style={{width:"50%"}}
                                    >Add To Cart</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Products;