import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';


class TodoTable extends Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {

        this.props.onDelete(this.props.todosProp.title);
    }


    render(){
        return(
            <Table responsive>
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Due date</th>
                    <th>Priority</th>
                    </tr>
                </thead>
                {
                    this.props.todosProp.map(todo => {
                        return(
                            <tbody key={todo.title}>
                                <tr>
                                <td> {todo.title} </td>
                                <td> {todo.due_date} </td>
                                <td> {todo.priority} </td>
                                <td><Button onClick={this.onDelete} bsStyle="danger">Delete</Button> </td>
                                </tr>
                            </tbody>
                        );
                    })
                }
            </Table>
        );
    }
}

export default TodoTable;