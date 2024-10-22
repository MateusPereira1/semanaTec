let lastScrollTop = 0;
const header = document.getElementById('header');

var largura = window.screen.width;
console.log(largura)

if(largura < 550){
    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
        if (scrollTop > lastScrollTop) {
            header.style.top = '40px';
        } else {
            header.style.top = '120px';
        }
    
        lastScrollTop = scrollTop;
    });
}


var questoes = [
    {
        titulo: "Qual bioma é caracterizado por uma grande diversidade de espécies de plantas e animais, muitas das quais endêmicas?",
        op: ["Pampa", "Cerrado", "Mata Atlântica", "Pantanal", "Caatinga"],
        correta: 2,
        selecionada: false,
        acertada: false,
        imagem: "imagens/Bioma.png"
    },
    {
        titulo: "Qual bioma é conhecido por suas planícies alagáveis e é considerado uma das maiores áreas úmidas do mundo?",
        op: ["Amazônia", "Cerrado", "Pantanal", "Caatinga", "Mata Atlântica"],
        correta: 2,
        selecionada: false,
        acertada: false,
        imagem: "imagens/Bioma.png"
    },
    {
        titulo: "Qual bioma brasileiro é caracterizado por campos naturais e é encontrado principalmente no sul do Brasil?",
        op: ["Amazônia", "Cerrado", "Pantanal", "Caatinga", "Pampa"],
        correta: 4,
        selecionada: false,
        acertada: false,
        imagem: "imagens/Bioma.png"
    },
    {
        titulo: "Qual bioma é conhecido por sua vegetação adaptada a longos períodos de seca e clima semiárido?",
        op: ["Amazônia", "Cerrado", "Pantanal", "Caatinga", "Mata Atlântica"],
        correta: 3,
        selecionada: false,
        acertada: false,
        imagem: "imagens/Bioma.png"
    },
    {
        titulo: "Qual bioma cobre a maior parte do território de Pernambuco?",
        op: ["Mata Atlântica", "Cerrado", "Pantanal", "Caatinga", "Pampa"],
        correta: 3,
        selecionada: false,
        acertada: false,
        imagem: "imagens/Bioma.png"
    },
    {
        titulo: "Qual bioma é encontrado principalmente no litoral de Pernambuco?",
        op: ["Amazônia", "Cerrado", "Mata Atlântica", "Caatinga", "Pantanal"],
        correta: 2,
        selecionada: false,
        acertada: false,
        imagem: "imagens/Bioma.png"
    },
    {
        titulo: "Qual bioma pernambucano é caracterizado por um clima semiárido e vegetação xerófila?",
        op: ["Mata Atlântica", "Cerrado", "Pantanal", "Caatinga", "Amazônia"],
        correta: 3,
        selecionada: false,
        acertada: false,
        imagem: "imagens/Bioma.png"
    },
    {
        titulo: "Qual ecossistema em Igarassu é conhecido por sua importância ecológica e por ser um paraíso para observadores de aves?",
        op: ["Mata Atlântica", "Cerrado", "Manguezal do Rio Jaguaribe", "Caatinga", "Pantanal"],
        correta: 2,
        selecionada: false,
        acertada: false,
        imagem: "imagens/Bioma.png"
    },
    {
        titulo: "Qual ecossistema costeiro em Igarassu é crucial para a proteção contra a erosão e serve como berçário para várias espécies marinhas?",
        op: ["Restinga", "Manguezal", "Mata Atlântica", "Cerrado", "Caatinga"],
        correta: 1,
        selecionada: false,
        acertada: false,
        imagem: "imagens/Bioma.png"
    },
    {
        titulo: "Qual é um exemplo de ecossistema?",
        op: ["Pampa", "Manguezal", "Mata Atlântica", "Cerrado", "Caatinga"],
        correta: 1,
        selecionada: false,
        acertada: false,
        imagem: "imagens/Bioma.png"
    },
    {
        titulo: "Qual é o bioma mais abundante no Brasil?",
        op: ["Amazônia", "Pantanal", "Mata Atlântica", "Savana", "Taiga"],
        correta: 0,
        selecionada: false,
        acertada: false,
        imagem: "imagens/Bioma.png"
    },
    {
        titulo: "Qual é o bioma conhecido como Savana brasileira?",
        op: ["Pantanal", "Pampa", "Mata Atlântica", "Cerrado", "Caatinga"],
        correta: 3,
        selecionada: false,
        acertada: false,
        imagem: "imagens/Bioma.png"
    },
    {
        titulo: "Quais os biomas com mais biodiversidade encontrados no Brasil?",
        op: ["Caatinga e Mata Atlântica", "Manguezal e Pantanal", "Mata Atlântica e Amazônia", "Pampa e Amazônia", "Caatinga e Cerrado"],
        correta: 2,
        selecionada: false,
        acertada: false,
        imagem: "imagens/Bioma.png"
    },
    {
        titulo: "Qual é o bioma com mais espécies endêmicas?",
        op: ["Amazônia", "Pantanal", "Mata Atlântica", "Cerrado", "Caatinga"],
        correta: 2,
        selecionada: false,
        acertada: false,
        imagem: "imagens/Bioma.png"
    }
];

