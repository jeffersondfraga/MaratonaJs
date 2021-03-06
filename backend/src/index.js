const express = require('express');
const cors = require('cors');
const db = require('./models');
const response = require('./middlewares/response');
const checkJwt = require('./middlewares/jwt');

const authController = require('./controllers/auth');
const linkController = require('./controllers/link');

const app = express();

app.use(cors());
app.use(response);
app.use(checkJwt);

app.use(express.json()); // receber os dados em json
app.use(express.urlencoded({ extended: false})); //pra pegar o body da requisição e entender

app.use('/auth', authController);
/*
    tendo o authController, as rotas exportadas, agora precisa apontar para o express usando app.use()
    com isso as rotas ficam dessa forma:
    → /auth/sign-in
    → /auth/sign-up
*/
app.use('/link', linkController);

app.get('/', (req, res)=>{
    return res.json('API running...');
});
/*
Parametros:
    1º: informa ao express que quando chegar uma requisição tipo GET na 3001
        endereço: https://meusite.com'/'
    2º: function(request, response)
        request: todas as informações sobre a requisição
        response: os method para retornar o que foi pedido

*/

db.sequelize.sync().then(()=> {
    app.listen(3001, () => {
        console.log('Listening on port 3001');
    });
});
/*
    db.sequelize.sync() → vai sincronizar o servidor
    .then(()) se a sincronização funcionar ele acessa o servidor
*/

/*
    app.listen(3001, () => {
        console.log('Listening on port 3001');
    });

    toda vez que chegar algo na porta 3001 ele vai acusar que chegou nessa porta
*/