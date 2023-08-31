import React, { useEffect, useState } from 'react';
import "./AllProducts.css";
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div>
            <h1>All products</h1>
            <div className="row container m-auto">
                {
                    products.map(product => <SingleProduct products={product} setCartCount={props.setCartCount} key={product.id}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;