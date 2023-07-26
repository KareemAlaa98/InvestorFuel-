import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';


export default function Slider() {
    return (
        <MDBCarousel className='slider mb-5' fade>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://img.freepik.com/free-photo/audio-headset-used-by-call-center-agents-help-clients-telecommunication-with-technology-empty-customer-service-workstation-with-headphones-computers-modern-gadgets_482257-40834.jpg?w=1380&t=st=1690378268~exp=1690378868~hmac=620ffe6c841749a12da4ca8e315f2f984f5e6580db8ac00f9027d97fa2d0ba25'
                alt='...'
                height={'580px'}
                style={{ objectFit: 'cover' }}
            >
                <h3>Focus on Your Business, Leave The Calls To Us</h3>
                <p className='font-weight-bold'>We Provide Top-Tier Callers For Real Estate Investors All Over The States</p>
            </MDBCarouselItem>
        </MDBCarousel>
    );
}