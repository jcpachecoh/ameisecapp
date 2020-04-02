import styled from 'styled-components';

export const StyledOverlayModal = styled.div`
  display: ${props => (props.showOverlay ? 'block' : 'none')}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 20px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes animateright {
    from {
      right: -300px;
      opacity: 0;
    }
    to {
      right: 0;
      opacity: 1;
    }
  }

  > div:first-child {
    /* Modal Content */
    position: ${props => (props.animationDirection === 'animatetop' ? 'relative' : 'fixed')};
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: ${props => (props.animationDirection === 'animatetop' ? '80%' : '90%')};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: ${props => props.animationDirection};
    -webkit-animation-duration: 0.4s;
    animation-name: ${props => props.animationDirection};
    animation-duration: 0.4s;
    top: 50px;
    right: 0;
  }
`;
