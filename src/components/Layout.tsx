import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Home, MessageCircle, User, Bell, Activity, Zap } from 'lucide-react';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="bg-surface-medium border-b border-border glass-strong sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Activity className="w-8 h-8 text-neon-cyan glow-cyan" />
              </div>
              <span className="font-orbitron font-bold text-xl text-neon-cyan">
                AGENT<span className="text-neon-purple">HUB</span>
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                      : 'text-muted-foreground hover:text-neon-cyan hover:bg-surface-light'
                  }`
                }
              >
                <Home className="w-4 h-4" />
                <span className="font-rajdhani font-medium">Dashboard</span>
              </NavLink>
              
              <NavLink
                to="/chat"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                      : 'text-muted-foreground hover:text-neon-cyan hover:bg-surface-light'
                  }`
                }
              >
                <MessageCircle className="w-4 h-4" />
                <span className="font-rajdhani font-medium">Chat</span>
              </NavLink>

              <NavLink
                to="/profiles"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                      : 'text-muted-foreground hover:text-neon-cyan hover:bg-surface-light'
                  }`
                }
              >
                <User className="w-4 h-4" />
                <span className="font-rajdhani font-medium">Profiles</span>
              </NavLink>

              <NavLink
                to="/notifications"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                      : 'text-muted-foreground hover:text-neon-cyan hover:bg-surface-light'
                  }`
                }
              >
                <Bell className="w-4 h-4" />
                <span className="font-rajdhani font-medium">Notifications</span>
              </NavLink>
            </nav>

            {/* Status Indicator */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground font-rajdhani">ONLINE</span>
              </div>
              <div className="w-8 h-8 bg-surface-light rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-neon-purple" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-surface-medium border-t border-border fixed bottom-0 left-0 right-0 z-50">
        <div className="grid grid-cols-4 gap-1 p-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center py-2 rounded-lg transition-all ${
                isActive
                  ? 'text-neon-cyan'
                  : 'text-muted-foreground'
              }`
            }
          >
            <Home className="w-5 h-5" />
            <span className="text-xs font-rajdhani mt-1">Home</span>
          </NavLink>
          
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              `flex flex-col items-center py-2 rounded-lg transition-all ${
                isActive
                  ? 'text-neon-cyan'
                  : 'text-muted-foreground'
              }`
            }
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs font-rajdhani mt-1">Chat</span>
          </NavLink>

          <NavLink
            to="/profiles"
            className={({ isActive }) =>
              `flex flex-col items-center py-2 rounded-lg transition-all ${
                isActive
                  ? 'text-neon-cyan'
                  : 'text-muted-foreground'
              }`
            }
          >
            <User className="w-5 h-5" />
            <span className="text-xs font-rajdhani mt-1">Profiles</span>
          </NavLink>

          <NavLink
            to="/notifications"
            className={({ isActive }) =>
              `flex flex-col items-center py-2 rounded-lg transition-all ${
                isActive
                  ? 'text-neon-cyan'
                  : 'text-muted-foreground'
              }`
            }
          >
            <Bell className="w-5 h-5" />
            <span className="text-xs font-rajdhani mt-1">Alerts</span>
          </NavLink>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pb-16 md:pb-0">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;