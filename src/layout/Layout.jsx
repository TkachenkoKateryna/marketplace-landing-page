import { Fragment, useContext } from "react";
import styled from "styled-components";
import AuthContext from "../store/auth-context";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  const authCtx = useContext(AuthContext);

  const { isLoggedIn } = authCtx;

  return (
    <Fragment>
      <Header />
      <Main>{props.children}</Main>
      {isLoggedIn && <Footer />}
    </Fragment>
  );
};

export default Layout;

const Main = styled.main`
  flex: 1;
`;
