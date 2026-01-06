import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Github, Monitor, TableOfContents } from "lucide-react";

export default function Projects() {

  return (
    <div>
      <Navigation actuallyPage="projects"/>

      <div className="mt-32 p-6 flex flex-wrap gap-6 justify-center">
        <Card className="w-120">
          <CardHeader>
            <div className="rounded-md overflow-hidden">
              <img src="/dumble.png" className="w-full h-60 object-cover"></img>
            </div>
            <CardTitle>Dumble: Sistema Educacional Com Inteligência Artificial</CardTitle>
            <CardDescription className="text-muted-foreground">FATEC | Projeto Integrador</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Uma plataforma web interativa que centraliza o ensino para fortalecer o vínculo professor-aluno, com questões focadas no material do professor. Com IA com acesso ao material do professor para sugestões de perguntas e responder duvidas.</p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-4">
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">IA</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Node.js</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">React.js</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">PostgreSQL (SQL)</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">RAG</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">JWT</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Heroku</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Git</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">tailwind-css</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">shadcn-ui</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="cursor-pointer">
                <Monitor />
                Sistema
              </Button>
              <Button variant="outline" className="cursor-pointer">
                <Github />
                Github
              </Button>
              <Button className="cursor-pointer">
                <TableOfContents />
                Minhas funções
              </Button>
            </div>
          </CardFooter>
        </Card>
        
        <Card className="w-120">
          <CardHeader>
            <div className="rounded-md overflow-hidden">
              <img src="/dumble.png" className="w-full h-60 object-cover"></img>
            </div>
            <CardTitle>Dumble: Sistema Educacional Com Inteligência Artificial</CardTitle>
            <CardDescription className="text-muted-foreground">FATEC | Projeto Integrador</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Uma plataforma web interativa que centraliza o ensino para fortalecer o vínculo professor-aluno, com questões focadas no material do professor. Com IA com acesso ao material do professor para sugestões de perguntas e responder duvidas</p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">IA</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Node.js</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">React.js</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">PostgreSQL (SQL)</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">RAG</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">JWT</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Heroku</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Git</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">tailwind-css</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">shadcn-ui</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline">
                <Monitor />
                Sistema
              </Button>
              <Button variant="outline">
                <Github />
                Github
              </Button>
              <Button>
                <TableOfContents />
                Minhas funções
              </Button>
            </div>
          </CardFooter>
        </Card>

        <Card className="w-120">
          <CardHeader>
            <div className="rounded-md overflow-hidden">
              <img src="/dumble.png" className="w-full h-60 object-cover"></img>
            </div>
            <CardTitle>Dumble: Sistema Educacional Com Inteligência Artificial</CardTitle>
            <CardDescription className="text-muted-foreground">FATEC | Projeto Integrador</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Uma plataforma web interativa que centraliza o ensino para fortalecer o vínculo professor-aluno, com questões focadas no material do professor. Com IA com acesso ao material do professor para sugestões de perguntas e responder duvidas</p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">IA</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Node.js</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">React.js</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">PostgreSQL (SQL)</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">RAG</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">JWT</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Heroku</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Git</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">tailwind-css</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">shadcn-ui</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline">
                <Monitor />
                Sistema
              </Button>
              <Button variant="outline">
                <Github />
                Github
              </Button>
              <Button>
                <TableOfContents />
                Minhas funções
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
