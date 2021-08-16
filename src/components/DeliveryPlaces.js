import React from 'react'
import styled from 'styled-components'

export default function DeliveryPlaces(props) {
    const { deliveryData } = props

    return (
      <div className='delivery-places'>
        <div className='delivery-info'>
            <h4>{deliveryData.name}</h4>
            <p>{deliveryData.type}</p>
            <p>{`${deliveryData.fee} Delivery Fee`}</p>
        </div>
    </div>
    )
}