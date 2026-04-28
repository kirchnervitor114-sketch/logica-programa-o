class accontbank {
    construtor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    versaldo() {
        console.log(`

  OLÁ(this.titular),
  seu saldo atuaç é 
  R$ (this.saldo)`
        )
    }
}
let contaDoZe = new accontbank("Ze", 1000)
contaDoZe.versaldo()

let ContaDoRune = new ContaBancaria("Ze", 15000)
ContaDoZe.verSaldo()
ContaDoZe.depositar(350)
ContaDoZe.sacar(100)
ContaDoZe.verSaldo()

