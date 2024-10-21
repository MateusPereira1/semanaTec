var questoes = [
    {
        titulo: "Qual bioma brasileiro é conhecido por suas savanas e cerrado?",
        op: ["Amazônia", "Mata Atlântica", "Pantanal", "Caatinga", "Cerrado"],
        correta: 5,
        selecionada: false
    },
    {
        titulo: "Qual bioma é caracterizado por uma grande diversidade de espécies de plantas e animais, muitas das quais endêmicas?",
        op: ["Pampa", "Cerrado", "Mata Atlântica", "Pantanal", "Caatinga"],
        correta: 3,
        selecionada: false
    },
    {
        titulo: "Qual bioma é conhecido por suas planícies alagáveis e é considerado uma das maiores áreas úmidas do mundo?",
        op: ["Amazônia", "Cerrado", "Pantanal", "Caatinga", "Mata Atlântica"],
        correta: 3,
        selecionada: false
    },
    {
        titulo: "Qual bioma brasileiro é caracterizado por campos naturais e é encontrado principalmente no sul do Brasil?",
        op: ["Amazônia", "Cerrado", "Pantanal", "Caatinga", "Pampa"],
        correta: 5,
        selecionada: false
    },
    {
        titulo: "Qual bioma é conhecido por sua vegetação adaptada a longos períodos de seca e clima semiárido?",
        op: ["Amazônia", "Cerrado", "Pantanal", "Caatinga", "Mata Atlântica"],
        correta: 4,
        selecionada: false
    },
    {
        titulo: "Qual bioma cobre a maior parte do território de Pernambuco?",
        op: ["Mata Atlântica", "Cerrado", "Pantanal", "Caatinga", "Pampa"],
        correta: 4,
        selecionada: false
    },
    {
        titulo: "Qual bioma é encontrado principalmente no litoral de Pernambuco?",
        op: ["Amazônia", "Cerrado", "Mata Atlântica", "Caatinga", "Pantanal"],
        correta: 3,
        selecionada: false
    },
    {
        titulo: "Qual bioma pernambucano é caracterizado por um clima semiárido e vegetação xerófila?",
        op: ["Mata Atlântica", "Cerrado", "Pantanal", "Caatinga", "Amazônia"],
        correta: 4,
        selecionada: false
    },
    {
        titulo: "Qual ecossistema em Igarassu é conhecido por sua importância ecológica e por ser um paraíso para observadores de aves?",
        op: ["Mata Atlântica", "Cerrado", "Manguezal do Rio Jaguaribe", "Caatinga", "Pantanal"],
        correta: 3,
        selecionada: false
    },
    {
        titulo: "Qual ecossistema costeiro em Igarassu é crucial para a proteção contra a erosão e serve como berçário para várias espécies marinhas?",
        op: ["Restinga", "Manguezal", "Mata Atlântica", "Cerrado", "Caatinga"],
        correta: 2,
        selecionada: false
    },
    {
        titulo: "Qual é um exemplo de ecossistema?",
        op: ["Pampa", "Manguezal", "Mata Atlântica", "Cerrado", "Caatinga"],
        correta: 2,
        selecionada: false
    },
    {
        titulo: "Qual é o bioma mais abundante no Brasil?",
        op: ["Amazônia", "Pantanal", "Mata Atlântica", "Savana", "Taiga"],
        correta: 1,
        selecionada: false
    },
    {
        titulo: "Qual é o bioma conhecido como Savana brasileira?",
        op: ["Pantanal", "Pampa", "Mata Atlântica", "Cerrado", "Caatinga"],
        correta: 4,
        selecionada: false
    },
    {
        titulo: "Quais os biomas com mais biodiversidade encontrados no Brasil?",
        op: ["Caatinga e Mata Atlântica", "Manguezal e Pantanal", "Mata Atlântica e Amazônia", "Pampa e Amazônia", "Caatinga e Cerrado"],
        correta: 3,
        selecionada: false
    },
    {
        titulo: "Qual é o bioma com mais espécies endêmicas?",
        op: ["Amazônia", "Pantanal", "Mata Atlântica", "Cerrado", "Caatinga"],
        correta: 3,
        selecionada: false
    }
];
// Sorteando a questão que vou perguntar
function sortearNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}



function gerarPergunta(){
    var i = sortearNumero(0,14)
    console.log(i)
    
    
    

    if(questoes[i].selecionada == false){
        const container = document.getElementById("container")
        console.log("Entrei no IF")
        container.innerHTML += `
        
         <img id="imagem" src="imagem.png" alt>

            <div class="text">
                <h1 id="quest">`+questoes[i].titulo+`</h1>
            </div>

            <nav>

                <button id="op-1">`+questoes[i].op[0]+`</button>
                <button id="op-2">`+questoes[i].op[1]+`</button>
                <button id="op-3">`+questoes[i].op[2]+`</button>
                <button id="op-4">`+questoes[i].op[3]+`</button>
                <button id="op-5">`+questoes[i].op[4]+`</button>

            </nav>
        
        `

    }

    

}
gerarPergunta()