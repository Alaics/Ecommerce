import React, {useState,useEffect} from 'react'
import Product from '../components/Product'
import {Row, Col, Button, Form, FormControl} from "react-bootstrap"
// import products from '../products';
import axios from 'axios'

function HomeScreen() {
  const [products, setProducts]= useState([])
  useEffect(()=>{
    async function fetchProducts(){
      const {data} = await axios.get(`/api/products/`)
      setProducts(data)
    }
    fetchProducts()
  },[])

  return (
    <div>
        <h1 className="text-center">Latest Books</h1>
        {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light">Search</Button>
          </Form> */}
        <Row>
            {products.map((product) =>(
              <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                {/* <h3>{product.name}</h3> */}
                <Product product={product}/>
              </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen