import React from 'react'

function Navbar() {
    return (
        <div className="n">
        <div className="p-3 text-white" style="background: #002333;width: 123rem;">
          <div className="container">
            <div
              className="
                d-flex
                flex-wrap
                align-items-center
                justify-content-center justify-content-lg-start
              "
            >
              <a
                href="/"
                className="
                  d-flex
                  align-items-center
                  mb-2 mb-lg-0
                  text-white text-decoration-none
                "
              >
                <svg
                  className="bi me-2"
                  width="40"
                  height="32"
                  role="img"
                  aria-label="Bootstrap"
                >
                  <use xlink:href="#bootstrap"></use>
                </svg>
              </a>
  
              <ul
                className="
                  nav
                  col-12 col-lg-auto
                  me-lg-auto
                  mb-2
                  justify-content-center
                  mb-md-0
                "
              >
                <li>
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style="
                      background: none;
                      color: #00e677;
                      border: none;
                      margin: 1% -195%;
                      font-weight: bold;
                    "
                  >
                    Browse
                  </a>
  
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </li>
              </ul>
              
              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input
                  type="search"
                  className="asa form-control-dark"
                  placeholder="Search..."
                  aria-label="Search"
                  style="margin-left: -270%"
                />
              </form>
  
              <div className="text-end">
                <button
                  type="button"
                  className="btn btn-outline-light me-2"
                  style="background: none; border: none; font-weight: bold"
                >
                  Go Premium
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light me-2"
                  style="background: none; border: none; font-weight: bold"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  style="background: #00e677; border: none"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
          <a href="#"><img src="/images/logo.svg" alt="" style="width:6rem; background:white; margin-top:-2rem;"/></a>
        </div>
        </div>
    )
}

export default Navbar
