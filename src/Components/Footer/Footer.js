import React from "react";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";

function Footer() {
  return (
    <>
      <div
        class="cont1"
        style={{
          marginTop: " 6rem",
          color: "white",
          fontFamily: " Roboto, sans-serif",
        }}
      >
        <div class="head1" style={{ marginLeft: "20rem" }}>
          <h5>Company</h5>
          <a href="#" style={{ marginTop: "2%" }}>
            <p>About</p>
          </a>
          <a href="#" style={{ marginTop: "1%" }}>
            <p>Career</p>
          </a>
          <a href="#" style={{ marginTop: "1%" }}>
            <p>Press</p>
          </a>
          <a href="#" style={{ marginTop: "1%" }}>
            <p>Blog</p>
          </a>
          <a href="#" style={{ marginTop: "1%" }}>
            <p>Affiliates</p>
          </a>
          <a href="#" style={{ marginTop: "1%" }}>
            <p>Partnerships</p>
          </a>
        </div>

        <div
          class="cont2"
          style={{
            marginTop: "-29rem",
            color: "white",
            fontFamily: "Roboto, sans-serif",
            marginLeft: "18%",
            marginTop: "-17rem",
          }}
        >
          <div class="head2" style={{ marginLeft: "20rem" }}>
            <h5>Community</h5>
            <a href="#" style={{ marginTop: "2%" }}>
              <p>Go Premium</p>
            </a>
            <a href="#" style={{ marginTop: "1%" }}>
              <p>Team Plans</p>
            </a>
            <a href="#" style={{ marginTop: "1%" }}>
              <p>Refer a friend</p>
            </a>
            <a href="#" style={{ marginTop: "1%" }}>
              <p>Limited</p>
            </a>
            <a href="#" style={{ marginTop: "1%" }}>
              <p>Affiliates</p>
            </a>
            <a href="#" style={{ marginTop: "1%" }}>
              <p>Partnerships</p>
            </a>
          </div>
        </div>

        <div
          class="cont3"
          style={{
            marginTop: "-29rem",
            color: "white",
            fontFamily: "Roboto, sans-serif",
            marginLeft: "35%",
            marginTop: "-17rem",
          }}
        >
          <div class="head3" style={{ marginLeft: "20rem" }}>
            <h5>Teaching</h5>
            <a href="#" style={{ marginTop: "2%" }}>
              <p>Become a Teacher</p>
            </a>
            <a href="#" style={{ marginTop: "1%" }}>
              <p>Teaching Academy</p>
            </a>
            <a href="#" style={{ marginTop: "1%" }}>
              <p>Teacher Handbook</p>
            </a>
          </div>
        </div>
        <div
          class="cont2"
          style={{
            marginTop: "-29rem",
            color: "white",
            fontFamily: "Roboto, sans-serif",
            marginLeft: "50%",
            marginTop: "-10rem",
          }}
        >
          <div class="head2" style={{ marginLeft: "20rem" }}>
            <h5>Mobile</h5>
            <a href="#">
              <img
                src={img3}
                alt=""
                style={{ width: "10rem", marginLeft: "-2%" }}
              />
            </a>
          </div>
          <a href="#">
            <img
              src={img2}
              alt=""
              style={{ width: "9rem", marginLeft: "33%" }}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
