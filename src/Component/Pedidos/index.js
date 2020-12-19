import React, { useState, useEffect } from 'react';

const ListaPedidos = () => {
    const [pedidos] = useState([]);

    useEffect(() => {
        const url = "http://localhost/projetosreact/ecommerceartesanatos/src/Backend/ApiPedidos.php";
    
        fetch(url)
          .then(response => response.json())
          .then( products => {
            console.log(products);
            
          });
    }, [])

    return (
        <> {
            pedidos.map(pedido => {
                return (
                    <div className="table-wrapper-scroll-y my-custom-scrollbar overflow-auto div-table-pedidos" >
                        <table className="table table-bordered table-hover display dataTable dtr-inline table-pedidos ">
                            <thead>
                                <tr>
                                    <th scope="col">Código Pedido</th>
                                    <th scope="col">Nome Cliente</th>
                                    <th scope="col">Endereco</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">Valor Unitario</th>
                                    <th scope="col">Código do Produto</th>
                                    <th scope="col">Quantidade</th>
                                    <th scope="col">Valor Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr> 
                                    <th scope="row">{pedido.cod_pedido}</th>
                                    <td>{pedido.nome_cliente} </td>
                                    <td>{pedido.endereco} </td>
                                    <td>{pedido.telefone} </td>
                                    <td>{pedido.valUnit} </td>
                                    <td>{pedido.cod_prod} </td>
                                    <td>{pedido.qtde} </td>
                                    <td>{pedido.valTotal} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })
        }
        </>
    )
}

export default ListaPedidos