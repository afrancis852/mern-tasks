import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyApp extends Component {

    render() {
        return (
            <div>Hello world from react!!</div>
        );
    }
}

ReactDOM.render(<MyApp />, document.getElementById('my-app'));