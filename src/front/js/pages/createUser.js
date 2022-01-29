import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Alert } from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import "../../styles/createUser.scss";

export const Register = () => {
    const {store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [date, setDate] = useState("");
    const [error, setError] = useState(null);
    const [LoginStatus, setLoginStatus] = useState("");
    const history = useHistory();
    const [messageState, setMessageState] = useState({
      isActive: false,
      message: "hello"
    });

    const handleSubmit = e => {
      e.preventDefault();
      console.log(email, password, first_name, last_name, date);
      actions 
          .signup(email, password, first_name, last_name, date, setMessageState)
          .then(date => history.push("/userDashboard"))
          .catch(error => {
            setError(error);
            console.log("This is an error", error);
          });
    };
    return (
          <div className="registerImage vh-100">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="card-body p-5 text-center">
                    <ul className="nav d-flex justify-content-center" id="myCatalog" role="tablist" />
                      <form className="loginForm" onSubmit={handleSubmit}>
                        <div>
                          <h1 className="createUserTitle">Create User</h1>
                        </div>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
};