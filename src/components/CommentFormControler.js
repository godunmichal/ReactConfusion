import React, {Component} from 'react';
import {Col,Row, Button, Modal, ModalBody, ModalHeader, Label} from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);



class CommentForm extends Component{

    constructor(props){
        super(props);
        this.state ={
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);

    }

    handleSubmit(values){
        console.log("Current state is " + JSON.stringify(values));
        alert("Current state is " + JSON.stringify(values));
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render(){
        return(
            <div>
            <Button outline onClick={this.toggleModal}>
            <span className="fa fa-pencil fa-lg">Submit Comment</span>
            </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>

                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={12}>Last Name</Label>
                                <Col md={12}>
                                    <Control.text  model=".name" id="name" name="name" 
                                    placeholder="Name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3),maxLength: maxLength(15)
                                    }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 or less characters'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment" rows="12"  className="form-control"
                                    validators={{
                                        required, minLength: minLength(3),maxLength: maxLength(200)
                                    }}/>
                                    <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 200 or less characters'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={2}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                            </LocalForm>
                    </ModalBody>
                </Modal>
                </div>
        );

    }   
}


export default CommentForm