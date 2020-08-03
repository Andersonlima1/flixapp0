
nome="luiz"
sobre="barboza"

function nc( n, s){
    n_c = n + " " + s;
    return n_c
}

luiz = nc("luiz","barboza")
//console.log(luiz)




function nomeSobrenome( ns, sns){
    for(i=0 ; i<ns.length ; i++ ){
        n_c = nc(ns[i] , sns[i])
        console.log(n_c)
    }
}

nomes=["luiz","anderson"];
sobres=["barboza","lima"];

nomeSobrenome(nomes,sobres)