import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {

  return (
    <div>
      <Navigation actuallyPage="contact"/>

      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-6xl mx-auto p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold">Oi! Vamos construir algo juntos?</h2>
              <p className="text-muted-foreground pt-4 w-full">
                Sinta-se à vontade para entrar em contato através das minhas redes.
              </p>
            </div>

            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Contatos</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                
                <a href="https://www.linkedin.com/in/lucas-pontes-soares/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-accent transition-colors">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-4 font-medium truncate text-blue-500">lucas-pontes-soares</span>
                </a>

                <a href="https://github.com/Lucas-Pontes-Soares" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-accent transition-colors">
                  <div className="bg-violet-500 p-2 rounded-lg">
                    <Github className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-4 font-medium truncate text-blue-500">Lucas-Pontes-Soares</span>
                </a>

                <a href="https://wa.me/5514982197061?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-accent transition-colors">
                  <div className="bg-green-600 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-4 font-medium truncate text-blue-500">+55 14 98219-7061</span>
                </a>

                <a href="mailto:lucasps.dev@outlook.com" className="flex items-center p-3 border rounded-lg hover:bg-accent transition-colors">
                  <div className="bg-cyan-600 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-4 font-medium truncate text-blue-500">lucasps.dev@outlook.com</span>
                </a>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}