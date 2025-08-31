import { Link } from "react-router-dom";

interface SimpleBreadcrumbProps {
  currentPage: string;
}

const SimpleBreadcrumb = ({ currentPage }: SimpleBreadcrumbProps) => {
  return (
    <nav className="py-4 text-sm mt-20">
      <div className="container mx-auto px-4 flex items-center gap-1.5">
        <Link to="/" className="text-muted-foreground hover:text-primary">
          Início
        </Link>
        <span className="text-muted-foreground">/</span>
        <span className="text-white">{currentPage}</span>
      </div>
    </nav>
  );
};

export { SimpleBreadcrumb };