import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail(props) {
    function isDigit(str) {
        return !isNaN(parseFloat(str)) && isFinite(str);
    }

    let [showWarning, setShowWarning] = useState(true);

    useEffect(() => {
        let a = setTimeout(() => {
            setAlert(false);
        }, 2000);
        return () => {
            clearTimeout(a);
        };
    }, []);

    let [alert, setAlert] = useState(true);

    let { id } = useParams();
    let [findShoes] = props.shoes.filter((item) => {
        return item.id === parseInt(id);
    });
    return (
        <div className="container">
            {alert === true ? (
                <div className="alert alert-warning">2초이내 구매시 할인</div>
            ) : null}
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={
                            "https://codingapple1.github.io/shop/shoes" +
                            (parseInt(id) + 1) +
                            ".jpg"
                        }
                        alt=""
                        width="100%"
                    />
                </div>
                <div className="col-md-6">
                    {!showWarning ? (
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <p
                                style={{
                                    backgroundColor: "red",
                                    display: "inline",

                                    color: "white",
                                    padding: "10px",
                                }}
                            >
                                경고 : 숫자만 입력하세요!
                            </p>
                        </div>
                    ) : null}
                    <input
                        onChange={(e) => {
                            setShowWarning(isDigit(e.target.value));
                        }}
                    ></input>
                    <h4>{findShoes.title}</h4>
                    <p>{findShoes.content}</p>
                    <p>{findShoes.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}
