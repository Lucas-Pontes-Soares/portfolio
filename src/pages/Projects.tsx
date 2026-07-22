import Navigation from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { Input } from "@/components/ui/input";
import { BrushCleaning, Search, Star, FolderGit2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import projectsData from '../data/projects.json';
import { FaAngular, FaAws, FaDocker, FaNodeJs, FaPython, FaReact, FaRobot } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SiFlutter, SiNestjs, SiPostgresql, SiRabbitmq, SiSpringboot } from "react-icons/si";

import { type IconType } from "react-icons";
import React from "react";
import { GiGlobe } from "react-icons/gi";

type Project = typeof projectsData.projects[0];

const TAGS_PRINCIPAIS = [
  "All",
  "Node.js",
  "React.js",
  "Python",
  "NestJS",
  "Flutter",
  "Angular",
  "IA",
  "AWS",
  "Azure",
  "PostgreSQL",
  "Docker",
  "RabbitMQ",
  "Spring Boot"
];

const iconMapping: { [key: string]: IconType } = {
  "All": GiGlobe,
  "Node.js": FaNodeJs,
  "React.js": FaReact,
  "Python": FaPython,
  "NestJS": SiNestjs,
  "Flutter": SiFlutter,
  "Angular": FaAngular,
  "IA": FaRobot,
  "AWS": FaAws,
  "Azure": VscAzure,
  "PostgreSQL": SiPostgresql,
  "Docker": FaDocker,
  "RabbitMQ": SiRabbitmq,
  "Spring Boot": SiSpringboot
};

const getIconForSkill = (skill: string): IconType | undefined => {
  return iconMapping[skill];
};

function parseDateToTimestamp(dateStr: string): number {
  if (!dateStr) return 0;
  const [month, year] = dateStr.split('/').map(Number);
  return new Date(year, month - 1, 1).getTime();
}

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [projects] = useState<Project[]>(projectsData.projects);
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedTag("All");
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());

    
    const matchesTag = selectedTag === "All" || 
      project.tags
        .toLowerCase()
        .split(',') 
        .map(tag => tag.trim())
        .includes(selectedTag.toLowerCase());

    return matchesSearch && matchesTag;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    return parseDateToTimestamp(b.date.endAt) - parseDateToTimestamp(a.date.endAt);
  });

  const highlightedProjects = sortedProjects.filter((project) => project.isHighlighted);
  const otherProjects = sortedProjects.filter((project) => !project.isHighlighted);

  return (
    <div>
      <Navigation actuallyPage="projects" />

      <div className="mt-32 p-6 flex flex-col items-center w-full">
        
        <div className="flex flex-col gap-5 max-w-4xl w-full mx-auto mb-12">
          
          <div className="flex gap-2 w-full">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5" />
              <Input
                placeholder="Filtre pelo titulo do projeto..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 bg-secondary border focus-visible:ring-emerald-500"
              />
            </div>
            <Button onClick={handleClearFilters} variant="outline" size="icon" title="Limpar filtros">
              <BrushCleaning className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Filtrar por tecnologia:</span>
            <div className="flex flex-wrap gap-2">
              {TAGS_PRINCIPAIS.map((tag) => {
                const isActive = selectedTag === tag;
                return (
                  <Button 
                    variant="outline" 
                    asChild 
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`
                      ${isActive 
                        ? "border-emerald-500 text-emerald-400 hover:text-emerald-400" 
                        : "cursor-pointer"
                      }`}
                  >
                    <div>
                      <span className={isActive ? "text-emerald-400 text-2xl" : "text-zinc-500 group-hover:text-zinc-300 text-2xl"}>
                        {React.createElement(getIconForSkill(tag)!)}
                      </span>
                      
                      <span>{tag === "All" || tag === "Todos" ? "Todos" : tag}</span>
                    </div>
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-2 text-center">
            <p className="text-muted-foreground text-sm">
              {`Mostrando ${sortedProjects.length} de ${projects.length} projetos`}
            </p>
            <p className="mt-2 text-muted-foreground text-sm">
              Ordenado por: Mais recentes primeiro
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-12 items-center">
          
          {highlightedProjects.length > 0 && (
            <section className="w-full flex flex-col items-center gap-6">
              <div className="w-full lg:w-10/12 flex items-center gap-2 border-b border-secondary pb-2">
                <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                <h2 className="text-base font-semibold tracking-wide uppercase">
                  Projetos em Destaque:
                </h2>
              </div>

              <div className="w-full flex flex-col items-center gap-6">
                {highlightedProjects.map((project, index) => (
                  <ProjectCard key={`high-${index}`} {...project} />
                ))}
              </div>
            </section>
          )}

          {otherProjects.length > 0 && (
            <section className="w-full flex flex-col items-center gap-6">
              <div className="w-full lg:w-10/12 flex items-center gap-2 border-b border-secondary pb-2">
                <FolderGit2 className="w-4 h-4 text-zinc-500" />
                <h2 className="text-base font-semibold tracking-wide uppercase">
                  Outros Projetos:
                </h2>
              </div>

              <div className="w-full flex flex-col items-center gap-6">
                {otherProjects.map((project, index) => (
                  <ProjectCard key={`other-${index}`} {...project} />
                ))}
              </div>
            </section>
          )}

          {sortedProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-500">Nenhum projeto encontrado com os filtros atuais.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}