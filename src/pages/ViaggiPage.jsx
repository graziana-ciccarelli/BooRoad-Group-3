import TableViaggi from "../components/TableViaggi.jsx";
import viaggi from "../data/Viaggi.js";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function ViaggiPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredViaggi, setFilteredViaggi] = useState(viaggi);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = viaggi.filter(viaggio =>
            viaggio.destinazione.toLowerCase().includes(term)
        );
        setFilteredViaggi(filtered);
    };

    return (
        <>
        <div className="container-viaggi">
            <div className="search">
                <h2>Ricerca utente</h2>
                <input
                    type="text"
                    placeholder="Cerca per nome o cognome..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div>
                <h2>Viaggio attivo</h2>
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Destinazione</th>
                                <th>data</th>
                                <th>Durata</th>
                                <th>Guide</th>
                                <th>Partecipanti</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td><img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80" alt="" /></td>
                            <td>Roma</td>
                            <td>2025-10-07</td>
                            <td>3 giorni</td>
                            <td> <Link to={'/guide'}>Nicole Narcisa, Daniele Consoli </Link></td>
                            <td><Link to={'/contatti'} >10</Link></td>
                        </tbody>
                    </table>
                </div>
            </div>
            <h2>Viaggi Programmati</h2>
            <div className="table-responsive">
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Destinazione</th>
                        <th>data</th>
                        <th>Durata</th>
                        <th>Guide</th>
                        <th>Partecipanti</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredViaggi.map((viaggio) => (
                        <TableViaggi key={viaggio.id} viaggio={viaggio} />
                    ))}
                </tbody>
            </table>
            </div>
            {filteredViaggi.length === 0 && (
                <p>Nessun risultato trovato</p>
            )}
            </div>
        </>
    );
}