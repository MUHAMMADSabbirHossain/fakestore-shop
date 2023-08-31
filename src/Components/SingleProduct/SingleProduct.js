import React from 'react';
import "./SingleProduct.css";
import ReactModal from '../ReactModal/ReactModal';

const SingleProduct = (props) => {
    // console.log(props);
    return (
        <div className='col-md-4' data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="500">
            <div className="card p-3 border">
                <img className='w-50 m-auto' src={props.products.image} alt="" />
                <h1>{props.products.title.slice(0, 10)}</h1>
                <h2>${props.products.price}</h2>
                <div className="d-flex justify-content-around">
                    <button className='btn btn-success' onClick={props.setCartCount}>Add to Cart</button>
                    <button className='btn btn-danger'>Delete</button>
                    <ReactModal products={props.products} setCartCount={props.setCartCount}></ReactModal>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;