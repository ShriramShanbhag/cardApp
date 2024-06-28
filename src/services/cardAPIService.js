import { API_ENDPOINT } from "../constants/constants";
import axios from "axios";

export const fetchCards = async () => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/cards`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cards:", error);
    throw error;
  }
};

export const addCard = async (title, description) => {
  try {
    const newCard = { title, description };
    const response = await axios.post(`${API_ENDPOINT}/cards`, newCard);
    return response.data;
  } catch (error) {
    console.error("Error adding card:", error);
    throw error;
  }
};

export const deleteCard = async (id) => {
  try {
    await axios.delete(`${API_ENDPOINT}/cards/${id}`);
  } catch (error) {
    console.error("Error deleting card:", error);
    throw error;
  }
};
