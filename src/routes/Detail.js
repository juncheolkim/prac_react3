import { useParams } from "react-router-dom";

export default function Detail(props) {
    let { id } = useParams();
    let [findShoes] = props.shoes.filter((item) => {
        return item.id === parseInt(id);
    });
    return (
        <div className="container">
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
