module.exports = function(app) {
    app.get('/', function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(erros, resultados) {
            res.render('home/index',{livros:resultados});
        });
        connection.end();
    });
}
