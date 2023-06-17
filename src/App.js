/* eslint-disable */
import "./App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";

function App() {
    let [shoes] = useState(data);
    let navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Let's shop time
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate("/detail");
                            }}
                        >
                            Detail
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div
                                className="main-bg"
                                style={{ backgroundImage: `url(${bg})` }}
                            ></div>
                            <Container>
                                <Row>
                                    {shoes.map((item, idx) => {
                                        return (
                                            <Card
                                                idx={idx}
                                                item={item}
                                                key={idx}
                                            />
                                        );
                                    })}
                                </Row>
                            </Container>
                        </>
                    }
                />
                <Route path="/detail" element={<Detail />} />
                <Route path="/about" element={<About />}>
                    <Route path="member" element={<div>멤버</div>}></Route>
                    <Route
                        path="location"
                        element={<div>위치정보</div>}
                    ></Route>
                </Route>
                <Route path="/*" element={<div>잘못된 URL 입니다.</div>} />
            </Routes>
        </div>
    );
}

function About() {
    return (
        <div>
            <h4>회사정보</h4>
            <Outlet />
        </div>
    );
}

function Card(props) {
    return (
        <Col key={props.idx}>
            <img
                src={process.env.PUBLIC_URL + `/img/shoes${props.idx + 1}.jpg`}
                width="180px"
            />
            <h4>{props.item.title}</h4>
            <p>{props.item.content}</p>
        </Col>
    );
}

export default App;
