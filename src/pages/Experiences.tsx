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

export default function Experiences() {

  return (
    <div>
      <Navigation actuallyPage="experiences"/>

      <div className="mt-32">
        <div className="flex flex-col items-center justify-center p-6">
          <Card className="w-full max-w-4xl">
            <CardHeader className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="/iriz_solues_em_t_i__logo.jpg" alt="IRIZ" />
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
                <li>Trabalhei como full-stack, proporcionando uma visão abrangente do desenvolvimento, em sistemas legados e novos produtos.</li>
                <li>Conversei diretamente com os clientes, analisei requisitos, alinhei ideias, problemas, soluções.</li>
                <li>Integrei com serviços de pagamento através de API e Webhook.</li>
                <li>Desenvolvi agentes de IA para um sistema gerar automaticamente relatórios de desempenho dos clientes.</li>
                <li>Implementei mecanismos de segurança, incluindo criptografia de senhas e autenticação de usuários via tokens JWT.</li>
                <li>Gerenciei o banco de dados SQL, e construi e otimizei queries SQL complexas para grandes informações em múltiplas tabelas,
  expondo através de uma API com paginação.</li>
                <li>Administrei e realizei o deploy (hospedagem) de sistemas em produção, utilizando protocolos como FTP, SFTP e ferramentas de
  gerenciamento de servidores.</li>
                <li>Documentei os sistemas e organizei nossos repositórios utilizando boas práticas de versionamento.</li>
              </ul>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Node.js</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">React.js</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">IA</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">JWT</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">PHP</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Javascript</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">MySQL (SQL)</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">API REST</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Stripe</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Git/Github</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">HTML</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">CSS</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
