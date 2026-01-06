import { Earth } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "./ui/theme-provider"
import { US, BR } from 'country-flag-icons/react/3x2'

export function LanguageTootgle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hover: cursor-pointer">
        <Button variant="outline" size="icon" className="dark:text-white dark:bg-black">
          <Earth className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
          <span className="sr-only">Trocar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <US />English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <BR />Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}