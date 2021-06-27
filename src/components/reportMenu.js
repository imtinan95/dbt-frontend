import { Link } from "react-router-dom";

import "../assets/App.css";

const logo = "/logo.png";
function reportForm() {
  return (
    <div className="App">
      <div className="Header">
        <img src={logo} width="150" alt="FPSC_Logo"></img>
        <div className="Title text-align-center">
          <h1 className="TitleName">
            Federal Public Service Commission, Pakistan
          </h1>
          <h3>Report Menu</h3>
        </div>
      </div>
      <div className="Body text-align-center">
        <div>
          <Link to="/">
            <button className="Buttons">Home</button>
          </Link>
        </div>
        <div>
          <button className="Buttons">Candidates Report</button>
        </div>
        <div>
          <button className="Buttons">Divisions Report</button>
        </div>
        <div>
          <button className="Buttons">Employees Report</button>
        </div>
        <div>
          <button className="Buttons">Ministries Report</button>
        </div>
        <div>
          <button className="Buttons">Positions Report</button>
        </div>
      </div>
      <div className="Footer text-align-center">
        <h3>Developed by Muhammad Imtinan Ul Haq in React</h3>
        <p>Reg No. 4018-FBAS/BSCS/F18</p>
      </div>
    </div>
  );
}

export default reportForm;
