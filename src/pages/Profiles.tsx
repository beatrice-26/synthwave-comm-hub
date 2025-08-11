import React, { useState } from 'react';
import { User, Shield, Edit, Plus, Search, Filter, MoreVertical, Heart } from 'lucide-react';

interface Profile {
  id: string;
  name: string;
  type: 'fake' | 'template';
  avatar: string;
  status: 'active' | 'inactive' | 'archived';
  stats: {
    conversations: number;
    successRate: number;
    lastUsed: string;
  };
  details: {
    age?: number;
    gender?: string;
    location?: string;
    personality?: string[];
    interests?: string[];
    backstory?: string;
  };
}

const Profiles: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const profiles: Profile[] = [
    {
      id: 'prof_001',
      name: 'Emma_Creative',
      type: 'fake',
      avatar: 'EC',
      status: 'active',
      stats: { conversations: 45, successRate: 87, lastUsed: '2h ago' },
      details: { 
        age: 28,
        gender: 'Female',
        location: 'Portland, OR',
        personality: ['Creative', 'Empathetic', 'Curious'],
        interests: ['Design', 'Music', 'Travel', 'Books'],
        backstory: 'Graphic designer who loves exploring new coffee shops and art galleries.'
      }
    },
    {
      id: 'prof_002',
      name: 'Alex_Tech',
      type: 'fake',
      avatar: 'AT',
      status: 'active',
      stats: { conversations: 32, successRate: 92, lastUsed: '5m ago' },
      details: { 
        age: 26,
        gender: 'Male',
        location: 'Austin, TX',
        personality: ['Analytical', 'Friendly', 'Innovative'],
        interests: ['Technology', 'Gaming', 'Startups', 'Fitness'],
        backstory: 'Software developer passionate about emerging tech and fitness.'
      }
    },
    {
      id: 'prof_003',
      name: 'Sarah_Adventurer',
      type: 'fake',
      avatar: 'SA',
      status: 'inactive',
      stats: { conversations: 28, successRate: 75, lastUsed: '1d ago' },
      details: { 
        age: 24,
        gender: 'Female',
        location: 'Denver, CO',
        personality: ['Adventurous', 'Outgoing', 'Spontaneous'],
        interests: ['Travel', 'Hiking', 'Photography', 'Food'],
        backstory: 'Travel blogger who documents adventures around the world.'
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-neon-green';
      case 'inactive': return 'bg-yellow-500';
      case 'archived': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'ACTIVE';
      case 'inactive': return 'INACTIVE';
      case 'archived': return 'ARCHIVED';
      default: return 'UNKNOWN';
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-orbitron font-black mb-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            FAKE PROFILES
          </h1>
          <p className="text-muted-foreground font-rajdhani text-lg">
            Manage fake personas used in chat conversations
          </p>
        </div>

        {/* Actions Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search profiles..."
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

          <button className="btn-neon px-6 py-3 flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span className="font-rajdhani font-semibold">Create Profile</span>
          </button>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <div key={profile.id} className="glass-strong rounded-lg p-6 hover:border-neon-cyan/30 transition-all group cursor-pointer">
              {/* Profile Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-background font-orbitron font-bold relative bg-gradient-to-br from-neon-purple to-neon-pink`}>
                    {profile.avatar}
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${getStatusColor(profile.status)}`}></div>
                  </div>
                  <div>
                    <h3 className="font-orbitron font-bold text-foreground group-hover:text-neon-cyan transition-colors">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-rajdhani">
                      {getStatusText(profile.status)} • {profile.details.age}, {profile.details.gender}
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
                  <p className="text-xl font-orbitron font-bold text-neon-cyan">{profile.stats.conversations}</p>
                  <p className="text-xs text-muted-foreground font-rajdhani">Chats</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-orbitron font-bold text-neon-purple">{profile.stats.successRate}%</p>
                  <p className="text-xs text-muted-foreground font-rajdhani">Success</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-rajdhani font-bold text-neon-green">{profile.stats.lastUsed}</p>
                  <p className="text-xs text-muted-foreground font-rajdhani">Last Used</p>
                </div>
              </div>

              {/* Location */}
              <div className="mb-4">
                <p className="text-sm text-muted-foreground font-rajdhani mb-1">Location:</p>
                <p className="text-foreground font-semibold text-sm">{profile.details.location}</p>
              </div>

              {/* Personality Traits */}
              <div className="mb-4">
                <p className="text-muted-foreground font-rajdhani text-sm mb-2">Personality:</p>
                <div className="flex flex-wrap gap-1">
                  {profile.details.personality?.slice(0, 3).map((trait) => (
                    <span key={trait} className="px-2 py-1 bg-neon-purple/20 text-neon-purple text-xs font-rajdhani rounded">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="mb-4">
                <p className="text-muted-foreground font-rajdhani text-sm mb-2">Interests:</p>
                <div className="flex flex-wrap gap-1">
                  {profile.details.interests?.slice(0, 3).map((interest) => (
                    <span key={interest} className="px-2 py-1 bg-neon-cyan/20 text-neon-cyan text-xs font-rajdhani rounded">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backstory Preview */}
              <div className="mb-4">
                <p className="text-muted-foreground font-rajdhani text-sm mb-1">Backstory:</p>
                <p className="text-foreground text-xs font-rajdhani line-clamp-2">
                  {profile.details.backstory}
                </p>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <button className="flex-1 btn-neon py-2 text-sm font-rajdhani flex items-center justify-center space-x-1">
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button className="flex-1 btn-ghost py-2 text-sm font-rajdhani">
                  Use in Chat
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Profile Templates Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-orbitron font-bold text-neon-pink mb-6">PROFILE TEMPLATES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Young Professional', icon: User, description: 'Tech-savvy career focused individual' },
              { name: 'Creative Artist', icon: Heart, description: 'Artistic and expressive personality' },
              { name: 'Adventure Seeker', icon: Shield, description: 'Outdoorsy and spontaneous character' }
            ].map((template) => (
              <div key={template.name} className="glass rounded-lg p-4 hover:border-neon-cyan/30 transition-all cursor-pointer">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center">
                    <template.icon className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="font-orbitron font-semibold text-foreground">{template.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground font-rajdhani mb-3">
                  {template.description}
                </p>
                <button className="btn-ghost w-full py-2 text-sm font-rajdhani">
                  Create from Template
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Analytics */}
        <div className="mt-12 glass-strong rounded-lg p-6">
          <h3 className="text-xl font-orbitron font-bold text-neon-cyan mb-6">PROFILE ANALYTICS</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-orbitron font-bold text-neon-cyan">12</p>
              <p className="text-muted-foreground font-rajdhani">Active Profiles</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-orbitron font-bold text-neon-purple">85%</p>
              <p className="text-muted-foreground font-rajdhani">Avg Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-orbitron font-bold text-neon-green">247</p>
              <p className="text-muted-foreground font-rajdhani">Total Conversations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-orbitron font-bold text-neon-pink">3.2m</p>
              <p className="text-muted-foreground font-rajdhani">Avg Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;