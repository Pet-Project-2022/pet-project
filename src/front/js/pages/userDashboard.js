import React from "react";
import "../../styles/userDashboard.scss";
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
<div className="flex">
<input className="form-control form-control-lg" type="text" placeholder="post 1"/>
<button className="btn btn-primary" type="submit">Delete</button>
<button className="btn btn-primary" type="submit">Edit</button>
</div>
<div className="flex">
<input className="form-control form-control-lg" type="text" placeholder="post 2"/>
<button className="btn btn-primary" type="submit">Delete</button>
<button className="btn btn-primary" type="submit">Edit</button>
</div>
<div className="flex">
<input className="form-control form-control-lg" type="text" placeholder="post 3"/>
<button className="btn btn-primary" type="submit">Delete</button>
<button className="btn btn-primary" type="submit">Edit</button>
</div>
</form>