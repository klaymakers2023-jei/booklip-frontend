const initialState = {
	destination: null,
	checkIn: null,
	checkOut: null,
	guests: {
		adult: 0,
		child: 0,
	}
};

export default function commonStore(set) {
	return {
		...initialState,
		actions: () => ({
			setDestination: (des) => set({ destination: des }),
			setCheckIn: (start) => set({ checkIn: start }),
			setCheckOut: (end) => set({ checkOut: end }),
			setGuests: (guests) => set({ guests: guests }),
		}),
	};
}
