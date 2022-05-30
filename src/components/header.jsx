import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/create-doc">문서생성</StyledLink>
        <StyledLink to="/my-docs">내 문서함</StyledLink>
      </Nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: black;
  width: 100%;
  height: 15%;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  font-size: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  :hover {
    opacity: 0.7;
  }
`;


export default Header;
