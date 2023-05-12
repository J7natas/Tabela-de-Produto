class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    adicionar() {
        let produto = this.lerProduto();
        if(this.validar(produto) == true){
            this.salvar(produto);

        }
        this.Listar();
        this.cancelar();
    }

    lerProduto() {
        let produto = {}

        produto.id = this.id
        produto.nomeProduto = document.getElementById('textProduto').value;
        produto.valorProduto = document.getElementById('valorProduto').value;

        return produto;

    }

    validar(produto) {
        let msg = '';

        if(produto.nomeProduto == ''){
            msg += `Por favor informe o nome do produto!`
        }

        if(produto.valorProduto == '') {
            msg += 'Por favor informe o valor do produto!'
        }

        if(msg != '') {
            alert(msg)
            return false;
        }

        return true;
    }

    salvar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    Listar() {
        var tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_del = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].valorProduto;
            let lixeira = document.createElement('img');

            lixeira.src = 'lixeira.png';
            td_del.appendChild(lixeira);
            lixeira.setAttribute("onclick","produto.Deletar("+ this.arrayProdutos[i].id+")")
        }
    }

    cancelar() {
        document.getElementById('textProduto').value = '';
        document.getElementById('valorProduto').value = '';
    }

    Deletar(id) {
        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            if(this.arrayProdutos[i].id == id) {
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i)
            }
        }
        alert(`O item ${id} foi apagado`)
    }
}

var produto = new Produto();