export default function ProfiloPage() {
    // foto,
    return (
        <>
            <div className="City-profile">
                <picture><img src="src\public\male1.png" alt="" /></picture>
            </div>
            <div className="profile-container">
                    <hr/>
                    <section class="personal-info">
                        <h2>Informazioni Personali</h2>
                        <p><strong>Nome:</strong> Maria</p>
                        <p><strong>Cognome:</strong> Rossi</p>
                        <p><strong>Telefono:</strong> +39 123 456 789</p>
                        <p><strong>Email:</strong> maria.rossi@email.com</p>
                        <div className="button-mod"><button><i class="fa-solid fa-gear"></i> Modifica Dati</button></div>
                        
                    </section>
            </div>
        </>
    )
}