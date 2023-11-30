import { API_URL } from "@/constants"

const initialState = {
  bookings: []
}

export default function bookingStore(set) {
  return {
    ...initialState,
    actions: () => ({
      getBookings: async (id) => {
        try {
          const response = await fetch(`${API_URL}/booking/user?id=${id}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          console.log(await response.json());
        } catch (e) {
          return;
        }
      }
    })
  }
}