import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import secure from '../../../public/assets/secure.png';
import glasses from '../../../public/assets/glasses.png';
import certificate from '../../../public/assets/certificate.png';
import quality from '../../../public/assets/quality.png';
import colombia from '../../../public/assets/colombia.png';
import Title from '../Title';
import { isDesktop } from '../../utils';

import GridFeatureItem from './GridFeatureItem';
import { StyledGridFeatures } from './styles';

function GridFeatures() {
  const isDesktopDevice = isDesktop();
  return (
    <StyledGridFeatures isDesktopDevice={isDesktopDevice}>
      <ScrollAnimation delay={100} animateIn="fadeIn">
        <Title
          value={'!Nosotros siempre trabajamos para ti, conoce nuestras caracteristicas!'}
          fontSize={'36px'}
        />
      </ScrollAnimation>
      <GridFeatureItem image={secure} text={'Compras Seguras'} primary />
      <GridFeatureItem image={glasses} text={'Plataforma Sencilla'} primary={false} />
      <GridFeatureItem image={certificate} text={'Mas de 20 años en el mercado'} primary />
      <GridFeatureItem image={quality} text={'Calidad en Fibras'} primary={false} />
      <GridFeatureItem image={colombia} text={'100% colombiano'} primary />
    </StyledGridFeatures>
  );
}

export default GridFeatures;
