import axios from "axios";

const API = import.meta.env.VITE_API;

export async function getBooks() {
  try {
    const { data } = await axios.get(API + "/books");
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getBook(id) {
  try {
    const { data } = await axios.get(API + "/books/" + id);
    return data;
  } catch (error) {
    console.error(error);
  }
}
