import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import '../css/login.css';
import { Login } from '../actions/user-actions';

import { Form, FormGroup, FormLabel, FormControl, InputGroup, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faLock } from '@fortawesome/free-solid-svg-icons';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }

    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleLogin = e => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.Login(user);
    }

    // handleValidate = () => {
    //     let emailError    = '';
    //     let passwordError = '';

    //     if(!this.state.email.includes('@') || !this.state.email){
    //         emailError = 'البريد الألكترونى غير صحيح';
    //     }

    //     if(this.state.password.length < 6 || this.state.password.length > 6 || !this.state.password){
    //         passwordError = 'يجب ان تتكون كلمة المرور من 6 ارقام';
    //     }

    //     if(emailError || passwordError){
    //         this.setState({emailError, passwordError});
    //         return false;
    //     }

    //     return true;
    // }

    render() {
        const {errors} = this.state;
        return(
            <div>
                <h2 className='py-2 text-right'>تسجيل الدخول</h2>
                    
                <Form className='text-right' onSubmit={this.handleLogin}>
                    <FormGroup controlId='formBasicEmail'>
                        <FormLabel>البريد الألكترونى</FormLabel>
                        <InputGroup>
                            <InputGroup.Prepend className='border'>
                                <InputGroup.Text className='textEdit'>
                                    <FontAwesomeIcon icon={faEnvelopeOpen}/>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl className='text-right' type='email' name='email' 
                            value={this.state.email} onChange={this.handleChange} 
                            error={errors.email}/>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup controlId='formBasicPassword'>
                        <FormLabel>كلمة المرور</FormLabel>
                        <InputGroup>
                            <InputGroup.Prepend className='border'>
                                <InputGroup.Text className='textEdit'>
                                    <FontAwesomeIcon icon={faLock}/>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl className='text-right' type='password' name='password'
                            value={this.state.password} onChange={this.handleChange}
                            error={errors.password}/>
                        </InputGroup>
                    </FormGroup>
                    
                    <Button type='submit'>تسجيل الدخول</Button>
                </Form>

                <Link className='text-decoration-none linkEdit w-100 btn text-right' 
                to='/confirm-email'>
                    هل نسيت كلمة المرور
                </Link>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export default connect(mapStateToProps, {Login})(withRouter(LoginForm))
  