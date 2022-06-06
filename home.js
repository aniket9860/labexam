import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();

  const logout = () => {
    toast.success("logout succesfully");
    navigate("/signin");
  };

  const getcar = () =>{
      navigate("/getcar")
  }

  const addCar = () => {
    navigate("/addcar");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome user</h1>
      <hr />
      <div className="row" style={{ justifyContent: "center" }}>
        <div className="col-3">
          <button onClick={addCar} className="btn btn-primary">
            Add car
          </button>
        </div>
        <div className="col-3">
          <button onClick={getcar} className="btn btn-primary">Get all car</button>
        </div>
        <div className="col-3">
          <button onClick={logout} className="btn btn-primary">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
