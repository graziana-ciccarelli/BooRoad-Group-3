import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <div className="container-home">
                <div className="cards">
                    <div className="contatti card">
                        <Link to={"/contatti"}>
                            <h1><i class="fa-solid fa-user-group"></i> Contatti partecipanti</h1>
                        </Link>
                    </div>
                    <div className="Viaggi card" >
                        <Link to={"/viaggi"}>
                            <h1><i class="fa-solid fa-plane"></i> Pianificazione viaggi</h1>
                        </Link>
                    </div>
                    <div className="Guide card" >
                        <Link to={"/guide"}>
                            <h1><i class="fa-solid fa-people-group"></i> Elenco guide viaggio</h1>
                        </Link>
                    </div>
                    <div className="Porfili card" >
                        <Link to={"/profilo"}>
                            <h1><i class="fa-solid fa-circle-user"></i> Profilo</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}