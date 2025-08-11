import React, { useState } from 'react';
import { Send, Smile, Paperclip, MoreVertical, Phone, Video, User, Heart, Shield } from 'lucide-react';

interface Message {
  id: number;
  sender: 'user' | 'agent';
  content: string;
  timestamp: string;
}

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState<'user' | 'chat' | 'persona'>('chat');

  const messages: Message[] = [
    { id: 1, sender: 'user', content: 'Hey! How was your day?', timestamp: '2:30 PM' },
    { id: 2, sender: 'agent', content: 'Hi there! It was great, thanks for asking 😊 I spent some time reading and listening to music. How about you?', timestamp: '2:31 PM' },
    { id: 3, sender: 'user', content: 'That sounds lovely! I had a pretty busy day at work but finally free now', timestamp: '2:32 PM' },
    { id: 4, sender: 'agent', content: 'I\'m glad you can relax now! What kind of work do you do?', timestamp: '2:33 PM' },
    { id: 5, sender: 'user', content: 'I work in marketing for a tech company. Sometimes it gets hectic but I love the creative aspects', timestamp: '2:35 PM' },
    { id: 6, sender: 'agent', content: 'That must be exciting! I bet you get to work on some really innovative campaigns. What\'s your favorite part about it?', timestamp: '2:36 PM' },
  ];

  const handleSend = () => {
    if (message.trim()) {
      // Add message logic here
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Tab Navigation */}
      <div className="md:hidden bg-surface-medium border-b border-border">
        <div className="flex">
          <button 
            onClick={() => setActiveTab('user')}
            className={`flex-1 py-4 text-center font-rajdhani font-semibold transition-all ${
              activeTab === 'user' ? 'text-neon-cyan border-b-2 border-neon-cyan' : 'text-muted-foreground'
            }`}
          >
            Real User
          </button>
          <button 
            onClick={() => setActiveTab('chat')}
            className={`flex-1 py-4 text-center font-rajdhani font-semibold transition-all ${
              activeTab === 'chat' ? 'text-neon-cyan border-b-2 border-neon-cyan' : 'text-muted-foreground'
            }`}
          >
            Chat
          </button>
          <button 
            onClick={() => setActiveTab('persona')}
            className={`flex-1 py-4 text-center font-rajdhani font-semibold transition-all ${
              activeTab === 'persona' ? 'text-neon-cyan border-b-2 border-neon-cyan' : 'text-muted-foreground'
            }`}
          >
            Persona
          </button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-120px)] md:h-[calc(100vh-80px)]">
        {/* Left Panel - Real User (Hidden on mobile unless active) */}
        <div className={`${activeTab === 'user' ? 'block' : 'hidden'} md:block w-full md:w-80 bg-surface-medium border-r border-border p-6`}>
          <div className="mb-6">
            <h3 className="text-lg font-orbitron font-bold text-neon-cyan mb-4">REAL USER</h3>
            
            {/* User Profile */}
            <div className="glass rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-background" />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-foreground">Sarah_K</h4>
                  <p className="text-sm text-muted-foreground">ID: USR_2847</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                    <span className="text-xs text-neon-green font-rajdhani">ONLINE</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground font-rajdhani">Age</p>
                  <p className="text-foreground font-semibold">26</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-rajdhani">Gender</p>
                  <p className="text-foreground font-semibold">Female</p>
                </div>
                <div className="col-span-2">
                  <p className="text-muted-foreground font-rajdhani">Location</p>
                  <p className="text-foreground font-semibold">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* User Stats */}
            <div className="glass rounded-lg p-4 mb-6">
              <h5 className="font-orbitron font-semibold text-neon-purple mb-3">STATISTICS</h5>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-rajdhani text-sm">Total Messages</span>
                  <span className="text-foreground font-semibold">247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-rajdhani text-sm">Last Active</span>
                  <span className="text-neon-green font-semibold">Now</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-rajdhani text-sm">Session Length</span>
                  <span className="text-foreground font-semibold">1h 23m</span>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="glass rounded-lg p-4">
              <h5 className="font-orbitron font-semibold text-neon-pink mb-3">NOTES</h5>
              <textarea 
                className="input-cyber w-full h-32 p-3 rounded-lg resize-none text-sm font-rajdhani"
                placeholder="Add notes about this user..."
                defaultValue="- Shows interest in tech and marketing topics&#10;- Prefers casual conversation style&#10;- Active during evening hours&#10;- Responds well to questions about work"
              />
              <button className="btn-neon w-full mt-3 py-2 text-sm font-rajdhani font-semibold">
                SAVE NOTES
              </button>
            </div>
          </div>
        </div>

        {/* Middle Panel - Chat (Always visible on mobile when active) */}
        <div className={`${activeTab === 'chat' ? 'block' : 'hidden'} md:block flex-1 flex flex-col bg-background`}>
          {/* Chat Header */}
          <div className="bg-surface-medium border-b border-border px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-background" />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-foreground">Sarah_K</h4>
                  <p className="text-xs text-neon-green font-rajdhani">Online • Typing...</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 text-muted-foreground hover:text-neon-cyan transition-colors">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="p-2 text-muted-foreground hover:text-neon-cyan transition-colors">
                  <Video className="w-5 h-5" />
                </button>
                <button className="p-2 text-muted-foreground hover:text-neon-cyan transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] p-4 rounded-lg ${
                    msg.sender === 'user'
                      ? 'message-user text-foreground'
                      : 'message-agent text-foreground'
                  }`}
                >
                  <p className="font-rajdhani">{msg.content}</p>
                  <p className="text-xs text-muted-foreground mt-2 font-rajdhani">
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="bg-surface-medium border-t border-border p-4">
            <div className="flex items-center space-x-3">
              <button className="text-muted-foreground hover:text-neon-cyan transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>
              <button className="text-muted-foreground hover:text-neon-cyan transition-colors">
                <Smile className="w-5 h-5" />
              </button>
              <div className="flex-1">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                  className="input-cyber w-full py-3 px-4 font-rajdhani"
                />
              </div>
              <button 
                onClick={handleSend}
                className="btn-neon px-4 py-3"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel - Fake Persona (Hidden on mobile unless active) */}
        <div className={`${activeTab === 'persona' ? 'block' : 'hidden'} md:block w-full md:w-80 bg-surface-medium border-l border-border p-6`}>
          <div className="mb-6">
            <h3 className="text-lg font-orbitron font-bold text-neon-purple mb-4">FAKE PERSONA</h3>
            
            {/* Persona Profile */}
            <div className="glass rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-background" />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-foreground">Emma_Creative</h4>
                  <p className="text-sm text-muted-foreground">Designer Persona</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></div>
                    <span className="text-xs text-neon-purple font-rajdhani">ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Personality Traits */}
            <div className="glass rounded-lg p-4 mb-6">
              <h5 className="font-orbitron font-semibold text-neon-cyan mb-3">PERSONALITY</h5>
              <div className="space-y-2">
                {['Creative', 'Empathetic', 'Curious', 'Supportive', 'Optimistic'].map((trait) => (
                  <div key={trait} className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-neon-pink" />
                    <span className="text-sm font-rajdhani text-foreground">{trait}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="glass rounded-lg p-4 mb-6">
              <h5 className="font-orbitron font-semibold text-neon-green mb-3">INTERESTS</h5>
              <div className="flex flex-wrap gap-2">
                {['Design', 'Music', 'Travel', 'Books', 'Photography', 'Art'].map((interest) => (
                  <span 
                    key={interest}
                    className="px-3 py-1 bg-neon-green/20 text-neon-green text-xs font-rajdhani font-semibold rounded-full border border-neon-green/30"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Tone Guide */}
            <div className="glass rounded-lg p-4">
              <h5 className="font-orbitron font-semibold text-neon-pink mb-3">TONE GUIDE</h5>
              <div className="space-y-3 text-sm font-rajdhani">
                <div>
                  <span className="text-neon-cyan font-semibold">Style: </span>
                  <span className="text-foreground">Friendly & Encouraging</span>
                </div>
                <div>
                  <span className="text-neon-cyan font-semibold">Energy: </span>
                  <span className="text-foreground">Warm & Positive</span>
                </div>
                <div>
                  <span className="text-neon-cyan font-semibold">Approach: </span>
                  <span className="text-foreground">Ask thoughtful questions</span>
                </div>
                <div>
                  <span className="text-neon-cyan font-semibold">Avoid: </span>
                  <span className="text-foreground">Being too forward</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;