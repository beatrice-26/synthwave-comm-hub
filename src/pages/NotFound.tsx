import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface-dark to-surface-medium"></div>
      
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-surface-medium rounded-full flex items-center justify-center glow-purple animate-float">
            <AlertTriangle className="w-12 h-12 text-neon-purple" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-orbitron font-black mb-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl font-orbitron font-bold text-foreground mb-4">
          SECTOR NOT FOUND
        </h2>
        <p className="text-muted-foreground font-rajdhani text-lg mb-8 leading-relaxed">
          The requested path <span className="text-neon-cyan font-mono">{location.pathname}</span> does not exist in our system matrix.
        </p>

        {/* Action Button */}
        <Link to="/" className="btn-neon px-8 py-4 inline-flex items-center space-x-3 font-rajdhani font-semibold text-lg">
          <Home className="w-5 h-5" />
          <span>RETURN TO CONTROL CENTER</span>
        </Link>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-4">
          <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* Glowing Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-grid-neon-cyan/20"></div>
      </div>
    </div>
  );
};

export default NotFound;
