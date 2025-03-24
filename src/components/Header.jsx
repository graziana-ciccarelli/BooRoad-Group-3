import { Link } from "react-router-dom"
export default function Header() {
    return (
        <header className="header">
            <nav>
               <Link to={"/home"}>
                <h1><span className="brand-name">Boo</span>Road</h1>
                </Link> 
                <Link to={"/"}>
                    <button className="logout">
                        <i className="fa-solid fa-user-xmark"></i>
                        LogOut
                    </button>
                </Link>
            </nav>
        </header>
    )
}