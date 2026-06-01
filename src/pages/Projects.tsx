import Navigation from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { Input } from "@/components/ui/input";
import { BrushCleaning, CalendarArrowDown, CalendarArrowUp, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MultiSelect } from "@/components/ui/multi-select";

const projects = [
  {
    title: "Estudos sobre TDD",
    subtitle: "Curso do André Okazaki",
    date: "Mai 2026 - Mai 2026",
    imagePath: "/tdd.jpg",
    description: "Curso sobre TDD (Test Driven Development) uma técnica de desenolvimento de software guiado pelos testes. Na qual trabalhamos com testes (unidade) como uma fase/processo do desenvolvimento, construir o teste primeiro, antes do código. Conceito de red/refactor/green, e focar no resultado esperado.",
    tags: ["TDD", "Domain", "Value Objects", "Context"],
    topics: [
      "Aprendi sobre TDD, o que é, que ele mira nos testes de unidade;",
      "Entendi que ele foca no resultado esperado, e não como chegar no resultado;",
      "Entendi a ideia do Test First, Red/Refactor/Green e Baby Stpes, passo por passo, onde testamos primeiro;",
      "Aprendi que o TDD fala que não devemos fazer que os códigos funcionem de primeira, precisamos refatorar;",
    ]
  },
  {
    title: "Desafio DDD: Sistema CineFlow",
    subtitle: "Exercicio Prático de DDD",
    date: "Mai 2026 - Mai 2026",
    imagePath: "/cineflow.png",
    description: "Apliquei meus estudos sobre DDD em um exercicio de um sistema de cinema, de gerenciamento de salas. Modelei o aplicando DDD, identificado Entidades, Dominios, Agregadores, Contextos, Objetos de Valor. Cenário criado por IA Gemini, na qual entendi e conversei para definindo a linguagem Ubíqua, e depois corrigindo com IA e meus Estudos.",
    tags: ["DDD", "Domain", "Value Objects", "Context"],
    topics: [
      "Interpretei o cenário e identifiquei as ações e entidades;",
      "Refleti e defini os domínios e os tipos (principal, gerêrico, auxiliar);",
      "Defini e identifiquei até onde vai cada dominio, e o que pertence a ele;",
      "Defini os domínios principais que são o coração, e sem eles o sistema não funciona, e que diferencia ele de concorrentes;",
      "Defini contextos e refleti sobre microsserviços, e comunicação assyncrona entre eles com RabbitMQ;",
      "Pensei sobre os Value Object, como assento e dinheiro."
    ]
  },
  {
    title: "Estudos sobre DDD",
    subtitle: "Curso do Full Cicle",
    date: "Abr 2026 - Mai 2026",
    imagePath: "/video-ddd.jpg",
    description: "Curso sobre DDD (Domain Drive Design) uma abordade de modelagem de software focada em domínios de negócio complexos para aprender sobre Domínios, Linguagem Ubíqua, Bounded Contexts, Context Map, Arquitetura Contextual, Entidades, Agregadores, Objetos de Valor, Repositórios e Serviços de dominio.",
    tags: ["DDD", "Domain", "Value Objects", "Context"],
    topics: [
      "Entendi que o Domínio é o coração do negócio;",
      "Entendi sobre os tipos de domínios (principal, genêrico, auxiliar);",
      "Compreendi como a linguagem Ubíqua é importante, e conversar com o Domain Expert;",
      "Entendi como delimitar os contextos da aplicação e a fronteira de cada um.",
    ]
  },
  {
    title: "Games Spring",
    subtitle: "Projeto Java Spring Boot",
    date: "Jan 2025 - Jan 2025",
    imagePath: "/games-spring.png",
    description: "Projeto em Java Spring Boot, com Front-end (JSP) e Back-end, utilizando banco de dados SQL. CRUD de games, com jogo, categoria, plataforma.",
    tags: ["Java", "Spring Boot", "Gradle", "JSP", "SQL", "Docker", "HTML", "CSS"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/games-spring",
    topics: [
      "Utilizei docker-compose para subir o banco de dados SQL;",
      "Trabalhei no Spring Boot com Controllers, Models e Repositories;",
      "Construi a interface com JSP com o CRUD completo do jogo, categoria e plataforma;",
      "Trabalhei com rotas e metodos HTTP, parámetros e retornos na API.",
    ]
  },
  {
    title: "Java com Spring Boot - Curso Introdutório",
    subtitle: "Curso Rocketseat",
    date: "Out 2023 - Out 2023",
    imagePath: "/spring.png",
    description: "Aprender a desenvolver uma a desenvolver uma API de tarefas usando Java e Spring Boot, criando um To-Do List do zero. Criação de rotas HTTP, validação de parâmetros, integração com banco de dados, autenticação JWT com Spring Security e deploy na plataforma Render.",
    tags: ["Java", "Spring Boot", "Maven", "JWT", "SQL"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/todolist",
    topics: [
      "Desenvolvi o CRUD do to-do-list;",
      "Entendi as estrutura de pacotes e importações de classe no Java;",
      "Trabalhei com Repository, Controller, Model, Utils;",
      "Utilizei banco de dados SQL, conceito de ORM.",
    ]
  },
  {
    title: "RabbitMQ: Queues, Exchanges e DLQ",
    subtitle: "Projeto pessoal para aprender sobre RabbitMQ",
    date: "Abr 2026 - Abr 2026",
    imagePath: "/learn-rabbitmq.png",
    description: "Projeto pessoal de estudos, criando um sistema de microserviços e-commerce, com microserviços diferentes: order, inventory, notification, payment. Para aprender sobre Queues, Exchanges, estratégias de resiliência como DLQ, aprender sobre Wildcards, Ack, Nack, e a filosofia do 'Se eu preciso, eu garanto' do Assert.",
    tags: ["RabbitMQ", "Node.JS", "Docker", "Queues", "Exchanges", "DLQ"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/learn-rabbitmq",
    topics: [
      "Estudei sobre os conceitos do RabbitMQ;",
      "Desenvolvi os microserviços separadamente, cada um com sua função;",
      "Desenvolvi o publicador e os consumidores das mensagens;",
      "Fiz a lógica do DLQ, simulando um erro, para jogar em uma fila de erros;",
      "Utilizei Exchanges, de maneira que as mensagens nunca vão direto para a fila."
    ]
  },
  {
    title: "Submissão Artigo na Revista InterAgro!",
    subtitle: "Estação Agroclimática Inteligente baseada em IoT e MQTT",
    date: "Set 2025 - Abr 2026",
    imagePath: "/interAgro.jpg",
    description: "Trabalho publicado na Revista InterAgro,  desenvolver e implementar uma estação agroclimática inteligente, utilizando a placa ESP32 e sensores capazes de medir temperatura, umidade e luminosidade, de modo a disponibilizar os dados coletados por meio do protocolo de mensagens MQTT. \n 🎖️ Projeto publicado na Revista InterAgro 2025 v. 3 n. 1.",
    tags: ["ESP-32", "Python", "Arduino", "Agro", "Revista", "InterAgro", "WOKWI"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/estacao-agroclimatica-inteligente",
    articleUrl: "https://publicacoescgesg.cps.sp.gov.br/interagro/article/view/888",
    topics: [
      "Estudei sobre o protocolo MQTT;",
      "Desenvolvi e modelei a estrutura física do ESP-32 no WOKWI;",
      "Programei a lógica de captura de dados e mensageria;",
      "Configurei o envio/recibo das notificações e alertas das mensagens no MQTT."
    ]
  },
  {
    title: "Back-end Node com Testes Unitários, Integração e E2E.",
    subtitle: "Curso Rocketseat",
    date: "Abr 2026 - Abr 2026",
    imagePath: "/node-tests.jpg",
    description: "Projeto de agendamentos de uma barbearia. Construindo a aplicação de uma maneira isolada, independente de banco de dados, com SOLID. Criando testes unitários através do Vitest, utilizando banco de daods em memória. Construindo um serviço independente.",
    tags: ["Node.JS", "Typescript", "Git", "Vitest", "Tests", "Unit Tests", "Integration Tests", "E2E Tests", "SOLID", "POO"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/node-testable-apps",
    topics: [
      "Estudei sobre conceitos de Testes Unitários, de Integração e E2E;",
      "Utilizei conceitos do SOLID, inversão de dependências e POO;",
      "Construi um serviço independente de banco de dados, uma aplicação isolada;",
      "Desenvolvi testes unitários com Vitest no Node.js, para validar dados e datas;",
      "No teste unitário utilizei banco de dados em memória, criando repositories, ao invés de mocks.",
    ]
  },
  {
    title: "Nest.JS Library API",
    subtitle: "Projeto pessoal de Nest",
    date: "Mar 2026 - Abr 2026",
    imagePath: "/nest-library.png",
    description: "Projeto pessoal para aplicar melhores práticas de programção/estrutura/design no Nest.JS. Uma api para uma biblioteca física, com usuarios (client/librarian), para fazer reserva e reviews de livros cadastrados, com controle de autenticação e permissões, controlados, por tokens e role control.",
    tags: ["Nest.JS", "Node.JS", "Typescript", "Git", "PostgreSQL", "Drizzle", "Roles", "RBAC", "ABAC", "JWT"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/nest-library-api",
    topics: [
      "Apliquei práticas, separando em módulos cada um com repositories, dtos, controllers, interfaces, services;",
      "Implementei autenticação por tokens JWT, utilizei Guard para verificação;",
      "Desenvolvi com banco de dados SQL, com o PostgreSQL, através do Drizzle;",
      "Desenvolvi logica de roles/permissões, com separando entre client/librarian, e utilizei Guard para permissões;",
      "Implementei as permissões no arquivo permissions.ts, que cada usuario tem funções, que precisa possuir para executar.",
    ]
  },
  {
    title: "DevRoast",
    subtitle: "NLW Operator Rocketseat",
    date: "Mar 2026 - Mar 2026",
    imagePath: "/operator.jpg",
    description: "Cole seu codigo. Leve um roast. DevRoast e um analisador de qualidade de codigo via IA que da uma nota brutalmente honesta de 0 a 10. Melhores práticas de vibe coding, com agentes, MCPs, skills, prompts. ",
    tags: ["Next.JS", "Node.JS", "IA", "Gemini", "Claude Code", "MCP", "Git", "Agentes", "Typescript", "tailwind-css", "Pencil", "Base-ui", "PostgreSQL"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/devroast",
    topics: [
      "Apliquei melhores práticas de prompts com os agentes;",
      "Integrei o Claude Code com MCPs, e com skills, para performar ainda mais;",
      "Desenvolvi o front-end com Next.JS;",
      "Desenvolvi o back-end com Node.JS, e PostgreSQL;",
      "Fiz a lógica de análisar o código enviado atráves de api do gemini;",
      "Programei a exibição de pontuações, correções e ranqueamento.",
    ]
  },
  {
    title: "Jogo da Velha com IA",
    subtitle: "Trabalho da Faculdade",
    date: "Set 2025 - Set 2025",
    imagePath: "/jogo-velha.png",
    description: "Um Jogo da Velha clássico, com uma reviravolta moderna: seu adversário é IA, uma inteligência artificial que usa a API do Gemini.",
    tags: ["Python", "IA", "Gemini", "Git"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/jogo-da-velha-com-ia",
    topics: [
      "Desenvolvi a lógica do jogo da velha, na qual temos o Jogador e a IA;",
      "Desenvolvi a lógica na qual o jogador escolhe se quer ser 'X' ou 'O';",
      "Apliquei conceito de dificuldade (fácil, médio ou díficil), na qual a IA, recebe uma instrução diferente;",
      "Programei para iniciar a partida com um sorteio de 50/50 para quem vai iniciar;",
      "Programei um campo 3x3, representado por uma matriz com posições de 0 a 2 para linhas e colunas;",
      "No final, é decidido se temos uma vitória do Jogador ou da IA, ou até mesmo empate.",
    ]
  },
  {
    title: "MasterClass Nest.JS",
    subtitle: "Curso Rocketseat",
    date: "Mar 2026 - Mar 2026",
    imagePath: "/nest.jpg",
    description: "Aprender práticas do framework Nest, que trás opinião e é altamente extensivel, aprender sobre Modules, Controllers, Provides, Repositorios, Decorators, DTOs. E também aplicação dos conceitos de Inversão de Dependência e Injeção de Dependência.",
    tags: ["Nest.JS", "Typescript", "Node.JS", "Prisma", "SQLite", "Git"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/masterclass-nestjs",
    topics: [
      "Desenvolvi uma API em Nest, para aprender sobre os conceitos do framework;",
      "Apliquei conceitos de Inversão de Dependência e Injeção de Dependência;",
      "Criei um banco de dados SQLite com Prisma;",
      "Organizei e separei tudo em modules, controllers, provides, repositories, dtos.",
    ]
  },
  {
    title: "Práticas de RAG",
    subtitle: "Curso Rocketseat",
    date: "Mar 2026 - Mar 2026",
    imagePath: "/rag.png",
    description: "Aprender práticas de RAG como Chunking para quebrar em textos menores, Embeddings para representações númericas de contexto, Store armazenando em bancos de vetores como o Turso, Search busca por similaridade, extrair e formatar informações de site com Firecrawl scrape.",
    tags: ["Typescript", "RAG", "IA", "Docker", "Turso", "Firecrawl", "Gemini", "Git", "Embeddings", "Chunks"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/learn-rag",
    topics: [
      "Desenvolvi lógica para extrair um .md de um site através do FirecrawlApp;",
      "Desenvolvi a logica de quebrar o .md em chunks e trabalhando com chunks overlap;",
      "Gerei os embeddings de cada chunk através do gemini;",
      "Salvei os embeddings, no banco de dados de vetor Turso;",
      "Transformei a busca 'prompt' em embeddings;",
      "Fiz a busca por contexto entre o prompt e os chunks através de similaridade.",
    ]
  },
  {
    title: "Cache com Redis em Node.js",
    subtitle: "Curso Rocketseat",
    date: "Mar 2026 - Mar 2026",
    imagePath: "/redis.jpg",
    description: "Aprender a utilizar o Redis como cache em Node.js armazenando informações com chave:valor que são frequentemente usadas e não mudam sempre.",
    tags: ["Node.JS", "Redis", "PostgreSQL", "RabbitMQ", "Git","Docker",],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/learn-redis",
    topics: [
      "Desenvolvi a criação de um usuário;",
      "Configurei Docker para subir o banco de dados e redis;",
      "Configurei o Redis para salvar os dados do usuario;",
      "Utilizei como chave no redis user-${idUser} e converti o objeto do usuario para string;",
      "Analisei as diferenças entre banco de dados e o redis;",
      "Entendi a diferença entre os tempos de resposta.",
    ]
  },
  {
    title: "Desafio Microsserviços Escaláveis Nodejs",
    subtitle: "Curso Rocketseat",
    date: "Fev 2026 - Fev 2026",
    imagePath: "/microservices.png",
    description: "Construção de dois microsserviços independentes, integração entre serviços com comunicação assíncrona utilizando RabbitMQ, PostgreSQL, aplicação dos conceitos de consistência eventual e replicação de dados entre microsserviços, observabilidade com Grafana utilizando técnicas de logging estruturado e tracing distribuído e deploy com AWS Fargate através do Pulumi.",
    tags: ["Node.JS", "PostgreSQL", "RabbitMQ", "Grafana", "Jaeger", "Pulimi", "AWS", "Git", "Github", "Drizzle", "Docker", "Github Actions", "CI", "CD"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/desafio-microsservicos-escalaveis-nodejs",
    topics: [
      "Desenvolvi microsserviços independentes com comunicação assíncrona via RabbitMQ;",
      "Configurei Docker para subir o banco de dados e rabbitmq;",
      "Apliquei persistência em PostgreSQL com Drizzle;",
      "Implementei Migrations no banco de dados;",
      "Implementei observabilidade com Grafana e Jaeger (logging e tracing);",
      "Automatizei o deploy na AWS Fagete via Pulumi.",
    ]
  },
  {
    title: "Dumble: Sistema Educacional Com Inteligência Artificial",
    subtitle: "FATEC | Projeto Integrador",
    date: "Fev 2025 - Dez 2025",
    imagePath: "/dumble.png",
    description: "Centraliza o ensino para fortalecer o vínculo professor-aluno, com questões focadas no material do professor. Com IA com acesso ao material do professor para sugestões de perguntas e responder duvidas.\n🎖️ Projeto publicado no Congresso Nacional CONAIDUC.",
    tags: ["IA", "Node.JS", "React.JS", "PostgreSQL", "RAG", "JWT", "Heroku", "Git", "tailwind-css", "shadcn-ui"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares",
    deployUrl: "https://dumble.onrender.com/",
    topics: [
      "Desenvolvi a parte da IA com RAG, onde os professores anexavam arquivos e o conteudo deles eram disponibilizados para a IA;",
      "Construi os prompts rigorosos e estruturados de IA, para o chat-bot e a sugestão de perguntas;",
      "Desenvolvi o front-end de maneira responsiva;",
      "Implementei autenticação de usuários via tokens JWT;",
      "Gerenciei o banco de dados SQL;",
      "Administrei e realizei o deploy (hospedagem).",
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
      "Desenvolvemos a IA, modelo, treinando através de um dataset real de imagens de raio-x de torax;",
      "Fizemos o treinamento da CNN de maneira supervisionada;",
      "Analisamos o resultados e conseguimos obter 90% de acerto quando o paciente tinha a doença;",
      "Implementei autenticação de usuários via tokens JWT;",
      "Aplicamos o conceito de separar e treinamento, validação, teste;",
      "Desenvolvi o nosso site para apresentar nosso projeto, e importei o modelo para testes.",
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
      "Versionei o código no Github;",
      "Configurei o Docker para empacotar o site junto com o servidor Nginx;",
      "Publiquei a imagem no Docker Hub;",
      "Implementei CI, com Github Actions, para verificar o código a cada push, inspecionando todo o HTML e CSS;",
      "Configurei o Kubernetes na Azure (AKS) para rodar com 2 pods;",
      "Hospedei os site com docker utilizano Kubernetes na Azure.",
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
      "Desenvolvi o Front-end, que abordam sobre o Docker;",
      "Implementei Integração Continua (CI) com Github Actions;",
      "Configurei o Docker para build e Docker compose para desenvolvimento;",
      "Automatizei para a cada push ou pull request, seja executado o projeto e construido para ser testado de forma consistente;",
      "Hospedei o site através do Github Pages.",
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
      "Treinamos um modelo através de um dataset supervisioado;",
      "Utilizamos algoritmos de Árvore de Decisão;",
      "Passamos por todas as etapas para construir um modelo, treinamento, validações, testes, avaliação.",
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
      "Desenvolvemos um algoritmo que utiliza o conceito de método de busca cega (largura);",
      "Desenvolvemos uma lógica para gerar labirintos aleatórios que são possíveis de resolver;",
      "Implementamos uma visualização do labirinto sendo descoberto;",
      "Observamos em prática como funciona navegação da busca em largura.",
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
      "Criamos toda a ideia do projeto, como funcionaria;",
      "Fizemos vários diagramas (casos de uso, dicionário de dados, de classes, de atividades);",
      "Construímos protótipos;",
      "Criamos o banco de dados em SQL, com todas as tabelas e relacionamentos;",
      "Fizemos a importação dos dados que estavam em uma planilha do excel.",
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
      "Ministrei para os alunos sobre a plataforma;",
      "Criamos um robô juntos, explicando sobre o código, mostramos exemplos;",
      "Expliquei na prática como desenvolver nessa ferramenta;",
      "Criamos o banco de dados em SQL, com todas as tabelas e relacionamentos;",
      "Organizamos no final um campeonato entre os alunos disputando os melhores robôs desenvolvidos por eles.",
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
      "Integrei o sistema com 3 diferentes plataformas Xbox, Steam e Playstation, através de apis e bibliotecas, trabalhando com paginação;",
      "Desenvolvi o front-end onde exibia as informações dos perfis das 3 plataformas;",
      "Utilizei autenticação via tokens JWT;",
      "Gerenciei o banco de dados no mongoDB, noSQL;",
      "Trabalhei de forma full-stack.",
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
      "Fiz o código da lógica da cancela, com botões para simular quando o trem estiver passando;",
      "Montei o projeto fisico, com leds, sensores, e motores;",
      "Conectei com bluetooth para controlar a cancela pelo celular.",
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
      "Fiz a interface shadcn-ui;",
      "Desenvolvi a logica para fazer a transcição do vídeo;",
      "Construi o prompt e configurei a IA, para respeitar a estrutura;",
      "Forneci a transcrição do video para a IA, para gerar os títulos e descrições com foco em performance.",
    ],
  },
  {
    title: "Lista de Compras",
    subtitle: "Projeto de Angular da Alura",
    date: "Jan de 2024 - Jan de 2024",
    imagePath: "/ListaCompras.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/ListaCompras",
    description: "Angular: ciclo de vida. Um projeto com CRUD completo de lista de compras.",
    tags: ["Angular", "Front-end"],
    topics: [
      "Desenvolvi o front-end com Angular;",
      "Armazenei a lista de compras no local-storage;",
      "Fiz a logica para gerenciar as compras.",
    ],
  },
  {
    title: "Memoteca",
    subtitle: "Projeto de Angular da Alura",
    date: "Jan de 2024 - Jan de 2024",
    imagePath: "/memoteca.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/memoteca",
    description: "Projeto angular para aplicar os conceitos e desenvolver CRUD em Angular 14. Um projeto com CRUD completo de pensamentos, citações ou músicas.",
    tags: ["Angular", "Front-end"],
    topics: [
      "Desenvolvi o front-end com Angular;",
      "Armazenei os dados no local-storage;",
      "Fiz a logica para gerenciar os pensamentos, citações, música.",
    ],
  },
  {
    title: "AluraBooks",
    subtitle: "Projeto de Angular da Alura",
    date: "Jan de 2024 - Jan de 2024",
    imagePath: "/AluraBooks.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/alurabooks",
    description: "Angular: formulários orientados a templates. Um projeto com para preenchimento de formulário com restrições e diretivas, utiliznado a API para trazer dados do endereço com o CEP.",
    tags: ["Angular", "Front-end"],
    topics: [
      "Desenvolvi o front-end com Angular;",
      "Desenvolvi preenchimento do formulário com restrições;",
      "Implementei API para preeencher dados automaticamente com CEP.",
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
      "Desenvolvi o front-end com React.JS;",
      "Utilizei classes css através do tailwindcss;",
      "Desenvolvi funcionalidade de criar uma nota apartir da fala, ou digitando.",
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
      "Desenvolvi o front-end com React.JS;",
      "Armazenei os dados dos Artigos em localstorage;",
      "Fiz a tela principal para criar um artigo de forma estruturada, com titulo, subtitulo, imagem de capa, conteúdo.",
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
      "Desenvolvi o back-end com Node.JS;",
      "Gerenciei o banco de dados SQL;",
      "Construi as queries SQLS do backend.",
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
      "Desenvolvi através do mockapi a API;",
      "Estruturei todos os dados que os personagens vão ter;",
      "Construi api para visualizar todos os personagens e para filtrar;",
      "Fiz o front-end com flutter para consumir essa API.",
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
      "Desenvolvi la lógica dos alvos gerando aleatoriamente com javascript;",
      "Fiz a lógica do conômetro para o usuario escolher quanto tempo quer jogar;",
      "Desenvolvi a lógica de reiniciar os pontos no final para começar denovo.",
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
      "Desenvolvi a lógica do jogo da forca, indentificando quais letras a palavra possue;",
      "Construi a parte visual no terminal mesmo;",
      "Desenvolvi a lógica de desenhar o boneco a cada erro.",
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
      "Gerenciei o banco de dados e as consultas SQLs;",
      "Construi a logica do backend com PHP;",
      "Construi a área de admin, com o kanban dos pedidos, arrastandos para cada etapa (análise, em produção, em entrega).",
    ],
  },
  {
    title: "Janela Automática",
    subtitle: "Projeto da Faculdade",
    date: "Set de 2025 - Dez de 2025",
    imagePath: "/janela.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/JanelaAutofamatica",
    description: "Projeto que construimos uma janela automática com esp-32, motores e sensores. Com sensores de chuva, temperatura, claridade, definimos quando a janela fecha e abre. Utilizando o protocolo MQQT para ter controle em um aplicativo externo, e visualizar gráficos dos dados capturados.",
    tags: ["Arduino", "ESP-32", "MQTT", "Python"],
    topics: [
      "Fiz o código da janela, coletando os dados dos sensores e abrindo e fechando a janela;",
      "Desenvolvi a janela em 3 partes, vidro, persiana e veneziana, as 3 partes se fecham ou abrem de maneiras diferentes e momentos diferentes;",
      "Desenvolvi a exportação dos dados com MQTT para exibir em um aplicativo dados captados pelos sensores em forma de gráfco.",
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
      "Trabalhamos em Equipe para resolver os exercícios;",
      "Desenvolvi boas lógicas de programação em C para resolver os problemas;",
      "Analisei os enunciados e capturei as informações principais para desenvolver o primeiro esboço.",
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
