
import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';

export default class FormDemo extends Component {
    render() {
        return (
          <div className="form-container">
          <Form>
        {/* <br/> */}
          <span class="sub-button">SIGN UP</span>
    <br/>
    <p>Please fill in this form to create an account.</p>
    <hr/>
    <br/>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label><p class="First">First Name</p></Form.Label>
            <span class="First-name"><Form.Control type="text" placeholder="Enter First Name" required /></span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label><p class="Last">Last Name</p></Form.Label>
            <span class="Last-name"><Form.Control type="text" placeholder="Enter Last Name" required /></span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label><p class="Gender">Gender</p></Form.Label>
        <div>
        <span>
          <input type="radio" id="male" name="test" checked/>
          <label class="male male-label" for="male">Male </label>
        </span>
        <span>
          <input type="radio" id="female" name="test"/>
          <label class="female female-label" for="female">Female </label>
        </span>
        </div>
        </Form.Group>
        <br/>
        
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
        <Form.Label><p class="num">Phone Number</p></Form.Label>
        <span class="phone-number"><Form.Control type="text" placeholder="Enter Phone Number" required /> </span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><p class="mail-ad">Email Address</p></Form.Label>
            <span class="Mail"><Form.Control type="email" placeholder="Enter Email" /></span>
              <Form.Text className="text-muted">
            We'll never share your email with anyone else.
              </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label><p class="user-info">Username</p></Form.Label>
            <span class="Username"><Form.Control type="text" placeholder="Enter Username" /></span>
              <Form.Text className="text-muted">
            Username should contain letters or characters.
              </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><p class="Pass-info">Password</p></Form.Label>
            <span class="Password"><Form.Control type="password" placeholder="Enter Password" /></span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label><p class="Conpass-info">Confirm Password</p></Form.Label>
            <span class="Confirm-password"><Form.Control type="password" placeholder="Confirm Password" /></span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <span>By creating an account you agree to our Terms & Privacy.</span>
        <br/>
        <br/>
        <hr/>
        <Button variant="primary" type="submit">
          <span class="sub-button">SUBMIT</span>
        </Button>
      </Form>
      </div>
        )
    }
}

