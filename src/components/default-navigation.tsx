import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toogle";
import { LanguageTootgle } from "./language-toogle";
import { Clipboard, FlaskConical, GraduationCap, Notebook, Phone, User } from "lucide-react";
import { Button } from "./ui/button";

interface NavigationProps {
  actuallyPage: "about-me" | "experiences" | "projects" | "academic-life" | "contact";
}

export function DefaultNavigation({ actuallyPage }: NavigationProps) {
    return (
        <div className="hidden min-[1322px]:flex items-center w-full px-4">
      
        <div className="flex w-1/5 justify-start">
            <h1 className="font-bold">LucasPS.DEV</h1>
        </div>

        <div className="flex w-3/5 justify-center items-center gap-12">
            {actuallyPage == "about-me" ? (
                <div className="relative flex items-center gap-2 font-semibold">
                    <User className="h-5 w-5 text-lime-500" />
                    <Link title="Sobre Mim" to="/about-me" className="text-lime-500">Sobre Mim</Link>
                    
                    <div className="absolute -bottom-7 left-0 w-full h-0.5 bg-lime-500 rounded-full"></div>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <Link title="Sobre Mim" to="/about-me">Sobre Mim</Link>
                </div>
            )}

            {actuallyPage == "experiences" ? (
                <div className="relative flex items-center gap-2 font-semibold">
                    <FlaskConical className="h-5 w-5 text-lime-500" />
                    <Link title="Sobre Mim" to="/experiences" className="text-lime-500">Experiências</Link>
                    
                    <div className="absolute -bottom-7 left-0 w-full h-0.5 bg-lime-500 rounded-full"></div>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <FlaskConical className="h-5 w-5" />
                    <Link title="Experiências" to="/experiences">Experiências</Link>
                </div>
            )}

            {actuallyPage == "projects" ? (
                <div className="relative flex items-center gap-2 font-semibold">
                    <Notebook className="h-5 w-5 text-lime-500" />
                    <Link title="Sobre Mim" to="/projects" className="text-lime-500">Projetos</Link>
                    
                    <div className="absolute -bottom-7 left-0 w-full h-0.5 bg-lime-500 rounded-full"></div>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <Notebook className="h-5 w-5" />
                    <Link title="Projetos" to="/projects">Projetos</Link>
                </div>
            )}

            {actuallyPage == "academic-life" ? (
                <div className="relative flex items-center gap-2 font-semibold">
                    <GraduationCap className="h-5 w-5 text-lime-500" />
                    <Link title="Sobre Mim" to="/academic-life" className="text-lime-500">Vida Acadêmica</Link>
                    
                    <div className="absolute -bottom-7 left-0 w-full h-0.5 bg-lime-500 rounded-full"></div>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    <Link title="Vida Acadêmica" to="/academic-life">Vida Acadêmica</Link>
                </div>
            )}

            {actuallyPage == "contact" ? (
                <div className="relative flex items-center gap-2 font-semibold">
                    <Phone className="h-5 w-5 text-lime-500" />
                    <Link title="Sobre Mim" to="/contact" className="text-lime-500">Contato</Link>
                    
                    <div className="absolute -bottom-7 left-0 w-full h-0.5 bg-lime-500 rounded-full"></div>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <Link title="Contato" to="/contact">Contato</Link>
                </div>
            )}
            </div>

        <div className="flex w-1/5 justify-end gap-2">
            <LanguageTootgle />
            <ModeToggle />
            <Button asChild className="hover:cursor-pointer">
                <a 
                    href="/Curriculo_Lucas_Pontes_Soares.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <Clipboard className="mr-2" />
                    Ver Currículo
                </a>
            </Button>
        </div>
    </div>

    )
}
