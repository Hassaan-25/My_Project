import "./styles.css";
// import { Button } from "react-bootstrap";

function SearchForm() {
  return (
    <>
      <div className="home_img_container"></div>

      <div className="home">
        <div className="iform">
          <div className="heading">Find The Best Blood Donor</div>
          <div className="mylabel">
            <form>
              <label className="labl">
                Required Blood Group :&nbsp;
                <input placeholder="e.g A+,B+.." type="text" />
              </label>

              <label className="labl">
                City :&nbsp;
                <input placeholder="Enter City.." type="text" />
              </label>

              <label className="labl">
                Donors Under Area :&nbsp;
                <input placeholder="Enter Area in Kms.." type="text" />
              </label>
              <label className="labl">
                &nbsp;&nbsp;&nbsp;Date :&nbsp;
                <input placeholder="When the blood is required.." type="text" />
              </label>
              <div className="btn-container">
                <div className="btn-wrap">
                  <button className="mybtn">Search Donors</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchForm;
