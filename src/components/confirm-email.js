import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/login.css';
import '../css/change-password.css';

import { Container, Image, Form, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const initialState = {
    email: '',
    emailError: '',
}

class ConfirmEmail extends Component {
    state = initialState;

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleValidate = () => {
        let emailError = '';

        if(!this.state.email.includes('@') || !this.state.email){
            emailError = 'البريد الألكترونى غير صحيح';
        }

        if(emailError ){
            this.setState({emailError});
            return false;
        }

        return true;
    };

    handleSubmit = e => {
        e.preventDefault();
        if(this.handleValidate()){
            console.log(this.state);
            this.setState(initialState);
        }
    };

    render(){
        return(
            <Container className='connEdit w-50 position-absolute'>
                <Image src='../images/logo.png' className='w-25 d-block mx-auto pt-4'/>
                <div className='text-center py-4'>
                    <hr className='w-50 border-0 position-relative' style={{backgroundColor: '#FDBF5A', height: '8px'}}/>
                    <span className='circle third text-white d-inline-block font-weight-bold position-absolute'>
                        <h4 style={{margin: '20% 0'}}>3</h4>
                    </span>
                    <span className='circle second text-white d-inline-block font-weight-bold position-absolute'>
                        <h4 style={{margin: '20% 0'}}>2</h4>
                    </span>
                    <span className='circle first text-white d-inline-block font-weight-bold position-absolute' style={{backgroundColor: '#115A78'}}>
                        <h4 style={{margin: '20% 0'}}>1</h4>
                    </span>
                </div>
                <div>
                    <h2 className='py-2 text-center'>البريد الألكترونى</h2>
                    <Form className='text-right pb-4'>
                        <FormGroup controlId='formBasicEmail'>
                            <InputGroup>
                                <InputGroup.Prepend className='border'>
                                    <InputGroup.Text className='textEdit'>
                                        <FontAwesomeIcon icon={faEnvelopeOpen}/>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl className='text-right' name='email'
                                 value={this.state.email} onChange={this.handleChange}/>
                            </InputGroup>
                            <h6 className='text-danger'>{this.state.emailError}</h6>
                        </FormGroup>
                        <Button type='button' className='btn btnEdit w-25 border-0 mx-auto d-block'>
                            <Link className='text-decoration-none text-white' to='/enter-code' onClick={this.handleSubmit}>
                                تأكيد
                            </Link>
                        </Button>
                    </Form>
                </div>
            </Container>
        );
    }
}

export default ConfirmEmail;
