import React from "react"
import styled from "styled-components"

import Icon from "./../../assets/images/loading.svg";

const Loading = ({ show }) => {

  return (
    <LoadingContainer show={show}>
      <LoadingMain>
        <img src={Icon} alt="loading" />
      </LoadingMain>
    </LoadingContainer>
  )
}

export default Loading;

const LoadingContainer = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  display: ${props => props.show ? 'flex' : 'none'};
  left: 0;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const LoadingMain = styled.div`
  height: auto;
  padding: 2rem;
  width: auto;
`;
