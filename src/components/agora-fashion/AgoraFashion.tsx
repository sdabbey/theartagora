import { useState } from "react";
const digitalHoodie = new URL("../../assets/images/fashion/digital-hoodie.png", import.meta.url).href;
const hoodieBack = new URL("../../assets/images/fashion/hoodie-back.png", import.meta.url).href;
const digitalHoodieB = new URL("../../assets/images/fashion/digital-hoodie-b.png", import.meta.url).href;

const digitalShortsFront = new URL("../../assets/images/fashion/digital-shorts.png", import.meta.url).href;
const digitalShortsSide = new URL("../../assets/images/fashion/digital-shorts-side.png", import.meta.url).href;
const digitalShortsBack = new URL("../../assets/images/fashion/digital-shorts-back.png", import.meta.url).href;

const kente1 = new URL("../../assets/images/fashion/kente1.jpeg", import.meta.url).href;
const kente2 = new URL("../../assets/images/fashion/kente2.jpeg", import.meta.url).href;
const kente3 = new URL("../../assets/images/fashion/kente3.jpeg", import.meta.url).href;
const kente4 = new URL("../../assets/images/fashion/kente4.jpeg", import.meta.url).href;

const f1 = new URL("../../assets/images/fashion/1.png", import.meta.url).href;
const f2 = new URL("../../assets/images/fashion/2.jpeg", import.meta.url).href;
const f3 = new URL("../../assets/images/fashion/3.jpeg", import.meta.url).href;


const sliderData = [
    [
        digitalHoodie,
        hoodieBack,
        digitalHoodieB,
    ],
    [
        digitalShortsFront,
        digitalShortsSide,
        digitalShortsBack
    ],
    [
        kente1,
        kente2,
        kente3,
        kente4
        
    ],
    [
        f1,
        f2,
        f3
       
      
    ],
];

const descriptions = [
    {
        text: "Hoodie front/back/side view simulated and generated in 3D with double weave fabric type.",
        small: "Fabricator vMOD",
    },
    {
        text: "Shorts front/back/side view simulated and generated in 3D with double weave fabric type.",
        small: "Fabricator vMOD",
    },
    {
        text: "Silhouttes dressed in Kente-patterned streetwear",
        small: "Artbreeder Composer",
    },
    {
        text: "Silhouttes dressed in simple but futuristic streetwear",
        small: "Artbreeder Composer",
    },
];

export default function AgoraFashion() {
    const [slideIndexes, setSlideIndexes] = useState([0, 0, 0, 0]);

    const plusSlides = (cardIdx: number, n: number) => {
        setSlideIndexes((prev) => {
            const slidesLength = sliderData[cardIdx].length;
            let newIndex = prev[cardIdx] + n;
            if (newIndex < 0) newIndex = slidesLength - 1;
            if (newIndex >= slidesLength) newIndex = 0;
            const newIndexes = [...prev];
            newIndexes[cardIdx] = newIndex;
            return newIndexes;
        });
    };

    return (
        <div className="agora-fashion">
            <h1>Agora Fashion</h1>
            <p className="headline">The fashion section of The Art Agora is dedicated to sustainable fashion design, innovative apparel, and digital 3D cloth modeling and simulation. Our artists are passionate about creating unique and captivating wearable art. From provocative pieces that advocate for social justice and environmental sustainability to streetwear that rivals top designers, each creation is a statement in both style and purpose.</p>
            <span>Check out some pieces below</span>
            <div className="card-container">
                {sliderData.map((images, cardIdx) => (
                    <div className="card" key={cardIdx}>
                        <div className="card-slider">
                            <div className="slides">
                                <img
                                    src={images[slideIndexes[cardIdx]]}
                                    alt=""
                                />
                            </div>
                            <button
                                className="prev"
                                onClick={() => plusSlides(cardIdx, -1)}
                            >
                                &#10094;
                            </button>
                            <button
                                className="next"
                                onClick={() => plusSlides(cardIdx, 1)}
                            >
                                &#10095;
                            </button>
                        </div>
                        <div className="description">
                            <p>{descriptions[cardIdx].text}</p>
                            <small>{descriptions[cardIdx].small}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}