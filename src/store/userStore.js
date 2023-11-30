import { API_URL } from "@/constants"

const initialState = {
  userId: undefined,
  email: undefined,
  wallet_account: undefined,
  is_accommodation: undefined,
}

export default function userStore(set) {
  return {
    ...initialState,
    actions: () => ({
      login: async (email) => {
        try {
          const response = await fetch(`${ API_URL }/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email
            })
          });
          const res = await response.json();
          if (res.statusCode >= 300) {
            throw new Error("try again");
          }
          return set({
            userId: res.id,
            email: res.email,
            wallet_account: res.wallet_account,
            is_accommodation: res.is_accommodation > 0 ? true : false
          })
        } catch (err) {
          return;
        }
      },
    })
  }
}