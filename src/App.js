/* eslint-disable */
import "./App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./detail";

function App() {
    let [shoes] = useState(data);

    return (
        <div className="App">
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Let's shop time</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Store</Nav.Link>
                        <Nav.Link href="#pricing">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
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
            </Routes>
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
