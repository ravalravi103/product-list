import React from 'react'
import { gql,useQuery} from '@apollo/client';
import Product from '../Components/Product/Product';
import './ProductList.css'

function ProductList() {

    const GET_ALL_PRODUCT = gql`
        query getAllProducts {
            getAllProducts{
            productName
            productDesc
            categoryId
            productPrice
            productRating
            categoryId
            categoryName
            }
        }
        `;
    const { loading, error, data } = useQuery(GET_ALL_PRODUCT);
    

    return (
        <div className="product-list">
              {data?.getAllProducts.map(product => <Product product={product}/>)}     
              
        </div>
    )
}

export default ProductList
