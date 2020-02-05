import React, { Fragment } from 'react'
import HamburgerMenu from '../../components/HamburgerMenu'
import Footer from '../../components/Footer'
import ContactoBanner from './ContactoBanner'
import InfoContacto from './InfoContacto'
import MapContainer from './MapContainer'

function ContactoPage() {
    return (
    <Fragment>
        <HamburgerMenu />
            <ContactoBanner />
            <InfoContacto />
            <MapContainer />
        <Footer />
    </Fragment>
    )
}

export default ContactoPage
