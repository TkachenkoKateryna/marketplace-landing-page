import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../shared/Button";
import Modal from "../shared/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
	const cartItems = useSelector((state) => state.cart.items);

	const cartItemsView = (
		<List>
			{cartItems.map((item) => (
				<CartItem
					key={item.id}
					item={{
						id: item.id,
						title: item.title,
						quantity: item.quantity,
						total: item.totalPrice,
						price: item.price,
					}}
				/>
			))}
		</List>
	);

	return (
		<Modal>
			{cartItemsView}
			<Actions>
				<Button onClick={props.onClose} text="Close" />
				<Button variant="primary" text="Order" />
			</Actions>
		</Modal>
	);
};

export default Cart;

const TotalAmount = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
	font-size: 1.5rem;
	margin: 1rem 0;
`;

const Actions = styled.div`
	display: flex;
	justify-content: right;
`;

const List = styled.ul`
	list-style: none;
`;
