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

var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	console.log('searchText is: ', state.searchText);
})

// unsubscribe();

var currentState = store.getState();

console.log('currentState', currentState);

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'success'
});