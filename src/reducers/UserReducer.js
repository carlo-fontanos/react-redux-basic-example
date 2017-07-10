const initialState = {
	isLoggedIn: false,
	authToken: null,
	id: null,
	name: null,
};

/* Bellow is what we call a "Reducer" */
export default (state = initialState, action) => {
	switch (action.type) {
		case 'LOG_IN':
			/* Map variables from action.data then explode keys for easier access to data. (ES6 pattern) */
			let {authToken, id, name} = action.data;
			
			/* Set the new state */
			return {
				isLoggedIn: true,
				authToken,
				id,
				name,
			};
		case 'LOG_OUT':
			return initialState;
		default:
			return state;
	}
}