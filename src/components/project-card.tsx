import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Calendar, ComputerIcon, Database, ExternalLink, Github, InfinityIcon, ListCheckIcon, Monitor, PhoneIncoming, ServerCog, Star, TestTube, UserCheck2, VectorSquare } from "lucide-react";
import { SkillBadge } from "./skill-badge";
import { FaAngular, FaBroadcastTower, FaBrain, FaChalkboardTeacher, FaClipboardList, FaCode, FaCompass, FaCss3Alt, FaDatabase, FaDocker, FaExchangeAlt, FaGithub, FaGitAlt, FaHtml5, FaJava, FaLightbulb, FaMicrochip, FaNodeJs, FaPaintBrush, FaPhp, FaPlay, FaPython, FaQuestionCircle, FaReact, FaRobot, FaRocket, FaRunning, FaSearchMinus, FaSitemap, FaSync, FaUsers, FaWrench, FaJs, FaAws, FaFire, FaUserShield, FaShieldAlt, FaLock, FaPencilAlt, FaNetworkWired, FaVial, FaVials, FaCubes, FaShapes, FaLeaf, FaBook, FaNewspaper, FaLaptopCode, FaListUl, FaRandom, FaExclamationTriangle, FaLayerGroup, FaGlobe, FaGem, FaObjectGroup, FaCloud, FaAmazon } from "react-icons/fa";
import { SiDrizzle, SiFlutter, SiGooglegemini, SiGrafana, SiGradle, SiHeroku, SiJaeger, SiJsonwebtokens, SiKubernetes, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiPostgresql, SiPrisma, SiPulumi, SiRabbitmq, SiSpringboot, SiApachemaven, SiSqlite, SiTailwindcss, SiTurso, SiTypescript, SiMui, SiVitest, SiClaude, SiRedis } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { type IconType } from "react-icons";
import { GiKnifeFork, GiPaintBucket, } from "react-icons/gi";

import projectsData from '../data/projects.json';
import { Button } from "./ui/button";

type Project = typeof projectsData.projects[0];

const iconMapping: { [key: string]: IconType } = {
  "DDD": FaLayerGroup,
  "Domain": FaGlobe,
  "Value Objects": FaGem,
  "Context": FaObjectGroup,
  "IA": FaRobot,
  "Node.js": FaNodeJs,
  "React.js": FaReact,
  "PostgreSQL": SiPostgresql,
  "RAG": FaQuestionCircle,
  "JWT": SiJsonwebtokens,
  "Heroku": SiHeroku,
  "Git": FaGitAlt,
  "Java": FaJava,
  "Spring Boot": SiSpringboot,
  "Maven": SiApachemaven,
  "Gradle": SiGradle,
  "JSP": FaCode,
  "tailwind-css": SiTailwindcss,
  "shadcn-ui": FaPaintBrush,
  "Python": FaPython,
  "CNN": FaBrain,
  "Aprendizado Supervisionado": FaUsers,
  "Docker": FaDocker,
  "DockerHub": FaDocker,
  "CI": FaSync,
  "CD": FaRocket,
  "GitHub": FaGithub,
  "GitHub Actions": FaPlay,
  "Azure": VscAzure,
  "Kubernetes": SiKubernetes,
  "build": FaWrench,
  "HTML": FaHtml5,
  "CSS": FaCss3Alt,
  "GitHub Pages": FaGithub,
  "Árvore de Decisão": FaSitemap,
  "Busca cega": FaSearchMinus,
  "Navegação": FaCompass,
  "Banco de Dados": FaDatabase,
  "SQL": FaDatabase,
  "Análise de Requisitos": FaClipboardList,
  "Robocode": FaRobot,
  "Minicurso": FaChalkboardTeacher,
  "MongoDB": SiMongodb,
  "API": FaExchangeAlt,
  "Arduino": FaMicrochip,
  "Agro": FaLeaf,
  "Revista": FaBook,
  "InterAgro": FaNewspaper,
  "WOKWI": FaLaptopCode,
  "C": FaCode,
  "Sstemas Embarcados": FaMicrochip,
  "Angular": FaAngular,
  "Front-end": FaReact,
  "Typescript": SiTypescript,
  "MYSQL": SiMysql,
  "Flutter": SiFlutter,
  "C++": FaCode,
  "PHP": FaPhp,
  "ESP32": FaMicrochip,
  "MQTT": FaBroadcastTower,
  "Lógica": FaLightbulb,
  "Maratona": FaRunning,
  "Javascript": FaJs,
  "AWS": FaAws,
  "RabbitMQ": SiRabbitmq,
  "Grafana": SiGrafana,
  "Pulimi": SiPulumi,
  "Drizzle": SiDrizzle,
  "Turso": SiTurso,
  "Firecrawl": FaFire,
  "Gemini": SiGooglegemini,
  "Embeddings": VectorSquare,
  "Chunks": GiKnifeFork,
  "Nest.js": SiNestjs,
  "Prisma": SiPrisma,
  "SQLite": SiSqlite,
  "Jaeger": SiJaeger,
  "Roles": FaUserShield,
  "RBAC": FaShieldAlt,
  "ABAC": FaLock,
  "Next.js": SiNextdotjs,
  "MCP": FaNetworkWired,
  "Agentes": FaRobot,
  "Pencil": FaPencilAlt,
  "Base-ui": SiMui,
  "Vitest": SiVitest,
  "Tests": FaVial,
  "Unit Tests": FaVial,
  "Integration Tests": FaVials,
  "E2E Tests": Monitor,
  "SOLID": FaCubes,
  "POO": FaShapes,
  "Queues": FaListUl,
  "Exchanges": FaRandom,
  "DLQ": FaExclamationTriangle,
  "Claude Code": SiClaude,
  "TDD": TestTube,
  "Cloud": FaCloud,
  "Amazon": FaAmazon,
  "EC2": ComputerIcon,
  "Lambda": ServerCog,
  "IAM": UserCheck2,
  "RDS": Database,
  "DynamoDB": Database,
  "S3": GiPaintBucket,
  "SQS": ListCheckIcon,
  "SNS": PhoneIncoming,
  "EKS": SiKubernetes,
  "DevOps": InfinityIcon,
  "Redis": SiRedis,
};

