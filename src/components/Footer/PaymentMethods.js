import React from 'react';

import payu from '../../../public/assets/payu.png';
import Image from '../Image';
import { isDesktop } from '../../utils';

function PaymentMethods() {
  const isDesktopDevice = isDesktop();
  return <Image src={payu} size={isDesktopDevice ? '760px' : '280px'} />;
}

export default PaymentMethods;
