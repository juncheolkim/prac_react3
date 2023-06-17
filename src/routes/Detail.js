import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
    background: ${(props) => props.bg};
    color: ${(props) => (props.bg === "blue" ? "white" : "black")};
    padding: 10px;
`;

let NewBtn = styled.button(YellowBtn)`
    // 블라블라
`;

export default function Detail(props) {
    let { id } = useParams();
    let [findShoes] = props.shoes.filter((item) => {
        return item.id === parseInt(id);
    });
    return (
        <div className="container">
            <YellowBtn bg="blue">버튼</YellowBtn>
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={
                            "https://codingapple1.github.io/shop/shoes" +
                            (parseInt(id) + 1) +
                            ".jpg"
                        }
                        width="100%"
                    />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findShoes.title}</h4>
                    <p>{findShoes.content}</p>
                    <p>{findShoes.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}
