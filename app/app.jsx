var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
	<p>Learning Redux</p>,
	document.getElementById('app')
);

require('./redux-todo-example.jsx');
// require('./redux-example.jsx');