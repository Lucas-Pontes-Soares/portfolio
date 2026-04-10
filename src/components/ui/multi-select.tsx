"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type MultiSelectProps = {
    options: string[];
    value: string[];
    onChange: (value: string[]) => void;
    className?: string;
    placeholder?: string;
};

export function MultiSelect({
    options,
    value,
    onChange,
    className,
    placeholder = "Selecione as Tecnologias ou Tags",
}: MultiSelectProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (option: string) => {
        if (value.includes(option)) {
            onChange(value.filter((item) => item !== option));
        } else {
            onChange([...value, option]);
        }
    };

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className={cn("w-full justify-between", className)}
                >
                    <div className="flex gap-2 flex-wrap">
                        {value.length > 0 ? (
                            value.map((item) => (
                                <Badge key={item} className="group">
                                    {item}
                                </Badge>
                            ))
                        ) : (
                            <span className="text-muted-foreground">{placeholder}</span>
                        )}
                    </div>
                    <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] h-64">
                {options.map((option) => (
                    <DropdownMenuItem
                        key={option}
                        onSelect={() => handleToggle(option)}
                        className={cn({ "bg-accent": value.includes(option) })}
                    >
                        {option}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
