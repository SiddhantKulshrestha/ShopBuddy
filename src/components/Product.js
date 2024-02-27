import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import {add} from '../store/cartSlice'
import { getProducts } from '../store/productSlice'
import Alert from 'react-bootstrap/Alert'

const Product = () => {

    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.products);
  //  const[products, getProducts] = useState([]);
    useEffect(()=>{
    //    fetch("https://fakestoreapi.com/products")
      //  .then(data=>data.json())
        //.then(result =>getProducts(result))
        dispatch(getProducts())
    },[])
if(status ==='Loading'){
    return <p>Loading...</p>
}

if(status ==='error'){
    return <Alert key="danger" variant='danger'>Something went wrong, try again later...</Alert>
}

    const addToCart = (product) =>{
        //dispatch on add action
        dispatch(add(product))
    }

    const cards = products.map( product =>(
        <div className='col-md-3' style={{marginBottom: '10px'}}>
            <Card key={product.id} className='h-100'>
                <div className='text-center' >
            <Card.Img variant="top" src={product.image} style={{width:'100px', height : '130px'}} />
            </div>
            <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
               INR: {product.price}
            </Card.Text>
            </Card.Body>
            <Card.Footer style={{background : 'white'}} >                
            <Button variant="primary" onClick={()=>addToCart(product)} >Add To Cart</Button>
            </Card.Footer>
            </Card>
        </div>
    ))
  return (
    <>
      <h2>Product Dashboard</h2>
      <div className="row">
        {cards}
      </div>
    </>
  )
}

export default Product
