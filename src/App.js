import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import Theme from "./theme/Theme";
import AuthPage from "./pages/AuthPage";
import AuthContext from "./store/auth-context";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import { uiActions } from "./store/slices/ui.slice";

function App() {
	const authContext = useContext(AuthContext);

	const dispatch = useDispatch();

	const toogleCartHandler = () => {
		dispatch(uiActions.toggle());
	};

	const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);

	return (
		<Theme>
			{console.log("authContext.isLoggedIn :>> ", authContext.isLoggedIn)}
			<Layout>
				{cartIsVisible && <Cart onClose={toogleCartHandler} />}
				<Switch>
					{authContext.isLoggedIn && (
						<Route path="/">
							<HomePage />
						</Route>
					)}
					{!authContext.isLoggedIn && (
						<Route path="/auth">
							<AuthPage />
						</Route>
					)}
					<Route path="*">
						<Redirect to="/auth" />
					</Route>
				</Switch>
			</Layout>
		</Theme>
	);
}

export default App;
