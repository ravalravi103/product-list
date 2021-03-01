import React from 'react';
import './Product.css';

function Product({product}) {
    return (
        <div className="product-card">
            <h3>{product.productName}</h3>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/in-certifiedrefurbished/gateway/Gateway_Unboxed_1209837_379x304._SY304_CB424157491_.jpg"/>
                <p>{product.productDesc}</p>
                <p><b>Price:</b>{product.productPrice}</p>
                <p>Rating:{product.productRating}</p>
                <p>Category: {product.categoryName}</p>
                <p>CategoryId: {product.categoryId}</p>
             <button>Update</button>
             <button>Delete</button>
        </div>
    )
}

export default Product
