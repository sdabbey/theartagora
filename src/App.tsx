import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'
import { useEffect, type ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const mainOverlay = document.getElementById("main-overlay")
    //Sidebar trigger
    const navTrigger = document.getElementById("nav-trigger")
    const sideMenu = document.getElementById("menu-content")
    const closeBtn = document.getElementById("nav-closer")

    navTrigger?.addEventListener("click", () => {
        sideMenu?.classList.add("active")
        mainOverlay?.classList.add("side-actions-active")
    })

    closeBtn?.addEventListener("click", () => {
        sideMenu?.classList.remove("active")
        mainOverlay?.classList.remove("side-actions-active")
    })


    //Search trigger
    const searchTrigger = document.getElementById("search-trigger")
    const searchBox = document.getElementById("search-box")
    const searchCloser = document.getElementById("search-closer")

    searchTrigger?.addEventListener("click", () => {
        console.log("hello")
        searchBox?.classList.add("active")
    })

    searchCloser?.addEventListener("click", () => {
        searchBox?.classList.remove("active")
    })
  })
  return (
    <>
      <Sidebar />
      <div className='main-body'>
        <div className="overlay" id="main-overlay"></div>
        {children}
        <Footer />
      </div>
      
    </>
  );
}

function App() {

  return (
    <Router>
      <Routes>
        {routes.map(({ path, component: Component}, index) => (
          <Route
            key={index}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        ))}
      </Routes>
    </Router>
  )
}

export default App
