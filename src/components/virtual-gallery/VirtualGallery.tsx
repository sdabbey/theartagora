import { useRef } from "react";

export default function VirtualGallery() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleFullscreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if ((iframe as any).webkitRequestFullscreen) {
        (iframe as any).webkitRequestFullscreen();
      } else if ((iframe as any).msRequestFullscreen) {
        (iframe as any).msRequestFullscreen();
      }
    }
  };

  return (
    <div className="gallery-iframe" style={{ position: "relative" }}>
      <iframe
        ref={iframeRef}
        width="760"
        height="815"
        src="https://virtual-gallery-sigma.vercel.app"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      {/* Fullscreen button */}
      <button
        onClick={handleFullscreen}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "8px 12px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ⛶ Fullscreen
      </button>
    </div>
  );
}
