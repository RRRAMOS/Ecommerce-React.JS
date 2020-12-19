import Emblema from '../imagens/emblema.jpg'


export default function Home() {
    return (  
  <div className="container">
    { <img src={Emblema} alt="emblema.jpg" /> }
    
     <h2> Bem Vindo a sua Loja de Artigos Artesanais</h2>
          
  </div>
      
 )
}