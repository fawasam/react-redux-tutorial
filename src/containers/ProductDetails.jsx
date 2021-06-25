import React from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProducts,removeProducts } from '../redux/actions/productAction'
import { useEffect } from 'react'


const ProductDetails = () => {
    const product =useSelector((state)=>state.product)
    const {title,image,category,price,description} =product
    const {productId} =useParams()
    const dispatch =useDispatch()
    //console.log(product);
   // console.log(productId);

    const fetchDetails =async()=>{
        const res =await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err)=>{
            console.log(err);
        })
        
        dispatch(selectedProducts(res.data))
    }
      useEffect(()=>{
          if(productId && productId !==" ")
           fetchDetails()
           return()=>{
               dispatch(removeProducts())
           }
      },[])
    return (
<div className="ui grid container">
    {Object.keys(product).length===0 ? (
        <div>...Loading</div>
    ):(

        <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" alt="images" src={image} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <Link to="/product/price" className="ui teal tag label">${price}</Link>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    )}

        </div>
    )
}

export default ProductDetails
