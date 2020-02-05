import React from 'react'
import Banner from '../../components/Banner'

import dama1_1 from '../../../public/assets/photos/dama1_1.jpg';
import { StyledFullBanner } from '../CatalogoPage/components/styles';

export default function FemaleBanner() {
    return (
        <StyledFullBanner>
            <Banner bgImage={dama1_1}>
                <span>La mejor moda para mujer</span>
            </Banner>
        </StyledFullBanner>
    )
}
