import Header from "./modules/Header";
import Product from "./modules/Product";
import Blog from "./modules/Blog";
import Reviews from "./modules/Reviews";
import Footer from "./modules/Footer";
import BuyButton from "./modules/BuyButton";
import Facebook from "./modules/Facebook";

import { useData } from "./DataContext"; // Import the custom hook
import { useState } from "react";

//popups imports
import PopManager from "./modules/popups/PopManager";
import StartupPop from "./modules/popups/StartupPop";
import PromoPop from "./modules/popups/PromoPop";

export default function App() {
    const data = useData();

    let chosenProduct = data.products.product_1;
    const [product, setProduct] = useState(chosenProduct);

    function getUrl() {
        // Retrieve the macro from the button's data-attribute
        // const offerButton = document.querySelector(".checkout__button");
        // const redirectLink = offerButton.getAttribute("data-offer");

        let redirectLink = document.querySelector("#redirectLink").href;
        let selectedProductPath = document.querySelector(
            "#selectedProductPath"
        ).src;

        if (!redirectLink) {
            console.error("Offer link not found");
            return;
        }

        // Set parameters for redirection
        let adRedirectName = data.productName;

        // Send the fbq event
        fbq("track", "InitiateCheckout");

        // Check if the link already has parameters
        var separator = redirectLink.includes("?") ? "&" : "?";

        // Redirect with new parameters
        window.location.href =
            redirectLink +
            separator +
            "adRedirectName=" +
            encodeURIComponent(adRedirectName) +
            "&adRedirectImg=" +
            encodeURIComponent(selectedProductPath);
    }

    function buyHandler(event) {
        event.preventDefault();
        // Вызываем функцию getUrl для изменения URL и перенаправления
        getUrl();
    }

    const popupsHolder = {
        popupTypes: {
            SHOW_STARTUP: "startup",
            SHOW_PROMO: "promo",
        },
        popups: [
            {
                popupType: "startup",
                popupComponent: StartupPop,
            },
            {
                popupType: "promo",
                popupComponent: PromoPop,
            },
        ],
    };

    return (
        <>
            <Header></Header>
            <Product product={product} setProduct={setProduct}></Product>
            <Blog></Blog>
            <Reviews></Reviews>
            <Footer></Footer>
            <Facebook></Facebook>
            <BuyButton buyHandler={buyHandler}></BuyButton>

            <PopManager
                popupTypes={popupsHolder.popupTypes}
                popupsToShow={popupsHolder.popups}
                showStartup={true}
            ></PopManager>
            <img
                id="selectedProductPath"
                src={product.slider[0]}
                style={{ display: "none" }}
            />
        </>
    );
}
