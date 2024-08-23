import Header from "./modules/Header";
import Product from "./modules/Product";
import Blog from "./modules/Blog";
import Reviews from "./modules/Reviews";
import Footer from "./modules/Footer";
import BuyButton from "./modules/BuyButton";
import Facebook from "./modules/Facebook";

import { useData } from "./DataContext"; // Import the custom hook
import { useState } from "react";

export default function App() {
    const data = useData();

    let chosenProduct = data.products.product_1;
    const [product, setProduct] = useState(chosenProduct);

    function getUrl() {
        // Получаем ссылку перенаправления
        // let redirectLink = document.querySelector(".redirectLink").href;
        let redirectLink = "{offer}";

        // Задаем параметры для перенаправления
        let adRedirectName = data.productName;
        let img_url = product.slider[0];

        // Отправляем событие fbq
        fbq("track", "InitiateCheckout");

        // Проверяем, есть ли уже параметры в ссылке
        var separator = redirectLink.includes("?") ? "&" : "?";

        // Перенаправляем с новыми параметрами
        window.location.href =
            redirectLink +
            separator +
            "adRedirectName=" +
            encodeURIComponent(adRedirectName) +
            "&adRedirectImg=" +
            encodeURIComponent(img_url);
    }

    function buyHandler(event) {
        event.preventDefault();
        // Вызываем функцию getUrl для изменения URL и перенаправления
        getUrl();
    }

    return (
        <>
            <Header></Header>
            <Product product={product} setProduct={setProduct}></Product>
            <Blog></Blog>
            <Reviews></Reviews>
            <Footer></Footer>
            <Facebook></Facebook>
            <BuyButton buyHandler={buyHandler}></BuyButton>
        </>
    );
}
