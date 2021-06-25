import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const ProductComponent = () => {
    const products =useSelector((state)=>state.allProducts.products)
      const renderList =products.map((p)=>{
      return(
            <div className="four column wide" key={p.id}>
                <Link to={`product/${p.id}`}>
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={p.image}  alt="title" />
                    </div>
                    <div className="content">
                        <div className="header">
                            {p.title}
                        </div>
                        <div className="meta price">
                            ${p.price}
                        </div>
                        <div className="meta">
                            {p.category}
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
          )
      })
    return (
        <>
       {renderList}
     </>
    )
}

export default ProductComponent
