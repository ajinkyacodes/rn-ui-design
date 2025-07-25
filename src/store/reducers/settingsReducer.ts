import { CHANGE_USER_ROLE } from "../types";

const initialState = {
	userRole: 'Owner',
};

export default (state = initialState, action) => {
	switch (action.type) {
        case CHANGE_USER_ROLE:
            return { ...state, userRole: action.payload };
		default:
			return state;
	}
};
