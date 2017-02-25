var redux = require('redux');

var stateDefault = {
				showCompleted: false,
				searchText: '',
				todos: []
};

var reducer = (state = stateDefault, action) => {
	
	switch (action.type) {
		case 'CHANGE_SEARCH_TEXT':
			return {
				...state,
				searchText: action.searchText
			};
		default:
			return state;
	}
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'success'
});

console.log('Search text should be success ', store.getState());