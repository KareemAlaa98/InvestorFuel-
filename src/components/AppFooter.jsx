import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function AppFooter() {
    return (
        <MDBFooter style={{ backgroundColor: "black" }} className='text-center text-lg-start text-light mt-5 p-1'>
            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon color='secondary' icon='gem' className='me-3' />
                                InvestorFuel
                            </h6>

                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                Cairo, Egypt
                            </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Cold Callers
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Lead Managers
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    ACQs
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Appointment Setters
                                </a>
                            </p>

                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Home
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    About
                                </a>
                                <a href='#!' className='text-reset'>
                                    Contact
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                support@investorfuel.com
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='phone' className='me-3' /> (+20) 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='print' className='me-3' /> (+20) 01 234 567 89
                            </p>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 InvestorFuel.com
            </div>
        </MDBFooter>
    );
}