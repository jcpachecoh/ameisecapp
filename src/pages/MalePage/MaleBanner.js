import React from 'react'
import Banner from '../../components/Banner'

import hombre5_1 from '../../../public/assets/photos/hombre5_1.jpg';
import { StyledFullBanner } from '../CatalogoPage/components/styles';

export default function MaleBanner() {
    return (
        <StyledFullBanner>
            <Banner bgImage={hombre5_1}>
            </Banner>
        </StyledFullBanner>
    )
}
