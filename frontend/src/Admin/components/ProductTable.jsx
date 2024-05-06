import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductTable() {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/product/products');
                setProducts(response.data.products);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, []);

    const deleteProduct = async (proId) => {
        try {
            await axios.delete(`http://localhost:3000/product/product/${proId}`);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    // Function to filter products based on search query
    const filteredProducts = products.filter(product =>
        Object.values(product).some(attr =>
            typeof attr === 'string' && attr.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <div className='tableprocontainer'>
          <div className='w-56 mb-5'>
          <input
                type='text'
                placeholder='Search Product...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
            
            <table>
                <thead>
                    <tr>
                        <th>Product Title</th>
                        <th>Product Description</th>
                        <th>Product Price</th>
                        <th>Product Quantity</th>
                        <th>Product Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product, index) => (
                        <tr key={index}>
                            <td>{product.productTitle}</td>
                            <td>{product.productDescription}</td>
                            <td>{product.productPrice}</td>
                            <td>{product.productQty}</td>
                            <td>{product.productImage}</td>
                            <td><Link to={`/admin/projects/productupdate/${product._id}`} className="productUpdateBtn">Update</Link></td>
                            <td>
                                <button
                                    onClick={() => deleteProduct(product._id)}
                                    className="productDeleteBtn"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
