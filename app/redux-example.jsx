var redux = require('redux');
var axios = require('axios');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	console.log('Name is: ', state.name);
	// document.getElementById('app').innerHTML = state.name;
	console.log('New State', store.getState())

	if (state.map.isFetching) {
		document.getElementById('app').innerHTML = 'Loading...'
	} else if (state.map.url) {
		document.getElementById('app').innerHTML = '<a target="_blank" href="' + state.map.url + '">View your Location</a>'
	}
});

// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState); 

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Moufid'));

store.dispatch(actions.addHobby('Coding'))

store.dispatch(actions.addHobby('Cooking'));

store.dispatch(actions.addHobby('Another hobby'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie('Rocky', 'Action'));

store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.addMovie('Terminator', 'Sci-Fi'));

store.dispatch(actions.removeMovie(2));