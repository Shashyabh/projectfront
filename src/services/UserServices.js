import axios from "axios";
const { BASE_URL } = require("./BASEURL");

export const registerUser = async (data) => {
	try {
		const response = await axios.post(`${BASE_URL}/user/register`, data);
		console.log("response: " + response.data);
	} catch (error) {
		console.error("Error posting data:", error);
	}
};

export const login = async (data) => {
	try {
		const response = await axios.post(`${BASE_URL}/user/login`, data);
		const userData = response.data;
		if (userData.status === false || userData === null || userData.data === null) {
			return null;
		} else {
			console.log(userData);
			// Store userData in localStorage
			localStorage.setItem("userData", JSON.stringify(userData.data));
			return userData; // This resolves the promise with userData
		}
	} catch (error) {
		console.error("Error posting data:", error);
		throw error; // Re-throw the error to be handled in handleSubmit
	}
};
export const logout = () => {
	localStorage.removeItem("userData");
};

export const fetchAllUsers = async () => {
	try {
		const userData = JSON.parse(localStorage.getItem("userData"));
		const token = userData?.token;

		const response = await axios.get(`${BASE_URL}/user/getUsers`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	} catch (error) {
		console.error("Error fetching users:", error);
	}
};

export const getMembersByUsers = async () => {
	try {
		const userData = JSON.parse(localStorage.getItem("userData"));
		const token = userData?.token;

		const response = await axios.get(`${BASE_URL}/user/getMembers`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	} catch (error) {
		console.error("Error fetching users:", error);
	}
};
export const addPeopleToBoard = async (emailObj) => {
	try {
		const userData = JSON.parse(localStorage.getItem("userData"));
		const token = userData?.token;
		const email = emailObj.email;

		const response = await axios.post(
			`${BASE_URL}/user/addMember`,
			{
				email,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		console.log("resssss====>>>", response.data.data);

		return response.data.data;
	} catch (error) {
		console.error("Error fetching users:", error);
	}
};
