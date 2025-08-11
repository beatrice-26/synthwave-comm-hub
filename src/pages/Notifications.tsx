import React, { useState } from 'react';
import { Bell, MessageCircle, User, Settings, Filter, Search, MoreHorizontal, CheckCircle } from 'lucide-react';

interface Notification {
  id: number;
  type: 'message' | 'profile' | 'system' | 'alert';
  title: string;
  content: string;
  timestamp: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  source: string;
}

const Notifications: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'message' | 'profile' | 'system' | 'alert'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const notifications: Notification[] = [
    {
      id: 1,
      type: 'message',
      title: 'New Message Alert',
      content: 'Sarah_K sent: "Hey! How was your day?"',
      timestamp: '2 minutes ago',
      read: false,
      priority: 'high',
      source: 'Chat #247'
    },
    {
      id: 2,
      type: 'profile',
      title: 'Profile Update',
      content: 'Jake_M updated his interests to include "Photography"',
      timestamp: '5 minutes ago',
      read: false,
      priority: 'medium',
      source: 'User Profile'
    },
    {
      id: 3,
      type: 'system',
      title: 'Auto-Response Activated',
      content: 'Emma_Creative persona automatically responded to Chat #127',
      timestamp: '8 minutes ago',
      read: true,
      priority: 'low',
      source: 'AI System'
    },
    {
      id: 4,
      type: 'message',
      title: 'Typing Indicator',
      content: 'Emma_R is typing in Chat #156',
      timestamp: '12 minutes ago',
      read: true,
      priority: 'low',
      source: 'Chat #156'
    },
    {
      id: 5,
      type: 'alert',
      title: 'Response Time Alert',
      content: 'Average response time exceeded 5 seconds in Chat #089',
      timestamp: '15 minutes ago',
      read: false,
      priority: 'high',
      source: 'Performance Monitor'
    },
    {
      id: 6,
      type: 'profile',
      title: 'New Persona Created',
      content: 'AI Persona "Adventurer_Alex" has been successfully created',
      timestamp: '20 minutes ago',
      read: true,
      priority: 'medium',
      source: 'Persona Manager'
    },
    {
      id: 7,
      type: 'system',
      title: 'Database Sync',
      content: 'Successfully synchronized 47 chat records',
      timestamp: '25 minutes ago',
      read: true,
      priority: 'low',
      source: 'Database'
    },
    {
      id: 8,
      type: 'message',
      title: 'Long Session Alert',
      content: 'User Mike_Dev has been active for 3+ hours',
      timestamp: '30 minutes ago',
      read: true,
      priority: 'medium',
      source: 'Session Monitor'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'message': return <MessageCircle className="w-5 h-5" />;
      case 'profile': return <User className="w-5 h-5" />;
      case 'system': return <Settings className="w-5 h-5" />;
      case 'alert': return <Bell className="w-5 h-5" />;
      default: return <Bell className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'message': return 'text-neon-cyan bg-neon-cyan/20 border-neon-cyan/30';
      case 'profile': return 'text-neon-purple bg-neon-purple/20 border-neon-purple/30';
      case 'system': return 'text-neon-green bg-neon-green/20 border-neon-green/30';
      case 'alert': return 'text-neon-pink bg-neon-pink/20 border-neon-pink/30';
      default: return 'text-muted-foreground bg-surface-medium border-border';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-500';
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    const matchesFilter = filter === 'all' || notification.type === filter;
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Bell className="w-8 h-8 text-neon-cyan glow-cyan" />
            <h1 className="text-4xl font-orbitron font-black bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              NOTIFICATIONS
            </h1>
            {unreadCount > 0 && (
              <span className="bg-neon-pink text-background px-3 py-1 rounded-full text-sm font-orbitron font-bold">
                {unreadCount} NEW
              </span>
            )}
          </div>
          <p className="text-muted-foreground font-rajdhani text-lg">
            Real-time alerts and system notifications
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search notifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-cyber w-full pl-10 py-3 font-rajdhani"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex bg-surface-medium rounded-lg p-1">
            {['all', 'message', 'profile', 'system', 'alert'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType as any)}
                className={`px-4 py-2 rounded-lg font-rajdhani font-semibold transition-all capitalize ${
                  filter === filterType
                    ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {filterType}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex space-x-2">
            <button className="btn-ghost px-4 py-3 flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span className="font-rajdhani">Mark All Read</span>
            </button>
            <button className="btn-neon px-4 py-3 flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span className="font-rajdhani">Filter</span>
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`glass-strong rounded-lg p-6 border-l-4 ${getPriorityColor(notification.priority)} ${
                !notification.read ? 'bg-surface-light/50' : 'bg-surface-medium/30'
              } hover:border-neon-cyan/30 transition-all cursor-pointer group`}
            >
              <div className="flex items-start space-x-4">
                {/* Type Icon */}
                <div className={`p-3 rounded-lg border ${getTypeColor(notification.type)}`}>
                  {getTypeIcon(notification.type)}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className={`font-orbitron font-bold ${!notification.read ? 'text-foreground' : 'text-muted-foreground'} group-hover:text-neon-cyan transition-colors`}>
                        {notification.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-rajdhani mt-1">
                        {notification.source} • {notification.timestamp}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {!notification.read && (
                        <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse"></div>
                      )}
                      <button className="text-muted-foreground hover:text-neon-cyan transition-colors">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-foreground font-rajdhani leading-relaxed">
                    {notification.content}
                  </p>

                  {/* Priority Badge */}
                  <div className="flex items-center justify-between mt-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-rajdhani font-bold uppercase ${
                      notification.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                      notification.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {notification.priority} Priority
                    </span>
                    
                    <div className="flex space-x-2">
                      {!notification.read && (
                        <button className="text-neon-cyan hover:text-neon-purple text-sm font-rajdhani font-semibold transition-colors">
                          Mark as Read
                        </button>
                      )}
                      <button className="text-neon-purple hover:text-neon-pink text-sm font-rajdhani font-semibold transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNotifications.length === 0 && (
          <div className="text-center py-16">
            <Bell className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-orbitron font-bold text-muted-foreground mb-2">
              No notifications found
            </h3>
            <p className="text-muted-foreground font-rajdhani">
              {searchTerm ? 'Try adjusting your search terms' : 'All caught up! No new notifications.'}
            </p>
          </div>
        )}

        {/* Load More */}
        {filteredNotifications.length > 0 && (
          <div className="text-center mt-8">
            <button className="btn-ghost px-8 py-3 font-rajdhani font-semibold">
              Load More Notifications
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;