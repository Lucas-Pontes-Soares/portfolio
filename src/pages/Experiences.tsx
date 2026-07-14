import { SkillBadge } from "@/components/skill-badge";
import Navigation from "@/components/navigation";
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
import { FaCss3Alt, FaDatabase, FaExchangeAlt, FaGitAlt, FaHtml5, FaJs, FaNodeJs, FaPhp, FaReact, FaRobot, FaStripe, FaWordpress, FaShieldAlt, FaLock, FaFileInvoiceDollar } from "react-icons/fa";
import { SiJsonwebtokens, SiSwagger } from "react-icons/si";
import { Kanban } from "lucide-react";

export default function Experiences() {

  return (
    <div>
      <Navigation actuallyPage="experiences"/>

      <div className="mt-32 p-6">
        <div className="flex flex-col items-center justify-center">
          <Card className="w-full max-w-4xl">
            <CardHeader className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src={`${import.meta.env.BASE_URL}iriz_solues_em_t_i__logo.jpg`} alt="IRIZ" />
                </Avatar>
                <div className="ml-4">
                  <CardTitle>IRIZ Soluções em T.I</CardTitle>
                  <CardDescription>Estágio em Programação</CardDescription>
                </div>
              </div>
              <CardAction className="text-zinc-400">
                <p>Mar 2024 - Out 2025 (Remoto)</p>
                <p className="text-right">1 ano e 8 meses</p>
              </CardAction>
            </CardHeader>
            <CardContent>
              <ul className="list-disc p-4">
                <li>Desenvolvi um emissor de <strong className="text-green-500">NF-e</strong> integrado ao sistema da Prefeitura de SP usando <strong className="text-green-500">PHP puro</strong>, o que <strong className="text-green-500">reduziu drasticamente o tempo de emissão</strong> e faturamento das empresas;</li>
                <li>Otimizei queries <strong className="text-green-500">SQL</strong> complexas e criei paginação em <strong className="text-green-500">APIs REST com PHP</strong> com autenticação <strong className="text-green-500">JWT</strong>, reduzindo o carregamento de relatórios pesados de <strong className="text-green-500">8 minutos para menos de 1 segundo</strong>;</li>
                <li>Construí um sistema de <strong className="text-green-500">relatórios automatizados</strong> com <strong className="text-green-500">Node.js, React</strong> e <strong className="text-green-500">Gemini API com RAG</strong>, eliminando a escrita manual ao gerar PDFs personalizados com gráficos e imagens;</li>
                <li>Criei um <strong className="text-green-500">chatbot</strong> com <strong className="text-green-500">Node.js e React</strong> integrado à API do <strong className="text-green-500">Gemini</strong> usando <strong className="text-green-500">RAG e streaming de respostas</strong> em tempo real para tirar dúvidas dos usuários sobre os relatórios;</li>
                <li>Implementei assinaturas recorrentes via <strong className="text-green-500">Stripe (APIs e Webhooks)</strong> e pagamentos automáticos por <strong className="text-green-500">PIX com o Pagar.me</strong>, eliminando a necessidade de conciliação financeira manual;</li>
                <li>Refatorei a segurança de produtos novos e legados com controle de acesso <strong className="text-green-500">RBAC e ABAC</strong>, <strong className="text-green-500">criptografia de senhas</strong> e autenticação segura via <strong className="text-green-500">tokens</strong>;</li>
                <li>Alinhei ideias diretamente com clientes, traduzindo regras de negócios em soluções técnicas e documentando APIs via <strong className="text-green-500">Swagger</strong>;</li>
                <li>Administrei <strong className="text-green-500">deploys</strong> em produção usando <strong className="text-green-500">SFTP e SSH</strong>, assegurando estabilidade e <strong className="text-green-500">alta disponibilidade</strong> das aplicações;</li>
                <li>Atuei sob o framework <strong className="text-green-500">Kanban</strong>, participando de Dailies para remover impedimentos e otimizar as entregas.</li>
              </ul>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Node.js" icon={FaNodeJs} />
                <SkillBadge name="React.js" icon={FaReact} />
                <SkillBadge name="IA" icon={FaRobot} />
                <SkillBadge name="JWT" icon={SiJsonwebtokens} />
                <SkillBadge name="PHP" icon={FaPhp} />
                <SkillBadge name="Javascript" icon={FaJs} />
                <SkillBadge name="MySQL (SQL)" icon={FaDatabase} />
                <SkillBadge name="API REST" icon={FaExchangeAlt} />
                <SkillBadge name="Stripe" icon={FaStripe} />
                <SkillBadge name="Git/Github" icon={FaGitAlt} />
                <SkillBadge name="HTML" icon={FaHtml5} />
                <SkillBadge name="CSS" icon={FaCss3Alt} />
                <SkillBadge name="WordPress" icon={FaWordpress} />
                <SkillBadge name="Kanban" icon={Kanban} />
                <SkillBadge name="Swagger" icon={SiSwagger} />
                <SkillBadge name="RBAC" icon={FaShieldAlt} />
                <SkillBadge name="ABAC" icon={FaLock} />
                <SkillBadge name="NF-e" icon={FaFileInvoiceDollar} />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
