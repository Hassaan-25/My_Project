import React from "react";
import "./styles.css";
import Footer from "../Footer";

function ServicePage() {
  return (
    <>
      <div className="service-wrapper">
        <div className="service-partition-wrapper">
          <h2 className="service-heading"> Services Provided by Hemo</h2>
          <p className="service-description">
            Hemo is committed to providing a range of services that facilitate
            the blood donation process and ensure efficient matching between
            donors and recipients. Our platform offers the following key
            services:
          </p>
          <ul className="service-list">
            <li className="service-item">
              <span className="service-item-heading">
                Blood Donor Registration:
              </span>{" "}
              <div className="service-description">
                Hemo allows individuals who are willing to donate blood to
                register as blood donors. During the registration process,
                donors provide essential information such as their blood type,
                contact details, and location.
              </div>
            </li>
            <li className="service-item">
              <span className="service-item-heading">Blood Requests:</span>{" "}
              <div className="service-description">
                Through our platform, individuals in need of blood can submit
                blood requests specifying their required blood group and the
                city where the blood is needed.
              </div>
            </li>
            <li className="service-item">
              <span className="service-item-heading">
                Donor-Recipient Matching:
              </span>{" "}
              <div className="service-description">
                Hemo employs a sophisticated matching algorithm that takes into
                account the blood type compatibility and geographical proximity
                of donors and recipients.
              </div>
            </li>
            <li className="service-item">
              <span className="service-item-heading">Interactive Maps:</span>{" "}
              <div className="service-description">
                Our platform integrates interactive maps that display the
                location of registered donors, blood banks, and hospitals.
              </div>
            </li>
            <li className="service-item">
              <span className="service-item-heading">
                Notifications and Reminders:
              </span>{" "}
              <div className="service-description">
                To streamline communication and enhance user engagement, Hemo
                sends notifications and reminders to both donors and recipients.
              </div>
            </li>
            <li className="service-item">
              <span className="service-item-heading">
                Donor Profiles and Feedback:
              </span>{" "}
              <div className="service-description">
                Hemo provides donors with personalized profiles that showcase
                their donation history, blood type, and contact information.
                Recipients have the option to provide feedback and express their
                gratitude to the donors who have helped them during their time
                of need.
              </div>
            </li>
          </ul>
        </div>
        <div className="service-partition-wrapper">
          <div className="services-img"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ServicePage;
