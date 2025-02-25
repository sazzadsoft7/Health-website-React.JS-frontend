import React from 'react';
import {Link} from "react-router-dom";
import {NavLink} from "react-bootstrap";

const FeatureCartCom = () => {
    return (
      <>
          <div className="container">
              <div className="row">

                <Link to='/findadoctor/department' className="col-md-4 col-12 rounded text-white text-decoration-none" style={{ backgroundColor: '#435ba1' }}>
                    <h1>hello</h1>
                    <h1>hello</h1>
                </Link>

                  <NavLink  className="col-md-4 col-12 rounded text-white" style={{ backgroundColor: '#435ba1' }}>
                      <h1>hello</h1>
                      <h1>hello</h1>
                  </NavLink>



              </div>
              <div className="row">

              </div>
          </div>
      </>
    );
};

export default FeatureCartCom;