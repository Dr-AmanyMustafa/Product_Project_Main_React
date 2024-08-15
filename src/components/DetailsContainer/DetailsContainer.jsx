import "./DetailsContainer.css"
import CartIcon from "/Imgs/icon-cart.svg"
import PerfumeImg from "/Imgs/image-product-desktop.jpg"
function DetailsContainer(){
    return (
        <div className="main_container">
            <div id="ImageDiv">
                <img id="MyImg" src={PerfumeImg}></img>
                <div id="DetailsDiv">
                    <label id="Title">PERFUME</label>
                    <h1 id="Header">Gabrielle Essence Eau De Parfum</h1>
                    <p id="Description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                    <div id="PriceDiv">
                        <label id="PriceLabel">$149.99</label>
                        <label id="DiscountPrice"><s>$169.99</s></label>
                    </div>
                    <div>
                        <button id="CartBtn">
                            <img src={CartIcon}></img>
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailsContainer