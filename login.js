import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import config from "../../config";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState(" ");

  const navigate = useNavigate();
  const signin = () => {
    if (email.length === 0) {
      toast.error("Enter email");
    } else if (password.length === 0) {
      toast.error("Enter password");
    } else {
      const body = {
        email,
        password,
      };

      axios.post(config.serverURL + "/user/signin", body).then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          toast.success("welcome user ");
          navigate("/home");
        } else {
          toast.error("Invalid username or password");
        }
      });
    }
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Enter credentials</h2>
      <hr />
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label className="label-control" style={{ margin: 3 }}>
                Email
              </label>
              <input
                onChange={(event) => {
                  setemail(event.target.value);
                }}
                className="form-control"
                type="email"
              ></input>
            </div>
            <div className="mb-3">
              <label className="label-control" style={{ margin: 3 }}>
                Password
              </label>
              <input
                onChange={(event) => {
                  setpassword(event.target.value);
                }}
                className="form-control"
                type="password"
              ></input>
            </div>
            <div className="mb-3">
              <button
                onClick={signin}
                className="btn btn-primary"
                style={{ marginRight: 10 }}
              >
                Sign in
              </button>
              <button  className="btn btn-danger">
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Signin;
