/* eslint-disable */
import "./App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";
import axios from "axios";

function App() {
    let [shoes, setShoes] = useState(data);
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
                                    <button
                                        onClick={() => {
                                            let newShoes = [...shoes];
                                            newShoes.sort((a, b) => {
                                                return a.title.localeCompare(
                                                    b.title
                                                );
                                            });
                                            setShoes(newShoes);
                                        }}
                                    >
                                        정렬
                                    </button>
                                    {shoes.map((item, idx) => {
                                        return <Card item={item} key={idx} />;
                                    })}
                                </Row>
                            </Container>
                            <button
                                onClick={() => {
                                    axios
                                        .get(
                                            "https://codingapple1.github.io/shop/data2.json"
                                        )
                                        .then((data) => {
                                            let newShoes = [
                                                ...shoes,
                                                ...data.data,
                                            ];
                                            console.log(data.data);
                                            setShoes(newShoes);
                                        })
                                        .catch(() => {
                                            console.log("실패");
                                        });
                                }}
                            >
                                버튼
                            </button>
                        </>
                    }
                />

                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
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
    let navigate = useNavigate();
    return (
        <Col key={props.item.id}>
            <img
                src={
                    "https://codingapple1.github.io/shop/shoes" +
                    (props.item.id + 1) +
                    ".jpg"
                }
                width="180px"
                onClick={() => {
                    navigate(`/detail/${props.item.id}`);
                }}
            />
            <h4>{props.item.title}</h4>
            <p>{props.item.content}</p>
        </Col>
    );
}

export default App;
