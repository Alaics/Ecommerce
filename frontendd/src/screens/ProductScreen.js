import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Isage, ListGroup, Button, card, Image, ListGroupItem, Card  } from 'react-bootstrap'
// import products from '../products';
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating';
// import axios from 'axios'


function ProductScreen({match}) {
  const [product, setProduct]= useState([])
  useEffect(()=>{
    async function fetchProduct(){
      //const {data} = await axios.get(`/api/products/${match.PARAMS.ID}`)
      const {data} = await fetch(`/api/products/${match.PARAMS.ID}`)
      setProduct(data)
    }
    fetchProduct()
  },[])
  // const { id } = useParams();
  // const product = products.find((p) => p._id === id);
  return (
    <div>
      <Link to="/" className='btn btn-dark my-3'>
        Go Back </Link>

        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} style={{ width: '527px', height: 'auto' }} fluid></Image>
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating
                value = {product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
                />
              </ListGroup.Item>

              {/* <ListGroup.Item>
                Price: ₱{product.price}
              </ListGroup.Item> */}

              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
            <ListGroup variant="flush"> 

            <ListGroup.Item>
              <Row>

                <Col>Price:  </Col>
                <Col>
                <strong>₱{product.price} </strong>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>

                <Col>Status:  </Col>
                <Col>
                <strong> {product.countInStock > 0? "In Stock" : "Out of Stock" }</strong>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Button className='btn-block' disabled={product.countInStock===0} type='button'>Add to Cart</Button>
            </ListGroup.Item>

            </ListGroup>
            </Card>
          </Col>

        </Row>
        {product.name}
    </div>
  )
}

export default ProductScreen