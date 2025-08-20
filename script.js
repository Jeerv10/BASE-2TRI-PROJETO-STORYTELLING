const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acorda em sua cama com o alarme do celular às 11 da manhã. Você ainda está com a exaustão e estresse do dia anterior, ainda mais por ter madrugado e terr ido dormir às 7 da manhã de novo. Hoje à noite é outro dia de aula, o que você faz?",
        alternativas: [
            {
                texto: "Continuar a rotina de sempre (tomar café, almoçar, tomar banho, se arrumar e ir para o colégio).",
                afirmacao: "Acordo, como, me arrumo... Ugh, todo santo dia a mesma droga. Mas tenho que aguentar... vai dar tudo certo. "
            },
            {
                texto: "Arranjar uma desculpa para faltar aos seus pais.",
                afirmacao: "Eu abro a gaveta do armário e mando 4 pílulas de tarja preta goela abaixo... Me sinto mal por preocupar meus pais. "
            }
        ]
    },
    {
        enunciado: "Na outra semana, no caminho do colégio, você vê seu antigo amigo, o Mendigo. Você não o vê já faz um tempo desde que começou a tomar seus medicamentos. O que você faz?",
        alternativas: [
            {
                texto: "Cumprimentar seu velho amigo.",
                afirmacao: "Fazia um tempo que não via o Mendigo... A gente botou o papo em dia, trocamo ideia. Ele continua enigmático como sempre, não mudou nadinha."
            },
            {
                texto: "Ignorá-lo, você não tem tempo para distrações bestas.",
                afirmacao: "Depois de todos esses anos ele surge agora? Do nada? Não, não posso permitir minha cabeça continuar pregando essas peças em mim."
            }
        ]
    },
    {
        enunciado: "Você está trancado sozinho em seu quarto. Seus pais batem na porta, dizendo que planejam viajar pra praia junto de boa parte da família nesse feriado e querem muito que você vá junto. Já faz uns anos que você não revê seus outros familiares... O que você faz?",
        alternativas: [
            {
                texto: "Ir à praia.",
                afirmacao: "Fui à praia... Me reuni com meus primos, tios, avós depois de muito tempo... Foi bom."
            },
            {
                texto: "Ficar em casa.",
                afirmacao: "Preferi ficar no meu cafofo do que ir praia. Passei o feriado inteiro sozinho em casa."
            }
        ]
    },
    {
        enunciado: "Você tá na tua tranquilo na praça. Um cara esquisitão usando juliet e carregando uma pochete te aborda e lhe oferece uma oportunidade de 'afogar as mágoas'. Meses atrás rolou um desentendimento com 'M', a qual um dia vocês já foram próximos, de certa forma. Você ainda pensa, especialmente hoje, bastante em relação ao que você fez a ela. O que você faz?",
        alternativas: [
            {
                texto: "Recusar, você não precisa dessas coisas.",
                afirmacao: "Um noia me ofereceu droga. Usar drogas é coisa de poser otário. Preciso pensar com clareza ao que fiz com M, quem sabe eu consiga me redimir no futuro."
            },
            {
                texto: "Aceitar... Só um trago não faz mal... né?",
                afirmacao: "Nunca achei que essa ervinha verde era tão boa... haha... Por que me sinto vazio? Quase esqueci do que eu fiz... Espera, cadê ele?"
            }
        ]
    },
    {
        enunciado: "Enquanto você está sentado sozinho em seu quarto, aquela maldita criança surge novamente do nada. 'Você se orgulha do que se tornamos?' ela pergunta. O que você faz?",
        alternativas: [
            {
                texto: "Não se orgulha, você cometeu muitos erros e maltratou pessoas. Mas ainda deseja redenção.",
                afirmacao: "Aquela criança que um dia já fui surge novamente. Não sou a melhor pessoa do mundo, mas ainda posso ser alguém bom."
            },
            {
                texto: "Sim, tomar as pílulas e fazer a criança desaparecer. Pensando melhor, você não fez nada de errado, né?",
                afirmacao: "Aquela criança de novo... Eu sou melhor agora, melhor do que antes. Não sou a melhor pessoa do mundo, mas não fiz nada de errado, eu acho... Suma daqui, criança!"
            }
        ]
    },
        {
        enunciado: "Você se encontra pensando no passado, de novo. Você deseja profundamente entrar em paz consigo mesmo e com outras pessoas. 'G', uma pessoa que, assim como M, você já foi muito próximo. Anos se passaram e você ainda tinha sentimentos de amor por G. Porém, agora eles estão misturados com ódio imenso por G. Você chamou G para trocar uma ideia, talvez até resolver as diferenças. Você sente seu coração queimar, de sentimentos antigos reprimidos e de ódio. Como você administra essa conversa?",
        alternativas: [
            {
                texto: "Manter a calma, não se deixar levar por emoções.",
                afirmacao: "Ah G... Eu te amava tanto... Depois da nossa conversa recente, finalmente consegui te superar e botar as indiferenças de lado. Me sinto mais leve."
            },
            {
                texto: "A culpa toda é de G. Te largou sem explicar nada! Te usou! Jogue isso na cara de G!",
                afirmacao: "Imundície! G quis dar uma de João sem braço pra cima de mim! Que não tinha culpa nenhuma! Eu era inexperiente?! Mas é claro! Tu foi meu primeiro namoro, caramba! O que você esperava?!"
            }
        ]
    },
        {
        enunciado: "O ponteiro do relógio gira e o tempo não para. Você sente que seu tempo está acabando e ainda há coisas a se fazer. Após conversar com G, você acredita que está na hora de se resolver com M. No colégio, você deixa um bilhetinho na carteira de M, dizendo que deseja conversar hoje na aula de Ed. Física. Você vai para o local de encontro e, surpreendentemente, M aparece. Você respira profundamente, juntando coragem. Como você administra essa conversa?",
        alternativas: [
            {
                texto: "Conversar com calma. Não dizer nada inconveniente, se desculpar por tudo, fazer as pazes.",
                afirmacao: "M... Me sinto extremamente mal pelo que fiz. Fui tão idiota! Deu tudo certo... Depois de conversarmos, fizemos as pazes... Eu tinha um enorme buraco de carência, e M uma baita ferida por conta de um relacionamento passado. Não sei bem se alguém tem realmente uma culpa nisso tudo."
            },
            {
                texto: "Tentar resolver logo, de qualquer jeito, para não incomodar e tomar muito o tempo de M.",
                afirmacao: "Minha conversa com M não deu em porcaria nenhuma, a gente continua do mesmo jeito. Caguei no pau feio... Droga! Nunca consigo fazer nada direito!"
            }
        ]
    },
        {
        enunciado: "Você está querendo sair de casa, dar uma volta, ir ao seu lugar favorito para resfriar a cabeça. Suas idas e vindas sem falar nada preocupa seus pais. Eles questionam do por que você estar saindo e voltando sem dizer nada com uma cara de quem acabou de voltar de um funeral. O que você faz?",
        alternativas: [
            {
                texto: "Ser sincero.",
                afirmacao: "Meus pais agora sabem uma pequena parte do que eu faço... Eu só quero sair pra se acalmar em um dos poucos lugares em que tenho paz. Me pediram pra não ir e conversar mais... Mas fui do mesmo jeito. "
            },
            {
                texto: "Inventar alguma coisa.",
                afirmacao: "Meus pais sabem quando eu minto. Tentei desconversar, pra deixar isso pra lá que não é nada. Causei uma discussão pesada, briguei com eles e meti o pé de casa, sem nem olhar para trás."
            }
        ]
    },
        {
        enunciado: "No topo de um prédio com uma vista plena da cidade, tá tudo uma bagunça. Estalos, cochichos, sua mente devorando a si mesmo, uma tortura que não parece ter fim dentro de sua cabeça. Você se senta na beirada, observando a cidade. Uma figura sombria idêntica a você se senta ao seu lado. 'Não era como eu teria feito as coisas... Tu tem noção de quanta coisa passamos até aqui e você tá querendo fazer isso?' a figura diz. O que você responde?",
        alternativas: [
            {
                texto: "Sim, pode não ser a melhor opção. Mas é bom considerar. Há muitas dúvidas se é o certo.",
                afirmacao: "Minha própria sombra fala comigo. Ela me faz pensar muito...É difícil decidir..."
            },
            {
                texto: "Essa pode ser a única forma de poder ter paz pelo menos uma vez na vida. Agora cala a boca.",
                afirmacao: "Já passei por muita desgraça na vida. Eu só quero ter um pouco de paz. Não vai ser hoje que uma sombra fruto da minha imaginação que vai me impedir disso."
            }
        ]
    },
        {
        enunciado: "Você olha para baixo do topo do prédio. Ao olhar sua visão começa a ficar turva. Depois de vários segundos de silêncio, a figura fala novamente; 'Olha, seja lá o que tu decidir... vai em frente então caramba! Tu nunca me escuta de qualquer forma. Só não vá se arrepender de última hora. Porque aí vai ser mais um arrependimento no meio de muitos, e seu último. Você me dá repulsa as vezes... Mas não tenho escolha a não ser acompanhar.'  O que você faz?",
        alternativas: [
            {
                texto: "Botar tudo pra descansar.",
                afirmacao: "Eu sei... Por isso esta será a última coisa que farei... Esta será a última coisa que escrevo no meu diário antes de pintar o chão de vermelho lá em baixo."
            },
            {
                texto: "Voltar à realidade e seguir com a vida.",
                afirmacao: "Quer saber? Deixa isso pra lá! É melhor enfrentar os problemas de frente do que continuar fugindo deles! Eu ainda consigo."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
