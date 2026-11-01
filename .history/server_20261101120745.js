const express = require('express');
const app = express();

// essa é a rota principal do servidor, que retorna uma mensagem de boas-vindas quando acessada.

app.get('/', (req, res) => { res.send('Drip STore Online 👟') });
// essa é a rota de produtos, que retorna uma lista de produtos quando acessada.

app.get('.tenis', (req, res) => {
    res.json([
        { id: 1, name: 'Tênis Nike Air Max', preço: 499.99 },
        { id: 2, name: 'Adidas RUn', preço: 259.99 },
        { id: 3, name: 'Vans Old Skool', preço: 199.99 }
    ]);
});



app.listen(3000, () => { console.log('Servidor rodando na porta 3000') });


