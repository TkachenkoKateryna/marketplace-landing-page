import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartButton from "../components/Cart/CartButton";
import Button from "../components/shared/Button";
import AuthContext from "../store/auth-context";

const Header = () => {
	const authCtx = useContext(AuthContext);

	console.log("authCtx", authCtx);

	const logoutHandler = () => {
		authCtx.logout();
	};

	return (
		<Container>
			<Logo>
				<Link to="/">your logo </Link>
			</Logo>
			<Nav>
				<ul>
					<li>Market Place</li>
					<li>Blog</li>
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</Nav>
			<div style={{ width: "250px" }}>
				{authCtx.isLoggedIn && (
					<Actions>
						<CartButton />
						<Button
							size="small"
							icon="logout"
							shape="round"
							onClick={logoutHandler}
						/>
					</Actions>
				)}
			</div>
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

	a {
		text-decoration: none;
	}
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
	margin-right: -5px;
	> * {
		margin-right: 5px;
	}
`;
