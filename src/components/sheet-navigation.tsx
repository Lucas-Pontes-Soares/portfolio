import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Clipboard, FlaskConical, GraduationCap, Notebook, Phone, User } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toogle";
import { LanguageTootgle } from "./language-toogle";
import { Button } from "./ui/button";

interface SheetNavigationProps {
  actuallyPage: "about-me" | "experiences" | "projects" | "academic-life" | "contact";
}

export function SheetNavigation({ actuallyPage }: SheetNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="min-[1322px]:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>LucasPS . DEV</SheetTitle>
          <SheetDescription>
            Navegação
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-2 px-6">
          {actuallyPage === "about-me" ? (
            <Link to="/about-me" className="flex items-center gap-2 border-2 border-lime-500 text-lime-500 p-2 font-semibold rounded-xl" onClick={() => setIsOpen(false)}>
              <User className="h-5 w-5 text-lime-500" />
              Sobre Mim
            </Link>
          ) : (
            <Link to="/about-me" className="flex items-center gap-2 border-2 p-2 border-transparent" onClick={() => setIsOpen(false)}>
              <User className="h-5 w-5" />
              Sobre Mim
            </Link>
          )}

          {actuallyPage === "experiences" ? (
            <Link to="/experiences" className="flex items-center gap-2 border-2 border-lime-500 text-lime-500 p-2 font-semibold rounded-xl" onClick={() => setIsOpen(false)}>
              <FlaskConical className="h-5 w-5 text-lime-500" />
              Experiências
            </Link>
          ) : (
            <Link to="/experiences" className="flex items-center gap-2 border-2 p-2 border-transparent" onClick={() => setIsOpen(false)}>
              <FlaskConical className="h-5 w-5" />
              Experiências
            </Link>
          )}

          {actuallyPage === "projects" ? (
            <Link to="/projects" className="flex items-center gap-2 border-2 border-lime-500 text-lime-500 p-2 font-semibold rounded-xl" onClick={() => setIsOpen(false)}>
              <Notebook className="h-5 w-5 text-lime-500" />
              Projetos
            </Link>
          ) : (
            <Link to="/projects" className="flex items-center gap-2 border-2 p-2 border-transparent" onClick={() => setIsOpen(false)}>
              <Notebook className="h-5 w-5" />
              Projetos
            </Link>
          )}

          {actuallyPage === "academic-life" ? (
            <Link to="/academic-life" className="flex items-center gap-2 border-2 border-lime-500 text-lime-500 p-2 font-semibold rounded-xl" onClick={() => setIsOpen(false)}>
              <GraduationCap className="h-5 w-5 text-lime-500" />
              Vida Acadêmica
            </Link>
          ) : (
            <Link to="/academic-life" className="flex items-center gap-2 border-2 p-2 border-transparent" onClick={() => setIsOpen(false)}>
              <GraduationCap className="h-5 w-5" />
              Vida Acadêmica
            </Link>
          )}

          {actuallyPage === "contact" ? (
            <Link to="/contact" className="flex items-center gap-2 border-2 border-lime-500 text-lime-500 p-2 font-semibold rounded-xl" onClick={() => setIsOpen(false)}>
              <Phone className="h-5 w-5 text-lime-500" />
              Contato
            </Link>
          ) : (
            <Link to="/contact" className="flex items-center gap-2 border-2 p-2 border-transparent" onClick={() => setIsOpen(false)}>
              <Phone className="h-5 w-5" />
              Contato
            </Link>
          )}
        </nav>
        <div className="flex flex-col gap-4 px-6">
          <div className="flex gap-4">
            <LanguageTootgle />
            <ModeToggle />
          </div>
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
      </SheetContent>
    </Sheet>
  );
}