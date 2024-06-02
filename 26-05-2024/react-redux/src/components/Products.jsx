import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProducts, fetchProducts, fetchProductsById } from '../redux/product/ProductReducer';

function Products() {

    const dispatch = useDispatch();
    const { loading, products, productData, errorMessage } = useSelector(store => store.product)

    const handleFetchProductByID = () => {
        dispatch(fetchProductsById(1));
    }
    useEffect(() => {
        if (products.length === 0) {
            //Api calling  with the component, we will be going into api caling by redux thunk for asynchronous calls.
            // fetch('https://dummyjson.com/products')
            //     .then(res => res.json())
            //     .then(data => dispatch(addProducts(data.products)));


            dispatch(fetchProducts());
        }
    }, [products])

    // if (loading) {
    //     return (
    //         <div>
    //             <h1>Loading...</h1>
    //         </div>
    //     )
    // }

    return (
        <div>
            <h1>Product</h1>
            {loading && <h1>Loading...</h1>}

            {
                errorMessage && <p>{errorMessage}</p>
            }
            {
                !loading && !errorMessage && products.length > 0 &&
                <p> Total Products : {products.length}</p>
            }

            <button onClick={handleFetchProductByID}> Fetch Product By Id</button>
            <h3>Title: {productData.title}</h3>
        </div>
    )
}

export default Products
