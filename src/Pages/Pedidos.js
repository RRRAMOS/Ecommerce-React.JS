export default function Pedidos() {
    return (
        
        <div>
            <h2>Faça sua Encomenda</h2>
            <div className="d-flex justify-content">
                <form method="post" className="formContatos w-30">
                    <div className="form-group">
                        <label>Código do Pedido</label>
                        <input type="text" className="form-control" name="codPedido"placeholder="Digite cód do produto" />
                        <label>Nome</label>
                        <input type="text"className="form-control" name="nome"placeholder="Informe nome e sobrenome" />
                        <label>Endereço para envio</label>
                        <input type="text" className="form-control" name="endereco"placeholder="Digite o endereço para entrega" />
                        <label>Telefone</label>
                        <input type="text"className="form-control" name="telefone"placeholder =" Digite telefone para contato" />
                        <label>Valor Unitário</label>
                        <input type="text"className="form-control" name="vUnit"placeholder="Digite aqui" />
                        <label>Código do Produto</label>
                        <input type="text"className="form-control" name="codProd"placeholder="Digite aqui" />
                        <label>Quantidade</label>
                        <input type="text"className="form-control" name="qtde"placeholder="Digite aqui" />
                        <label>Valor Total</label>
                        <input type="text" className="form-control" name="vTot" placeholder="Digite aqui" />
                        <br></br>
                        <button type="button" class="btn btn-success">Enviar</button>
                    </div>
                </form>
            </div>   
        </div>
    )       
}