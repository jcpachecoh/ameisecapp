import styled from 'styled-components';
import { mainColors } from '../../constants';

export const StyledGridFeatures = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 50px;

  > i {
    width: 80px;
  }
`;


export const StyledGridFeatureItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 40px;
  justify-items: center;
  align-items: center;

  span {
    font-size: 24px;
    text-align: center;
  }
`;
