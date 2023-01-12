import "./styles.css";

function HomePage() {
  return (
    <>
      <div className="LandPage_image"></div>
      <a href="https://play.google.com/store/apps/details?id=com.cube.arc.blood&hl=en&gl=US">
        <div className="gplay"></div>
      </a>
      <a href="https://apps.apple.com/us/app/blood-donor-american-red-cross/id911428916">
        <div className="aplay"></div>
      </a>
      <div className="text_big">Why do we use it?</div>
      <div className="text_small">
        A person who gives blood for transfusion, it is not permissible to sell
        one’s blood or to pay the blood donor.
      </div>
      <div className="Landpage_footer"></div>
    </>
  );
}

export default HomePage;
