var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var usuario = {
    nome: 'Leehaney',
    sobrenome: 'Soares',
    telefones: [11940215919, 982455842],
    documentos: 'CPF'
};
function detalhaUsuario(usuario) {
    return "Teste...";
}
detalhaUsuario(usuario);
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return 'Leehaney';
        },
        enumerable: false,
        configurable: true
    });
    Pessoa = __decorate([
        teste
    ], Pessoa);
    return Pessoa;
}());
var p1 = new Pessoa();
function teste(pessoa) {
    console.log(pessoa);
}
