import Table from "../components/Table"
import Persone from "../data/Persone.js"
export default function ContattiPage() {
    const utenti = Persone
    return (
        <>
            <table>
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
                    {
                        utenti.map((utente) => {
                            return (
                                <Table key={utente.id} utente={utente} />
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}