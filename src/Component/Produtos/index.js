import React, { useState, useEffect, useRef } from 'react';


const ListaProd = () => {
    const [products, setProducts] = useState([]);
    const mounted = useRef(true);
    useEffect(() => {
        const url = "http://localhost/projetosreact/ecommerceartesanatos/src/Backend/ApiProdutos.php";
        fetch(url)
          .then(response => response.json())
          .then( products => {
            if(mounted.current) {
            setProducts(products);
    }
          });
    }, [])

    let Efeito = (imagem) => {
        if(imagem.target.style.width === '120px')
        imagem.target.style = 'width:240px'
       else
        imagem.target.style = 'width:120px'
    }

    return (
        <>
        <section className="produtos-img">
            {
                products.map(produto => {
                    return (
                     <div key={produto.produto} className="box_produto" id={produto.produto}>
                        <img src={produto.NomeImagem}  className="itens img-fluid" onClick={Efeito}/> 
                        <p className="Nome">{produto.NomeProduto}</p>
                         <p className="Descricao">{produto.Descricao}</p>
                         <p className="preco text-success"> R$ {produto.Preco}</p>
                       <hr />
                     </div>
                    )
                }
            ) }
            </section>
        </>
    )
}
export default ListaProd;








//require(`../${imageURL}`).default


// products.map(prod => {
//     console.log (prod)
//     return (

//      <div key={prod.produto} className="box_produto bg-white" id={prod.categoria}>
//         <img src={prod.imagem} className="itens img-fluid" onClick={Destaque} />
//        <br />
//          <p className="Descricao">{prod.descricao}</p>
//          <p className="descricao" style={{ textDecoration: "line-through" }}>R$ {prod.valUnit}</p>
//          <p className="preco text-danger">R$ {prod.preco}</p>
//        <hr />
//      </div>

//      )
// }
// )