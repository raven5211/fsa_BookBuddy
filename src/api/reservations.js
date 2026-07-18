import axios from "axios";

const API = import.meta.env.VITE_API;

export async function getReservations(token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(API + "/reservations", config);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function reserveBook(token, bookId) {
  try {
    const body = {
      bookId: bookId,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    await axios.get(API + "/reservations", body, config);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function returnBook(token, id) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.get(API + "/reservations/" + id, config);
  } catch (error) {
    console.error(error);
    return [];
  }
}
