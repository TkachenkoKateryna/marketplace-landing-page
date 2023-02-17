import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { cartActions } from "../../store/slices/cart.slice";
import Button from "../shared/Button";

const CartItem = (props) => {
	const dispatch = useDispatch();
	const { id, title, quantity, total, price } = props.item;

	const addToCartHandler = () => {
		dispatch(cartActions.addItemToCart({ id, title, price }));
	};

	return (
		<Root>
			<Header>
				<h3>
					{title} x {quantity}
				</h3>
				<div>
					${total.toFixed(2)} <span>(${price.toFixed(2)}/item)</span>
				</div>
			</Header>
			<Actions>
				<Button size="x-small" text="-" />
				<Button
					size="x-small"
					variant="secondary-light"
					shape="round"
					onClick={addToCartHandler}
					text="+"
				/>
			</Actions>
		</Root>
	);
};

export default CartItem;

const Root = styled.li`
	display: flex;
	justify-content: space-between;
	padding: 10px;
`;

const Header = styled.header`
	display: flex;
	align-items: center;
	h3 {
		margin-right: 10px;
	}
`;

const Actions = styled.div`
	display: flex;
`;
