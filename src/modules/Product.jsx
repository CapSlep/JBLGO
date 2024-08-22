import { useData } from "../DataContext"; // Import the custom hook
import Slider from "./Slider";

export default function Product() {
    const data = useData(); // Access data from the context

    return (
        <section className="product__block">
            <div className="product__info container flex-row">
                <div className="product__title-block flex-row">
                    <div className="product__title-element flex-column">
                        <div className="product__name">{data.productName}</div>
                        <div className="product__stars">
                            <img src="./img/icons/star.svg" alt="" />
                            <img src="./img/icons/star.svg" alt="" />
                            <img src="./img/icons/star.svg" alt="" />
                            <img src="./img/icons/star.svg" alt="" />
                            <img src="./img/icons/star-half.svg" alt="" />
                        </div>
                    </div>
                    <div className="product__title-reviews-amount">(90)</div>
                </div>
                <div className="product__price-block flex-row">
                    <div className="price-new">{data.newPrice}</div>
                    <div className="price-old">{data.oldPrice}</div>
                </div>
            </div>
            <Slider></Slider>
        </section>
    );
}
