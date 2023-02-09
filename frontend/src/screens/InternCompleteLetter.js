import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./Response.css";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";
import Images from "../images/ImgIndex";
import SecurePageSection from "../SecurePageSection";

function InternCompleteLetter() {
  const user_id = useSelector((state) => state.authentication.user.user_id);
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    const response = await axios.get(`/api/intern-compelete/${user_id}`);
    setUser(response.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  function printDocument() {
    var divContents = document.getElementById("letter").innerHTML;
    var a = window.open(
      "Letter",
      "Letter",
      "scrollbars=yes, resizable=no, width=795, height=1135"
    );
    a.document.write("<html>");
    a.document.write("<link>");
    a.document
      .write(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"
  />`);
    a.document.write("</link>");

    a.document.title = `${user.first_name} ${user.last_name} Offer Letter`;
    a.document.write("<style>");
    a.document.write(`@media print {
    @page {
      margin: 0;
      overflow: hidden;
    }
  }

  html, body{
    overflow: hidden;
  }

  .fResponseBody {
  padding: 0 20px;
  width: 210mm;
  height: 296mm;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  background: url(https://i.postimg.cc/MGFXvhF9/letter-Head.png);
  background-size: cover;
  }

  .invocieHeader{
  width: 800px;
  }

  .invocieHeader>img{
  width: 800px;
  }

  .invocieFooter{
  width: 800px;
  }

  .invocieFooter>img{
  width: 800px;
  }

  .letterBody{
  padding: 20px 20px;
  text-align: justify;
  }

  .section2, .section3{
  margin-top: 40px;
  }

  .section4{
  margin-top: 30px;
  }

  .bordered-col{
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3px 0px;
  border: 2px solid #000;
  }

  .bordered-mid-col{
  padding: 3px 10px;
  border-left: 2px solid #000;
  border-right: 2px solid #000;
  }

  .bordered-row{
  padding: 3px 0;
  border: 2px solid #000;
  }

  .bordered-mid-row{
  padding: 3px 0px;
  border-left: 2px solid #000;
  border-right: 2px solid #000;
  }

  .bordered-col>h3{
  font-size: 36pt;
  font-weight: 800;
  }

  .bordered-col>h4{
  margin: auto;
  font-size: 26pt;
  font-weight: 800;
  }

  .boldText{
  font-weight: 800;
  }

  .Hsingle-enter {
  font-family: "Times New Roman";
  font-size: 14pt;
  margin-bottom: 0;
  font-weight: 800;
  }

  .Hsingle-enter2 {
  font-family: "Times New Roman";
  font-size: 12pt;
  margin-bottom: 0;
  font-weight: 800;
  }

  .Tsingle-enter {
  font-family: "Times New Roman";
  font-size: 12pt;
  margin-bottom: 0;
  }

  .Tdouble-enter {
  font-family: "Times New Roman";
  margin-top: 11px;
  font-size: 12pt;
  margin-bottom: 0;
  }

  .Tsign-enter {
  font-family: "Times New Roman";
  margin-top: 30px;
  font-size: 12pt;
  margin-bottom: 0;
  }

  .Hdouble-enter {
  font-family: "Times New Roman";
  margin: 16px auto;
  font-size: 16pt;
  color: #000;
  font-weight: 600;
  }

  .H3double-enter {
  font-family: "Times New Roman";
  margin: 0;
  margin-top: 14px;
  font-size: 14pt;
  color: #000;
  font-weight: 600;
  }

  .Lsingle-enter li {
  font-family: "Times New Roman";
  font-size: 12pt;
  margin-bottom: 0;
  }

  .Ldouble-enter li {
  font-family: "Times New Roman";
  font-size: 12pt;
  margin-bottom: 0;
  margin-top: 12px
  }

  .response {
  font-family: "Times New Roman";
  font-size: 12pt;
  font-weight: 600;
  text-decoration: underline;
  }

  .Tsingle {
  font-family: "Times New Roman";
  font-size: 16pt;
  text-decoration: none;
  font-weight: 400;
  color: rgb(0, 0, 0);
  margin-bottom: 8px;
  }

  .Tdouble {
  font-family: "Times New Roman";
  font-size: 16pt;
  text-decoration: none;
  font-weight: 400;
  color: rgb(0, 0, 0);
  margin-bottom: 24px;
  }
  `);
    a.document.write("</style>");
    a.document.write("<body>");
    a.document.write(divContents);
    a.document.write("</body></html>");
    a.document.close();
    setTimeout(function () {
      a.print();
    }, 1000);
  }

  return (
    <div>
      <SecurePageSection accessableUsers={"admin,hr,employee,intern"} />
      <div className="responsePage">
        <Row style={{ marginBottom: "1em", marginTop: "1em" }}>
          <Col>
            <h3 style={{ textAlign: "left" }}>
              {user.first_name} {user.last_name} Internship Completion Letter
            </h3>
          </Col>
          <Col>
            <Button onClick={printDocument} className="btnSecondary">
              Download Internship Letter
            </Button>
          </Col>
        </Row>
        <div id="letter" className="letter">
          <div
            className="fResponseBody"
            style={{
              background: `url(/images/letterHead.jpg)`,
              backgroundSize: "cover",
            }}
          >
            <div className="letterBody">
              <Row>
                <p className="Tsingle-enter" style={{ textAlign: "right" }}>
                  Date: {moment(user.crtDate).format("DD-MM-YYYY")}
                </p>
                <p className="Tsingle-enter" style={{ textAlign: "right" }}>
                  Location: {user.branch}
                </p>
              </Row>
              <Row style={{ margin: "30px 0px" }}>
                <h3
                  style={{
                    textAlign: "center",
                    textDecoration: "underline double",
                  }}
                >
                  SUB: INTERNSHIP COMPLETION LETTER
                </h3>
              </Row>
              <Row>
                <p className="Tdouble-enter">
                  We are glad to inform you that{" "}
                  <span className="boldText">
                    {user.titles} {user.name}
                  </span>{" "}
                  of from {user.college} with{" "}
                  <span className="boldText">
                    Register Number: {user.rollNum}
                  </span>
                  , has successfully completed{" "}
                  {(() => {
                    if (user.titles === "Mr.") {
                      return "his";
                    }
                    if (user.titles === "Mrs." || user.titles === "M/s.") {
                      return "her";
                    }
                  })()}{" "}
                  internship at {user.company} from{" "}
                  {moment(user.stDate).format("Do MMMM YYYY")} to{" "}
                  {moment(user.endDate).format("Do MMMM YYYY")}.
                </p>
              </Row>
              <Row>
                <p className="Tdouble-enter">
                  During{" "}
                  {(() => {
                    if (user.titles === "Mr.") {
                      return "his";
                    }
                    if (user.titles === "Mrs." || user.titles === "M/s.") {
                      return "her";
                    }
                  })()}{" "}
                  internship,{" "}
                  {(() => {
                    if (user.titles === "Mr.") {
                      return "he";
                    }
                    if (user.titles === "Mrs." || user.titles === "M/s.") {
                      return "she";
                    }
                  })()}{" "}
                  was exposed to the various activities under the {user.jobRole}
                  ,
                </p>
                <p className="Tdouble-enter">
                  We found{" "}
                  {(() => {
                    if (user.titles === "Mr.") {
                      return "him";
                    }
                    if (user.titles === "Mrs." || user.titles === "M/s.") {
                      return "her";
                    }
                  })()}{" "}
                  extremely inquisitive and hard working.{" "}
                  {(() => {
                    if (user.titles === "Mr.") {
                      return "He";
                    }
                    if (user.titles === "Mrs." || user.titles === "M/s.") {
                      return "She";
                    }
                  })()}{" "}
                  section2 was very much interested to learn the functions of
                  our core division and willing to put{" "}
                  {(() => {
                    if (user.titles === "Mr.") {
                      return "his";
                    }
                    if (user.titles === "Mrs." || user.titles === "M/s.") {
                      return "her";
                    }
                  })()}{" "}
                  efforts and get into the depth of the subject to understand it
                  better.
                </p>
                <p className="Tdouble-enter">
                  {(() => {
                    if (user.titles === "Mr.") {
                      return "His";
                    }
                    if (user.titles === "Mrs." || user.titles === "M/s.") {
                      return "Her";
                    }
                  })()}{" "}
                  association with us was very fruitful and we wish him all the
                  best in{" "}
                  {(() => {
                    if (user.titles === "Mr.") {
                      return "his";
                    }
                    if (user.titles === "Mrs." || user.titles === "M/s.") {
                      return "her";
                    }
                  })()}{" "}
                  future endeavours.
                </p>
              </Row>
              <Row style={{ padding: "40px 0" }}>
                <p className="Tsingle-enter">
                  <span className="boldText"> For {user.company}</span>
                </p>
              </Row>
              <Row>
                <p className="Tsingle-enter">
                  <span className="boldText">Priyanka S</span>
                </p>
                <p className="Tsingle-enter">
                  <span className="boldText">(Head – Human Resources)</span>
                </p>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternCompleteLetter;
