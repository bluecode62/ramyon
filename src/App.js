import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";  
import { useState } from "react";
import About from "./components/About";

import data from "./components/data.js";
import Details from "./components/Details";
import Information from "./components/Information.js";
import Location from "./components/Location.js";

function App() {
  const navigate = useNavigate();
  const [bests] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            <i class="fa-solid fa-cat"></i>
            라면냥이 포장마차
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("about")}>About</Nav.Link>
            <Nav.Link onClick={() => navigate("information")}>
              Information
            </Nav.Link>
            <Nav.Link onClick={() => navigate("location")}>
              Location
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <Container className="wrap">
              <div className="visual_main">
                <img
                  src={process.env.PUBLIC_URL + "/img/mainBanner01.jpg"}
                  alt="비주얼 메인 이미지"
                />
              </div>
              <h2>베스트 상품</h2>
              <Row className="best_product">
                {bests.map((best, index) => {
                  return (
                    <Col className="best_box">
                      <Link to={`details/${index}`}>
                        <img
                          src={best.image}
                          style={{ width: "240px" }}
                          alt="상품 이미지"
                        />
                        <h4>{best.title}</h4>
                        <p>{best.desc}</p>
                        <p>{best.price}</p>
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          }
        />
        <Route path="about" element={<About />}></Route>
        <Route path="information" element={<Information />} />
        <Route path="location" element={<Location />} />
        <Route path="details/:id" element={<Details bests={bests} />} />
      </Routes>
    </div>
  );
}

export default App;
