'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeNotification, setActiveNotification] = useState(0);

  const notifications = [
    { restaurant: "Carbone", time: "Saturday 7:30pm", type: "cancellation" },
    { restaurant: "Don Angie", time: "Friday 8:00pm", type: "new" },
    { restaurant: "Via Carota", time: "Sunday 6:00pm", type: "match" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNotification((prev) => (prev + 1) % notifications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Connect to Kit (ConvertKit) API
      // const response = await fetch('YOUR_KIT_FORM_ENDPOINT', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });
      setIsSubmitted(true);
    }
  };

  return (
    <div className="font-serif bg-gradient-to-b from-[#FAF7F2] to-[#F5F0E8] min-h-screen text-[#2C2420]">
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.65%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23noise%29%22%2F%3E%3C%2Fsvg%3E')]" />
      
      {/* Navigation */}
      <nav className="px-8 py-6 flex justify-between items-center max-w-[1400px] mx-auto">
        <div className="text-2xl font-semibold tracking-[0.15em] text-[#722F37]">
          DYNE
        </div>
        <div className="font-sans flex gap-8 text-sm font-medium">
          <a href="#how" className="text-[#5C524C] hover:text-[#722F37] transition-colors">How It Works</a>
          <a href="#features" className="text-[#5C524C] hover:text-[#722F37] transition-colors">Features</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-8 pt-16 pb-24 grid grid-cols-12 gap-8 items-center min-h-[85vh]">
        <div className="col-span-12 lg:col-span-7">
          <p className="font-sans text-sm font-semibold tracking-[0.15em] text-[#722F37] mb-6 uppercase">
            The Smarter Way to Dyne
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight mb-6">
            Never Miss a<br />
            <span className="italic text-[#722F37]">Table</span> Again
          </h1>
          <p className="font-sans text-lg leading-relaxed text-[#5C524C] max-w-[540px] mb-10">
            Stop refreshing Resy. Stop checking OpenTable. Add restaurants to your 
            watchlist, set your preferences, and let us notify you the moment a 
            perfect table opens up—with one-tap booking.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-[480px]">
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
        <div className="col-span-12 lg:col-span-5 flex justify-center items-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-[#2C2420]/15 w-full max-w-[380px] animate-float">
            <div className="font-sans flex items-center gap-2 mb-6 text-sm text-[#8C8279]">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Monitoring 12 restaurants...
            </div>
            
            <div 
              key={activeNotification}
              className="bg-gradient-to-br from-[#FAF7F2] to-[#F5F0E8] rounded-2xl p-6 border border-[#E8E0D8] animate-slideIn"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-sans text-xs font-semibold tracking-widest text-[#722F37] uppercase mb-1">
                    {notifications[activeNotification].type === 'cancellation' ? '🔥 Cancellation Alert' : 
                     notifications[activeNotification].type === 'new' ? '✨ New Opening' : '🎯 Perfect Match'}
                  </p>
                  <h3 className="text-2xl font-medium text-[#2C2420]">
                    {notifications[activeNotification].restaurant}
                  </h3>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#722F37] to-[#8B3A44] rounded-xl flex items-center justify-center text-2xl">
                  🍽️
                </div>
              </div>
              
              <div className="font-sans flex gap-6 mb-5 text-sm text-[#5C524C]">
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
              
              <button className="font-sans w-full py-4 text-base font-semibold text-white bg-gradient-to-br from-[#722F37] to-[#8B3A44] rounded-xl shadow-lg shadow-[#722F37]/30 animate-pulse">
                Let&apos;s Dyne →
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
      <section id="how" className="max-w-[1200px] mx-auto px-8 py-32">
        <div className="text-center mb-20">
          <p className="font-sans text-sm font-semibold tracking-[0.15em] text-[#722F37] mb-4 uppercase">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-light">
            Set it. Forget it.<br />
            <span className="italic">Eat well.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              num: '01',
              title: 'Build Your Watchlist',
              desc: 'Add restaurants you want to try. Import from Google Maps, Beli, or discover new spots through friends.',
              icon: '📋',
            },
            {
              num: '02',
              title: 'Set Your Preferences',
              desc: 'Tell us when you like to dyne—weekends at 7pm, any weeknight, spontaneous same-day. We learn your style.',
              icon: '⚙️',
            },
            {
              num: '03',
              title: 'We Do The Work',
              desc: "Our system monitors availability 24/7 across Resy, OpenTable, Tock, and direct booking—so you don't have to.",
              icon: '🔍',
            },
            {
              num: '04',
              title: 'Get Smart Alerts',
              desc: 'Instant notification when a table matches your preferences. Cancellation alerts for impossible-to-get spots.',
              icon: '🔔',
            },
            {
              num: '05',
              title: 'One-Tap Booking',
              desc: "See a table you want? Tap once to book. It's automatically added to your calendar.",
              icon: '✨',
            },
            {
              num: '06',
              title: 'Share & Invite',
              desc: 'Post your plans, invite friends to join, coordinate group dinners—all in one place.',
              icon: '👥',
            },
          ].map((step, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl p-8 border border-[#E8E0D8] hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-5xl">
                  {step.icon}
                </span>
                <span className="font-sans text-sm font-semibold text-[#D4A574] tracking-wider">
                  {step.num}
                </span>
              </div>
              <h3 className="text-xl font-medium mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-base text-[#5C524C] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-to-b from-[#F5F0E8] to-[#EDE6DC] py-32 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-sans text-sm font-semibold tracking-[0.15em] text-[#722F37] mb-4 uppercase">
                Social Dyning
              </p>
              <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                Dyning is better<br />
                <span className="italic">together</span>
              </h2>
              <p className="font-sans text-lg text-[#5C524C] leading-relaxed mb-8">
                Share where you&apos;re headed, not just where you&apos;ve been. See what 
                friends have planned, join their reservations, and coordinate 
                group dinners without the endless text chains.
              </p>
              <div className="font-sans flex flex-col gap-4">
                {[
                  'Post upcoming dyning plans to your feed',
                  'Friends can request to join your table',
                  'Group coordination with voting & RSVPs',
                  'Calendar sync across all your devices',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#722F37] to-[#8B3A44] rounded-full flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                    <span className="text-[#2C2420]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-6 shadow-2xl shadow-[#2C2420]/10">
              <div className="font-sans text-sm">
                {[
                  { name: 'Sarah M.', spot: "L'Artusi", date: 'This Friday', avatar: '👩‍🦰' },
                  { name: 'Mike T.', spot: 'Lilia', date: 'Saturday', avatar: '👨' },
                  { name: 'Emma K.', spot: 'Atomix', date: 'Next Tuesday', avatar: '👩' },
                ].map((post, i) => (
                  <div key={i} className={`p-5 flex items-center gap-4 ${i < 2 ? 'border-b border-[#E8E0D8]' : ''}`}>
                    <div className="w-11 h-11 bg-[#F5F0E8] rounded-full flex items-center justify-center text-2xl">
                      {post.avatar}
                    </div>
                    <div className="flex-1">
                      <p>
                        <strong>{post.name}</strong>
                        <span className="text-[#8C8279]"> is headed to </span>
                        <strong className="text-[#722F37]">{post.spot}</strong>
                      </p>
                      <p className="text-[#8C8279] text-xs mt-1">
                        {post.date} • 2 spots available
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-[#FAF7F2] border border-[#E8E0D8] rounded-full text-xs font-medium text-[#722F37] hover:bg-[#722F37] hover:text-white transition-colors">
                      Join
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 text-center">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
            Ready to dyne<br />
            <span className="italic text-[#722F37]">smarter?</span>
          </h2>
          <p className="font-sans text-lg text-[#5C524C] mb-10 leading-relaxed">
            Join thousands of dyners who&apos;ve stopped refreshing and started eating. 
            Launching in NYC first—be among the first to get access.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-[480px] mx-auto">
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
      <footer className="border-t border-[#E8E0D8] py-12 px-8">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold tracking-[0.15em] text-[#722F37]">
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
