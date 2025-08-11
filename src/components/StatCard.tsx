import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green';
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  glowColor = 'cyan' 
}) => {
  const glowClass = {
    cyan: 'hover:glow-cyan',
    purple: 'hover:glow-purple',
    pink: 'hover:glow-pink',
    green: 'hover:text-neon-green'
  }[glowColor];

  const iconColorClass = {
    cyan: 'text-neon-cyan',
    purple: 'text-neon-purple',
    pink: 'text-neon-pink',
    green: 'text-neon-green'
  }[glowColor];

  return (
    <div className={`stat-card p-6 rounded-lg ${glowClass} animate-slide-up group cursor-pointer`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-muted-foreground font-rajdhani text-sm mb-2 uppercase tracking-wider">
            {title}
          </p>
          <p className="text-3xl font-orbitron font-bold text-foreground mb-1">
            {value}
          </p>
          {trend && (
            <p className="text-neon-green text-sm font-rajdhani">
              {trend}
            </p>
          )}
        </div>
        <div className={`${iconColorClass} p-3 bg-surface-dark rounded-lg group-hover:animate-float`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-border to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

export default StatCard;