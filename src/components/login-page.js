import React, { Component } from 'react';

import '../css/login.css';

import LoginForm from './login-form';
import Profile from './profile';

import { Container, Row, Col, Image } from 'react-bootstrap';

class LoginPage extends Component {
    render() {
      const login = (
        <Container className='conEdit w-75 position-absolute'>
          <Row>
            <Col lg='6'>
              <LoginForm/>
            </Col>
            <Col className='p-0' lg='6'>
              <Image className='imgEdit' src='../images/logo.png' fluid/>
            </Col>
          </Row>
        </Container>
      );
      
      const user = (
        <Profile/>
      );

      return(
        <div>
          {localStorage.userToken ? user : login}
        </div>
      );
    }
}

export default LoginPage;
