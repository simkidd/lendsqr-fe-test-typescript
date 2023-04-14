import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import styled, { StyledComponent } from 'styled-components';

const Layouts: React.FC = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Sidebar />
        <InnerWrapper>
          <Outlet />
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default Layouts;

const Wrapper: StyledComponent<'div', any, {}> = styled.div`
  display: flex;
  
`;
const InnerWrapper: StyledComponent<'div', any, {}> = styled.div`
  width: calc(100% - 283px);
  padding: 9rem 20px 0 40px;
  height: 100vh;
  overflow-y: scroll;  
`;

