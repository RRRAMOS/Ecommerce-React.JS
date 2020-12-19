export default function Contatos() {
    return (
        
        <div>
            <h2>Fale Conosco</h2>
            <div className="d-flex justify-content">
                <form method="post" className="formContatos w-30">
                    <div className="form-group">
                        <label>Nome Completo</label>
                        <input type="text"className="form-control" name="nome"placeholder="Digite Nome/Sobrenome" />
                        <label>Email</label>
                        <input type="text"className="form-control" name="email"placeholder="Informe seu e-mail" />
                        <label>Mensagem</label>
                        <input type="text"className="form-control" name="msg"placeholder="Dúvida/crítica/sugestão" />
               
                        <br></br>
                        <button type="button" class="btn btn-success">Enviar</button>
                    </div>
                </form>
            </div>   
        </div>
    )       
}