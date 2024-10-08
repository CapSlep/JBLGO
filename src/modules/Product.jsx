import { useData } from "../DataContext"; // Import the custom hook
import Slider from "./Slider";
import Timer from "./Timer";

export default function Product({ product, setProduct }) {
    const data = useData(); // Access data from the context

    function handleColorSelection(selectedName) {
        const filteredProducts = Object.values(data.products).filter(
            (product) => {
                return product.name === selectedName;
            }
        );

        setProduct(filteredProducts[0]); // Assuming you want to set the first match
    }

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
            <Slider slidesToShow={product.slider}></Slider>
            <div className="product__info container">
                <div className="color__selection flex-row">
                    {Object.values(data.products).map((product) => {
                        return (
                            <button
                                className="selector__button"
                                key={product.name}
                                onClick={() => {
                                    handleColorSelection(product.name);
                                }}
                            >
                                <img
                                    src={product.selectorIcon}
                                    alt={product.name}
                                />
                            </button>
                        );
                    })}
                </div>
                <div className="product__features">
                    <ul>
                        {data.productFeatures.map((feature, index) => {
                            return <li key={index}>{feature}</li>;
                        })}
                    </ul>
                </div>
                <Timer startTime={5}></Timer>
                <div className="product__availability">
                    {data.productAvailabillity}
                </div>
                <div className="product__buy-reason">
                    {data.buyReasons.map((reason, index) => {
                        return <span key={index}>{reason}</span>;
                    })}
                </div>
            </div>
        </section>
    );
}
