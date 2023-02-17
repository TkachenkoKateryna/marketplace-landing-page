import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { cartActions } from "../../store/slices/cart.slice";
import Button from "../shared/Button";
import Tag from "../shared/Tag";

const ProductCard = () => {
	const dispatch = useDispatch();

	const addToCartHandler = (id, title, price) => {
		dispatch(cartActions.addItemToCart({ id, title, price }));
	};

	return (
		<Card>
			<CardHeader>
				<Tag text="-59%" type="secondary-light" />
				<Button
					size="x-small"
					variant="primary-light"
					icon="favorite_border"
					shape="round"
				/>
			</CardHeader>
			<ImgWrapper>
				<img src="/images/card-default.png" alt="desk" />
			</ImgWrapper>
			<InfoPanel>
				<Tag text="Audio Devices" type="primary-light" />
				<h3>$600,000</h3>
			</InfoPanel>
			<Text>Nokia Essential Wireless Headphones 120CM BLACK</Text>
			<Actions>
				<Button
					text="Add to Cart"
					onClick={() =>
						addToCartHandler("1234", "Nokia Essential Wireless Headphones", 600)
					}
				/>
				<Button text="Buy Now" variant="primary" />
			</Actions>
		</Card>
	);
};

export default ProductCard;

const Card = styled.div`
	height: fit-content;
	padding: 20px;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

const CardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
`;

const ImgWrapper = styled.div`
	width: 100%;
	border-radius: 10px;
	margin-bottom: 20px;

	img {
		object-fit: cover;
		width: 100%;
	}
`;

const InfoPanel = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;

	h3 {
		text-align: center;
	}
`;

const Text = styled.p`
	max-width: 350px;
	margin-bottom: 20px;
	font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const Actions = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;
