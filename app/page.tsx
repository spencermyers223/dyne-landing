'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeNotification, setActiveNotification] = useState(0);
  const [groupAnimationState, setGroupAnimationState] = useState(0);
  const [countdown, setCountdown] = useState(47);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const notifications = [
    { restaurant: "Carbone", time: "Saturday 7:30pm", type: "cancellation" },
    { restaurant: "Don Angie", time: "Friday 8:00pm", type: "new" },
    { restaurant: "Via Carota", time: "Sunday 6:00pm", type: "match" },
  ];

  const groupMembers = [
    { name: 'Sarah', avatar: '👩‍🦰', status: ['pending', 'confirmed', 'confirmed', 'confirmed'] },
    { name: 'Mike', avatar: '👨', status: ['pending', 'pending', 'confirmed', 'confirmed'] },
    { name: 'Emma', avatar: '👩', status: ['pending', 'pending', 'pending', 'confirmed'] },
    { name: 'You', avatar: '🙋', status: ['pending', 'confirmed', 'confirmed', 'confirmed'] },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNotification((prev) => (prev + 1) % notifications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGroupAnimationState((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (groupAnimationState === 2) {
      const timer = setInterval(() => {
        setCountdown((prev) => (prev > 44 ? prev - 1 : 47));
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setCountdown(47);
    }
  }, [groupAnimationState]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  const howItWorksSteps = [
    {
      num: '01',
      title: 'Build Your Watchlist',
      desc: 'Add restaurants you want to try. Import from Google Maps, Beli, or discover new spots through friends.',
      icon: '📋',
      expandedDesc: 'Curate your personal list of must-try spots. Tag them as "Date Night," "Client Dinner," or "Brunch Spots." Set priority levels so Dyne knows which reservations matter most to you.',
    },
    {
      num: '02',
      title: 'Set Your Preferences',
      desc: 'Tell us when you like to dyne—weekends at 7pm, any weeknight, spontaneous same-day. We learn your style.',
      icon: '⚙️',
      expandedDesc: 'Define your ideal dining windows, party sizes, neighborhoods, and budget ranges. Dyne learns from your booking patterns and gets smarter over time.',
    },
    {
      num: '03',
      title: 'We Do The Work',
      desc: "Our system monitors availability 24/7 across Resy, OpenTable, Tock, and direct booking—so you don't have to.",
      icon: '🔍',
      expandedDesc: 'No more refreshing apps or checking multiple platforms. Dyne watches everything simultaneously and catches cancellations the moment they happen.',
    },
    {
      num: '04',
      title: 'Get Smart Alerts',
      desc: 'Instant notification when a table matches your preferences. Cancellation alerts for impossible-to-get spots.',
      icon: '🔔',
      expandedDesc: 'Receive intelligent notifications ranked by priority. "Hot alerts" for high-demand spots. Quiet hours respected. Never miss a table that matters to you.',
    },
    {
      num: '05',
      title: 'One-Tap Booking',
      desc: "See a table you want? Tap once to book. It's automatically added to your calendar.",
      icon: '✨',
      expandedDesc: 'Seamless booking across all platforms without leaving Dyne. Calendar integration with Apple, Google, and Outlook. Manage all your reservations in one place.',
    },
    {
      num: '06',
      title: 'Group Reservations',
      desc: 'Create dining groups with friends. Dyne finds tables and collects RSVPs—then books when everyone confirms.',
      icon: '👥',
      expandedDesc: 'Set up groups like "Thursday Crew" or "College Friends." Define group preferences together. Dyne monitors for matching tables, sends RSVP requests with smart deadlines, and auto-books once confirmed.',
    },
  ];

  const getStatusIcon = (status: string) => {
    if (status === 'confirmed') return '✓';
    if (status === 'pending') return '···';
    return '✗';
  };

  const getStatusColor = (status: string) => {
    if (status === 'confirmed') return 'bg-green-500';
    if (status === 'pending') return 'bg-[#E8E0D8]';
    return 'bg-red-400';
  };

  return (
    <div className="font-serif bg-gradient-to-b from-[#FAF7F2] to-[#F5F0E8] min-h-screen text-[#2C2420]">
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.65%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23noise%29%22%2F%3E%3C%2Fsvg%3E')]" />
      
      {/* Navigation */}
      <nav className="px-4 sm:px-8 py-6 flex justify-between items-center max-w-[1400px] mx-auto">
        <div className="text-2xl font-semibold tracking-[0.15em] text-[#722F37]">
          DYNE
        </div>
        <div className="font-sans flex gap-4 sm:gap-8 text-sm font-medium">
          <a href="#how" className="text-[#5C524C] hover:text-[#722F37] transition-colors">How It Works</a>
          <a href="#features" className="text-[#5C524C] hover:text-[#722F37] transition-colors">Features</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-8 sm:pt-16 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[85vh]">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <p className="font-sans text-sm font-semibold tracking-[0.15em] text-[#722F37] mb-4 sm:mb-6 uppercase">
            The Smarter Way to Dyne
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight mb-4 sm:mb-6">
            Never Miss a<br />
            <span className="italic text-[#722F37]">Table</span> Again
          </h1>
          <p className="font-sans text-base sm:text-lg leading-relaxed text-[#5C524C] max-w-[540px] mb-8 sm:mb-10">
            Stop refreshing Resy. Stop checking OpenTable. Add restaurants to your 
            watchlist, set your preferences, and let us notify you the moment a 
            perfect table opens up—with one-tap booking.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[480px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="font-sans flex-1 px-5 py-4 text-base border border-[#D9D0C7] rounded-lg bg-white outline-none focus:border-[#722F37] transition-colors"
                required
              />
              <button 
                type="submit"
                className="font-sans px-8 py-4 text-base font-semibold text-white bg-gradient-to-br from-[#722F37] to-[#8B3A44] rounded-lg hover:-translate-y-0.5 hover:shadow-xl transition-all whitespace-nowrap shadow-lg shadow-[#722F37]/30"
              >
                Join Waitlist
              </button>
            </form>
          ) : (
            <div className="font-sans p-5 bg-gradient-to-br from-[#722F37]/10 to-[#8B3A44]/5 rounded-lg max-w-[480px] border border-[#722F37]/20">
              <p className="font-semibold text-[#722F37] mb-1">
                You&apos;re on the list! 🎉
              </p>
              <p className="text-sm text-[#5C524C]">
                We&apos;ll notify you when we launch in your city.
              </p>
            </div>
          )}
          
          <p className="font-sans mt-4 text-sm text-[#8C8279]">
            Launching in NYC • 2,400+ already on the waitlist
          </p>
        </div>
        
        {/* Animated Notification Preview */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-[#2C2420]/15 w-full max-w-[380px] animate-float">
            <div className="font-sans flex items-center gap-2 mb-6 text-sm text-[#8C8279]">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Monitoring 12 restaurants...
            </div>
            
            <div 
              key={activeNotification}
              className="bg-gradient-to-br from-[#FAF7F2] to-[#F5F0E8] rounded-2xl p-5 sm:p-6 border border-[#E8E0D8] animate-slideIn"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-sans text-xs font-semibold tracking-widest text-[#722F37] uppercase mb-1">
                    {notifications[activeNotification].type === 'cancellation' ? '🔥 Cancellation Alert' : 
                     notifications[activeNotification].type === 'new' ? '✨ New Opening' : '🎯 Perfect Match'}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#2C2420]">
                    {notifications[activeNotification].restaurant}
                  </h3>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#722F37] to-[#8B3A44] rounded-xl flex items-center justify-center text-xl sm:text-2xl">
                  🍽️
                </div>
              </div>
              
              <div className="font-sans flex gap-4 sm:gap-6 mb-5 text-sm text-[#5C524C]">
                <div>
                  <span className="text-[#8C8279]">Date</span><br />
                  <strong>{notifications[activeNotification].time.split(' ')[0]}</strong>
                </div>
                <div>
                  <span className="text-[#8C8279]">Time</span><br />
                  <strong>{notifications[activeNotification].time.split(' ')[1]}</strong>
                </div>
                <div>
                  <span className="text-[#8C8279]">Party</span><br />
                  <strong>2 guests</strong>
                </div>
              </div>
              
              <button 
                type="button"
                style={{ backgroundColor: '#722F37', color: '#ffffff' }}
                className="font-sans w-full py-3 sm:py-4 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Book Reservation →
              </button>
            </div>
            
            <div className="font-sans flex justify-center gap-2 mt-6">
              {notifications.map((_, i) => (
                <div 
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${i === activeNotification ? 'bg-[#722F37]' : 'bg-[#D9D0C7]'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-gradient-to-b from-[#722F37] to-[#5a252b] py-20 sm:py-32 px-4 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <p className="font-sans text-sm font-semibold tracking-[0.15em] text-[#D4A574] mb-4 uppercase">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">
              Set it. Forget it.<br />
              <span className="italic text-[#D4A574]">Eat well.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {howItWorksSteps.map((step, i) => (
              <div 
                key={i}
                className={`bg-white/95 backdrop-blur rounded-2xl p-6 sm:p-8 border border-[#D4A574]/20 cursor-pointer transition-all duration-300 ease-out ${
                  expandedCard === i 
                    ? 'scale-105 shadow-2xl shadow-black/20 border-[#D4A574] z-10' 
                    : 'hover:scale-[1.02] hover:shadow-xl hover:border-[#D4A574]/50'
                }`}
                onMouseEnter={() => setExpandedCard(i)}
                onMouseLeave={() => setExpandedCard(null)}
              >
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <span className={`text-4xl sm:text-5xl transition-transform duration-300 ${expandedCard === i ? 'scale-110' : ''}`}>
                    {step.icon}
                  </span>
                  <span className="font-sans text-sm font-semibold text-[#D4A574] tracking-wider">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-medium mb-3 text-[#2C2420]">
                  {step.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#5C524C] leading-relaxed">
                  {step.desc}
                </p>
                
                {/* Expanded content */}
                <div className={`overflow-hidden transition-all duration-300 ease-out ${
                  expandedCard === i ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-4 border-t border-[#D4A574]/30">
                    <p className="font-sans text-sm text-[#722F37] leading-relaxed">
                      {step.expandedDesc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Group Reservations */}
      <section id="features" className="bg-gradient-to-b from-[#FAF7F2] to-[#F5F0E8] py-20 sm:py-32 px-4 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="font-sans text-sm font-semibold tracking-[0.15em] text-[#722F37] mb-4 uppercase">
                Group Reservations
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight text-[#2C2420]">
                Dyning is better<br />
                <span className="italic text-[#722F37]">together</span>
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#5C524C] leading-relaxed mb-8">
                Create groups with your regular dining crews. Set shared preferences, 
                and let Dyne find tables that work for everyone. Smart RSVP collection 
                with time-sensitive deadlines for hot restaurants.
              </p>
              <div className="font-sans flex flex-col gap-4">
                {[
                  'Create groups like "Thursday Crew" or "Work Friends"',
                  'Set group preferences for days, times, and cuisines',
                  'Dyne finds matching tables and sends RSVP requests',
                  'Smart deadlines based on restaurant demand',
                  'Auto-books once your crew confirms',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#722F37] to-[#8B3A44] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-[#2C2420] text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Group RSVP Animation */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-2xl shadow-[#722F37]/10 border border-[#D4A574]/20">
              <div className="font-sans">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#E8E0D8]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-[#8C8279]">Group Activity</span>
                  </div>
                  <span className="text-xs text-[#D4A574] font-semibold tracking-wider uppercase">The Thursday Crew</span>
                </div>
                
                {/* Main Card */}
                <div 
                  key={groupAnimationState}
                  className="bg-gradient-to-br from-[#FAF7F2] to-[#F5F0E8] rounded-2xl p-5 border border-[#D4A574]/30 animate-slideIn"
                >
                  {/* State indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-semibold tracking-widest text-[#722F37] uppercase">
                      {groupAnimationState === 0 && '🔥 Hot Table Found'}
                      {groupAnimationState === 1 && '📩 Collecting RSVPs'}
                      {groupAnimationState === 2 && '⏰ Final Countdown'}
                      {groupAnimationState === 3 && '🎉 Booked!'}
                    </p>
                    {groupAnimationState === 2 && (
                      <span className="text-xs font-bold text-[#722F37] bg-[#722F37]/10 px-2 py-1 rounded-full">
                        {countdown} min left
                      </span>
                    )}
                  </div>
                  
                  {/* Restaurant Info */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#722F37] to-[#8B3A44] rounded-xl flex items-center justify-center text-2xl">
                      🍝
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-[#2C2420]">Carbone</h3>
                      <p className="text-sm text-[#8C8279]">Thursday 7:30pm • 4 spots</p>
                    </div>
                  </div>
                  
                  {/* Group Members RSVP Status */}
                  <div className="space-y-3 mb-5">
                    {groupMembers.map((member, i) => (
                      <div 
                        key={i} 
                        className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                          member.status[groupAnimationState] === 'confirmed' 
                            ? 'bg-green-50 border border-green-200' 
                            : 'bg-white border border-[#E8E0D8]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{member.avatar}</span>
                          <span className="font-medium text-sm text-[#2C2420]">{member.name}</span>
                        </div>
                        <div 
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${getStatusColor(member.status[groupAnimationState])}`}
                        >
                          <span className={member.status[groupAnimationState] === 'confirmed' ? 'text-white' : 'text-[#8C8279]'}>
                            {getStatusIcon(member.status[groupAnimationState])}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  {groupAnimationState < 3 ? (
                    <div className="flex gap-3">
                      <button 
                        type="button"
                        style={{ backgroundColor: '#722F37' }}
                        className="flex-1 py-3 text-sm font-semibold rounded-xl shadow-lg"
                      >
                        <span className="text-white">I&apos;m In</span>
                      </button>
                      <button 
                        type="button"
                        className="flex-1 py-3 text-sm font-semibold text-[#5C524C] bg-white border border-[#E8E0D8] rounded-xl hover:border-[#722F37]/30 transition-colors"
                      >
                        Can&apos;t Make It
                      </button>
                    </div>
                  ) : (
                    <div className="py-3 text-center bg-green-500 rounded-xl">
                      <p className="text-white font-semibold">✓ Booked! See you Thursday</p>
                    </div>
                  )}
                </div>
                
                {/* Progress dots */}
                <div className="flex justify-center gap-2 mt-5">
                  {[0, 1, 2, 3].map((state) => (
                    <div 
                      key={state}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        state === groupAnimationState 
                          ? 'bg-[#722F37] w-4' 
                          : state < groupAnimationState 
                            ? 'bg-green-500 w-2' 
                            : 'bg-[#D9D0C7] w-2'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-b from-[#F5F0E8] to-[#EDE6DC] py-20 sm:py-32 px-4 sm:px-8 text-center">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 leading-tight text-[#2C2420]">
            Ready to dyne<br />
            <span className="italic text-[#722F37]">smarter?</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#5C524C] mb-8 sm:mb-10 leading-relaxed">
            Join thousands of dyners who&apos;ve stopped refreshing and started eating. 
            Launching in NYC first—be among the first to get access.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="font-sans flex-1 px-5 py-4 text-base border border-[#D9D0C7] rounded-lg bg-white outline-none focus:border-[#722F37] transition-colors"
                required
              />
              <button 
                type="submit"
                style={{ backgroundColor: '#722F37' }}
                className="font-sans px-8 py-4 text-base font-semibold text-white rounded-lg hover:-translate-y-0.5 hover:shadow-xl transition-all whitespace-nowrap shadow-lg"
              >
                Get Early Access
              </button>
            </form>
          ) : (
            <div className="font-sans p-6 bg-gradient-to-br from-[#722F37]/10 to-[#8B3A44]/5 rounded-xl max-w-[480px] mx-auto border border-[#722F37]/20">
              <p className="font-semibold text-[#722F37] text-lg">
                You&apos;re on the list! 🎉
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2420] py-8 sm:py-12 px-4 sm:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xl font-semibold tracking-[0.15em] text-[#D4A574]">
            DYNE
          </div>
          <p className="font-sans text-sm text-[#8C8279]">
            © 2025 Dyne. Making reservations effortless.
          </p>
        </div>
      </footer>
    </div>
  );
}
