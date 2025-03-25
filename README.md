# BooRoad - Sistema di Gestione Viaggi

![Logo BooRoad](public/logo.png) <!-- Aggiungi il tuo logo se disponibile -->

BooRoad è un'applicazione web per agenzie viaggi per gestire guide, viaggi e informazioni sui clienti.

## Funzionalità Principali

- **Autenticazione Utenti**: Sistema di login sicuro per le guide turistiche
- **Gestione Viaggi**: Visualizza e gestisci i viaggi in programma
- **Gestione Guide**: Accedi alle informazioni delle guide presenti
- **Monitoraggio Partecipanti**: Gestisci i dettagli dei partecipanti per ogni viaggio
- **Design Responsive**: Funziona su dispositivi desktop e mobile

## Tecnologie Utilizzate

- React.js
- React Router
- HTML5/CSS3
- Font Awesome (per le icone)

## Installazione

### Installa le dipendenze

```
npm install
```

Avvia il server di sviluppo:

```text
npm run dev
```

``` text
Apri il browser all'indirizzo:
http://localhost:5173
```

``` text

Struttura del Progetto
Copy
src/
├── components/
│   ├── Header.js          # Componente intestazione
│   ├── LoginForm.js       # Form di login con validazione
│   ├── Table.js           # Tabella profili utente
│   └── TableViaggi.js     # Tabella viaggi
├── pages/
│   ├── HomePage.js        # Dashboard
│   ├── ContattiPage.js    # Pagina contatti
│   ├── ViaggiPage.js      # Gestione viaggi
│   ├── GuidePage.js       # Gestione guide
│   └── ProfiloPage.js     # Profilo utente
├── layout/
│   └── DefaultLayout.js   # Layout principale
├── data/
│   └── GuideName.js       # Dati credenziali guide
├── App.js                 # Router principale
└── index.js               # Punto d'ingresso
```

## Come Usare l'Applicazione

### Accesso:

- Accedi all'applicazione alla pagina principale (/)

- Inserisci credenziali valide (nome utente e password)

- Lunghezza minima password: 6 caratteri

## Navigazione:

- Usa l'intestazione per spostarti tra le sezioni

- Clicca "LogOut" per tornare alla pagina di login

## Tabelle:

- Profili utente mostrano: immagine, nome, codice fiscale, telefono ed email

- Informazioni viaggi mostrano: destinazione, data, durata, guide e partecipanti

## Struttura Dati
Credenziali Guide (GuideName.js)

``` javascript
[
  {
    name: "guida1",
    password: "password123"
    // Aggiungi altre proprietà se necessario
  }
  // Altri oggetti guida...
]
```

## Dati Viaggi

### Ogni viaggio contiene:

- Destinazione

- Immagine

- Data

- Durata

- Guide assegnate

- Numero partecipanti
