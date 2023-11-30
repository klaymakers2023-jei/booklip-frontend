import { API_URL } from "@/constants"

import Tropical1 from '../../public/1.png';
import Tropical2 from '../../public/2.png';
import Tropical3 from '../../public/3.png';
import Luminique1 from '../../public/4.png';
import Luminique2 from '../../public/5.png';
import Luminique3 from '../../public/6.png';
import Elysian1 from '../../public/7.png';
import Elysian2 from '../../public/8.png';
import Elysian3 from '../../public/9.png';
import Urban1 from '../../public/10.png';
import Urban2 from '../../public/11.png';
import Urban3 from '../../public/12.png';
import Twilight1 from '../../public/13.png';
import Twilight2 from '../../public/14.png';
import Twilight3 from '../../public/15.png';
import Seaside1 from '../../public/16.png';
import Seaside2 from '../../public/17.png';
import Seaside3 from '../../public/18.png';
import Serenity1 from '../../public/19.png';
import Serenity2 from '../../public/20.png';
import Serenity3 from '../../public/21.png';
import Waveside1 from '../../public/22.png';
import Waveside2 from '../../public/23.png';
import Waveside3 from '../../public/24.png';
import Ocean1 from '../../public/25.png';
import Ocean2 from '../../public/26.png';
import Ocean3 from '../../public/27.png';
import Whispering1 from '../../public/28.png';
import Whispering2 from '../../public/29.png';
import Whispering3 from '../../public/30.png';
import Sakura1 from '../../public/31.png';
import Sakura2 from '../../public/32.png';
import Sakura3 from '../../public/33.png';
import Edge1 from '../../public/34.png';
import Edge2 from '../../public/35.png';
import Edge3 from '../../public/36.png';
import Tranquil1 from '../../public/37.png';
import Tranquil2 from '../../public/38.png';
import Tranquil3 from '../../public/39.png';
import Desert1 from '../../public/40.png';
import Desert2 from '../../public/41.png';
import Desert3 from '../../public/42.png';
import Elegance1 from '../../public/43.png';
import Elegance2 from '../../public/44.png';
import Elegance3 from '../../public/45.png';

const initialState = {
  rooms: [],
  specificRooms: [],
  selectedRoom: null,
}

const roomImages = {
  'Tropical Vista': [Tropical1,Tropical2,Tropical3],
  'Luminique Cityscape Hotel': [Luminique1,Luminique2,Luminique3],
  'Elysian Hotel': [Elysian1,Elysian2,Elysian3],
  'Urban Oasis Suites': [Urban1,Urban2,Urban3],
  'Twilight Haven Pension': [Twilight1,Twilight2,Twilight3],
  'Seaside Lodgings': [Seaside1,Seaside2,Seaside3],
  'Serenity Springs Hotel': [Serenity1,Serenity2,Serenity3],
  'Waveside Haven Villas': [Waveside1,Waveside2,Waveside3],
  'Ocean Bliss': [Ocean1,Ocean2,Ocean3],
  'Whispering Pines Pension': [Whispering1,Whispering2,Whispering3],
  'Sakura Serenity Lodge': [Sakura1,Sakura2,Sakura3],
  'Serenity Edge Residence': [Edge1,Edge2,Edge3],
  'Tranquil Flakes Ryokan': [Tranquil1,Tranquil2,Tranquil3],
  'Desert Oasis Retreat Hotel': [Desert1,Desert2,Desert3],
  'Seaside Elegance Retreat': [Elegance1,Elegance2,Elegance3],
}

export default function roomStore(set) {
  return {
    ...initialState,
    actions: () => ({
      getLists: async () => {
        try {
          const response = await fetch(`${API_URL}/rooms`, {
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
            let room = {};
            room.type = res[i].type;
            room.roomId = res[i].id;
            room.number = res[i].number;
            room.nft = res[i].nft;
            room.name = res[i].name;
            room.description = res[i].description;
            room.site = res[i].site;
            room.location = res[i].location;
            room.contractAddress = res[i].contract_address;
            room.price = res[i].price;
            room.images = roomImages[room.name];
            array.push(room);
          }
          return set( {rooms: array} );
        } catch (e) {
          return;
        }
      },
      getSpecificLists: async (site) => {
        try {
          const response = await fetch(`${API_URL}/accommodation/location?location=${site}`, {
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
            let room = {};
            room.type = res[i].type;
            room.roomId = res[i].id;
            room.number = res[i].number;
            room.nft = res[i].nft;
            room.name = res[i].name;
            room.description = res[i].description;
            room.site = res[i].site;
            room.location = res[i].location;
            room.contractAddress = res[i].contract_address;
            room.price = res[i].price;
            room.images = roomImages[room.name];
            array.push(room);
          }
          return set( {rooms: array} );
        } catch (e) {
          return;
        }
      },
      setRoom: (room) => set(() => ({ selectedRoom: room })),
    })
  }
}