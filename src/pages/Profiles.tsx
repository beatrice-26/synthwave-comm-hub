import React, { useState } from 'react';
import { User, Shield, Edit, Plus, Search, Filter, MoreVertical } from 'lucide-react';

interface Profile {
  id: string;
  name: string;
  type: 'user' | 'persona';
  avatar: string;
  status: 'online' | 'offline' | 'away';
  stats: {
    messages: number;
    lastActive: string;
    sessions: number;
  };
  details: {
    age?: number;
    gender?: string;
    location?: string;
    personality?: string[];
    interests?: string[];
  };
}

const Profiles: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'users' | 'personas'>('users');
  const [searchTerm, setSearchTerm] = useState('');

  const users: Profile[] = [
    {
      id: 'usr_001',
      name: 'Sarah_K',
      type: 'user',
      avatar: 'SK',
      status: 'online',
      stats: { messages: 247, lastActive: 'Now', sessions: 12 },
      details: { age: 26, gender: 'Female', location: 'San Francisco, CA' }
    },
    {
      id: 'usr_002',
      name: 'Mike_Dev',
      type: 'user',
      avatar: 'MD',
      status: 'away',
      stats: { messages: 189, lastActive: '5m ago', sessions: 8 },
      details: { age: 31, gender: 'Male', location: 'Austin, TX' }
    },
    {
      id: 'usr_003',
      name: 'Emma_Design',
      type: 'user',
      avatar: 'ED',
      status: 'offline',
      stats: { messages: 156, lastActive: '1h ago', sessions: 15 },
      details: { age: 28, gender: 'Female', location: 'New York, NY' }
    }
  ];

  const personas: Profile[] = [
    {
      id: 'per_001',
      name: 'Emma_Creative',
      type: 'persona',
      avatar: 'EC',
      status: 'online',
      stats: { messages: 342, lastActive: 'Active', sessions: 25 },
      details: { 
        personality: ['Creative', 'Empathetic', 'Curious'],
        interests: ['Design', 'Music', 'Travel', 'Books']
      }
    },
    {
      id: 'per_002',
      name: 'Alex_Adventurer',
      type: 'persona',
      avatar: 'AA',
      status: 'online',
      stats: { messages: 198, lastActive: 'Active', sessions: 18 },
      details: { 
        personality: ['Adventurous', 'Outgoing', 'Spontaneous'],
        interests: ['Travel', 'Sports', 'Photography', 'Food']
      }
    },
    {
      id: 'per_003',
      name: 'Jordan_Tech',
      type: 'persona',
      avatar: 'JT',
      status: 'offline',
      stats: { messages: 289, lastActive: '2h ago', sessions: 22 },
      details: { 
        personality: ['Analytical', 'Logical', 'Innovative'],
        interests: ['Technology', 'Gaming', 'Science', 'AI']
      }
    }
  ];

  const currentProfiles = activeTab === 'users' ? users : personas;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-neon-green';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-orbitron font-black mb-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            PROFILE MANAGEMENT
          </h1>
          <p className="text-muted-foreground font-rajdhani text-lg">
            Manage real users and AI personas in your chat ecosystem
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex bg-surface-medium rounded-lg p-1">
            <button
              onClick={() => setActiveTab('users')}
              className={`px-6 py-3 rounded-lg font-rajdhani font-semibold transition-all ${
                activeTab === 'users'
                  ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <User className="w-4 h-4 inline mr-2" />
              Real Users ({users.length})
            </button>
            <button
              onClick={() => setActiveTab('personas')}
              className={`px-6 py-3 rounded-lg font-rajdhani font-semibold transition-all ${
                activeTab === 'personas'
                  ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Shield className="w-4 h-4 inline mr-2" />
              AI Personas ({personas.length})
            </button>
          </div>

          <button className="btn-neon px-6 py-3 flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span className="font-rajdhani font-semibold">
              Create {activeTab === 'users' ? 'User' : 'Persona'}
            </span>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-cyber w-full pl-10 py-3 font-rajdhani"
            />
          </div>
          <button className="btn-ghost px-4 py-3 flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span className="font-rajdhani">Filter</span>
          </button>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProfiles.map((profile) => (
            <div key={profile.id} className="glass-strong rounded-lg p-6 hover:border-neon-cyan/30 transition-all group cursor-pointer">
              {/* Profile Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-background font-orbitron font-bold relative ${
                    profile.type === 'user' 
                      ? 'bg-gradient-to-br from-neon-cyan to-neon-purple'
                      : 'bg-gradient-to-br from-neon-purple to-neon-pink'
                  }`}>
                    {profile.avatar}
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${getStatusColor(profile.status)}`}></div>
                  </div>
                  <div>
                    <h3 className="font-orbitron font-bold text-foreground group-hover:text-neon-cyan transition-colors">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-rajdhani capitalize">
                      {profile.status} • {profile.type}
                    </p>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-neon-cyan transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-xl font-orbitron font-bold text-neon-cyan">{profile.stats.messages}</p>
                  <p className="text-xs text-muted-foreground font-rajdhani">Messages</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-orbitron font-bold text-neon-purple">{profile.stats.sessions}</p>
                  <p className="text-xs text-muted-foreground font-rajdhani">Sessions</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-rajdhani font-bold text-neon-green">{profile.stats.lastActive}</p>
                  <p className="text-xs text-muted-foreground font-rajdhani">Last Active</p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-4">
                {profile.type === 'user' ? (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-rajdhani">Age:</span>
                      <span className="text-foreground font-semibold">{profile.details.age}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-rajdhani">Location:</span>
                      <span className="text-foreground font-semibold text-right">{profile.details.location}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <p className="text-muted-foreground font-rajdhani text-sm mb-1">Personality:</p>
                      <div className="flex flex-wrap gap-1">
                        {profile.details.personality?.slice(0, 3).map((trait) => (
                          <span key={trait} className="px-2 py-1 bg-neon-purple/20 text-neon-purple text-xs font-rajdhani rounded">
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-rajdhani text-sm mb-1">Interests:</p>
                      <div className="flex flex-wrap gap-1">
                        {profile.details.interests?.slice(0, 3).map((interest) => (
                          <span key={interest} className="px-2 py-1 bg-neon-cyan/20 text-neon-cyan text-xs font-rajdhani rounded">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <button className="flex-1 btn-neon py-2 text-sm font-rajdhani flex items-center justify-center space-x-1">
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button className="flex-1 btn-ghost py-2 text-sm font-rajdhani">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Notes Section */}
        <div className="mt-12 glass-strong rounded-lg p-6">
          <h3 className="text-xl font-orbitron font-bold text-neon-pink mb-4">SESSION NOTES</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-rajdhani font-semibold text-foreground mb-2">User Insights</h4>
              <textarea 
                className="input-cyber w-full h-32 p-3 resize-none text-sm font-rajdhani"
                placeholder="Record observations about user behavior patterns..."
                defaultValue="Sarah_K shows consistent engagement during evening hours. Prefers casual conversation style with occasional deeper topics about career and personal interests."
              />
            </div>
            <div>
              <h4 className="font-rajdhani font-semibold text-foreground mb-2">Persona Performance</h4>
              <textarea 
                className="input-cyber w-full h-32 p-3 resize-none text-sm font-rajdhani"
                placeholder="Track persona effectiveness and optimization notes..."
                defaultValue="Emma_Creative persona performing well with creative professionals. Consider adding more design-specific conversation topics and industry knowledge."
              />
            </div>
          </div>
          <div className="flex justify-end mt-4 space-x-3">
            <button className="btn-ghost px-6 py-2 font-rajdhani">Cancel</button>
            <button className="btn-neon px-6 py-2 font-rajdhani">Save Notes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;