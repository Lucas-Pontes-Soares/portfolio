import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BookOpen, Github, Monitor, TableOfContents, TestTube, VectorSquare } from "lucide-react";
import ReactPlayer from 'react-player'
import { SkillBadge } from "./skill-badge";
import { FaAngular, FaBroadcastTower, FaBrain, FaChalkboardTeacher, FaClipboardList, FaCode, FaCompass, FaCss3Alt, FaDatabase, FaDocker, FaExchangeAlt, FaGithub, FaGitAlt, FaHtml5, FaJava, FaLightbulb, FaMicrochip, FaNodeJs, FaPaintBrush, FaPhp, FaPlay, FaPython, FaQuestionCircle, FaReact, FaRobot, FaRocket, FaRunning, FaSearchMinus, FaSitemap, FaSync, FaUsers, FaWrench, FaJs, FaAws, FaFire, FaUserShield, FaShieldAlt, FaLock, FaPencilAlt, FaNetworkWired, FaVial, FaVials, FaCubes, FaShapes, FaLeaf, FaBook, FaNewspaper, FaLaptopCode, FaListUl, FaRandom, FaExclamationTriangle, FaLayerGroup, FaGlobe, FaGem, FaObjectGroup } from "react-icons/fa";
import { SiDrizzle, SiFlutter, SiGooglegemini, SiGrafana, SiGradle, SiHeroku, SiJaeger, SiJsonwebtokens, SiKubernetes, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiPostgresql, SiPrisma, SiPulumi, SiRabbitmq, SiSpringboot, SiApachemaven, SiSqlite, SiTailwindcss, SiTurso, SiTypescript, SiMui, SiVitest, SiClaude } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { type IconType } from "react-icons";
import { GiKnifeFork, } from "react-icons/gi";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  imagePath: string;
  description: string;
  tags: string[];
  topics: string[];
  repoUrl?: string;
  deployUrl?: string;
  videoUrl?: string;
  date?: string; 
  articleUrl?: string;
}

const iconMapping: { [key: string]: IconType } = {
  "DDD": FaLayerGroup,
  "Domain": FaGlobe,
  "Value Objects": FaGem,
  "Context": FaObjectGroup,
  "IA": FaRobot,
  "Node.JS": FaNodeJs,
  "React.JS": FaReact,
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
  "Github": FaGithub,
  "Github Actions": FaPlay,
  "Azure": VscAzure,
  "Kubernetes": SiKubernetes,
  "build": FaWrench,
  "HTML": FaHtml5,
  "CSS": FaCss3Alt,
  "Github Pages": FaGithub,
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
  "ESP-32": FaMicrochip,
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
  "Nest.JS": SiNestjs,
  "Prisma": SiPrisma,
  "SQLite": SiSqlite,
  "Jaeger": SiJaeger,
  "Roles": FaUserShield,
  "RBAC": FaShieldAlt,
  "ABAC": FaLock,
  "Next.JS": SiNextdotjs,
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
  "TDD": TestTube
};

const getIconForSkill = (skill: string): IconType | undefined => {
  return iconMapping[skill];
};


export function ProjectCard({
  title,
  subtitle,
  imagePath,
  description,
  tags,
  topics,
  repoUrl,
  deployUrl,
  videoUrl,
  date,
  articleUrl,
}: ProjectCardProps) {
  return (
    <Card className="w-120 max-w-full flex flex-col">
      <CardHeader>
        <div className="w-full h-60 bg-secondary rounded-md">
          <div className="rounded-md overflow-hidden">
          <img src={`${import.meta.env.BASE_URL}${imagePath}`} className="w-full h-60 object-contain" alt={title} />
          </div>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex justify-between items-start gap-4 text-muted-foreground">
            <span className="flex-1">{subtitle}</span>
            {date && <span className="whitespace-nowrap shrink-0">{date}</span>}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 max-h-64">
        <p className="whitespace-pre-line">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <SkillBadge key={tag} name={tag} icon={getIconForSkill(tag)} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2 border-t-2 w-full justify-center pt-4">
          {articleUrl && (
            <Button variant="outline" asChild className="cursor-pointer">
              <a href={articleUrl} target="_blank" rel="noopener noreferrer">
                <BookOpen className="mr-2 h-4 w-4" />
                Revista
              </a>
            </Button>
          )}
          {deployUrl && (
            <Button variant="outline" asChild className="cursor-pointer">
              <a href={deployUrl} target="_blank" rel="noopener noreferrer">
                <Monitor className="mr-2 h-4 w-4" />
                Sistema
              </a>
            </Button>
          )}
          {repoUrl && (
            <Button variant="outline" asChild className="cursor-pointer">
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Github
              </a>
            </Button>
          )}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="cursor-pointer">
                <TableOfContents className="mr-2 h-4 w-4" />
                Minhas funções
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="py-4">
                {videoUrl ? (
                  <div className="relative" style={{ paddingTop: '56.25%' }}>
                    <ReactPlayer 
                      className="absolute top-0 left-0"
                      src={videoUrl}
                      controls={true}
                      width='100%'
                      height='100%'
                    />
                  </div>
                ) : (
                  <div className="w-full h-60 bg-secondary rounded-md">
                    <img src={`${import.meta.env.BASE_URL}${imagePath}`} className="w-full h-60 object-contain" alt={title} />
                  </div>
                )}
                <h1 className="text-lg font-semibold mt-6 mb-2">Minhas Funções:</h1>
                <ul className="space-y-2">
                  {topics.map((func, index) => (
                    <li key={index} className="list-disc ml-6">
                      {func}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4 border-t-2 pt-4">
                  {tags.map((tag) => (
                    <SkillBadge key={tag} name={tag} icon={getIconForSkill(tag)} />
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardFooter>
    </Card>
  );
}
