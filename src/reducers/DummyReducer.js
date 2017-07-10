const initialState = {
	text_1: false,
	text_2: null,
	text_3: null,
};

/* Bellow is what we call a "Reducer" */
export default (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE':
			/* Map variables from action.data then explode keys for easier access to data. (ES6 patter) */
			let {text_1, text_2, text_3} = action.data;
			
			/* Set the new state */
			return {
				text_1: true,
				text_2,
				text_3,
			};
		case 'DELETE':
			return initialState;
		default:
			return state;
	}
}