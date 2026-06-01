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
              <CardAction>
                <p>Mar 2024 - Out 2025 (Remoto)</p>
                <p className="text-right">1 ano e 8 meses</p>
              </CardAction>
            </CardHeader>
            <CardContent>
              <ul className="list-disc p-4">
                <li>Trabalhei como <strong className="text-green-500">full-stack</strong>, proporcionando uma visão abrangente do desenvolvimento, em sistemas legados e novos produtos;</li>
                <li><strong className="text-green-500">Conversei diretamente com os clientes</strong>, analisei requisitos, alinhei ideias, problemas, soluções;</li>
                <li>Integrei com <strong className="text-green-500">serviços de pagamento</strong> através de <strong className="text-green-500">API</strong> e <strong className="text-green-500">Webhook da Stripe</strong>;</li>
                <li>Desenvolvi <strong className="text-green-500">agentes de IA</strong> para um sistema gerar automaticamente <strong className="text-green-500">relatórios de desempenho</strong> dos clientes;</li>
                <li>Implementei mecanismos de segurança, incluindo <strong className="text-green-500">criptografia</strong> de senhas e autenticação de usuários via <strong className="text-green-500">tokens JWT</strong>;</li>
                <li>Gerenciei o banco de dados <strong className="text-green-500">SQL</strong>, e construi e otimizei <strong className="text-green-500">queries SQL complexas</strong> para grandes informações em múltiplas tabelas,
                expondo através de uma <strong className="text-green-500">API com paginação</strong>;</li>
                <li>Administrei e realizei o <strong className="text-green-500">deploy (hospedagem)</strong> de sistemas em produção, utilizando protocolos como <strong className="text-green-500">FTP, SFTP</strong> e ferramentas de
                gerenciamento de servidores;</li>
                <li>Desenvolvi um <strong className="text-green-500">chatbot com IA do Gemini</strong>, con <strong className="text-green-500">streaming das respostas</strong> e contexto através de <strong className="text-green-500">RAG</strong>; </li>
                <li>Trabalhei com a Metodologia Ágil: <strong className="text-green-500">Kanban</strong> no <strong className="text-green-500">Trello</strong>, e com resumos diários sobre o que as tarefas fizemos no período;</li>
                <li>Implementei <strong className="text-green-500">permissões RBAC e ABAC</strong> para diferentes cargos e hierarquias;</li>
                <li>Desenvolvi um sistema para emissão de <strong className="text-green-500">Notas Fiscais eletrónicas (NFe)</strong> emitindo direto no <strong className="text-green-500">sistema da Prefeitura de São Paulo</strong>.</li>
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
