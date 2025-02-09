import datacamp from "../../assets/logos/data-camp-logo-inverted.svg";
import dcdonates from "../../assets/logos/DC_Donates_logo_inverted.png";

function DCDonates() {
  return (
    <section className="dcdonates">
      <div className="container">
        <h2 className="text-center">DC Donates x EAIC</h2>
        <div className="row px-4 py-3">
          <div className="col-md-8">
            <p
              className="px-lg-2"
              style={{ textAlign: "justify", fontSize: "15pt" }}
            >
              ENSIAS AI Club is proud to announce its renewed partnership with
              DataCamp Donates. DataCamp is an online learning platform that offers
              interactive courses in Python, R, and SQL. It is a great resource
              for students and professionals who want to learn data science and
              analytics. DataCamp has been a valuable partner for ENSIAS AI
              Club, and we are excited to continue working with them to provide
              our members with the best learning experience possible.
            </p>
          </div>
          <div
            className="col-md-4 rounded d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "var(--color-6)" }}
          >
            <img
              src={datacamp}
              alt="DataCamp"
              className="img-fluid px-5 py-5"
              style={{ width: "300px" }}
            />
          </div>
        </div>
        <div className="row gy-4 mt-3 px-3">
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <div
              className="card h-100 shadow-sm"
              style={{
                backgroundColor: "var(--color-6)",
                color: "white",
                borderTop: "5px solid var(--color-8)",
              }}
            >
              <div className="card-body">
                <p
                  className="card-text"
                  style={{
                    fontSize: "15pt",
                    fontStyle: "italic",
                  }}
                >
                  "Datacamp's platform has provided me with a seamless learning
                  journey, enabling me to explore a wide array of subjects,
                  ranging from Python programming to machine learning and
                  beyond. The interactive learning environment, practical
                  exercises, and courses led by experts have equipped me with
                  the practical skills essential for excelling in the field of
                  data science."
                </p>
              </div>
              <div className="card-footer py-3">
                <h6>- Adil, Head of Training Cell</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col-md-12 mb-4 text-center px-5 d-flex justify-content-center">
                <h4>
                  Do you want to learn data science and analytics? <br /> Apply
                  for a free DataCamp subscription now!
                </h4>
              </div>
              <div className="col-md-12 gap-3 px-5 px-lg-0 d-flex flex-column flex-lg-row justify-content-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeCauY-fEMYWOEMKV8otxeph8WSMoyAsowTDFdsxBitNJtTOA/viewform"
                  target="_blank"
                  className="btn px-4 py-2"
                  style={{
                    fontSize: "16pt",
                    fontWeight: "bold",
                    backgroundColor: "var(--color-8)",
                    color: "white",
                  }}
                >
                  Apply Now
                </a>
                <a
                  href="https://www.datacamp.com"
                  target="_blank"
                  className="btn px-4 py-2"
                  style={{
                    fontSize: "16pt",
                    fontWeight: "bold",
                    backgroundColor: "none",
                    border: "3px solid var(--color-8)",
                    color: "white",
                  }}
                >
                  Learn More
                </a>
              </div>
              <div className="col-md-12">
                <h5 className="text-center mt-5">What You Will Benefit From</h5>
                <div className="row gy-3 px-4 py-3">
                  <div className="col-md-12 d-flex justify-content-center align-items-center">
                    <ul className="list-unstyled">
                      <li>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        440+ courses and 110+ Projects, each worth over $399 USD
                      </li>
                      <li>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Practice exercises to sharpen your skills
                      </li>
                      <li>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Assessments to test your knowledge on the subject matter
                      </li>
                      <li>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Projects that stem from real world queries
                      </li>
                      <li>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Access to extra features like Workspace, Certification,
                        and Jobs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <div
              className="card h-100 shadow-sm"
              style={{
                backgroundColor: "var(--color-6)",
                color: "white",
                borderTop: "5px solid var(--color-8)",
              }}
            >
              <div className="card-body">
                <p
                  className="card-text"
                  style={{
                    fontSize: "15pt",
                    fontStyle: "italic",
                  }}
                >
                  "I would like to express my sincere gratitude to DataCamp for
                  providing us with free access to an extensive array of courses
                  and materials in the field of business intelligence and
                  analytics engineering. As students, this support from DataCamp
                  is making a real difference in our careers. So thank you
                  DataCamp for your support!"
                </p>
              </div>
              <div className="card-footer py-3">
                <h6>- Sara, ENSIAS AI Club Member</h6>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center mt-5">DataCamp Donates</h2>
        <div className="row gy-3 px-4 py-3">
          <div
            className="col-md-4 rounded d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "var(--color-6)" }}
          >
            <img
              src={dcdonates}
              alt="DataCamp"
              className="img-fluid px-5 py-5"
              style={{ width: "300px" }}
            />
          </div>
          <div className="col-md-8">
            <p
              className="px-lg-2"
              style={{ textAlign: "justify", fontSize: "15pt" }}
            >
              DataCamp Donates is a partnership between DataCamp and
              organizations that are working to make a positive impact in the
              world. They provide free access to DataCamp for students,
              researchers, and volunteers who are working to address social and
              environmental challenges. If you are part of an organization that
              could benefit from DataCamp Donates, you can apply for a donation
              on their{" "}
              <a
                className="text-decoration-none"
                href="https://www.datacamp.com/donates"
                style={{ color: "var(--color-9)" }}
              >
                website
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DCDonates;
