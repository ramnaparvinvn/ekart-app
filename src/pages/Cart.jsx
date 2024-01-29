import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { removeFromCart } from '../redux/slices/cartSlice';

function Cart() {
  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch()
  return (
    <>
      <button style={{ marginTop: '150px' }} className='btn btn-success ms-5'>
        <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>
          <i class="fa-solid fa-arrow-left me-2"></i>
          Back To Home</Link>
      </button>
      <div className='row w-100'>
        {
          cartItems?.length > 0 ?
            <div className='col-lg-6 col-md-6 m-5'>
              <table className='table shadow border'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems?.map((item, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td><img height={'50px'} width={'50px'} src={item.thumbnail} alt="" /></td>
                        <td>&#8377; {item.price}</td>
                        <td>
                          <Button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            variant="outline-danger" ><i class="fa-solid fa-trash"></i></Button>
                        </td>
                      </tr>
                    ))
                  }

                </tbody>
              </table>
            </div> :
            <p className='text-danger'>No Items In Cart</p>
        }

      </div>
    </>
  )
}

export default Cart
