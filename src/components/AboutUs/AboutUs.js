import React from "react";
import about from "../../media/about.png";

const AboutUs = () => {
  return (
    <div className="container mb-4">
      <h1 className="text-center">About Us</h1>
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6  pe-4">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Caring For The Health & Well Being Of Family.
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We will work with you to develop individualised care plans,
                  including management of chronic diseases. We are committed to
                  being the region’s premier healthcare network providing
                  patient centered care that inspires clinical and service
                  excellence.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Caring For The Health & Well Being Of Family.
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We will work with you to develop individualised care plans,
                  including management of chronic diseases. We are committed to
                  being the region’s premier healthcare network providing
                  patient centered care that inspires clinical and service
                  excellence.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Caring For The Health & Well Being Of Family.
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We will work with you to develop individualised care plans,
                  including management of chronic diseases. We are committed to
                  being the region’s premier healthcare network providing
                  patient centered care that inspires clinical and service
                  excellence.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto col-lg-6 col-10 ">
          <img className="w-100 p-3" src={about} alt="banner img" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