let questoesRestantes = [...Array(questoes.length).keys()];
var nota = 0
// Função global para verificar a resposta
function alter(a, i) {
    const container = document.getElementById("container");

    if (questoes[i].correta === a) {
        console.log("Correto");
        //container.innerHTML += `<p>Resposta correta</p>`;
        questoes[i].acertada = true

        nota += 1
    } else {
        console.log("Errado");
        //container.innerHTML += `<p>Resposta incorreta</p>`;
    }

    questoesRestantes = questoesRestantes.filter(q => q !== i);

    if (questoesRestantes.length > 0) {
        gerarPergunta(); // Gera uma nova pergunta
    } else {






        container.innerHTML = `<p>Você respondeu todas as perguntas!</p>
                                <h1>Você acertou ${nota} questões</h1>
                                </br>
                                </br>
                                <div id="acertadas">
                                
                                </div>


                                <a href ="assunto.html">
                                 <nav>
                                 <button>Voltar ao início</button>
                                  </nav>

                                  </a>




        
        `;

        var acertadas = document.getElementById("acertadas")


        for (x = 0; x < questoes.length; x++) {

            console.log("loop")
            console.log(acertadas)

            if(questoes[x].acertada == false){
                questoes[x].acertada = "Errada"
            }else{
                questoes[x].acertada = "Correta"

            }
    
            acertadas.innerHTML += `
                <h2>`+ questoes[x].titulo + `</h2>
                <p>`+ questoes[x].acertada + `</p>
                `
    
    
        }
    }

   
}

function sortearNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarPergunta() {
    if (questoesRestantes.length > 0) {
        var i = questoesRestantes[sortearNumero(0, questoesRestantes.length - 1)];

        const container = document.getElementById("container");

        container.innerHTML = `
            <img id="` + questoes[i].imagem + `" src="` + questoes[i].imagem + `" alt="Imagem do Bioma">
            <div class="text">
                <h1 id="quest">` + questoes[i].titulo + `</h1>
            </div>
            <nav>
                <button onclick="alter(0, ${i})" id="op-1">` + questoes[i].op[0] + `</button>
                <button onclick="alter(1, ${i})" id="op-2">` + questoes[i].op[1] + `</button>
                <button onclick="alter(2, ${i})" id="op-3">` + questoes[i].op[2] + `</button>
                <button onclick="alter(3, ${i})" id="op-4">` + questoes[i].op[3] + `</button>
                <button onclick="alter(4, ${i})" id="op-5">` + questoes[i].op[4] + `</button>
            </nav>
        `;
    } else {
        const container = document.getElementById("container");
        container.innerHTML = `<p>Você respondeu todas as perguntas!</p>`;
        container.innerHTML += `<h1>Você acertou ${nota} questões</h1>`
    }
}

gerarPergunta();
