const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Exemplo de dados de login
const users = {
    'usuario1': 'senha123',
    'usuario2': 'senha456'
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (users[username] && users[username] === password) {
        // Aqui você pode criar uma sessão ou um token
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
