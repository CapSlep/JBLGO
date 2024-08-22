import { useData } from "../DataContext"; // Import the custom hook

export default function BuyButton() {
    const data = useData(); // Access data from the context
    return (
        <div className="buy-wrapper">
            <button className="buy__button">{data.buyButtonText}</button>
        </div>
    );
}
