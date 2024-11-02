import React, { useState } from "react";
import "./Login.css";
import bot from "../images/bot.png";
import { useNavigate } from "react-router-dom";
import { login } from "../services/UserServices";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showError, setShowError] = useState(false);

	const handleRegisterClick = () => {
		navigate("/register");
	};
	const handleEmailFocus = () => {
		setShowError(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const userData = {
			email,
			password,
		};

		try {
			const res = await login(userData);
			if (res === null) {
				setEmail("");
				setPassword("");
				setShowError(true);
				navigate("/");
			} else {
				navigate("/home");
			}
		} catch (error) {
			console.error("Login Failed:", error);
			alert("Login Failed. Please try again.");
		}
	};

	return (
		<div className="mainDiv">
			<div className="left">
				<div>
					<img src={bot} alt="" />
				</div>
				<p className="p1para">Welcome aboard my friend</p>
				<span className="p2para">just a couple of clicks and we start</span>
			</div>
			<div className="right">
				<div className="container">
					<div>
						<p>Login</p>
					</div>
					<div style={{ display: showError ? "block" : "none" }}>
						<span className="loginError">Invalid Username / Password</span>
					</div>
					<div className="formDiv">
						<form onSubmit={handleSubmit}>
							<div className="inputDiv">
								<input
									type="email"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									onFocus={handleEmailFocus}
									required
								/>
							</div>
							<div className="inputDiv">
								<input
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>

							<button type="submit" className="loginBtn">
								Login
							</button>
						</form>
					</div>
					<p>Have no account yet?</p>
					<button onClick={handleRegisterClick} type="submit" className="registerBtn">
						Register
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
