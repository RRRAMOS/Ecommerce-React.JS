import { BrowserRouter } from 'react-router-dom'; //buscador de rotas
import { Container } from 'react-bootstrap';
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
        
      </div>
    </BrowserRouter>
  );
}

export default App;
