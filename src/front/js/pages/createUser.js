import React from "react";
import "../../styles/createUser.scss";
import Button from "react-bootstrap/Button";



<form id="createUserForm">
    <div className="row">
    <div className="form-group col-xs-6">
        <label for="firstname">First Name</label>
        <input type="text" class="form-control" id="firstName" placeholder="first name"/>
    </div>
    <div className="form-group col-xs-6">
    <label for="lastname">Last Name</label>
    <input type="text" class="form-control" id="lastName" placeholder="last name"/>
  </div>
  </div>
  <div className="row">
    <div className="form-group">
        <label for="exampleFormControlInput1">Email</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email"/>
    </div>
  </div>
  <div className="row">
    <div className="form-group">
        <label for="exampleFormControlInput1">Phone</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="phone"/>
    </div>
  </div>
  <div className="row">
    <div className="form-group">
        <label for="exampleFormControlInput1">Zip Code</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="zip code"/>
    </div>
  </div>
  <div className="row">
    <div className="form-group">
        <label for="exampleFormControlInput1">Username</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="username"/>
    </div>
  </div>
  <div className="row">
    <div className="form-group">
        <label for="exampleFormControlInput1">Password</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="password"/>
    </div>
  </div>
  <div class="input-group">
  <div class="input-group-prepend">
    <div class="input-group-text">
    <input type="radio" aria-label="Radio button for following text input"/>
    </div>
  </div>
  <input type="text" class="form-control" aria-label="Text input with radio button"/><label className="radio3">
        I Agree with the Privacy Policy and the Terms of Service ("Agreement")
    </label>
</div>
<button class="btn btn-primary" type="submit">Submit</button>
</form>