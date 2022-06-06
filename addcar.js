import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import config from "../../config";

const Addcar = () => {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [model, setmodel] = useState("");
  const [price, setprice] = useState("");
  const [carColor, setcolor] = useState("");

  const navigate = useNavigate()

  const save = () => {
    if (id.length === 0) {
      toast.warning("enter id");
    } else if (name.length === 0) {
      toast.warning("enter name");
    } else if (model.length === 0) {
      toast.warning("enter model");
    } else if (price.length === 0) {
      toast.warning("enter price");
    } else if (carColor.length === 0) {
      toast.warning("enter color");
    }

    const body = { id, name, model, price, carColor };

    axios.post(config.serverURL + "/car/add", body).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        toast.success("Car added successfully");
        navigate('/home')

      } else {
        toast.error("can cannot be added");
      }
    });
  };

  const cancel = () => {
    navigate("/home");
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Enter Car details</h2>
      <hr />
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label className="label-control" style={{ margin: 3 }}>
                Id
              </label>
              <input
                onChange={(event) => {
                  setid(event.target.value);
                }}
                className="form-control"
                type="number"
              ></input>
            </div>
            <div className="mb-3">
              <label className="label-control" style={{ margin: 3 }}>
                Name
              </label>
              <input
                onChange={(event) => {
                  setname(event.target.value);
                }}
                className="form-control"
                type="text"
              ></input>
            </div>
            <div className="mb-3">
              <label className="label-control" style={{ margin: 3 }}>
                Model
              </label>
              <input
                onChange={(event) => {
                  setmodel(event.target.value);
                }}
                className="form-control"
                type="text"
              ></input>
            </div>
            <div className="mb-3">
              <label className="label-control" style={{ margin: 3 }}>
                Price
              </label>
              <input
                onChange={(event) => {
                  setprice(event.target.value);
                }}
                className="form-control"
                type="number"
              ></input>
            </div>
            <div className="mb-3">
              <label className="label-control" style={{ margin: 3 }}>
                Color
              </label>
              <input
                onChange={(event) => {
                  setcolor(event.target.value);
                }}
                className="form-control"
                type="text"
              ></input>
            </div>
            <div className="mb-3">
              <button
                onClick={save}
                className="btn btn-primary"
                style={{ marginRight: 10 }}
              >
                Save
              </button>
              <button onClick={cancel} className="btn btn-danger">
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

export default Addcar;
