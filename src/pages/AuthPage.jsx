import styled from "styled-components";
import ShoppingCartSvg from "../assests/icons/shopping-cart-svg";
import AuthForm from "../components/Auth/AuthForm";

const AuthPage = (props) => {
	return (
		<div className={props.className}>
			<ShoppingCartSvg />
			<AuthForm />
		</div>
	);
};

export default styled(AuthPage)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;

	background-image: url("images/auth-bg.png");
	background-size: cover;
	background-attachment: fixed;

	position: relative;

	> * {
		&:first-child {
			margin-bottom: 100px;
		}
	}
`;
