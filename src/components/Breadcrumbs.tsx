import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  current: string;
  parent?: string;
}

const Breadcrumbs = ({ current, parent }: BreadcrumbsProps) => {
  return (
    <div className="bg-black/60 backdrop-blur-sm border-b border-gray-800/50">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center space-x-2 text-sm">
          <Link 
            to="/" 
            className="flex items-center text-gray-400 hover:text-primary transition-colors duration-200"
          >
            <Home size={14} className="mr-1.5" />
            Início
          </Link>
          
          {parent && (
            <>
              <ChevronRight size={14} className="text-gray-600" />
              <span className="text-gray-500">{parent}</span>
            </>
          )}
          
          <ChevronRight size={14} className="text-gray-600" />
          <span className="text-white font-medium">{current}</span>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;