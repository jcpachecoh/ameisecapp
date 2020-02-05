import React from 'react'
import { StyledGridFeatures } from './styles';
import GridFeatureItem from './GridFeatureItem';
import secure from '../../../public/assets/secure.png';
import glasses from '../../../public/assets/glasses.png';
import certificate from '../../../public/assets/certificate.png';
import quality from '../../../public/assets/quality.png';
import colombia from '../../../public/assets/colombia.png';

function GridFeatures() {
    return (
        <StyledGridFeatures>
            <GridFeatureItem image={secure} text={'Compras Seguras'} primary />
            <GridFeatureItem image={glasses} text={'Plataforma Sencilla'} primary={false} />
            <GridFeatureItem image={certificate} text={'Mas de 20 años en el mercado'} primary />
            <GridFeatureItem image={quality} text={'Calidad en Fibras'} primary={false} />
            <GridFeatureItem image={colombia} text={'100% colombiano'} primary />
        </StyledGridFeatures>
    )
}

export default GridFeatures
