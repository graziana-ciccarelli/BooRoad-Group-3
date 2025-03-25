import Table from "../components/Table";
import Persone from "../data/Persone.js";
import { useState } from "react";

export default function ContattiPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(Persone);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        
        const filtered = Persone.filter(user => 
            user.nome.toLowerCase().includes(term) || 
            user.cognome.toLowerCase().includes(term)||
            user.codiceFiscale.toLowerCase().includes(term) 
        );
        setFilteredUsers(filtered);
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
            <table className="row">
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>Cognome</th>
                        <th>Codice Fiscale</th>
                        <th>Telefono</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((utente) => (
                        <Table key={utente.id} utente={utente} />
                    ))}
                </tbody>
            </table>
            {filteredUsers.length === 0 && (
                <p>Nessun risultato trovato</p>
            )}
        </>
    );
}