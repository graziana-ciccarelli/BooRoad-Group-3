export default function Table (props) {
    const { utente } = props
    const { nome, cognome, codiceFiscale, telefono, email, img } = utente
    
    const path="src/public"
    return (
        <>
            
               
                <tr>
                    <td><img src={`${path}/${img}`} alt="" /></td>
                    <td>{nome}</td>
                    <td>{cognome}</td>
                    <td>{codiceFiscale}</td>
                    <td>{telefono}</td>
                    <td>{email}</td>
                </tr>
            
        </>
    )
}
