import React, { useEffect, useState } from 'react'
import '../adminStyles/ProductManager.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function ProductTable() {
    const [products, setProduct]=useState([])
console.log(products);
    useEffect(()=>{
        const allProducts = async()=>{
            try{
                const product = await axios.get('http://localhost:3000/product/products')
                setProduct(product.data.products) 
            }catch(error){
                console.log(error);
            }
        }
        allProducts()
    })

    const deleteProduct = async(proId)=>{
        try{
            await axios.delete(`http://localhost:3000/product/product/${proId}`)
            window.location.reload();
        }catch(error){
            console.log(error);
        }
    }
    
  return (
    <div className='tableprocontainer'>
          <table>
            <thead>
              <tr>
                <th>Product Title</th>
                <th>Product Price</th>
                <th>Product Image</th>
                <th>Product Discount</th>
                <th>Product Availability</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
             {products.map((products,index)=>(
                <tr key={index}>
                  <td>{products.productTitle}</td>
                  <td>{products.productDescription}</td>
                  <td>{products.productPrice}</td>
                  <td>{products.productQty}</td>
                  <td>{products.productImage}</td>
                  <td> <Link to={`/admin/projects/productupdate/${products._id}`} className="productUpdateBtn">Update</Link></td>
                  <td><button
                    onClick={() => deleteProduct(products._id)}
                    className="productDeleteBtn"
                  >
                    Delete
                  </button></td>
                </tr>
             ))}
                
             
            </tbody>
          </table>
        </div>
  )
}
