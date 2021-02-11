create database bdartesanato;
use bdartesanato;

CREATE TABLE IF NOT EXISTS Produto (
CodProduto integer primary key auto_increment,
NomeProduto varchar (45),
Descricao varchar (45),
Preco varchar (45),
NomeImagem varchar (45)
);
CREATE TABLE IF NOT EXISTS Pedidos (
CodPedido integer  primary key auto_increment,
NomeCliente varchar (45),
Endereco varchar (45),
Telefone varchar (15),
ValorUnit varchar (15),
CodProduto integer,
Qtde int (15),
ValorTotal varchar (15),
Foreign Key (CodProduto) REFERENCES Produto(CodProduto)
);

INSERT INTO produto values (null,'vaso','pequeno, de madeira, cor clara','20.00','imagem01.jpg');
INSERT INTO produto values (null,'vaso','pequeno, de madeira, cor escura','20.00','imagem02.jpg');
INSERT INTO produto values (null,'vaso','pequeno, de EVA','20.00','imagem03.jpg');
INSERT INTO produto values (null,'Brinquedo','Barco,material madeira','40.00','imagem04.jpg');
INSERT INTO produto values (null,'Brinquedo','Casinha, material madeira','35.00','imagem5.jpg');
INSERT INTO produto values (null,'Luminária','para bancada, material madeira','100.00','imagem06.jpg');
INSERT INTO produto values (null,'Luminária','material PVC','100.00','imagem07.jpg');
INSERT INTO produto values (null,'Luminária','para bancada, material PVC','100.00','imagem08.jpg');
INSERT INTO produto values (null,'Lustre','Material PVC e BOPP ','100.00','imagem09.jpg');
  
INSERT INTO pedidos values (null, 'Pedro Santos', 'Rua Domingo de Moraes,33', '(11)12457893', 20.00, 1, 1, 20.00);
INSERT INTO pedidos values (null, 'Maria Martins Santos', 'Av das Americas,3', '(16)54786348', 100.00, 7, 1, 100.00);
INSERT INTO pedidos values (null, 'Amanda Gomes', 'Rua Aparecida,1500', '(11)96541257', 20.00, 1, 2, 40.00);
INSERT INTO pedidos values (null, 'Fernando Moreira', 'Av da Lagoa,126', '(13)965412478', 35.00, 1, 1, 35.00);
    
select * from produto
Inner join pedidos
on pedidos.CodPedido = produto.CodProduto;
	









