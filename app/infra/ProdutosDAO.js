function ProdutosDAO(connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback) {
    this._connection.query('select * from produtos', callback);
}

ProdutosDAO.prototype.salva = function(produto, callback) {
    this._connection.query('insert into produtos set ?', produto, callback);
}

module.exports = function() {
    return ProdutosDAO;
};
