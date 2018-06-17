import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

class New_todo extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

     //   this.props.onCreate(this.titleInput.value, this.dateInput.value, this.priorityInput.value );

        axios.post(
            'http://localhost:3001/api/v1/todos',
            { todo:
              {
                title: this.titleInput.value,
                due_date: this.dateInput.value,
                priority: this.priorityInput.value 
              }
            }
          )
          .then(response => {
            console.log("It worked.", response);

            this.props.onCreate(this.titleInput.value, this.dateInput.value, this.priorityInput.value );
            
          })
          .catch(error => console.log(error))

    }


    render(){
        return(
            <Form inline onSubmit={this.onSubmit.bind(this)} >
                <FormGroup controlId="formInlineName">
                    <ControlLabel>Title</ControlLabel>{' '}
                    <FormControl type="text" placeholder="Enter a title" inputRef={(ref) => {this.titleInput = ref}} />
                </FormGroup>{' '}
                <FormGroup controlId="formInlineEmail">
                    <ControlLabel>Due Date</ControlLabel>{' '}
                    <FormControl type="text" placeholder="12.05.2018" inputRef={(ref) => {this.dateInput = ref}}  />
                </FormGroup>{' '}
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Priority</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" inputRef={(ref) => {this.priorityInput = ref}}>
                        <option value="select">select</option>
                        <option value="Low">low</option>
                        <option value="Middle">middle</option>
                        <option value="High">high</option>
                    </FormControl>
                </FormGroup>
                <Button bsStyle="danger" type= "submit">Create now</Button>
            </Form>
        );
    }
}

export default New_todo;