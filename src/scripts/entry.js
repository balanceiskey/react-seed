"use strict";

var React = require('react');

var Aloha = React.createClass({
    style: {
        color: 'gray',
        margin: '200px auto',
        width: 200,
        padding: 10,
        fontFamily: 'Aileron',
        textTransform: 'uppercase',
        textAlign: 'center',
        backgroundColor: 'blanchedalmond'
    },

    render: function () {
        return (
            <h1 style={this.style} className="aloha">Aloha Universe.</h1>
        );
    }
});

document.addEventListener('DOMContentLoaded', function(){
    React.render(<Aloha />, document.body);
});
