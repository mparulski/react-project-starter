import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
    render() {
        return 'HELLO!';
    }
}

ReactDOM.render(
    <Test/>,
    document.getElementById('app')
);