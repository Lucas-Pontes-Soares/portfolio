import Navigation from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { Input } from "@/components/ui/input";
import { BrushCleaning, CalendarArrowDown, CalendarArrowUp, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MultiSelect } from "@/components/ui/multi-select";

const projects = [
  {
    title: "Práticas de RAG",
    subtitle: "Curso Rocketseat",
    date: "Mar 2026 - Mar 2026",
    imagePath: "/rag.png",
    description: "Aprender práticas de RAG como Chunking para quebrar em textos menores, Embeddings para representações númericas de contexto, Store armazenando em bancos de vetores como o Turso, Search busca por similaridade, extrair e formatar informações de site com Firecrawl scrape.",
    tags: ["Typescript", "RAG", "IA", "Docker", "Turso", "Firecrawl", "Gemini", "Git", "Embeddings", "Chunks"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/learn-rag",
    topics: [
      "Desenvolvi lógica para extrair um .md de um site através do FirecrawlApp",
      "Desenvolvi a logica de quebrar o .md em chunks e trabalhando com chunks overlap",
      "Gerei os embeddings de cada chunk através do gemini",
      "Salvei os embeddings, no banco de dados de vetor Turso",
      "Transformei a busca 'prompt' em embeddings",
      "Fiz a busca por contexto entre o prompt e os chunks através de similaridade",
    ]
  },
  {
    title: "Cache com Redis em Node.js",
    subtitle: "Curso Rocketseat",
    date: "Mar 2026 - Mar 2026",
    imagePath: "/learn-redis.png",
    description: "Aprender a utilizar o Redis como cache em Node.js armazenando informações com chave:valor que são frequentemente usadas e não mudam sempre.",
    tags: ["Node.JS", "Redis", "PostgreSQL (SQL)", "RabbitMQ", "Git","Docker",],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/learn-redis",
    topics: [
      "Desenvolvi a criação de um usuário",
      "Configurei Docker para subir o banco de dados e redis",
      "Configurei o Redis para salvar os dados do usuario",
      "Utilizei como chave no redis user-${idUser} e converti o objeto do usuario para string",
      "Analisei as diferenças entre banco de dados e o redis",
      "Entendi a diferença entre os tempos de resposta",
    ]
  },
  {
    title: "Desafio Microsserviços Escaláveis Nodejs",
    subtitle: "Curso Rocketseat",
    date: "Fev 2026 - Fev 2026",
    imagePath: "/microservices.png",
    description: "Construção de dois microsserviços independentes, integração entre serviços com comunicação assíncrona utilizando RabbitMQ, PostgreSQL, aplicação dos conceitos de consistência eventual e replicação de dados entre microsserviços, observabilidade com Grafana utilizando técnicas de logging estruturado e tracing distribuído e deploy com AWS Fargate através do Pulumi.",
    tags: ["Node.JS", "PostgreSQL (SQL)", "RabbitMQ", "Grafana", "Pulimi", "AWS", "Git", "Github", "Drizzle", "Docker", "Github Actions"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/desafio-microsservicos-escalaveis-nodejs",
    topics: [
      "Desenvolvi microsserviços independentes com comunicação assíncrona via RabbitMQ.",
      "Configurei Docker para subir o banco de dados e rabbitmq",
      "Apliquei persistência em PostgreSQL com Drizzle.",
      "Implementei Migrations no banco de dados",
      "Implementei observabilidade com Grafana (logging e tracing)",
      "Automatizei o deploy na AWS Fagete via Pulumi",
    ]
  },
  {
    title: "Dumble: Sistema Educacional Com Inteligência Artificial",
    subtitle: "FATEC | Projeto Integrador",
    date: "Fev 2025 - Dez 2025",
    imagePath: "/dumble.png",
    description: "Centraliza o ensino para fortalecer o vínculo professor-aluno, com questões focadas no material do professor. Com IA com acesso ao material do professor para sugestões de perguntas e responder duvidas.\n🎖️ Projeto publicado no Congresso Nacional CONAIDUC.",
    tags: ["IA", "Node.JS", "React.JS", "PostgreSQL (SQL)", "RAG", "JWT", "Heroku", "Git", "tailwind-css", "shadcn-ui"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares",
    deployUrl: "https://dumble.onrender.com/",
    topics: [
      "Desenvolvi a parte da IA com RAG, onde os professores anexavam arquivos e o conteudo deles eram disponibilizados para a IA.",
      "Construi os prompts rigorosos e estruturados de IA, para o chat-bot e a sugestão de perguntas.",
      "Desenvolvi o front-end de maneira responsiva.",
      "Implementei autenticação de usuários via tokens JWT.",
      "Gerenciei o banco de dados SQL.",
      "Administrei e realizei o deploy (hospedagem)."
    ]
  },
  {
    title: "Avanti Intelligence - IA para detectar pneumonia",
    subtitle: "Projeto para Geniuscon 2025",
    date: "Mai 2025 - Out 2025",
    imagePath: "/avanti.png",
    description: "Modelo de IA construido através de CNN com aprendizado supervisionado através de imagens de raio-x de torax para detectar se paciente possui ou não pneumonia. Modelo foi exportado e disponibilizado para uso em nosso sistema. \n 🎖️ Projeto chegou nas finais na Geniuscon 2025.",
    tags: ["IA", "Python", "CNN", "React.JS", "Aprendizado Supervisionado", "Git", "tailwind-css", "shadcn-ui"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/avanti-intelligence",
    deployUrl: "https://avanti-intelligence.onrender.com/",
    topics: [
      "Desenvolvemos a IA, modelo, treinando através de um dataset real de imagens de raio-x de torax.",
      "Fizemos o treinamento da CNN de maneira supervisionada.",
      "Analisamos o resultados e conseguimos obter 90% de acerto quando o paciente tinha a doença.",
      "Implementei autenticação de usuários via tokens JWT.",
      "Aplicamos o conceito de separar e treinamento, validação, teste.",
      "Desenvolvi o nosso site para apresentar nosso projeto, e importei o modelo para testes."
    ],
  },
  {
    title: "Site | Atividade Interdisciplinar Kubernetes",
    subtitle: "Atividade da Faculdade",
    date: "Out 2025 - Out 2025",
    imagePath: "/atividade_docker.png",
    description: "Atividade Interdiciplinar das matérias de DEVOPS e Cloud da faculdade. Para apredenmos a trabalhar com docker e implementar kubernetes para hospedar na azure.",
    tags: ["Docker", "DockerHub", "CI", "CD", "Github", "Git", "Github Actions", "Azure", "Kubernetes"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/atividade-interdisciplinar-kubernetes",
    topics: [
      "Versionei o código no Github.",
      "Configurei o Docker para empacotar o site junto com o servidor Nginx.",
      "Publiquei a imagem no Docker Hub.",
      "Implementei CI, com Github Actions, para verificar o código a cada push, inspecionando todo o HTML e CSS.",
      "Configurei o Kubernetes na Azure (AKS) para rodar com 2 pods.",
      "Hospedei os site com docker utilizano Kubernetes na Azure."
    ],
  },
  {
    title: "Site | Jornal Docker",
    subtitle: "Atividade da Faculdade",
    date: "Set de 2025 - Set de 2025",
    imagePath: "/jornal_docker.png",
    description: "Projeto da faculdade da matéria de DevOPS é um site de três páginas com o tema de um jornal, que foi criado para explicar os conceitos fundamentais do Docker e da contêinerização.",
    tags: ["Docker", "build", "HTML", "CSS", "CI", "Github", "Git", "Github Actions", "Github Pages"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/mini-site-docker",
    topics: [
      "Desenvolvi o Front-end, que abordam sobre o Docker.",
      "Implementei Integração Continua (CI) com Github Actions.",
      "Configurei o Docker para build e Docker compose para desenvolvimento.",
      "Automatizei para a cada push ou pull request, seja executado o projeto e construido para ser testado de forma consistente.",
      "Hospedei o site através do Github Pages."
    ],
  },
  {
    title: "WineQuality - Machine Learning, Árvore de Decisão para Classificar Vinhos",
    subtitle: "Trabalho da Faculdade",
    date: "Jun de 2025 - Jun de 2025",
    imagePath: "/wine.png",
    description: "Um algoritmo de Árvore de Decisão (um modelo supervisionado) para classificar a qualidade de vinhos, utilizando atributos químicos e físicos de um dataset rotulado. O exercício envolve o pipeline completo de Machine Learning.",
    tags: ["Python", "IA", "Árvore de Decisão"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/wine-quality",
    topics: [
      "Treinamos um modelo através de um dataset supervisioado.",
      "Utilizamos algoritmos de Árvore de Decisão",
      "Passamos por todas as etapas para construir um modelo, treinamento, validações, testes, avaliação."
    ],
  },
  {
    title: "MazeSolver - Resolução de Labirinto com Busca Cega (BFS)",
    subtitle: "Trabalho da Faculdade",
    date: "Mai de 2025 - Mai de 2025",
    imagePath: "/labirinto.png",
    description: "Trabalho de Inteligência Artificial, um algoritmo em Python que gera labirintos aleatórios e aplica busca cega por largura (BFS) para encontrar um caminho do ponto de partida (I) até o destino (F) em um labirinto gerado aleatoriamente, sem utilizar heurísticas ou informações extras.",
    tags: ["Python", "Busca cega", "Navegação"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/wine-quality",
    topics: [
      "Desenvolvemos um algoritmo que utiliza o conceito de método de busca cega (largura).",
      "Desenvolvemos uma lógica para gerar labirintos aleatórios que são possíveis de resolver.",
      "Implementamos uma visualização do labirinto sendo descoberto.",
      "Observamos em prática como funciona navegação da busca em largura."
    ],
  },
  {
    title: "Sistema para Assistente Social",
    subtitle: "Trabalho da Faculdade",
    date: "Fev de 2024 - Dez de 2024",
    imagePath: "/social.png",
    description: "Na FATEC Ourinhos eu e minha turma, desenvolvemos um projeto para a Assistente Social da prefeitura de Canitar, nas disciplinas de Engenharia de Software e Banco de Dados. ",
    tags: ["Banco de Dados", "SQL", "Análise de Requisitos"],
    topics: [
      "Criamos toda a ideia do projeto, como funcionaria.",
      "Fizemos vários diagramas (casos de uso, dicionário de dados, de classes, de atividades).",
      "Construímos protótipos.",
      "Criamos o banco de dados em SQL, com todas as tabelas e relacionamentos.",
      "Fizemos a importação dos dados que estavam em uma planilha do excel."
    ],
  },
  {
    title: "Ministrei mini-curso de Robocode",
    subtitle: "Ministrado na feira da Faculdade",
    date: "Out de 2024 - Out de 2024",
    imagePath: "/robocode.png",
    description: "Na FATEC Ourinhos e mais alguns colegas, organizamos e ministramos um minicurso sobre robocode aos alunos (uma plataforma para construir robos, tanques, virtuais para batalhar) ensinamos como programar, e no final organizamos um campeonato entre os alunos.",
    tags: ["Arduino", "Robocode", "Minicurso"],
    topics: [
      "Ministrei para os alunos sobre a plataforma. ",
      "Criamos um robô juntos, explicando sobre o código, mostramos exemplos.",
      "Expliquei na prática como desenvolver nessa ferramenta.",
      "Criamos o banco de dados em SQL, com todas as tabelas e relacionamentos.",
      "Organizamos no final um campeonato entre os alunos disputando os melhores robôs desenvolvidos por eles."
    ],
  },
  {
    title: "GPLink",
    subtitle: "TCC da ETEC",
    date: "Fev de 2023 - Out de 2023",
    imagePath: "/gplink.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/ProjetoTCC",
    deployUrl: "https://gplink-aj6y.onrender.com/",
    description: "O GPLink é um sistema web para o público gamer, com o objetivo de transformar a experiência de todos. Com a funcionalide de unir os diferentes perfis dos jogadores (Xbox, Steam, Playstation) em apenas um lugar, mostrar suas conquistas, jogos, através das APIs",
    tags: ["React.JS", "Node.JS", "MongoDB", "API"],
    topics: [
      "Integrei o sistema com 3 diferentes plataformas Xbox, Steam e Playstation, através de apis e bibliotecas, trabalhando com paginação.",
      "Desenvolvi o front-end onde exibia as informações dos perfis das 3 plataformas.",
      "Utilizei autenticação via tokens JWT.",
      "Gerenciei o banco de dados no mongoDB, noSQL.",
      "Trabalhei de forma full-stack."
    ],
  },
  {
    title: "Cancela Automatica",
    subtitle: "Projeto em Arduino",
    date: "Fev de 2022 - Out de 2022",
    imagePath: "/arduinoCancela.jpg",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/ArduinoCancela",
    description: "Este projeto foi desenvolvido na matéria de Sistemas Embarcados, consiste em uma cancela, controlada por servo motor que pode ser levantada/abaixada por botões e por bluetooth com leds e som para sinalização.",
    tags: ["Arduino", "C", "Sstemas Embarcados"],
    topics: [
      "Fiz o código da lógica da cancela, com botões para simular quando o trem estiver passando.",
      "Montei o projeto fisico, com leds, sensores, e motores.",
      "Conectei com bluetooth para controlar a cancela pelo celular."
    ],
  },
  {
    title: "Upload AI",
    subtitle: "Projeto da rocketseat NLW IA",
    date: "Set de 2023 - Set de 2023",
    imagePath: "/nlw-IA.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/NLW-IA",
    description: "Contruindo um sistema que consome API do GPT, para fornecer titulos e descrição de um vídeo do youtube, com base na sua transcição de audio para texto.",
    tags: ["React.JS", "Node.JS", "IA", "shadcn-ui"],
    topics: [
      "Fiz a interface shadcn-ui",
      "Desenvolvi a logica para fazer a transcição do vídeo.",
      "Construi o prompt e configurei a IA, para respeitar a estrutura.",
      "Forneci a transcrição do video para a IA, para gerar os títulos e descrições com foco em performance."
    ],
  },
  {
    title: "Lista de Compras",
    subtitle: "Projeto do curso da Alura",
    date: "Jan de 2024 - Jan de 2024",
    imagePath: "/ListaCompras.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/ListaCompras",
    description: "Angular: ciclo de vida. Um projeto com CRUD completo de lista de compras.",
    tags: ["Angular", "Front-end"],
    topics: [
      "Desenvolvi o front-end com Angular.",
      "Armazenei a lista de compras no local-storage.",
      "Fiz a logica para gerenciar as compras."
    ],
  },
  {
    title: "Memoteca",
    subtitle: "Projeto do curso da Alura",
    date: "Jan de 2024 - Jan de 2024",
    imagePath: "/memoteca.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/memoteca",
    description: "Projeto angular para aplicar os conceitos e desenvolver CRUD em Angular 14. Um projeto com CRUD completo de pensamentos, citações ou músicas.",
    tags: ["Angular", "Front-end"],
    topics: [
      "Desenvolvi o front-end com Angular.",
      "Armazenei os dados no local-storage.",
      "Fiz a logica para gerenciar os pensamentos, citações, música."
    ],
  },
  {
    title: "AluraBooks",
    subtitle: "Projeto do curso da Alura",
    date: "Jan de 2024 - Jan de 2024",
    imagePath: "/AluraBooks.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/alurabooks",
    description: "Angular: formulários orientados a templates. Um projeto com para preenchimento de formulário com restrições e diretivas, utiliznado a API para trazer dados do endereço com o CEP.",
    tags: ["Angular", "Front-end"],
    topics: [
      "Desenvolvi o front-end com Angular.",
      "Desenvolvi preenchimento do formulário com restrições.",
      "Implementei API para preeencher dados automaticamente com CEP."
    ],
  },
  {
    title: "NOTES",
    subtitle: "Rocketseat NLW Expert - ReactJS",
    date: "Fev de 2024 - Fev de 2024",
    imagePath: "/nlw-expert.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/NLW-Expert",
    description: "Projeto de notas, utilizando vite, typescript, tailwindCSS, SpeechRecognitionAPI. Possui funcionalidades de criar notas, tanto por texto tanto por fala, procurar por nota e excluir.",
    tags: ["React.JS", "Front-end", "Typescript"],
    topics: [
      "Desenvolvi o front-end com React.JS.",
      "Utilizei classes css através do tailwindcss.",
      "Desenvolvi funcionalidade de criar uma nota apartir da fala, ou digitando."
    ],
  },
  {
    title: "NewsBlog",
    subtitle: "Projeto Pessoal",
    date: "Fev de 2024 - Fev de 2024",
    imagePath: "/newsBlog.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/NLW-Expert",
    description: "Projeto em ReactJS, vite, com tailwindCSS, para um sistema de blogs de artigos, com uma home principal para visualizar todos os artigos, ao passar o cursor por cima, verá a descrição, clique para ler completamente. Criar artigos com determinadas sessões.",
    tags: ["React.JS", "Front-end", "Typescript"],
    topics: [
      "Desenvolvi o front-end com React.JS.",
      "Armazenei os dados dos Artigos em localstorage.",
      "Fiz a tela principal para criar um artigo de forma estruturada, com titulo, subtitulo, imagem de capa, conteúdo."
    ],
  },
  {
    title: "CETAF",
    subtitle: "Trabalho da Faculdade",
    date: "Out de 2024 - Dez de 2024",
    imagePath: "/Tela do Professor.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/CETAF",
    description: "Um sistema de gerenciamento de matricula para a matéria de gestão agil de projetos da faculdade. 2 Usuários: Aluno pode ver cursos, e realizar matricula. Professor pode ver extrato dos alunos, e receber email das matriculas.",
    tags: ["React.JS", "Node.JS", "API", "SQL", "MYSQL"],
    topics: [
      "Desenvolvi o back-end com Node.JS.",
      "Gerenciei o banco de dados SQL.",
      "Construi as queries SQLS do backend."
    ],
  },
  {
    title: "Lista Personagens",
    subtitle: "Trabalho da Faculdade",
    date: "Out de 2024 - Dez de 2024",
    imagePath: "/listagempersonagens.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/ListagemPersonagens",
    description: "Trabalho final para a matéria de programação mobile da faculdade, desenvolvido em flutter no flutlab, com api através do mockapi, para armazenar os personagens. Visualização de personagens, detalhes, adicionar de uma lista.",
    tags: ["Flutter", "Front-end", "API"],
    topics: [
      "Desenvolvi através do mockapi a API.",
      "Estruturei todos os dados que os personagens vão ter.",
      "Construi api para visualizar todos os personagens e para filtrar.",
      "Fiz o front-end com flutter para consumir essa API."
    ],
  },
  {
    title: "Jogo Tiro ao Alvo",
    subtitle: "Projeto Pessoal",
    date: "Abr de 2022 - Abr de 2022",
    imagePath: "/alvo.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/JogoAlvo",
    description: "Site para melhorar a sua mira atirando em alvos gerados aleatoriamente, no final é exibido quantos alvos acertou e quantos errou.",
    tags: ["Front-end", "Javascript", "HTML", "CSS"],
    topics: [
      "Desenvolvi a lógica dos alvos gerando aleatoriamente com javascript",
      "Fiz a lógica do conômetro para o usuario escolher quanto tempo quer jogar.",
      "Desenvolvi a lógica de reiniciar os pontos no final para começar denovo"
    ],
  },
  {
    title: "Jogo da Forca",
    subtitle: "Projeto do Ensino Médio",
    date: "Out de 2021 - Dez de 2021",
    imagePath: "/forca.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/JogoForca",
    description: "Jogo da forca desenvolvido em C++, o usuario escolhe o tema da palavra secreta e digita a palavra secreta. Quem for adivinhar tem 6 chances, a cada erro o boneco é desenhado.",
    tags: ["C++"],
    topics: [
      "Desenvolvi a lógica do jogo da forca, indentificando quais letras a palavra possue.",
      "Construi a parte visual no terminal mesmo.",
      "Desenvolvi a lógica de desenhar o boneco a cada erro."
    ],
  },
  {
    title: "La Cafezito",
    subtitle: "Projeto Interdisciplinar do Ensino Médio",
    date: "Set de 2022 - Dez de 2022",
    imagePath: "/cafezito.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/LaCafezito",
    description: "Das matérias de PW, BD, APS. Nosso sistema conta com área do cliente para montar o seu café com etapas, visualizar histórico de pedidos. Área de admin com kanban dos pedidos (análise, em produção, em entrega), edição dos complementos.",
    tags: ["PHP", "HTML", "CSS", "SQL", "MYSQL"],
    topics: [
      "Gerenciei o banco de dados e as consultas SQLs.",
      "Construi a logica do backend com PHP.",
      "Construi a área de admin, com o kanban dos pedidos, arrastandos para cada etapa (análise, em produção, em entrega)."
    ],
  },
  {
    title: "Janela Automática",
    subtitle: "Projeto da Faculdade",
    date: "Set de 2022 - Dez de 2022",
    imagePath: "/janela.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/JanelaAutomatica",
    description: "Projeto que construimos uma janela automática com esp-32, motores e sensores. Com sensores de chuva, temperatura, claridade, definimos quando a janela fecha e abre. Utilizando o protocolo MQQT para ter controle em um aplicativo externo, e visualizar gráficos dos dados capturados.",
    tags: ["Arduino", "ESP-32", "MQTT", "Python"],
    topics: [
      "Fiz o código da janela, coletando os dados dos sensores e abrindo e fechando a janela.",
      "Desenvolvi a janela em 3 partes, vidro, persiana e veneziana, as 3 partes se fecham ou abrem de maneiras diferentes e momentos diferentes.",
      "Desenvolvi a exportação dos dados com MQTT para exibir em um aplicativo dados captados pelos sensores em forma de gráfco."
    ],
  },
  {
    title: "Maratona de Programação",
    subtitle: "Projeto da Faculdade",
    date: "Mar de 2024 - Out de 2025",
    imagePath: "/maratona.png",
    description: "Durante os anos na faculdade, participei das maratonas de programação como InterFatecs, na qual resolviamos uma seríe de problemas em C. Competindo com outros alunos de outras turmas, com exercicios bem desafiadores que precisavam ser criativos para resolver.",
    tags: ["C", "Lógica", "Maratona"],
    topics: [
      "Trabalhamos em Equipe para resolver os exercícios.",
      "Desenvolvi boas lógicas de programação em C para resolver os problemas.",
      "Analisei os enunciados e capturei as informações principais para desenvolver o primeiro esboço."
    ],
  },
]

const allTechnologies = [...new Set(projects.flatMap(p => p.tags))].sort();

const monthMap: { [key: string]: number } = {
  "Jan": 0, "Fev": 1, "Mar": 2, "Abr": 3, "Mai": 4, "Jun": 5, "Jul": 6, "Ago": 7, "Set": 8, "Out": 9, "Nov": 10, "Dez": 11,
};

function parseProjectDate(dateString: string): Date {
  const endDateString = dateString.split(" - ").pop()?.trim() || '';
  const cleanedDateString = endDateString.replace("de ", "");
  const parts = cleanedDateString.split(" ");
  const monthStr = parts[0].substring(0, 3);
  const year = parseInt(parts[1], 10);
  const month = monthMap[monthStr];
  return new Date(year, month);
}

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateSort, setDateSort] = useState<"asc" | "desc" | null>("desc");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleDateSort = (order: "asc" | "desc") => {
    setDateSort(order);
  };

  const handleTechChange = (techs: string[]) => {
    setSelectedTechs(techs);
  }

  const filteredProjects = projects
    .filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(project => {
      if (selectedTechs.length === 0) return true;
      return selectedTechs.some(tech => project.tags.includes(tech));
    })
    .sort((a, b) => {
      if (dateSort === null) return 0;

      const dateA = parseProjectDate(a.date);
      const dateB = parseProjectDate(b.date);

      if (dateA.getTime() < dateB.getTime()) {
        return dateSort === 'asc' ? -1 : 1;
      }
      if (dateA.getTime() > dateB.getTime()) {
        return dateSort === 'asc' ? 1 : -1;
      }
      return 0;
    });

  const handleClearFilters = () => {
    setSearchTerm("");
    setDateSort(null);
    setSelectedTechs([]);
  };

  return (
    <div>
      <Navigation actuallyPage="projects" />

      <div className="mt-32 p-6">
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <Input
              placeholder="Filtre pelo titulo do projeto..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10"
            />
          </div>
          <MultiSelect
            options={allTechnologies}
            value={selectedTechs}
            onChange={handleTechChange}
          />
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex gap-2">
              {dateSort === "desc" ? (
                <Button className="cursor-pointer bg-primary" onClick={() => handleDateSort("desc")}>
                  <CalendarArrowUp />
                  Mais Recentes
                </Button>
              ) : (
                <Button variant={"outline"} className="cursor-pointer" onClick={() => handleDateSort("desc")}>
                  <CalendarArrowUp />
                  Mais Recentes
                </Button>
              )}
              {dateSort === "asc" ? (
                <Button className="cursor-pointer bg-primary" onClick={() => handleDateSort("asc")}>
                  <CalendarArrowDown />
                  Mais Antigos
                </Button>
              ) : (
                <Button variant={"outline"} className="cursor-pointer" onClick={() => handleDateSort("asc")}>
                  <CalendarArrowDown />
                  Mais Antigos
                </Button>
              )}
            </div>
            <Button onClick={handleClearFilters} variant="outline" size="icon">
              <BrushCleaning className="h-4 w-4" />
            </Button>
          </div>
          <div className="mx-auto">
            <p className="text-muted-foreground">{`Mostrando ${filteredProjects.length} de ${projects.length} projetos`}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 justify-center mt-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
