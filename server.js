const express = require('express');
const app = express();
const cors = require('cors'); // NOVO pra ligar cors



app.use(cors()); // abri O CORS


// essa é a rota principal do servidor, que retorna uma mensagem de boas-vindas quando acessada.

app.get('/', (req, res) => { res.send('Drip STore Online 👟') });



// essa é a rota de produtos, que retorna uma lista de produtos quando acessada.

app.get('/tenis', (req, res) => {
  res.json([
    { id: 1, nome: "Nike Air Max", preco: 299.90, img: "nike.png" },
    { id: 2, nome: "Adidas Run", preco: 259.90, img: "adidas.png" },
    { id: 3, nome: "Vans Old Skool", preco: 199.90, img: "vans.png" }
  ]);
});


app.listen(3000, () => { console.log('Servidor rodando na porta 3000') })