const getIconForSkill = (skill: string): IconType | undefined => {
  return iconMapping[skill];
};

// Mapeamento para converter o número do mês para as 3 letras em PT-BR
const MONTH_MAP_PT: Record<string, string> = {
  '01': 'Jan', '1': 'Jan', '02': 'Fev', '2': 'Fev', '03': 'Mar', '3': 'Mar',
  '04': 'Abr', '4': 'Abr', '05': 'Mai', '5': 'Mai', '06': 'Jun', '6': 'Jun',
  '07': 'Jul', '7': 'Jul', '08': 'Ago', '8': 'Ago', '09': 'Set', '9': 'Set',
  '10': 'Out', '11': 'Nov', '12': 'Dez'
};

function formatToPtPeriod(dateStr: string): string {
  if (!dateStr) return '';
  const [month, year] = dateStr.split('/');
  const monthAbbr = MONTH_MAP_PT[month.trim()];
  return monthAbbr ? `${monthAbbr} ${year}` : dateStr;
}

export function ProjectCard(project: Project) {
  const formattedStart = formatToPtPeriod(project.date.startAt);
  const formattedEnd = formatToPtPeriod(project.date.endAt);
  
  const tagsArray = project.tags
    .replace(/\.$/, '')
    .split(',')
    .map(tag => tag.trim())
    .filter(Boolean);

  return (
    <Card className="w-full lg:w-10/12 flex flex-col lg:flex-row items-stretch overflow-hidden border bg-card text-card-foreground transition-all">
      
    <div className="w-full lg:w-85 lg:min-w-85 flex flex-col gap-3 p-6">
      {project.isHighlighted && (
        <div 
          className="self-start flex items-center gap-1.5 bg-secondary border border-emerald-500/30 px-2 py-1.5 rounded-md shadow-md text-emerald-500" 
          title="Projeto em Destaque"
        >
          <Star className="w-3.5 h-3.5 fill-emerald-500" />
          <span className="text-xs font-medium tracking-wide select-none">Em Destaque</span>
        </div>
      )}

      <div className="w-full h-48 sm:h-60 bg-secondary border rounded-md overflow-hidden flex items-center justify-center p-2">
        <img 
          src={`${import.meta.env.BASE_URL}${project.media.image ? project.media.image : '/projects/images/no-image.png'}`} 
          className="w-full h-full object-contain" 
          alt={project.title}
        />
      </div>
    </div>

    <div className="flex-1 flex flex-col p-2">
      
      <CardHeader className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 space-y-0 pb-2">
        <CardTitle className="text-xl font-bold tracking-tight ">
          {project.title}
        </CardTitle>
        <CardDescription className="flex items-center gap-1.5 shrink-0 mt-0.5 font-normal">
          <Calendar className="w-3.5 h-3.5" />
          {formattedStart} — {formattedEnd}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col gap-4 pb-4">
        <p className="leading-relaxed font-normal">
          {project.description}
        </p>

        {project.topics.length > 0 && (
          <ul className="space-y-1.5  font-normal">
            {project.topics.map((topic, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-500 select-none mt-1 text-xs">•</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className="flex flex-col gap-4 pt-4">
        
        {tagsArray.length > 0 && (
          <div className="w-full flex flex-wrap gap-2">
            {tagsArray.map((tag) => (
              <SkillBadge key={tag} name={tag} icon={getIconForSkill(tag)} />
            ))}
          </div>
        )}

        {(project.urls.repository || project.urls.deploy || project.urls.article) && (
          <div className="w-full flex flex-col sm:flex-row flex-wrap gap-3 pt-1">
            
            {project.urls.repository && (
              <Button variant="outline" asChild className="cursor-pointer">
                <a
                  href={project.urls.repository} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="w-3.5 h-3.5 text-emerald-500" />
                  Repositório GitHub
                </a>
              </Button>
            )}

            {project.urls.deploy && (
              <Button variant="outline" asChild className="cursor-pointer">
                <a 
                  href={project.urls.deploy} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
                  Acessar Aplicação
                </a>
              </Button>
            )}

            {project.urls.article && (
              <Button variant="outline" asChild className="cursor-pointer">
                <a 
                  href={project.urls.article} 
                  target="_blank" 
                  rel="noopener noreferrer"  
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                  Artigo
                </a>
              </Button>
            )}
            
          </div>
        )}
      </CardFooter>
    </div>
  </Card>
  );
}
