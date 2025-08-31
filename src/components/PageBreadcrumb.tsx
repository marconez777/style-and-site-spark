import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbItem[];
}

const PageBreadcrumb = ({ items }: PageBreadcrumbProps) => {
  return (
    <div className="bg-gray-800 border-b-2 border-primary py-6">
      <div className="container mx-auto px-4">
        <nav className="flex items-center space-x-3 text-base">
          <Link 
            to="/" 
            className="flex items-center text-white bg-primary/20 px-3 py-2 rounded hover:bg-primary/30 transition-colors"
          >
            <Home size={18} className="mr-2" />
            Início
          </Link>
          
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <ChevronRight size={18} className="text-primary" />
              {item.href ? (
                <Link 
                  to={item.href} 
                  className="text-gray-300 bg-gray-700 px-3 py-2 rounded hover:text-primary hover:bg-gray-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white font-semibold bg-primary px-3 py-2 rounded">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default PageBreadcrumb;