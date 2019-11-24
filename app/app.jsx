const React = require('react');
const ReactDOM = require('react-dom');

/* Import Components */
const HelloWorld = require('./components/HelloWorld');
const StateHook = require('./components/StateHook');

ReactDOM.render(<HelloWorld/>, document.getElementById('main'));
ReactDOM.render(<StateHook/>, document.getElementById('state-hook'));
