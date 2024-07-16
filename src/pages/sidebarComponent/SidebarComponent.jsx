import React, { useState, useEffect } from 'react';
import Sidebar from 'react-sidebar';
import { Link, useLocation } from 'react-router-dom';
import './SidebarComponent.css'
const SidebarComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  const renderLinks = () => {
    const path = location.pathname;
    if (path === '/' || path === '/materials' || path === '/homework' || path === '/grades' || path === '/account' || path === '/login') {
      return (
        <>
          <Link to="/materials"><button>Materials</button></Link>
          <Link to="/homework"><button>Homework</button></Link>
          <Link to="/grades"><button>Grades</button></Link>
          <Link to="/account"><button>Account</button></Link>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/"><button>Main</button></Link>
        </>
      );
    } else if (path.includes('/materials')) {
      return (
        <>
          <Link to="/materials/algebra"><button>Algebra</button></Link>
          <Link to="/materials/calculus"><button>Calculus</button></Link>
          <Link to="/materials/discrete-math"><button>Discrete Math</button></Link>
          <Link to="/materials/c"><button>C</button></Link>
          <Link to="/materials/csharp"><button>C#</button></Link>
          <Link to="/materials/cplusplus"><button>C++</button></Link>
        </>
      );
    }
    return null;
  };

  return (
    <Sidebar
      sidebar={
        <div>
          {renderLinks()}
          {location.pathname !== '/' && <button onClick={() => window.history.back()}>Назад</button>}
          <button onClick={() => onSetSidebarOpen(false)}>Закрыть боковую панель</button>
        </div>
      }
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{ sidebar: { background: "white", position: "fixed", width: "250px", zIndex: 1000 } }}
    >
      {!sidebarOpen && (
        <button 
          onClick={() => onSetSidebarOpen(true)}
          style={{
            position: 'fixed',
            top: '10px',
            left: '10px',
            zIndex: 1000
          }}
        >
          Открыть боковую панель
        </button>
      )}
    </Sidebar>
  );
};

export default SidebarComponent;
