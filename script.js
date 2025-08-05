const perguntas = [
    {
        enunciado: "Qual dessas qualidades mais se destaca em você?",
        alternativas: [
            { texto: "Coragem para enfrentar desafios", pontuacao: "Pedro" },
            { texto: "Amor e compaixão pelos outros", pontuacao: "João" },
            { texto: "Sabedoria para aconselhar", pontuacao: "TiagoMaior" },
            { texto: "Capacidade de enxergar além", pontuacao: "André" }
        ]
    },
    {
        enunciado: "Como você costuma lidar com novas ideias?",
        alternativas: [
            { texto: "Analiso e confirmo com cuidado", pontuacao: "Tomé" },
            { texto: "Abraço com entusiasmo", pontuacao: "Felipe" },
            { texto: "Penso na parte prática", pontuacao: "Bartolomeu" },
            { texto: "Procuro saber como ajudar", pontuacao: "TiagoMenor" }
        ]
    },
    {
        enunciado: "Se estivesse no grupo dos apóstolos, o que faria nas viagens?",
        alternativas: [
            { texto: "Faria discursos animados", pontuacao: "Pedro" },
            { texto: "Organizaria o grupo e os recursos", pontuacao: "Mateus" },
            { texto: "Criaria laços e cuidaria dos doentes", pontuacao: "João" },
            { texto: "Ajudaria a manter a fé de todos", pontuacao: "SimãoZelote" }
        ]
    },
    {
        enunciado: "Como você reage em momentos de perigo?",
        alternativas: [
            { texto: "Corro riscos para salvar alguém", pontuacao: "Pedro" },
            { texto: "Oro e confio em Deus", pontuacao: "João" },
            { texto: "Analiso e tomo a decisão mais segura", pontuacao: "TiagoMaior" },
            { texto: "Defendo minha fé com firmeza", pontuacao: "SimãoZelote" }
        ]
    },
    {
        enunciado: "Qual dessas atividades você mais gosta?",
        alternativas: [
            { texto: "Ensinar e explicar coisas", pontuacao: "Felipe" },
            { texto: "Conhecer novas pessoas", pontuacao: "André" },
            { texto: "Trabalhar com números e finanças", pontuacao: "Mateus" },
            { texto: "Ajudar de forma silenciosa", pontuacao: "TiagoMenor" }
        ]
    },
    {
        enunciado: "Qual valor é mais importante para você?",
        alternativas: [
            { texto: "Fidelidade", pontuacao: "JudasTadeu" },
            { texto: "Determinação", pontuacao: "Bartolomeu" },
            { texto: "Humildade", pontuacao: "Tomé" },
            { texto: "Serviço", pontuacao: "João" }
        ]
    }
];

const resultados = {
    "Pedro": "Você é como Pedro: líder, corajoso e com grande fé. Sempre pronto a agir.",
    "João": "Você é como João: amoroso, fiel e próximo de Jesus, valorizando amizade e cuidado.",
    "TiagoMaior": "Você é como Tiago, filho de Zebedeu: firme, leal e comprometido com a missão.",
    "André": "Você é como André: bom comunicador, sempre apresentando pessoas a Jesus.",
    "Tomé": "Você é como Tomé: busca compreender profundamente antes de acreditar.",
    "Felipe": "Você é como Felipe: prático, comunicativo e disposto a compartilhar a fé.",
    "Bartolomeu": "Você é como Bartolomeu: determinado, honesto e fiel até o fim.",
    "Mateus": "Você é como Mateus: organizado, habilidoso e atento aos detalhes.",
    "TiagoMenor": "Você é como Tiago, filho de Alfeu: humilde, paciente e perseverante.",
    "SimãoZelote": "Você é como Simão, o Zelote: intenso, apaixonado e defensor da fé.",
    "JudasTadeu": "Você é como Judas Tadeu: leal, persistente e amigo fiel."
};

let pontuacoes = {};
let perguntaAtual = 0;

function mostrarPergunta() {
    if (perguntaAtual >= perguntas.length) {
        mostrarResultado();
        return;
    }
    const pergunta = perguntas[perguntaAtual];
    document.querySelector(".caixa-perguntas").textContent = pergunta.enunciado;

    const alternativasDiv = document.querySelector(".caixa-alternativas");
    alternativasDiv.innerHTML = "";

    pergunta.alternativas.forEach(alt => {
        const btn = document.createElement("button");
        btn.textContent = alt.texto;
        btn.addEventListener("click", () => {
            pontuacoes[alt.pontuacao] = (pontuacoes[alt.pontuacao] || 0) + 1;
            perguntaAtual++;
            mostrarPergunta();
        });
        alternativasDiv.appendChild(btn);
    });
}

function mostrarResultado() {
    let maisVotado = Object.keys(pontuacoes).reduce((a, b) => pontuacoes[a] > pontuacoes[b] ? a : b);
    document.querySelector(".texto-resultado").textContent = resultados[maisVotado] || "Não foi possível identificar seu apóstolo.";
}

mostrarPergunta();