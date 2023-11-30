import { create } from 'zustand';
import { withLenses, lens } from '@dhmk/zustand-lens';

import createCommonStore from './commonStore';
import createUserStore from './userStore';
import createAccommodationStore from './accommodationStore';
import createBookingStore from './bookingStore';
import createRoomStore from './roomStore';

const commonStore = lens(createCommonStore);
const userStore = lens(createUserStore);
const accommodationStore = lens(createAccommodationStore);
const bookingStore = lens(createBookingStore);
const roomStore = lens(createRoomStore);

const useStore = create(
    withLenses({
        common: commonStore,
        user: userStore,
        accmmodation: accommodationStore,
        booking: bookingStore,
        room: roomStore,
    }),
);

export default useStore;
