import TableViaggi from "../components/TableViaggi.jsx";
import viaggi from "../data/Viaggi.js";
import { useState } from "react";

export default function ViaggiPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredViaggi, setFilteredViaggi] = useState(viaggi);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        
        const filtered = viaggi.filter( viaggio => 
            viaggio.destinazione.toLowerCase().includes(term) 
        );
        setFilteredViaggi(filtered);
    };

    return (
        <>
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
                    <td><img src="https://media.istockphoto.com/id/2156797558/it/foto/la-cupola-e-la-fontana-dellelefante.jpg?s=1024x1024&w=is&k=20&c=hHdYp6RQ4BMRAelnsdaDMpZNRc1jnAww5uK3t2ta2IE=" alt="" /></td>
                    <td>Firenze</td>
                    <td>2025-10-07</td>
                    <td>3 giorni</td>
                    <td>Nicole Narcisa</td>
                    <td>9</td>
                </tbody>
                </table>
            </div>
            <h2>Viaggi Programmati</h2>
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
            {filteredViaggi.length === 0 && (
                <p>Nessun risultato trovato</p>
            )}
        </>
    );
}