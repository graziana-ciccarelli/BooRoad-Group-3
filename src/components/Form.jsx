import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GuideName from '../data/GuideName.js'; // Assumendo che GuideName sia in un file separato

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Resetta l'errore quando l'utente modifica il campo
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Validazione di base - controlla che i campi non siano vuoti
    if (!formData.username.trim() || !formData.password.trim()) {
      setError('Inserisci sia nome utente che password');
      return;
    }
    
    // 2. Controlla che la password abbia almeno 6 caratteri
    if (formData.password.length < 6) {
      setError('La password deve contenere almeno 6 caratteri');
      return;
    }
    
    // 3. Verifica che le credenziali corrispondano a una guida
    const foundGuide = GuideName.find(
      guide => guide.name === formData.username && guide.password === formData.password
    );
    
    if (foundGuide) {
      // Login riuscito - reindirizza alla home
      navigate('/home');
    } else {
      setError('Nome utente o password non corretti');
    }
  };

  return (
    <div className="login-container">
      <h2>Log in to BooRoad</h2>
      {error && <div className="error-message" style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}
      
      <form id="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Nome Utente:</label>
        <div className="input-container">
          <i className="fas fa-user"></i>
          <input 
            type="text" 
            id="username" 
            name="username" 
            value={formData.username}
            onChange={handleChange}
            required 
            placeholder="Nome utente"
          />
        </div>
        
        <label htmlFor="password">Password:</label>
        <div className="input-container">
          <i className="fas fa-lock"></i>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange}
            required 
            placeholder="Password" 
            minLength="6"
          />
        </div>
        
        <button type="submit">Accedi</button>
      </form>
    </div>
  );
};

export default LoginForm;