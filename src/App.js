import "./App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import bg from "./img/bg.png";

function App() {
    return (
        <div className="App">
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">let's shop time</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Store</Nav.Link>
                        <Nav.Link href="#pricing">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div
                className="main-bg"
                style={{ backgroundImage: `url(${bg})` }}
            ></div>
            <Container>
                <Row>
                    <Col>
                        <img
                            src={process.env.PUBLIC_URL + "/img/shoes1.jpg"}
                            width="80%"
                        />
                        <h4>상품명</h4>
                        <p>상품설명</p>
                    </Col>
                    <Col>
                        <img
                            src={process.env.PUBLIC_URL + "/img/shoes2.jpg"}
                            width="80%"
                        />
                        <h4>상품명</h4>
                        <p>상품설명</p>
                    </Col>
                    <Col>
                        <img
                            src={process.env.PUBLIC_URL + "/img/shoes3.jpg"}
                            width="80%"
                        />
                        <h4>상품명</h4>
                        <p>상품설명</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
