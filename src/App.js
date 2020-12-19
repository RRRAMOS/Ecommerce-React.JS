import { BrowserRouter } from 'react-router-dom'; //buscador de rotas
import { Container } from 'react-bootstrap';
import Footer from './Component/Rodape/Footer.js';
import Menu from './Component/Menu';
import './css/estilo.css'
import Rotas from './Rotas';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
        <Menu />
        </header>
        <main>
          <Container fluid>
            <Rotas />
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
