import React from "react";
import "./Settings.css";
const Settings = () => {
	return (
		<>
			<div className="settingsDiv">
				<div>
					<span>Settings</span>
				</div>
				<div className="right">
					<div className="container">
						<div className="formDiv">
							<form action="">
								<div className="inputDiv">
									<input type="name" placeholder="Name" />
								</div>
								<div className="inputDiv">
									<input type="email" placeholder="Update Email" />
								</div>
								<div className="inputDiv">
									<input type="password" placeholder="Old Password" />
								</div>
								<div className="inputDiv">
									<input type="password" placeholder="New Password" />
								</div>

								<button type="submit" className="loginBtn">
									Update
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Settings;
