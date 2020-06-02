import React from 'react';

import comodo from '../../../public/assets/comodo.png';
import Image from '../Image';

import { StyledSafePay } from './styles';

function SafePay() {
  return (
    <StyledSafePay>
      <Image src={comodo} size={'54px'} /> <b> Compra Segura </b>{' '}
      <div>| Sitio seguro con criptografia (SSL) · Homologado por Comodo SSL Certificate</div>
    </StyledSafePay>
  );
}

export default SafePay;
