import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';
import datas from './product.json'
import './card.css'
import { increment, value, decrement } from './TotalSlice';
import {useDispatch,useSelector} from 'react-redux'

function CardData() {
const[data, setdata] = useState(datas.products);
const dispatch = useDispatch();
const appdata = useSelector(state => state.Total.value)




useEffect(()=>{
  setdata(data.map((ndata)=>{
    ndata.count = 0
  }))
  dispatch(value(data))
},[])


  return (
    <>
        <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
          {
            appdata.map((detail,index)=>(
                <>
                  <div className="col-lg-6 d-flex justify-content-center">
                    <Card style={{ width: '20rem' }} key={detail.id}>
                      <Card.Img variant="top" src={detail.thumbnail} className='card-img'/>
                      <Card.Body className='card-body'>
                        <Card.Title>{detail.title}</Card.Title>
                        <Card.Text>
                          <p className='brand'>Brand: {detail.brand}</p>
                          <p className='des'>{detail.description}</p>
                          <h6 className='price'>Price: {detail.price}</h6>
                        </Card.Text>
                        <div className="btns">
                          <ButtonGroup aria-label="Basic example">
                            <Button variant="dark" className='btn' onClick={()=>{dispatch(decrement(detail.id))}}>-</Button>
                            <input type='text' id='card-value' value={detail.count}></input>
                            <Button variant="dark" className='btn'  onClick={()=>{dispatch(increment(detail.id))}}>+</Button>
                          </ButtonGroup>
                          </div>
                          
                      </Card.Body>
                    </Card>
                    
                  </div>
                
                </>
            ))
        }
            </div>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default CardData