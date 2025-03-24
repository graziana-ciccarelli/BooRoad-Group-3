
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ContattiPage from "./pages/ContattiPage"
import ViaggiPage from "./pages/ViaggiPage"
import LoginPage from "./pages/LoginPage"
import DefaultLayout from "./layout/DefaultLayout"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contatti" element={<ContattiPage />} />
          <Route path="/viaggi" element={<ViaggiPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
