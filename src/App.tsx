import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'
import type { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  
  return (
    <>
      <Sidebar />
      <div className='main-body'>
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
