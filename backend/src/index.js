const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Aprender Rota / Recursos
 * 
 */
/**
 * Métodos HTTP
 * GET: Busca uma informação no back-end
 * PUT: Altera uma informação no back-end
 * POST: Cria uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */
/**
 * Tipo de Parametros
 * 
 * Query Params:  Parêmetros nomeados enviados na rota apos "?" (Filtros, Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisisção, utilizado para criar ouo alterar recursos 
 */

 /**
  * Bancos de Dados
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc.
  */

  /**
   * Para instalar, tem dois tipos;
   * Driver: usando comandos tipo: SELECT * FROM Users
   * Query Builder: comandos JS como :  table('users').select('*').where()
   * 
   */


app.listen(3333);