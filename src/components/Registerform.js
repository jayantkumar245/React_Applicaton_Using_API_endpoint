import React from "react";
import { useState } from "react";

import { useHistory } from "react-router-dom";
function Signup() {
  // const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    Address: ""
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, Address, password } = user;

    const resp = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        Address,
        password
      })
    });

    const data = await resp.json();

    console.log(data);
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("registeration successful");

      history.push("/");
    }
  };
  return (
    <div>
      <h1 className="text-center mt-4">Sign Up</h1>

      <div className="container">
        <form method="POST">
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">User Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputPassword1"
              value={user.name}
              onChange={handleInputs}
              placeholder="User Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email Id</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={user.email}
              onChange={handleInputs}
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="exampleInputPassword1"
              value={user.password}
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Phone No.</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              id="exampleInputPassword1"
              value={user.phone}
              onChange={handleInputs}
              placeholder="phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Address</label>
            <input
              type="text"
              name="Address"
              className="form-control"
              id="exampleInputPassword1"
              value={user.Address}
              onChange={handleInputs}
              placeholder="Your Address"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              onClick={postData}
              className="btn btn-primary  m-4"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
