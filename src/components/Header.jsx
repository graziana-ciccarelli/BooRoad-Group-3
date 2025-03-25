import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';
export default function Header() {
    const location = useLocation();
    return (
        
        <header className="header">
            <nav>
                <Link to={"/home"}>
                    <h1><span className="brand-name">Boo</span>Road</h1>
                </Link>
                <div>
                    <Link to={"/home"}><button ><i class="fa-solid fa-house"></i>Home</button></Link>
                    <Link className={location.pathname === "/" ? "d-none" : ""} to={"/"}>
                        <button className="logout">
                            <i className="fa-solid fa-user-xmark"></i>
                            LogOut
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}