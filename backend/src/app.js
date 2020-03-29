const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());  //estágio de desenvolvimento
/**
 * Se estivesse em produção
 * app.use(cors({
 * origin: 'http://meuapp.com'
 * })); 
 */
app.use(express.json());
app.use(routes);
app.use(errors());
/**
 * Rota / recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informacao do back-eng
  * POST: Criar uma informacao do backend
  * PUT: Alterar uma informacao do backend
  * DELETE: Deletar uma informacao do backend
  */

  /**
   * Tipos de parametros:
   * 
   * Query Params:parametros nomeados enviados na rota após "?" (filtros,paginação) - acesso através de query
   * Route Params: Parâmetros utilizados para identificar recursos - acesso através de params
   * Request Body:Corpor da requisição, utilizado para criar ou alterar recursos - acesso através de body
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */


module.exports = app;
