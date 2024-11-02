import React, { useState } from "react";
import bot from "../images/bot.png";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/UserServices";

const Register = () => {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleLoginClick = () => {
		navigate("/");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords do not match!");
			return;
		}

		// Create an object to hold the registration data
		const userData = {
			name,
			email,
			password,
			confirmPassword,
		};
		//console.log(userData);

		try {
			await registerUser(userData);
			navigate("/");
		} catch (error) {
			console.error("Error during registration:", error);
			alert("Registration failed. Please try again.");
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
						<p>Register</p>
					</div>
					<div className="formDiv">
						<form onSubmit={handleSubmit}>
							<div className="inputDiv">
								<input
									type="text"
									placeholder="Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
							</div>
							<div className="inputDiv">
								<input
									type="email"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
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
							<div className="inputDiv">
								<input
									type="password"
									placeholder="Confirm Password"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									required
								/>
							</div>

							<button type="submit" className="loginBtn">
								Register
							</button>
						</form>
					</div>
					<p>Have an account?</p>
					<button onClick={handleLoginClick} className="registerBtn">
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
