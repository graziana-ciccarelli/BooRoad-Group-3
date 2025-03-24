
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ContattiPage from "./pages/ContattiPage"
import ViaggiPage from "./pages/ViaggiPage"
import LoginPage from "./pages/LoginPage"
import DefaultLayout from "./layout/DefaultLayout"
import GuidePage from "./pages/GuidePage"
import ProfiloPage from "./pages/ProfiloPage"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contatti" element={<ContattiPage />} />
          <Route path="/viaggi" element={<ViaggiPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/profilo" element={<ProfiloPage />} />      
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
