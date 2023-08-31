import "./App.css";

import arrow from "../src/images/arrow-Recovered 1.png";
import users from "./section";
// import bg from "./images/imgbg.svg";

function App() {
  return (
    <>
      <div className="exploresec">
        <div>
          <h5> Explore Courses</h5>
        </div>
        <div>
          <h1> Start Your Preparation</h1>
        </div>
      </div>

      <div className="container">
        {users.map((data) => (
          <div style={{ width: "32%" }}>
            <div className="bg ">
              <div className="section">
                <img src={data.img} style={{ width: "50%" }} />

                <p>{data.name}</p>

                <p className="p-small">{data.text}.</p>

                <img src={arrow} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
