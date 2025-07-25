import { createStore, combineReducers } from 'redux';
import { dataReducer } from './reducers/dataReducer';
import settingsReducer from './reducers/settingsReducer';

const rootReducer = combineReducers({
	dataReducer: dataReducer,
	settingsReducer: settingsReducer,
});

const store = createStore(rootReducer);

export default store;
