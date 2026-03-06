import Navigation from "@/components/navigation";
import { SkillBadge } from "@/components/skill-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BR, ES, US } from "country-flag-icons/react/3x2";
import { File, LucideFileJson } from "lucide-react";
import { FaAngular, FaArrowsAlt, FaBrain, FaCheck, FaClipboardList, FaCode, FaComment, FaCompass, FaCss3Alt, FaDatabase, FaDocker, FaExchangeAlt, FaGitAlt, FaHtml5, FaJava, FaJs, FaLightbulb, FaMicrochip, FaMobileAlt, FaNodeJs, FaPalette, FaPhp, FaPlay, FaProjectDiagram, FaPython, FaReact, FaSitemap, FaTasks, FaThLarge, FaUsers, FaWordpress, FaWrench } from "react-icons/fa";
import { GiFamilyTree } from 'react-icons/gi';
import { SiEspressif, SiGooglegemini, SiGrafana, SiMongodb, SiOpenai, SiPostgresql, SiRabbitmq, SiRedis, SiTypescript } from "react-icons/si";

export default function Home() {

  return (
    <div>
      <Navigation actuallyPage="about-me"/>
      <div className="mt-32 p-6">
        <div className="w-full max-w-6xl mx-auto p-6">
          <div className="mx-auto mb-12 w-auto text-center">
            <h1 className="text-green-500 font-extrabold text-4xl md:text-5xl lg:text-6xl">"Fazendo a ponte entre seu problema e minha solução"</h1>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-16">
            <div className="lg:w-1/3 flex items-center justify-center">
              <img src={`${import.meta.env.BASE_URL}eu.jpg`} className="rounded-md w-60 h-60 object-cover" />
            </div>

            <Card className="lg:w-2/3">
              <CardHeader>
                <CardTitle><strong className="text-green-500">Lucas Pontes Soares</strong></CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                
                <p>Olá, sou Desenvolvedor Full-Stack Júnior com quase <strong className="text-green-500">2 anos de experiência</strong> em <strong className="text-green-500">Node.JS</strong>, <strong className="text-green-500">React.JS</strong> e gerenciamento de bancos de dados <strong className="text-green-500">SQL</strong>. <br /> <br />
                Habilidade em automação de processos e desenvolvimento de <strong className="text-green-500">agentes de IA</strong>. <br /> <br />
                Com o objetivo em especializar em <strong className="text-green-500">Back-end</strong>, busco posição profissional focado em entregar soluções robustas, otimizar processos e contribuir ativamente para o sucesso da equipe.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 flex flex-col gap-8">
            <Card>
              <CardHeader>
                <CardTitle># Hard Skills</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-green-500 uppercase text-sm tracking-wider">Linguagens:</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="JavaScript" icon={FaJs} />
                    <SkillBadge name="Typescript" icon={SiTypescript} />
                    <SkillBadge name="PHP" icon={FaPhp} />
                    <SkillBadge name="Java" icon={FaJava} />
                    <SkillBadge name="C" icon={FaCode} />
                    <SkillBadge name="HTML" icon={FaHtml5} />
                    <SkillBadge name="CSS" icon={FaCss3Alt} />
                    <SkillBadge name="Python" icon={FaPython} />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-green-500 uppercase text-sm tracking-wider">Frameworks & Bibliotecas:</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Node.JS" icon={FaNodeJs} />
                    <SkillBadge name="React.JS" icon={FaReact} />
                    <SkillBadge name="Angular" icon={FaAngular} />
                    <SkillBadge name="Flutter" icon={FaMobileAlt} />
                    <SkillBadge name="WordPress" icon={FaWordpress} />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-green-500 uppercase text-sm tracking-wider">Banco de Dados:</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Postgresql" icon={SiPostgresql} />
                    <SkillBadge name="SQL" icon={FaDatabase} />
                    <SkillBadge name="MongoDB" icon={SiMongodb}/>
                    <SkillBadge name="Redis" icon={SiRedis} />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-green-500 uppercase text-sm tracking-wider">Mensageria & Filas:</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="RabbitMQ" icon={SiRabbitmq} />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-green-500 uppercase text-sm tracking-wider">DevOps & Monitoria:</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Docker" icon={FaDocker} />
                    <SkillBadge name="Git" icon={FaGitAlt} />
                    <SkillBadge name="Github Actions" icon={FaPlay} />
                    <SkillBadge name="Grafana" icon={SiGrafana} />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-green-500 uppercase text-sm tracking-wider">Automação:</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Arduino" icon={FaMicrochip} />
                    <SkillBadge name="ESP 32" icon={SiEspressif} />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-green-500 uppercase text-sm tracking-wider">Inteligência Artificial:</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Gemini" icon={SiGooglegemini} />
                    <SkillBadge name="RAG" icon={File} />
                    <SkillBadge name="Perceptron" icon={FaBrain} />
                    <SkillBadge name="OpenAI" icon={SiOpenai} />
                    <SkillBadge name="Árvores de Decisão" icon={FaSitemap} />
                    <SkillBadge name="CNN" icon={FaBrain} />
                    <SkillBadge name="Redes Neurais" icon={FaBrain} />
                    <SkillBadge name="Navegação e Busca" icon={FaCompass} />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-green-500 uppercase text-sm tracking-wider">Web & Integração:</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="API" icon={FaExchangeAlt} />
                    <SkillBadge name="JSON" icon={LucideFileJson} />
                    <SkillBadge name="API REST" icon={FaExchangeAlt} />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-green-500 uppercase text-sm tracking-wider">Conceitos:</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Estrutura de Dados" icon={GiFamilyTree} />
                    <SkillBadge name="Lógica de Programação" icon={FaLightbulb} />
                    <SkillBadge name="Boas Práticas" icon={FaCheck} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle># Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-3 text-green-500 uppercase text-sm tracking-wider">Práticas:</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Trabalho em Equipe" icon={FaUsers} />
                  <SkillBadge name="Organização" icon={FaClipboardList}  />
                  <SkillBadge name="Metodologias Ágeis" icon={FaProjectDiagram} />
                  <SkillBadge name="Kanban" icon={FaThLarge}  />
                  <SkillBadge name="Scrum" icon={FaTasks}  />
                  <SkillBadge name="Criatividade" icon={FaPalette} />
                  <SkillBadge name="Adaptação" icon={FaArrowsAlt} />
                  <SkillBadge name="Comunicação" icon={FaComment} />
                  <SkillBadge name="Resolução de Problemas" icon={FaWrench} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle># Idiomas</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <SkillBadge name="Portugues: Fluente" icon={BR} />
                  <SkillBadge name="Inglês: Intermediário/Avançado" icon={US} />
                  <SkillBadge name="Espanhol: Básico" icon={ES} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
