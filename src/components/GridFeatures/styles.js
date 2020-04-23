import styled from 'styled-components';

export const StyledGridFeatures = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 50px;
  padding: ${props => (props.isDesktopDevice ? '0 64px' : '0')};

  > i {
    width: 80px;
  }
`;

export const StyledGridFeatureItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 40px 40px;
  margin: 20px 0;
  justify-items: center;
  align-items: center;

  span {
    font-size: 36px;
    text-align: center;
  }
`;
