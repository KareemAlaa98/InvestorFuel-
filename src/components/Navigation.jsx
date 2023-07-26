import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';

import '../css/navigation.css';

export default function Navigation() {
    const [showNavColor, setShowNavColor] = useState(false);

    return (
        <div>
            <MDBNavbar fixed='top' expand="lg" className="p-3 navigation">
                <MDBContainer fluid>
                    <MDBNavbarBrand href="#" className="text-white w-100 mx-5">
                        <h2 className='font-weight-bold'>InvestorFuel</h2>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        type="button"
                        data-target="#navbarColor02"
                        aria-controls="navbarColor02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setShowNavColor(!showNavColor)}
                    >
                        <MDBIcon icon="bars" fas />
                    </MDBNavbarToggler>
                    <MDBCollapse className='w-50' show={showNavColor} navbar>
                        <MDBNavbarNav className="mx-auto mb-2 mb-lg-0">
                            <MDBNavbarItem className="text-white">
                                <MDBNavbarLink href="#" className=" navItems text-white font-weight-bold mx-1">
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className="  text-white font-weight-bold mx-1">
                                <MDBNavbarLink href="#" className="navItems text-white">
                                    Pricing
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className=" text-white font-weight-bold mx-1">
                                <MDBNavbarLink href="#" className=" navItems text-white">
                                    Contact
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className="  text-white font-weight-bold mx-1">
                                <MDBNavbarLink href="#" className="navItems text-white">
                                    About
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className="btn bg-primary text-white font-weight-bold mx-1" href="#">
                                    BOOK A CALL
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
}