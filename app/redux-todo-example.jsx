var redux = require('redux');

var stateDefault = {
				showCompleted: false,
				searchText: '',
				todos: []
};

var reducer = (state = stateDefault, action) => {
	return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);