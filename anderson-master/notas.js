
//exemplo 1 

function calcMedia(notas){
    soma = 0
    for (i=0;i<notas.length;i=i+1){
        soma = soma + notas[i]
    }
    return soma / notas.length
}

notasTurma = [5.0,5.0,6.0,6.0,7.0,7.0,8.0,8.0,9.0,9.0]
mt = calcMedia(notasTurma)
console.log(mt)



function mediaDicionarioTurma(dic_turma){
    soma =0;
    tam =0
    for (aluno in dic_turma){ 
        soma = soma + dic_turma[aluno];
        tam++
    } 
    return soma / tam
}

turma_dic = {"luiz":5.0,
        "anderson":10.0};
turma_dic_media = mediaDicionarioTurma(turma_dic)
console.log(turma_dic_media)



function notasFinal(turma){
    for (aluno in turma){
        notas_aluno = turma[aluno]  
        media_aluno = calcMedia(notas_aluno)  
        console.log(aluno +" "  +media_aluno) 
    }    

}

turmaFinal = {"luiz":[5.0,6.0,7.0],
             "anderson":[7.0,8.0,9.0]};
notasFinal(turmaFinal)
