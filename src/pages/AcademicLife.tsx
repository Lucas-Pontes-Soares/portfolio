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
                  <AvatarImage src="/fatec_ourinhos.jpg" alt="FATEC" />
                </Avatar>
                <div className="ml-4">
                  <CardTitle>FATEC Ourinhos - Faculdade de Tecnologia de Ourinhos</CardTitle>
                  <CardDescription>Graduado em Análise e Desenvolvimento de Sistemas - AMS</CardDescription>
                </div>
              </div>
              <CardAction>
                <p>Jan 2024 - Dez 2025</p>
                <p className="text-right">2 anos</p>
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
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Inteligência Artificial</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Pesquisa Operacional</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Estrutura de Dados</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Aprendizado de Máquina</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Banco de Dados</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">DevOps</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Engenharia de Software</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Cloud</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Matemática Discreta</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Estatística Aplicada</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Padrões de Projeto</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Computação Distribuida</span>
              </div>
            </CardFooter>          </Card>
        </div>

        <div className="flex flex-col items-center justify-center p-6">
          <Card className="w-full max-w-4xl">
            <CardHeader className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="/etec_ourinhos.jpg" alt="ETEC" />
                </Avatar>
                <div className="ml-4">
                  <CardTitle>ETEC Ourinhos - Escola Técnica Estadual de São Paulo</CardTitle>
                  <CardDescription>Técnico em Desenvolvimento de Sistemas - AMS</CardDescription>
                </div>
              </div>
              <CardAction>
                <p>Jan 2021 - Dez 2023</p>
                <p className="text-right">3 anos</p>
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
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Programação Web</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Programação Mobile</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Algoritmos</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Banco de Dados</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Análise de Requisitos</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Arduino</span>
              </div>
            </CardFooter>          </Card>
        </div>
      </div>
    </div>
  )
}
