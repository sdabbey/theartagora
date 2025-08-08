import eden from "../../assets/images/curated-works/eden.png"
import tapestryOfDreams from "../../assets/images/curated-works/tapestry-of-dreams.png";
import ladyInTheRain from "../../assets/images/curated-works/lady-in-the-rain.png";
import devilsTarot from "../../assets/images/curated-works/devils-tarot.png";
import itsAlwaysSunny from "../../assets/images/curated-works/its-always-sunny.png";
import stan from "../../assets/images/curated-works/stan.png";
import diamondInTheRough from "../../assets/images/curated-works/diamond-in-the-rough.jpg";
import maniacalNightmares from "../../assets/images/curated-works/maniacal-nightmares.jpg";

const curatedWorks = [
    {
        id: 1,
        title: "Eden",
        description: "Collection draws inspiration directly from the original artwork by Alex Agyei",
        details: "Marker, Pen, Acrylic, Mixed Media",
        imageUrl: eden,
        link: "#"
    },
    {
        id: 2,
        title: "Tapestry Of Dreams",
        description: "Collection draws inspiration directly from the original artwork by Asante Lo",
        details: "Acrylic on canvas, multi media",
        imageUrl: tapestryOfDreams,
        link: "#"
    },
    {
        id: 3,
        title: "Lady in the Rain",
        description: "Collection draws inspiration directly from the original artwork by Khid Jay",
        details: "Acrylic on canvas",
        imageUrl: ladyInTheRain,
        link: "#"
    },
    {
        id: 4,
        title: "Devils Tarot",
        description: "Collection draws inspiration directly from the original artwork by Khid Jay",
        details: "Acrylic on canvas",
        imageUrl: devilsTarot,
        link: "#"
    },
    {
        id: 5,
        title: "It's Always Sunny",
        description: "Collection draws inspiration directly from the original artwork by Khid Jay",
        details: "Acrylic on canvas",
        imageUrl: itsAlwaysSunny,
        link: "#"
    },
    {
        id: 6,
        title: "Stan",
        description: "Collection draws inspiration directly from the original artwork by Yung Hydrus",
        details: "Acrylic on canvas",
        imageUrl: stan,
        link: "#"
    },
    {
        id: 7,
        title: "Diamond in the Rough",
        description: "Collection draws inspiration directly from the original artwork by Asante Lo",
        details: "Acrylic on canvas",
        imageUrl: diamondInTheRough,
        link: "#"
    },
    {
        id: 8,
        title: "Maniacal Nightmares",
        description: "Collection draws inspiration directly from the original artwork by Khid Jay",
        details: "Acrylic on canvas",
        imageUrl: maniacalNightmares,
        link: "#"
    }

]

export default function CuratedWorks() {
    return (
        <div className="curated-works-page">
            {curatedWorks.map(work => (
                <section className="curated-work">
                    <div className="img">
                        <img src={work.imageUrl} alt={`Artwork ${work.id}`} />
                    </div>
                    <div className="text-content">
                        <h4>{work.title}</h4>
                        <p>The <span>"{work.title}" </span>{work.description}</p>
                        {/* <a href="#" className="action-btn">Shop Now</a>  */}
                        <a target="_blank" href={work.link} className="action-btn">Shop Now</a>
                    </div>
                </section>
            ))}
        </div>
    );
}