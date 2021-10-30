import React from "react";
import img1 from "../../assets/images/img1.jpeg";

function Imgbar() {
  return (
    <div>
      <img
        src={img1}
        alt="#"
        style={{
          height: "35vh",
          width: "50vw",
          marginLeft: "32%",
          marginTop: "2%",
        }}
      />
      <div class="container">
        <div class="text-wrapper">
          <h1 style={{ marginLeft: "25%", marginTop: "-20%" }}>
            Online Classes
          </h1>
        </div>
        <div class="heading">
          <h6 style={{ marginLeft: "25%", marginTop: "2%" }}>
            Find what fascinates you as you explore these online classes.
          </h6>
        </div>
        <div class="btn" style={{ marginTop: "1%", marginLeft: "24%" }}>
          <button
            type="button"
            class="btn btn-warning"
            style={{ background: "#00e677", border: "none" }}
          >
            Get Started for Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Imgbar;
