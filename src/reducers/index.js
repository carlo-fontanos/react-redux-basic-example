import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import DummyReducer from './DummyReducer';

/* When combined and exported, use "this.props.user" anywhere to access the updated state */
export default combineReducers({
	user: UserReducer,
	dummy: DummyReducer,
});