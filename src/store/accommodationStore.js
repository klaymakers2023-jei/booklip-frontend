import { API_URL } from "@/constants"

import Dubai from '../../public/dubai.png';
import Seoul from '../../public/korea_seoul.png';
import Busan from '../../public/korea_busan.png';
import Tokyo from '../../public/japan_tokyo.png';

const initialState = {
  accommodations: [],
  specificAccommodations: [],
}

export default function accommodationStore(set) {
  return {
    ...initialState,
    actions: () => ({
      getLists: async () => {
        try {
          const response = await fetch(`${API_URL}/accommodation`, {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          const res = await response.json();
          if (res.statusCode >= 300) {
            throw new Error("try again");
          }
          let array = new Array();
          for (let i = 0; i < res.length; i++) {
            array.push(
              {
                accommodationId: res[i].id,
                name: res[i].name,
                location: res[i].location,
                contractAddress: res[i].contractAddress,
                site: res[i].site,
                image: res[i].location === 'Seoul' ? Seoul : res[i].location === 'Busan' ? Busan : res[i].location === 'Tokyo' ? Tokyo : Dubai,
              }
            )
          }
          return set( {accommodations: array} );
        } catch (e) {
          return;
        }
      },
      getSpecificLists: async (site) => {
        try {
          const response = await fetch(`${API_URL}/accommodation/location?site=${site}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          const res = await response.json();
          if (res.statusCode >= 300) {
            throw new Error("try again");
          }
          let array = new Array();
          for (let i = 0; i < res.length; i++) {
            array.push(
              {
                accommodationId: res[i].id,
                name: res[i].name,
                location: res[i].location,
                contractAddress: res[i].contractAddress,
                site: res[i].site,
                image: res[i].location === 'Seoul' ? Seoul : res[i].location === 'Busan' ? Busan : res[i].location === 'Tokyo' ? Tokyo : Dubai,
              }
            )
          }
          return set( {specificAccommodations: array} );
        } catch (e) {
          return;
        }
      }
    })
  }
}