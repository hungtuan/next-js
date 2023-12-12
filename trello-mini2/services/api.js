// services/api.js
const axios = require("axios");

const BASE_URL = "https://api-exercise-trello.vercel.app/api/v1"; // Thay thế URL thực tế của bạn

// Hàm để lấy API Key dựa trên email
const getApiKey = async (email) => {
  try {
    const response = await axios.get(`${BASE_URL}/api-key?email=${email}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get API Key");
  }
};

// Hàm để lấy danh sách công việc
const getTasks = async (apiKey) => {
  try {
    const response = await axios.get(`${BASE_URL}/tasks`, {
      headers: {
        "X-Api-Key": apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get tasks");
  }
};

// Hàm để thêm công việc mới
const postTask = async (apiKey, task) => {
  try {
    const response = await axios.post(`${BASE_URL}/tasks`, task, {
      headers: {
        "X-Api-Key": apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to post task");
  }
};

module.exports = {
  getApiKey,
  getTasks,
  postTask,
};
