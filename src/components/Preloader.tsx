import React from "react";
// import logo from "../assets/images/logo1.png";
export default function LoaderOverlay() {

  return (
    <>
      {/* Local style tag to define keyframes safely */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div style={styles.overlay}>
        {/* <img style={styles.logo} src={logo} alt="Logo" /> */}
        <div style={styles.spinner}></div>
        
      </div>
    </>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 1)",
    display: "flex",
    flexDirection: "column" as React.CSSProperties["flexDirection"],
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    color: "#fff",
    transition: "opacity 0.5s ease",
    gap: "1rem"
  } as React.CSSProperties,
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid rgba(255,255,255,0.2)",
    borderTop: "5px solid white",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  } as React.CSSProperties,
  text: {
    fontSize: "1rem",
    letterSpacing: "1px"
  } as React.CSSProperties,
    logo: {
        width: "150px",
        
        marginBottom: "1rem"
    } as React.CSSProperties
};
