import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';


class Jumbotron_Head extends Component {

    render() {
        return(
            <Jumbotron>
                <h1>To-do App</h1>
                <p>
                    This is a simple To-do App with React.js. Just playing around.
                    Stay tuned for more.
                </p>
                <p>
                    <Button bsStyle="primary">Learn more</Button>
                </p>
            </Jumbotron>
        );
    }

}

export default Jumbotron_Head;