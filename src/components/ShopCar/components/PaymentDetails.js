import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../Title';

import { StyledPaymentDetails, StyledUserDataTable } from './styles';

function PaymentDetails({ paymentmethod }) {
  const getPaymentDetails = () => {
    switch (paymentmethod) {
      case 'daviplata':
        return (
          <StyledUserDataTable>
            <tr>
              <td>
                <b>Nombre: </b>
              </td>

              <td>Rosalba Hernandez</td>
            </tr>
            <tr>
              <td>
                <b>Numero Telefono:</b>
              </td>
              <td>3204953448</td>
            </tr>
          </StyledUserDataTable>
        );
      case 'nequi':
        return (
          <StyledUserDataTable>
            <tr>
              <td>
                <b>Nombre: </b>
              </td>

              <td>Rosalba Hernandez</td>
            </tr>
            <tr>
              <td>
                <b>Numero Telefono:</b>
              </td>
              <td>3204953448</td>
            </tr>
          </StyledUserDataTable>
        );
      case 'transferencia':
        return (
          <StyledUserDataTable>
            <tr>
              <td>
                <b>Nombre: </b>
              </td>

              <td>Rosalba Hernandez</td>
            </tr>
            <tr>
              <td>
                <b>Banco:</b>
              </td>
              <td>Bancolombia</td>
            </tr>
            <tr>
              <td>
                <b>Numero Cuenta:</b>
              </td>
              <td>133-07739218</td>
            </tr>
          </StyledUserDataTable>
        );
      case 'efecty':
        return (
          <StyledUserDataTable>
            <tr>
              <td>
                <b>Nombre: </b>
              </td>

              <td>Rosalba Hernandez</td>
            </tr>
            <tr>
              <td>
                <b>Numero Telefono:</b>
              </td>
              <td>3204953448</td>
            </tr>
          </StyledUserDataTable>
        );
      case 'pago_contra_entrega':
        return (
          <div>
            Nos comuicaremos con usted para coordinar la entrega, o puede escribirnos al whatsapp
            3104392240
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <StyledPaymentDetails>
      <Title value={'Por favor complete el pago, con el metodo de pago escogido'} />
      {getPaymentDetails()}
    </StyledPaymentDetails>
  );
}

PaymentDetails.propTypes = {
  paymentmethod: PropTypes.string,
};

export default PaymentDetails;
