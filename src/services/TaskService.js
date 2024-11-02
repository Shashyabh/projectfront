import axios from "axios";
import { BASE_URL } from "./BASEURL";

export const createTask = async (data) => {
	try {
		const userData = JSON.parse(localStorage.getItem("userData"));
		const token = userData?.token;

		const response = await axios.post(
			`${BASE_URL}/task/createTask`,
			{
				data,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		console.log("resssss====>>>", response.data);

		return response.data;
	} catch (error) {
		console.error("Error fetching users:", error);
	}
};

export const getTaskByType = async (type) => {
	try {
		const userData = JSON.parse(localStorage.getItem("userData"));
		const token = userData?.token;

		const response = await axios.get(`${BASE_URL}/task/getAllTaskByStatus/${type}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		//console.log("responsedata:", response.data);
		return response.data;
	} catch (error) {
		console.error("Error fetching tasks:", error);
	}
};

export const editTaskStatus = async (status, taskId) => {
	//console.log(status + " ====" + taskId);
	try {
		const userData = JSON.parse(localStorage.getItem("userData"));
		const token = userData?.token;

		const response = await axios.put(
			`${BASE_URL}/task/updateTasksStatus/${taskId}`,
			{
				status,
			},

			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		console.log("responsedataaaaaaaa:", response.data);
		return response.data;
	} catch (error) {
		console.error("Error fetching tasks:", error);
	}
};

export const getAllTask = async () => {
	try {
		const userData = JSON.parse(localStorage.getItem("userData"));
		const token = userData?.token;

		const response = await axios.get(`${BASE_URL}/task/getTasks`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		// console.log(response.data)
		return response.data;
	} catch (error) {
		console.error("Error fetching tasks:", error);
	}
};
