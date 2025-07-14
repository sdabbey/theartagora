import toteBag from '../../assets/images/apparels/tote bag.png'
import tShirt from '../../assets/images/apparels/T-shirt.png'
import whiteTShirt from '../../assets/images/apparels/white t-shirt.png'
import hoodie from '../../assets/images/apparels/Hoodie.png'
import sweatShirt from '../../assets/images/apparels/Sweatshirt.png'
import beanie from '../../assets/images/apparels/beanie.png'
import buggyTShirt from '../../assets/images/apparels/Buggy T-shirt.png'
import hat from '../../assets/images/apparels/hat.png'
import mug from '../../assets/images/apparels/mug.png'
import phoneCase from '../../assets/images/apparels/phone case.png'

export default function Shop() {
    return (
        <div className="shop">
            <h1>Shop Our Apparels</h1>
            <div className="card-container">
                <a href="#" className="card">
                    <div className="card-image">
                        <img src={toteBag} alt="" />
                    </div>
                    <div className="description">
                        <p>The Art Agora Black Cotton Denim Tote Bag.</p>
                        <small>GH₵55.00 <s>GH₵75.00</s></small>
                    </div>
                </a>
                <a href="#" className="card">
                    <div className="card-image">
                        <img src={tShirt} alt="" />
                    </div>
                    <div className="description">
                        <p>The Art Agora Signature Round Neck True Black</p>
                        <small>GH₵55.00 <s>GH₵65.00</s></small>
                    </div>
                </a>
                <a href="#" className="card">
                    <div className="card-image">
                        <img src={whiteTShirt} alt="" />
                    </div>
                    <div className="description">
                        <p>The Art Agora Signature Round Neck True White</p>
                        <small>GH₵55.00 <s>GH₵65.00</s></small>
                    </div>
                </a>
                <a href="#" className="card">
                    <div className="card-image">
                        <img src={hoodie} alt="" />
                    </div>
                    <div className="description">
                        <p>The Art Agora Signature Hoodie 14oz Heavy Weight True Black</p>
                        <small>GH₵135.00 <s>GH₵150.00</s></small>
                    </div>
                </a>
                <a href="#" className="card">
                    <div className="card-image">
                        <img src={sweatShirt} alt="" />
                    </div>
                    <div className="description">
                        <p>The Art Agora Signature Sweatshirt heavy White </p>
                        <small>GH₵135.00 <s>GH₵150.00</s></small>
                    </div>
                </a>
                <a href="#" className="card">
                    <div className="card-image">
                        <img src={beanie} alt="" />
                    </div>
                    <div className="description">
                        <p>The Art Agora Signature Beanie Black </p>
                        <small>GH₵45.00 <s>GH₵55.00</s></small>
                    </div>
                </a>
                <a href="#" className="card">
                    <div className="card-image">
                        <img src={buggyTShirt} alt="" />
                    </div>
                    <div className="description">
                        <p>The Art Agora Signature Buggy Tee Black </p>
                        <small>GH₵65.00 <s>GH₵75.00</s></small>
                    </div>
                </a>
                <a href="#" className="card">
                    <div className="card-image">
                        <img src={hat} alt="" />
                    </div>
                    <div className="description">
                        <p>The Art Agora Signature Sports Hat Black </p>
                        <small>GH₵45.00 <s>GH₵65.00</s></small>
                    </div>
                </a>
                <a href="#" className="card">
                    <div className="card-image">
                        <img src={mug} alt="" />
                    </div>
                    <div className="description">
                        <p>The Art Agora Signature Mug White </p>
                        <small>GH₵65.00 <s>GH₵75.00</s></small>
                    </div>
                </a>
                <a href="#" className="card">
                    <div className="card-image">
                        <img src={phoneCase} alt="" />
                    </div>
                    <div className="description">
                        <p>The Art Agora Signature Phone Case </p>
                        <small>GH₵75.00 <s>GH₵85.00</s></small>
                    </div>
                </a>
            </div>
            <p className="info">"Get ready! Our main apparel collection, crafted from stunning artworks — including exclusive limited editions — is coming soon. Stay tuned and keep an eye out for these unique pieces!"</p>
        </div>
    );
}