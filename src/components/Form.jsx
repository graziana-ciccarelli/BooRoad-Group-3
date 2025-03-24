export default function Form() {
    return(
        <div className="login-container">
            <h2>Log in to BooRoad</h2>
            <form id="loginForm" onsubmit="return validateForm(event)">
                <label for="username">Nome Utente:</label>
                <div className="input-container">
                    <i className="fas fa-user"></i>
                    <input type="text" id="username" name="username" required placeholder="Nome utente"/>
                </div>
                <label for="password">Password:</label>
                <div className="input-container">
                    <i className="fas fa-lock"></i>
                    <input type="password" id="password" name="password" required placeholder="Password" minlength="6"/>
                </div>
                <button type="submit">Accedi</button>
            </form>
        </div>
    )
}