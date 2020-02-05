import React, { Fragment } from 'react'
import MainBanner from './components/MainBanner'
import Grid from './components/Grid'
import HamburgerMenu from '../../components/HamburgerMenu'
import Footer from '../../components/Footer'

function CatalogoPage() {
    return (
        <Fragment>
            <HamburgerMenu />
            <MainBanner />
            <Grid />
            <Footer />
        </Fragment>
    )
}

export default CatalogoPage
