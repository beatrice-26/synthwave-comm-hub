import React from 'react';
import { MessageSquare, Send, Users, Clock, ArrowRight, Bell, User, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import cyberDashboardBg from '../assets/cyber-dashboard-bg.jpg';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'User Messages', value: '2,847', icon: MessageSquare, trend: '+12% today', glowColor: 'cyan' as const },
    { title: 'Agent Responses', value: '3,124', icon: Send, trend: '+8% today', glowColor: 'purple' as const },
    { title: 'Active Chats', value: '23', icon: Users, trend: '4 new', glowColor: 'pink' as const },
    { title: 'Avg Response', value: '1.2s', icon: Clock, trend: '-0.3s faster', glowColor: 'green' as const }
  ];

  const notifications = [
    { id: 1, type: 'Message', content: 'New message from Sarah_K', time: '2m ago', category: 'cyan' },
    { id: 2, type: 'Profile Update', content: 'Jake_M updated interests', time: '5m ago', category: 'purple' },
    { id: 3, type: 'System', content: 'Auto-response activated for Chat #127', time: '8m ago', category: 'green' },
    { id: 4, type: 'Message', content: 'Emma_R is typing...', time: '12m ago', category: 'cyan' },
    { id: 5, type: 'Profile Update', content: 'New persona "Adventurer" created', time: '15m ago', category: 'purple' }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${cyberDashboardBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-surface-dark/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-orbitron font-black mb-4 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
            AGENT CONTROL
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto">
            Monitor real-time conversations, manage personas, and optimize engagement metrics
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <StatCard {...stat} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Notifications Panel */}
          <div className="lg:col-span-2">
            <div className="glass-strong rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-orbitron font-bold text-neon-cyan flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  LIVE NOTIFICATIONS
                </h3>
                <Link 
                  to="/notifications" 
                  className="text-neon-purple hover:text-neon-pink transition-colors font-rajdhani text-sm flex items-center"
                >
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-surface-medium/50 border border-border/50 hover:border-neon-cyan/30 transition-all cursor-pointer group"
                  >
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      notification.category === 'cyan' ? 'bg-neon-cyan' :
                      notification.category === 'purple' ? 'bg-neon-purple' :
                      'bg-neon-green'
                    } animate-pulse`}></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`text-xs font-rajdhani font-bold uppercase px-2 py-1 rounded ${
                          notification.category === 'cyan' ? 'bg-neon-cyan/20 text-neon-cyan' :
                          notification.category === 'purple' ? 'bg-neon-purple/20 text-neon-purple' :
                          'bg-neon-green/20 text-neon-green'
                        }`}>
                          {notification.type}
                        </span>
                        <span className="text-xs text-muted-foreground font-rajdhani">
                          {notification.time}
                        </span>
                      </div>
                      <p className="text-foreground font-rajdhani group-hover:text-neon-cyan transition-colors">
                        {notification.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="glass-strong rounded-lg p-6">
              <h3 className="text-xl font-orbitron font-bold text-neon-purple mb-6">
                QUICK ACTIONS
              </h3>

              <div className="space-y-4">
                <Link 
                  to="/chat"
                  className="btn-neon w-full p-4 rounded-lg flex items-center justify-between group"
                >
                  <div className="flex items-center">
                    <MessageCircle className="w-6 h-6 mr-3" />
                    <div className="text-left">
                      <div className="font-rajdhani font-semibold">Go to Chats</div>
                      <div className="text-xs opacity-70">Manage active conversations</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link 
                  to="/profiles"
                  className="btn-ghost w-full p-4 rounded-lg flex items-center justify-between group"
                >
                  <div className="flex items-center">
                    <User className="w-6 h-6 mr-3" />
                    <div className="text-left">
                      <div className="font-rajdhani font-semibold">View Profiles</div>
                      <div className="text-xs opacity-70">User & persona management</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button className="bg-surface-medium/80 hover:bg-surface-light border-2 border-border hover:border-neon-pink/50 w-full p-4 rounded-lg flex items-center justify-between group transition-all">
                  <div className="flex items-center">
                    <Bell className="w-6 h-6 mr-3 text-neon-pink" />
                    <div className="text-left">
                      <div className="font-rajdhani font-semibold text-neon-pink">View Notes</div>
                      <div className="text-xs opacity-70 text-muted-foreground">Session recordings & insights</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-neon-pink" />
                </button>
              </div>

              {/* System Status */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <h4 className="text-sm font-orbitron font-bold text-muted-foreground mb-4 uppercase">
                  System Status
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-rajdhani text-muted-foreground">AI Response Engine</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                      <span className="text-xs text-neon-green font-rajdhani">ONLINE</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-rajdhani text-muted-foreground">Database</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                      <span className="text-xs text-neon-green font-rajdhani">ONLINE</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-rajdhani text-muted-foreground">Real-time Sync</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
                      <span className="text-xs text-neon-cyan font-rajdhani">ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;