import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../adminStyles/ProductManager.css'
import axios from 'axios';

export default function UpdateProduct() {
    const { id } = useParams();
    const [productTitle, setProductTitle] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQty, setProductQty] = useState('');
    const [availability, setProductAvailability] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const navigate = useNavigate()
console.log(productDescription);
    useEffect(()=>{
        const fetchProduct = async()=>{
            try {
                const product = await axios.get(
                  `http://localhost:3000/product/product/${id}`
                );
                setProductTitle(product.data.products.productTitle);
                setProductPrice(product.data.products.productPrice);
                setProductQty(product.data.products.productQty);
                setProductAvailability(product.data.products.availability);
                setProductDescription(product.data.products.productDescription);
              } catch (error) {
                console.log(error);
              }
        }
        fetchProduct()
    },[])

    const handleProductUpdate=async(e)=>{
        e.preventDefault()
        try{
            const product = await axios.put(`http://localhost:3000/product/product/${id}`,{
                productTitle,
                productPrice,
                productQty,
                availability,
                productDescription,
            })
            console.log(product);
            navigate('/admin/product')
        }catch(error){
            console.log(error);
        }
        
    }

    return (
        <div className='container pt-8 pl-8'>
            <div>
                <div className='maincontainer'>
                    <div className="containerprod">
                        <h2>Edit Product Details</h2>
                        <form onSubmit={handleProductUpdate}>
                            <div className="form-group">
                                <label htmlFor="title">Product Title:</label>
                                <input type="text" id="title" value={productTitle} onChange={(e) => setProductTitle(e.target.value)} name="title" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Product Description:</label>
                                <input type="text" id="description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} name="description" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Product Price:</label>
                                <input type="text" id="price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} name="price" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantity">Product Quantity:</label>
                                <input type="number" id="quantity" value={productQty} onChange={(e) => setProductQty(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="availability">Product Availability:</label>
                                <select id="availability" value={availability} onChange={(e) => setProductAvailability(e.target.value)} required>
                                    <option value="">Select Availability</option>
                                    <option value="In Stock">In Stock</option>
                                    <option value="Out of Stock">Out of Stock</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <div className='prosubbtn'>
                                    <input type="submit" value="Submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
