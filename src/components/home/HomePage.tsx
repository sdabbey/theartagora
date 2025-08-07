import { useEffect } from "react";
import missionBg from "../../assets/images/landingpage1.png"
import toteBags from "../../assets/images/totebag1.png"
import phoneCases from "../../assets/images/phonecases1.png"
import tShirts from "../../assets/images/t-shirt1.png"
import hoodies from "../../assets/images/hoodie.png"
import exhibition from "../../assets/images/exhibition.png"
// import logo1 from "../../assets/images/logo1.png"
export default function Home() {
    useEffect(() => {
        // Music player logic inside useEffect to ensure DOM is ready
        const popupCloser = document.getElementById('popup-closer');
        const startButton = document.getElementById('start-button');
        const image = document.getElementById('cover') as HTMLImageElement | null;
        const title = document.getElementById('music-title');
        const artist = document.getElementById('music-artist');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');
        const playBtn = document.querySelector('.bx-play');
        const pauseBtn = document.querySelector('.bx-pause');
        const music = new Audio();
        // music.autoplay = true;

        const songs = [
            {
                path: '/Juzz.m4a',
                displayName: 'TheAA - Jazz',
                cover: '/logo1.png',
                artist: 'The Art Agora',
            },
            // Additional songs can be added here
        ];
        
        let musicIndex = 0;
        
        loadMusic(songs[musicIndex])
        

        function loadMusic(song: typeof songs[0]): void {
            music.src = song.path;
            if (title) title.textContent = song.displayName;
            if (artist) artist.textContent = song.artist;
            if (image) image.src = song.cover;
        }

        function playMusic() {
            
            loadMusic(songs[musicIndex]);
            console.log('playMusic called');
            
            playBtn?.classList.add("remove")
            playBtn?.classList.remove("show")
            pauseBtn?.classList.remove("remove")
            pauseBtn?.classList.add("show")
            
            music.play();
        }

        function pauseMusic() {
            console.log('pauseMusic called');
            
            
            pauseBtn?.classList.add("remove")
            pauseBtn?.classList.remove("show")
            playBtn?.classList.remove("remove")
            playBtn?.classList.add("show")

            music.pause();
        }


        
        function changeMusic(direction: number): void {
            musicIndex = (musicIndex + direction + songs.length) % songs.length;
            loadMusic(songs[musicIndex]);
            playMusic();
        }

        if (playBtn) {
            playBtn.addEventListener('click', playMusic);
        }
        if (pauseBtn) {
            pauseBtn.addEventListener('click', pauseMusic);
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', () => changeMusic(-1));
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => changeMusic(1));
        }
        music.addEventListener('ended', () => changeMusic(1));

       
         // Start playing the first song immediately
       

        
        
        
        if (popupCloser) {
            popupCloser.addEventListener('click', function () {
                const popup = document.querySelector('.popup') as HTMLElement | null;
                if (popup) {
                    popup.style.display = 'none';
                }
                if (startButton) {
                    startButton.style.display = 'none';
                }
                // togglePlay();
                // playMusic();
            });
        }

        
       

        
        // Cleanup event listeners on unmount
        return () => {
            if (playBtn) playBtn.removeEventListener('click', playMusic);
            if (pauseBtn) pauseBtn.removeEventListener('click', pauseMusic);
            if (prevBtn) prevBtn.removeEventListener('click', () => changeMusic(-1));
            if (nextBtn) nextBtn.removeEventListener('click', () => changeMusic(1));
            music.removeEventListener('ended', () => changeMusic(1));
            if (popupCloser) popupCloser.removeEventListener('click', () => {});
            if (startButton) startButton.removeEventListener('click', () => {});
        };
    }, []);
    useEffect(() => {
        const playBtn = document.querySelector('.bx-play') as HTMLElement | null;

        // Trigger play only after a user interaction
        const handleUserInteraction = () => {
            playBtn?.click();  // Simulates a real user click on the play button
            // window.removeEventListener('click', handleUserInteraction);
        };

        // Add event listener only once
        window.addEventListener('click', handleUserInteraction);

        return () => {
            window.removeEventListener('click', handleUserInteraction);
        };
    }, []);

    return (
        <>
            {/* <div className="popup">
                <div className="popup-content">
                    <div className="close" id="popup-closer">
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </div>
                    <img src={logo1} alt="" />
                    <h2>Welcome</h2>
                    <p>Get updates on new arivals, exclusive offers and more this holiday season.</p>
                    <form id="subscribe-form">
                        <input type="email" id="email" name="email" placeholder="Enter your email address" />
                        <button type="submit" className="action-btn">Subscribe</button>
                    </form>
                    <div id="start-button">
                        Enter Site
                    </div>

                   
                </div>
            </div> */}
            
        
            <div className="background-audio">
            
                <div className="audio-details">
                    <div className="player-img">
                        <img src="" className="active" id="cover" />
                    </div>
                    <div className="dets">
                        <h2 id="music-title"></h2>
                        <h3 id="music-artist"></h3>
                    </div>
                </div>
                <div className="player-controls">
                    <i className="bx bxs-fast-forward back" title="Previous" id="prev"></i>
                    <i className="bx bx-play show" title="Play"></i>
                    <i className="bx bx-pause remove" title="Pause"></i>
                    <i className="bx bxs-fast-forward forward" title="Next" id="next"></i>
                </div>
            </div>

            <section className="landing_page">
                <h2>Original <br/> works only</h2>
                <p>The Art Agora is a startup featuring a virtual gallery showcasing fine art, digital art, and a shop with unique apparel. Discover creations from underrepresented artists and find exclusive designs to wear or display.</p>
                <a href="shop.html" className="action-btn">Shop Now</a>
            </section>

            <div className="marquee">
                <div className="content">
                    <span>Explore the Full Collection</span>
                    <span>Explore the Full Collection</span>
                    <span>Explore the Full Collection</span>
                </div>
            </div>
            
            <section className="artworks-apparels">
                <div className="apparel-card">
                    <img src={toteBags} alt="Apparel 1" />
                    <div className="content">
                        <h4>Tote Bags</h4>
                        <a href="shop.html" className="action-btn">Shop Now</a>
                    </div>
                </div>
                <div className="apparel-card">
                    <img src={phoneCases} alt="Apparel 1" />
                    <div className="content">
                        <h4>Phone Cases</h4>
                        <a href="shop.html" className="action-btn">Shop Now</a>
                    </div>
                </div>
                <div className="apparel-card">
                    <img src={tShirts} alt="Apparel 1" />
                    <div className="content">
                        <h4>T-shirts</h4>
                        <a href="shop.html" className="action-btn">Shop Now</a>
                    </div>
                </div>
                <div className="apparel-card">
                    <img src={hoodies} alt="Apparel 1" />
                    <div className="content">
                        <h4>Hoodies</h4>
                        <a href="shop.html" className="action-btn">Shop Now</a>
                    </div>
                </div>
            </section>

            <section className="featured-artwork">
                <div className="img">
                    <img src={exhibition} alt="Artwork 1" />
                </div>
                <div className="text-content">
                    <h4>Galamsey Activism Exhibition </h4>
                    <p>This "<span>immersive 3D</span>" exhibition presents digitally generated artworks that serve as a powerful call to action against illegal mining in Ghana.</p>
                    {/* <a href="#" className="action-btn">Shop Now</a>  */}
                    <a target="_blank" href="https://exhibition.theartagora.com" className="action-btn">View Exhibition</a>
                </div>
            </section>

            <section className="mission">
                <div className="img-bg">
                    <img src={missionBg} alt="" />
                </div>
                <div className="text-content">
                    <h1>Mission Statement</h1>
                    <p>The Art Agora is a platform committed to showcasing the work of underrepresented artists and fashion designers, blending the worlds of art, fashion, and technology. Our mission is to provide a space where diverse artistic expressions can flourish and be made accessible to all.</p>
                    <a href="mission_statement.html" className="action-btn">Read More</a>
                </div>
            </section>

        </>
    )
}