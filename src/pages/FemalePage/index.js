import React, { Fragment } from 'react';
import { productsFemale } from '../../utils';
import Footer from '../../components/Footer';
import HamburgerMenu from '../../components/HamburgerMenu';
import Grid from '../CatalogoPage/components/Grid';
import FemaleBanner from './FemaleBanner';

function FemalePage() {
    return (
        <Fragment>
            <HamburgerMenu />
            <FemaleBanner />
            <Grid products={productsFemale} />
            <Footer />
        </Fragment>
    )
}

export default FemalePage
