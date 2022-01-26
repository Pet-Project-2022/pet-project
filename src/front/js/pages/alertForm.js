import React from "react";
import "../../styles/alertForm.scss";
import Button from "react-bootstrap/Button";

<form>
<div className="input-group">
  <div className="input-group-prepend">
    <div className="input-group-text">
    <input type="radio" aria-label="Radio button for following text input"/>
    </div>
  </div>
  <input type="text" className="form-control" aria-label="Text input with radio button"/><label>Logged in as */User/*</label>
</div>
<h1>Start your Alert Now! It's Free!!</h1>
<h2>Enter your pet's information and spread the ad throughout our community.</h2>
<div class="input-group">
  <div class="input-group-prepend">
    <div class="input-group-text">
    <input type="radio" aria-label="Radio button for following text input"/><label className="radio1">Pet Lost</label>
    </div>
  </div>
  <input type="text" class="form-control" aria-label="Text input with radio button"/><label className="radio2">Pet Found</label>
</div>
<div className="row">
    <div className="form-group">
        <label for="exampleFormControlInput1">Name:</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name"/>
    </div>
  </div>
<div className="row">
    <div className="form-group">
        <label for="exampleFormControlInput1">Color:</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="color"/>
    </div>
</div>
<div className="row">
    <div className="form-group">
        <label for="exampleFormControlInput1">Height:</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="height"/>
    </div>
</div>
<div className="row">
    <div className="form-group">
        <label for="exampleFormControlInput1">Weight:</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="weight"/>
    </div>
</div>
<div className="row">
    <div className="form-group">
        <label for="exampleFormControlInput1">Zipcode:</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="zipcode"/>
    </div>
</div>
<div className="row">
    <div className="form-group">
        <label for="exampleFormControlInput1">Species:</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="species"/>
    </div>
</div>
<div className="input-group mb-3">
  <div className="custom-file">
    <input type="file" className="custom-file-input" id="inputGroupFile02"/>
    <label className="custom-file-label" for="inputGroupFile02">Choose file</label>
  </div>
  <div className="input-group-append">
    <span className="input-group-text" id="">Upload</span>
  </div>
</div>
<input class="btn btn-primary" type="submit" value="Submit"/>
</form>