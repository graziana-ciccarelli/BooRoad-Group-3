export default function Guide() {
    return (
        <>
            <div className="City">
                <h1 className="text">Roma</h1>
            </div>
            <h2>Guide Viaggio in corso</h2>
            <div className="table-responsive">
            <table>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>Cognome</th>
                        <th>Email</th>
                        <th>Numero telefonico</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="src\public\male1.png" alt="" /></td>
                        <td>Daniele</td>
                        <td>Consoli</td>
                        <td>email@email.it</td>
                        <td>3333300045</td>
                    </tr>
                    <tr>
                        <td><img src="src\public\female1.png" alt="" /></td>
                        <td>Nicole</td>
                        <td>Narcisa</td>
                        <td>email@email.it</td>
                        <td>3333300045</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}