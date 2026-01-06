import { DefaultNavigation } from "./default-navigation";
import { SheetNavigation } from "./sheet-navigation";

interface NavigationProps {
  actuallyPage: "about-me" | "experiences" | "projects" | "academic-life" | "contact";
}

export default function Navigation({ actuallyPage }: NavigationProps) {
    return (
        <div className="fixed top-0 z-50 flex h-20 items-center w-full border-b px-4 justify-between bg-background">
            {/* Mobile Navigation */}
            <div className="min-[1322px]:hidden flex w-full justify-between">
                <h1 className="font-bold py-2 px-4">LucasPS.DEV</h1>
                <SheetNavigation actuallyPage={actuallyPage} />
            </div>

            {/* Desktop Navigation */}
            <DefaultNavigation actuallyPage={actuallyPage} />
        </div>
    )
}