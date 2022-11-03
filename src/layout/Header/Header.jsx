import React from "react";
import styled from "styled-components";
import Button from "../../shared/Button";
import MaterialIcon from "../../shared/MaterialIcon";

const Header = (props) => {
  const { theme } = props;
  console.log("props", props.theme);

  return (
    <Container>
      <Logo>your logo</Logo>
      <Nav>
        <ul>
          <li>Market Place</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Nav>
      <Actions>
        <Button
          variant="primary"
          size="small"
          shape="round"
          iconName="add_shopping_cart"
        />
      </Actions>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 34px 34px;
`;

const Logo = styled.div`
  text-transform: uppercase;
  letter-spacing: 10px;
  padding: 0 10px;
  white-space: nowrap;
`;

const Nav = styled.nav`
  max-width: 630px;
  width: calc(100% - 210px - 100px);
  padding: 0 20px;
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
`;
