import React from "react";
import styled from "styled-components";
import { setBtnSize } from "../../theme/ThemeFunctions/Button";
import { setShape, setVariant } from "../../theme/ThemeFunctions/Shared";
import MaterialIcon from "./MaterialIcon";

const Button = (props) => {
	return (
		<button className={props.className} onClick={props.onClick}>
			{props.text ? (
				props.text
			) : (
				<MaterialIcon icon={props.icon} color={props.iconColor} />
			)}
		</button>
	);
};

export default styled(Button)`
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: capitalize;
	text-align: center;
	font-size: ${({ theme }) => theme.fontSizes.small};
	border: none;
	font-weight: bold;
	text-transform: ${({ isUp }) => (isUp ? "uppercase" : "capitilize")};
	box-shadow: ${({ isShadow }) => (isShadow ? "0px 3px 30px black" : "")};
	cursor: pointer;

	${(props) => {
		return setVariant(props.variant, props.theme);
	}}

	${(props) => {
		return setBtnSize(props.size, props.theme);
	}}

  ${(props) => {
		return setShape(props.shape, props.theme);
	}}
`;
