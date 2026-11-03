const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs'); // Caderninho!

app.use(cors());
app.use(express.json()); // AGORA ELE SABE LER BILHETES (JSON)

// Rota principal
app.get('/', (req, res) => { 
  res.send('Drip Store Online 👟 - Pedidos salvos!') 
});

// Rota de produtos
app.get('/tenis', (req, res) => {
  res.json([
    { id: 1, nome: "Nike Air Max", preco: 299.90, img: "nike.png" },
    { id: 2, nome: "Adidas Run", preco: 259.90, img: "adidas.png" },
    { id: 3, nome: "Vans Old Skool", preco: 199.90, img: "vans.png" }
  ]);
});

// NOVA ROTA: Receber o pedido!
app.post('/pedido', (req, res) => {
  const novoPedido = req.body; // Carrinho que veio do front
  console.log("PEDIDO NOVO CHEGOU!", novoPedido);

  // 1. Lê o caderninho velho
  let pedidos = [];
  if (fs.existsSync('pedidos.json')) {
    pedidos = JSON.parse(fs.readFileSync('pedidos.json'));
  }

  // 2. Anota o novo
  pedidos.push({
    id: Date.now(),
    data: new Date(),
    itens: novoPedido
  });

  // 3. Salva de volta no caderninho
  fs.writeFileSync('pedidos.json', JSON.stringify(pedidos, null, 2));

  res.json({ mensagem: "Pedido anotado com sucesso! 👟" });
});

// Rota pra ver os pedidos salvos
app.get('/pedidos', (req, res) => {
  if (fs.existsSync('pedidos.json')) {
    res.json(JSON.parse(fs.readFileSync('pedidos.json')));
  } else {
    res.json([]);
  }
});

app.listen(3000, () => { 
  console.log('Servidor rodando na porta 3000 - Caderninho pronto!') 
})