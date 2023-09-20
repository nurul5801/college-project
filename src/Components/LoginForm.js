import React from "react";

export default function LoginForm() {
  return (
    <div className="container">
      <form className="form-horizontal">
        <div className="form-group form-group-lg">
          <label htmlhtmlFor="inputName" className="control-label col-xs-1">
            Name
          </label>
          <div className="col-xs-3">
            <input
              className="form-control input-sm"
              type="text"
              id="inputName"
              placeholder="Full Name"
            />
          </div>
        </div>

        <div className="form-group form-group-sm">
          <label htmlFor="inputDOB" className="control-label col-xs-1">
            Password
          </label>
          <div className="col-xs-3">
            <input
              type="password"
              className="form-control input-sm"
              name="Hi"
              id="pass"
              placeholder="Enter your Password"
            />
          </div>
        </div>


      </form>
    </div>
  );
}
