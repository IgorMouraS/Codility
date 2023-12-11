function solution(N) {
    let binarios = N.toString(2);
    let length = 0;
    let lengthAtual = 0

    for(i = 0; i < binarios.length ; i++){
        let binarioAtual = binarios[i];
        let binarioAntigo = binarios[i - 1];

        if(binarioAtual === "0" && binarioAntigo === "1"){
            length++;
        }
        else if(binarioAtual === "0" && binarioAntigo === "0"){
            length++;
        }
        else if(binarioAtual === "1" && binarioAntigo === "0"){
            if(length > lengthAtual){
                lengthAtual = length;
            }
            length = 0;
        }
        
    }

    return lengthAtual;
    
}

const teste = solution(404);
console.log(teste);