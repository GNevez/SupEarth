import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-primary-dark z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="text-3xl font-bold text-white flex items-center space-x-2 group"
          >
            <span className="bg-white text-primary-dark px-2 py-1 rounded transform group-hover:rotate-3 transition-transform">
              Sup
            </span>
            <span className="group-hover:text-green-300 transition-colors">Earth</span>
          </a>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden text-white hover:bg-primary-light"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#produtos" 
              className="text-white hover:text-green-300 transition-colors flex items-center space-x-1 group"
            >
              <span>Produtos</span>
              <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
            </a>
            <a 
              href="#por-que-organico" 
              className="text-white hover:text-green-300 transition-colors flex items-center space-x-1 group"
            >
              <span>Por que Orgânico?</span>
              <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
            </a>
            <a 
              href="#contato" 
              className="text-white hover:text-green-300 transition-colors flex items-center space-x-1 group"
            >
              <span>Contato</span>
              <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
            </a>
            <Button 
              className="bg-white text-primary-dark hover:bg-green-100 transition-colors"
            >
              Fazer Pedido
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 bg-primary-dark border-t border-primary-light",
            isOpen ? "block animate-fade-in" : "hidden"
          )}
        >
          <div className="flex flex-col space-y-4 px-4 py-6">
            <a 
              href="#produtos" 
              className="text-white hover:text-green-300 transition-colors flex items-center justify-between"
              onClick={() => setIsOpen(false)}
            >
              <span>Produtos</span>
              <ChevronRight className="h-4 w-4" />
            </a>
            <a 
              href="#por-que-organico" 
              className="text-white hover:text-green-300 transition-colors flex items-center justify-between"
              onClick={() => setIsOpen(false)}
            >
              <span>Por que Orgânico?</span>
              <ChevronRight className="h-4 w-4" />
            </a>
            <a 
              href="#contato" 
              className="text-white hover:text-green-300 transition-colors flex items-center justify-between"
              onClick={() => setIsOpen(false)}
            >
              <span>Contato</span>
              <ChevronRight className="h-4 w-4" />
            </a>
            <Button 
              className="bg-white text-primary-dark hover:bg-green-100 w-full"
              onClick={() => setIsOpen(false)}
            >
              Fazer Pedido
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};