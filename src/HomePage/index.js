import React, { useEffect } from "react";
import Footer from "../Footer";
import "./styles.css";
import { Button } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <div className="home-wrapper">
        <div className="home">
          <div className="iform">
            <div className="heading">Find The Best Blood Donor</div>
            <div className="mylabel">
              <form>
                <label className="labl">
                  Required Blood Group :
                  <input placeholder="e.g A+,B+.." type="text" />
                </label>

                <label className="labl">
                  City :
                  <input placeholder="Enter City.." type="text" />
                </label>

                <label className="labl">
                  Area Under :
                  <input placeholder="Enter Area in Kms.." type="text" />
                </label>
                <label className="labl">
                  Date :
                  <input
                    placeholder="When the blood is required.."
                    type="text"
                  />
                </label>
                <div className="btn-container">
                  <div className="btn-wrap">
                    <Button className="mybtn">Search Donors</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
