import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import config from "../../config";
import { useNavigate } from "react-router-dom";

const Getcar = () => {
  const [cars, setcar] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getall();
  }, []);

  const getall = () => {
    axios.get(config.serverURL + "/car/get").then((response) => {
      const result = response.data;

      if (result["status"] === "success") {
        setcar(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    });
  };

  const deletecar = (id) => {
    axios.delete(config.serverURL + "/car/delete/" + id).then((response) => {
      const result = response.data;

      if (result["status"] === "success") {
        toast.success("Deleted successfully");
        getall();
      } else {
        toast.error(result["error"]);
      }
    });
  };

  const home = () => {
    navigate("/home");
  };

  return (
    <div className="container">
      <h3>Cars Available</h3>
      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Model</th>
            <th>Price</th>
            <th>CarColor</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => {
            return (
              <tr>
                <td>{car.id}</td>
                <td>{car.name}</td>
                <td>{car.model}</td>
                <td>{car.price} Rs.</td>
                <td>{car.carColor}</td>
                <td>
                  <button
                    className="btn btn-danger "
                    onClick={() => deletecar(car.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button className="btn btn-primary" onClick={home}>
          Home
        </button>
      </div>
    </div>
  );
};

export default Getcar;
