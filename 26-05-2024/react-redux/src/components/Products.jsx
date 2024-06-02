import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../redux/product/ProductReducer';

function Products() {

    const dispatch = useDispatch();
    const products = useSelector(store => store.product.products)
    useEffect(() => {
        if (products.length === 0) {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data => dispatch(addProducts(data.products)));
        }
    }, [products])

    return (
        <div>
            <h1>Product</h1>
            <p>Total Products : {products.length}</p>
        </div>
    )
}

export default Products
