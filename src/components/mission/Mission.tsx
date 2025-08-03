import mission1 from "../../assets/images/mission/3.jpeg"
import mission2 from "../../assets/images/mission/10.jpeg"
import mission3 from "../../assets/images/mission/4.jpeg"
import mission4 from "../../assets/images/mission/7.jpeg"
import mission5 from "../../assets/images/mission/11.jpg"
import signature from "../../assets/images/sdabbey.png"
export default function Mission(){
    return (
         <div className="mission-statement">
            <div className="first-section">
                <div className="left">
                    <h1>Mission <br/> Statement</h1>
                    <p>The Art Agora is a platform committed to showcasing the work of underrepresented artists and fashion designers, blending the worlds of art, fashion, and technology. Our mission is to provide a space where diverse artistic expressions can flourish and be made accessible to all. </p>
                </div>
                <div className="right">
                    <img src={mission1} alt=""/>
                    <div className="content">
                        <img src={mission2} alt=""/>
                        <p>Through our virtual gallery, we offer an immersive experience where everyone can explore, appreciate, and support unique artworks and designs.</p>
                    </div>
                </div>
            </div>

            <div className="second-section">
                <div className="top">
                    <img src={mission3} alt=""/>
                    <p>We also champion sustainable fashion through our exclusive fashion line, where textiles are created by artists using recyclable materials, such as second-hand bed sheets, to paint stories.</p>
                </div>
                <div className="bottom">
                    <p>These textiles are then transformed by our fashion designers into innovative clothing pieces, which will be featured and promoted on a dedicated page.</p>
                    <img src={mission4} alt=""/>
                   
                </div>
            </div>

            <div className="third-section">
                <div className="left">
                    <img src={mission5} alt=""/>
                    
                </div>
                <div className="right">
                    <p>In addition, The Art Agora features a foundation that supports art education and provides resources for emerging artists, ensuring that creativity and design continue to thrive in diverse communities. <b>It is our hope art education and support reach everyone</b></p>
                    <img src={signature} alt=""/>
                    
                   
                </div>
            </div>
        </div>
    );
}