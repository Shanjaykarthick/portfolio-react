import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

function Layout() {
    return (<div> <header className="header"> <h1>My Portfolio</h1>

        <nav>
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/accordion">Accordion</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>

        </nav>
    </header>

        <main className="main">
            <Outlet />
        </main>


    </div>
    );

}

export default Layout;