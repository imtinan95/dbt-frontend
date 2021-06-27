import { Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import "../assets/fetch.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/App.css";

const logo = "/logo.png";

function DataGet() {
  axios.get("http://localhost:61691/query/candidate").then(function (response) {
    // handle success
    const axisData = response.data;
    console.log(axisData);
  });

  return (
    <div>
      <h1>This is data get component</h1>
    </div>
  );
}

function QueryView() {
  return (
    <div className="App">
      <div className="Header">
        <img src={logo} width="150" alt="FPSC_Logo"></img>
        <div className="Title text-align-center">
          <h1 className="TitleName">
            Federal Public Service Commission, Pakistan
          </h1>
          <h3>Query View</h3>
        </div>
      </div>
      <div className="Body text-align-center">
        <div>
          <Link to="/queries">
            <button className="Buttons">Home</button>
          </Link>
        </div>
        <div>
          <DataGet />
        </div>
      </div>
      <div className="Footer text-align-center">
        <h3>Developed by Muhammad Imtinan Ul Haq in React</h3>
        <p>Reg No. 4018-FBAS/BSCS/F18</p>
      </div>
    </div>
  );
}

export default QueryView;
