//recebe os dados do botao adicionar na bandeja e salva na web store
function cadastrarDespesa(n, p) {
    this.nome = n;
    this.preco = p;

	localStorage.setItem(nome, preco)
}


class Bd{
    recuperarTodosRegistro(){

        //bebidas
        let f1 = localStorage.getItem("fanta")
        let f = ('Fanta ' +"R$" + f1)   
        let p1 = localStorage.getItem("pepsi")
        let p = ('Pepsi ' +"R$" + p1)
        let c1 = localStorage.getItem("coca-cola")
        let c = ('Coca-cola ' +"R$" + c1)
        //lanches
        let fu1 = localStorage.getItem("furioso")
        let fu = ('Furioso ' +"R$" + fu1)
        let cc1 = localStorage.getItem("chicken crips")
        let cc = ('Chicken Crisp ' +"R$" + cc1)
        let b1 = localStorage.getItem("combo big tasty")
        let b =('Combo Big Tasty ' +"R$" + b1)
        //salgados
        let co1 = localStorage.getItem("coxinha")
        let co = ('Coxinha ' +"R$" + co1)
        let e1 = localStorage.getItem("enrolado")
        let e = ('Enrolado ' +"R$" + e1)
        let es1 = localStorage.getItem("esfira")
        let es = ('Esfira ' +"R$" + es1)

        f1 = parseFloat(f1);
        p1 = parseFloat(p1);
        c1 = parseFloat(c1);
        fu1 = parseFloat(fu1);
        cc1 = parseFloat(cc1);
        b1 = parseFloat(b1);
        co1 = parseFloat(co1);
        e1 = parseFloat(e1);
        es1 = parseFloat(es1);


        var pedidos = [];
        console.log(f1, p1, c1, fu1, cc1, b1, co1, e1, es1)

        var sum = 0
        for(let i=0; i<=12; i++){
            if(f1 > 0){
                pedidos.push(f);
                sum += f1
                f1 = -1;
            }
            else if(p1 > 0){
                pedidos.push(p)
                sum += p1
                p1 = -1;
            }
            else if(c1 > 0){
                pedidos.push(c)
                sum += c1
                c1 = -1;
            }
            else if(fu1 > 0){
                pedidos.push(fu)
                sum += fu1
                fu1 = -1;
            }
            else if(cc1 > 0){
                pedidos.push(cc)
                sum += cc1
                cc1 = -1;
            }
            else if(b1 > 0){
                pedidos.push(b)
                sum += b1
                b1 = -1;
            }
            else if(co1 > 0){
                pedidos.push(co)
                sum += co1
                co1 = -1;
            }
            else if(e1 > 0){
                pedidos.push(e)
                sum += e1
                e1 = -1;
            }
            else if(es1 > 0){
                pedidos.push(es)
                sum += es1
                es1 = -1;
            }
        }
        console.log(pedidos)
        console.log(sum)

        pedidos.push('total ' + "R$" + sum)


       
        let lista = document.querySelector('#item');
        let item;

        pedidos.forEach(n=>{
            item = document.createElement('li')
            item.textContent = n
            lista.appendChild(item)
        })
      
        

    }
}

    let bd = new Bd();

    function listaBandeja(){
    bd.recuperarTodosRegistro()
    }




//apagar todos
function limpar(){
    localStorage.clear()
    console.log('deucerto')
    }
