var React = require('react');
var ReactDOM = require('react-dom');
var AddItem = require('./AddItem');

var App = React.createClass({
	render: function(){
		return(
				<div>
					<p>Simple Noute Application</p>
			     	<AddItem />
			    </div>
			)
	}
});

module.exports = App;