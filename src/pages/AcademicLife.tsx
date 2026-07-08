import Navigation from "@/components/navigation";
import { SkillBadge } from "@/components/skill-badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaBrain, FaCalculator, FaChartBar, FaClipboardList, FaCloud, FaCogs, FaDatabase, FaGlobe, FaInfinity, FaLightbulb, FaMicrochip, FaMobileAlt, FaNetworkWired, FaRobot, FaSearch, FaSitemap } from "react-icons/fa";
import { GiFamilyTree } from "react-icons/gi";

export default function AcademicLife() {

  return (
    <div>
      <Navigation actuallyPage="academic-life"/>

      <div className="mt-32">
        <div className="flex flex-col items-center justify-center p-6">
          <Card className="w-full max-w-4xl">
            <CardHeader className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src={`${import.meta.env.BASE_URL}fatec_ourinhos.jpg`} alt="FATEC" />
                </Avatar>
                <div className="ml-4">
                  <CardTitle>FATEC Ourinhos - Faculdade de Tecnologia de Ourinhos</CardTitle>
                  <CardDescription>Graduado em Análise e Desenvolvimento de Sistemas - AMS</CardDescription>
                </div>
              </div>
              <CardAction className="text-zinc-400">
                <p>Jan 2024 - Dez 2025</p>
                <p className="text-right">2 anos</p>
              </CardAction>
            </CardHeader>
            <CardContent>
              <ul className="list-disc p-4">
                <li>Aprendi sobre estrutura de dados com a linguagem C.</li>
                <li>Resolvi problemas de otimização com pesquisa operacional.</li>
                <li>Desenvolvi projetos com modelos de IA.</li>
                <li>Trabalhei em equipe e organizamos entre nós, com ajuda do github.</li>
                <li>Aprendi padrões de projetos com a linguagem Java.</li>
                <li>Ministrei curso de robocode durante a feira de tecnologia da faculdade.</li>
                <li>Trabalhei com cloud, azure, docker, kubernetes.</li>
                <li>Desenolvi o meu Projeto Integrador, que também tivemos a publicação aceita no Congresso Nacional CONAIDUC.</li>
                <li>Participei de maratonas de programação em C.</li>
              </ul>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Inteligência Artificial" icon={FaRobot} />
                <SkillBadge name="Pesquisa Operacional" icon={FaSearch} />
                <SkillBadge name="Estrutura de Dados" icon={GiFamilyTree} />
                <SkillBadge name="Aprendizado de Máquina" icon={FaBrain} />
                <SkillBadge name="Banco de Dados" icon={FaDatabase} />
                <SkillBadge name="DevOps" icon={FaInfinity} />
                <SkillBadge name="Engenharia de Software" icon={FaCogs} />
                <SkillBadge name="Cloud" icon={FaCloud} />
                <SkillBadge name="Matemática Discreta" icon={FaCalculator} />
                <SkillBadge name="Estatística Aplicada" icon={FaChartBar} />
                <SkillBadge name="Padrões de Projeto" icon={FaSitemap} />
                <SkillBadge name="Computação Distribuida" icon={FaNetworkWired} />
                <SkillBadge name="ESP-32" icon={FaMicrochip}/>
              </div>
            </CardFooter>          
          </Card>
        </div>

        <div className="flex flex-col items-center justify-center p-6">
          <Card className="w-full max-w-4xl">
            <CardHeader className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src={`${import.meta.env.BASE_URL}etec_ourinhos.jpg`} alt="ETEC" />
                </Avatar>
                <div className="ml-4">
                  <CardTitle>ETEC Ourinhos - Escola Técnica Estadual de São Paulo</CardTitle>
                  <CardDescription>Técnico em Desenvolvimento de Sistemas - AMS</CardDescription>
                </div>
              </div>
              <CardAction className="text-zinc-400">
                <p>Jan 2021 - Dez 2023</p>
                <p className="text-right">3 anos</p>
              </CardAction>
            </CardHeader>
            <CardContent>
              <ul className="list-disc p-4">
                <li>Construi sites com tecnologias basicas como html, css e javascript.</li>
                <li>Fiz algoritmos para aprender lógica de programação na linguagem C++.</li>
                <li>Desenvolvi meu TCC, que tive bastante contato com APIs.</li>
                <li>Participei ativamente de palestras que tinhamos com empresas parceiras do programa, como Coopersap, L4E.</li>
                <li>Participei do 5 Hackathon Acadêmico.</li>
                <li>Desenvolvi projetos de robótica.</li>
              </ul>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Programação Web" icon={FaGlobe} />
                <SkillBadge name="Programação Mobile" icon={FaMobileAlt} />
                <SkillBadge name="Algoritmos" icon={FaLightbulb} />
                <SkillBadge name="Banco de Dados" icon={FaDatabase} />
                <SkillBadge name="Análise de Requisitos" icon={FaClipboardList} />
                <SkillBadge name="Arduino" icon={FaMicrochip}/>
              </div>
            </CardFooter>          
          </Card>
        </div>
      </div>
    </div>
  )
}
