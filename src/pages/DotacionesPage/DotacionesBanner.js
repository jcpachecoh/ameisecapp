import React from 'react'

import Banner from '../../components/Banner'
import { StyledFullBanner } from '../CatalogoPage/components/styles'

import lana2 from '../../../public/assets/lana2.jpg';

function DotacionesBanner() {
    return (
        <StyledFullBanner>
            <Banner bgImage={lana2}>
                <span>Dotaciones para trabajo en frio</span>
            </Banner>
        </StyledFullBanner>
    )
}

export default DotacionesBanner
