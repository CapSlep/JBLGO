import Header from "./modules/Header";
import Product from "./modules/Product";
import Blog from "./modules/Blog";
import Reviews from "./modules/Reviews";
import Footer from "./modules/Footer";
import BuyButton from "./modules/BuyButton";

export default function App() {
    return (
        <>
            <Header></Header>
            <Product></Product>
            <Blog></Blog>
            <Reviews></Reviews>
            <Footer></Footer>
            <BuyButton></BuyButton>
        </>
    );
}
