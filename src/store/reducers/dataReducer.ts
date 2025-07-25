import { INCREASE_LIKES_BY_ONE } from "../types";

const initialState = {
	totalLikes: 20,
	userName: 'ajinkyacodes',
};

export const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREASE_LIKES_BY_ONE:
			return { ...state, totalLikes: state.totalLikes + 1 };

		default:
			return state;
	}
};
