import { API_URL } from "@/constants"

const initialState = {
  bookings: []
}

/*
isCancle /
location
name
nft /
period /
price /
start_date /
*/

export default function bookingStore(set) {
  return {
    ...initialState,
    actions: () => ({
      getBookings: async (id) => {
        console.log(id);
        try {
          const response = await fetch(`${API_URL}/booking/user?id=${id}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          const res = await response.json();
          const today = new Date();
          let array = new Array();
          for (let i = 0; i < res.length; i++) {
            let start = new Date(res[i].start_date);
            let end = new Date(res[i].start_date);
            end.setDate(end.getDate() + res[i].period);
            array.push({
              period: start.toDateString() + ' - ' + end.toDateString(),
              status: today.getTime() - start.getTime() > 0,
              isCancle: res[i].isCancle,
              image: res[i].nft,
              price: res[i].price * res[i].period,
              duration: res[i].period,
              name: res[i].name,
              location: res[i].location,
            });
          }
          console.log(res);
          console.log(array);
          return set({ bookings: array });
        } catch (e) {
          return;
        }
      },
      reserve: async (selectedRoom, user, checkIn, nights) => {
        try {
          const response = await fetch(`${API_URL}/booking`, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: user.userId,
              userWallet: user.userWallet,
              roomId: selectedRoom.roomId,
              start_date: checkIn,
              period: nights,
              contract_address: selectedRoom.contractAddress,
              number: selectedRoom.number,
            })
          });
          const res = await response.json();
          console.log(res);
          return;
        } catch (e) {
          console.log(e);
          return;
        }
      }
    })
  }
}