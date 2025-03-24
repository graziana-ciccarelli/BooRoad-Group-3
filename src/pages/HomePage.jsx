import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <div className="container">
                <div className="cards">
                    <div className="contatti">
                        <Link to={"/contatti"}>
                            <h1>Contatti partecipanti</h1>
                        </Link>
                    </div>
                    <div className="Viaggi" >
                        <Link to={"/viaggi"}>
                            <h1>Pianificazione viaggi</h1>
                        </Link>
                    </div>
                    <div className="Guide" >
                        <Link to={"/guide"}>
                            <h1>Elenco guide viggio</h1>
                        </Link>
                    </div>
                    <div className="Porfili" >
                        <Link to={"/profilo"}>
                            <h1>Profilo</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}