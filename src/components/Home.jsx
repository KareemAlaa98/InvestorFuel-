import React from 'react'
import Navigation from './Navigation'
import Slider from './Slider'
import Services from './Services'
import AppFooter from './AppFooter'
import Tools from './Tools'


export default function Home() {
    return (
        <div>
            <Navigation />
            <Slider />
            <Services />
            <Tools />
            <AppFooter />
        </div>
    )
}
