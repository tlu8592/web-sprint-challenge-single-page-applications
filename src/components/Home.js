import React from 'react'
import { Link } from 'react-router-dom'
import DeliveryPlaces from './DeliveryPlaces'
import deliveryData from '../deliveryData'
import styled from 'styled-components'

const Home = () => {
    const Div = styled.div`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    `

    return (
        <div>
            <div className='home-page'>
                <div>
                    <h1>Welcome to Lambda Eats!</h1>
                    <h4>Your favorite food, delivered while coding</h4>
                    <Link to="/pizza-form">Order Now</Link>
                </div>
            </div>
            <Div className='food-delivery'>
                <h3>Food Delivery</h3>
                {deliveryData.map(item => <DeliveryPlaces key={deliveryData.name} deliveryData={item} />)}
            </Div>
        </div>
    )
}

export default Home