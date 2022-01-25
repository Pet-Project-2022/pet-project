import React from "react";
import "../../styles/amber.scss";
import Button from "react-bootstrap/Button";

export const Amber = () => {
    return (
    <div className="container">
        <div className="row">
            <h1>Pet Amber Alert Page</h1>
            <h2>Start your Alet Now! It's Free!!</h2>
            <h3>Enter your pet's information and spread
                the ad throughout our community.
            </h3>
            <div class="input-group">
  <div className="input-group-prepend">
    <div className="input-group-text">
    <input type="radio" aria-label="Radio button for following text input"/>
    </div>
  </div>
  <input type="text" class="form-control" aria-label="Text input with radio button"/>
</div>
<div class="input-group">
  <div class="input-group-prepend">
    <div class="input-group-text">
    <input type="radio" aria-label="Radio button for following text input"/><label className="radio1">Pet Lost</label>
    </div>
  </div>
  <input type="text" class="form-control" aria-label="Text input with radio button"/><label className="radio2">Pet Found</label>
</div>
            <><a href={"/createUser/"} className="btn btn-primary btn-lg">
                    Sign Up</a><a href={"/login/"} className="btn btn-primary btn-lg">
                        Log In</a><button type="button" class="btn btn-primary btn-lg">Login With Facebook</button><button type="button" class="btn btn-primary btn-lg">Login With Gmail</button></>
        </div>
    </div>
    )
}