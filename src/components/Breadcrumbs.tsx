import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  current: string;
  parent?: string;
}

const Breadcrumbs = ({ current, parent }: BreadcrumbsProps) => {
  return (
    <div className="bg-gray-800 border-b border-gray-700 py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center space-x-3 text-sm">
          <Link 
            to="/" 
            className="flex items-center text-gray-300 hover:text-primary transition-colors"
          >
            <Home size={16} className="mr-2" />
            Início
          </Link>
          
          {parent && (
            <>
              <ChevronRight size={16} className="text-gray-500" />
              <span className="text-gray-400">{parent}</span>
            </>
          )}
          
          <ChevronRight size={16} className="text-gray-500" />
          <span className="text-white font-medium">{current}</span>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;