import { Star, Users, TrendingUp, MessageSquare, Heart, Share2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Community() {
  const heroSection = useScrollAnimation(0.1);
  const statsSection = useScrollAnimation(0.2);
  const testimonialsSection = useScrollAnimation(0.2);
  const featuresSection = useScrollAnimation(0.2);
  const ctaSection = useScrollAnimation(0.2);
  const testimonials = [
    {
      quote: 'Zod transformed how I discover tech. The perfect blend of social and shopping!',
      author: 'Sarah Chen',
      role: 'Content Creator',
      stats: '120K followers',
    },
    {
      quote: 'Love sharing droplets and finding amazing gadgets. This community is incredible!',
      author: 'Mercy Vincent',
      role: 'Entrepreneur',
      stats: '85K followers',
    },
    {
      quote: 'The messaging feature makes connecting with sellers so easy. Best experience ever!',
      author: 'Alex Thompson',
      role: 'Tech Enthusiast',
      stats: '45K followers',
    },
    {
      quote: 'I found my favorite brands through Zod. The community vibe is amazing!',
      author: 'Emma Rodriguez',
      role: 'Fashion Blogger',
      stats: '200K followers',
    },
  ];

  const communityStats = [
    {
      icon: Users,
      stat: '50K+',
      label: 'Active Users',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: TrendingUp,
      stat: '2M+',
      label: 'Daily Interactions',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Heart,
      stat: '10M+',
      label: 'Posts Shared',
      color: 'from-rose-500 to-pink-500',
    },
    {
      icon: MessageSquare,
      stat: '100K+',
      label: 'Communities',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const features = [
    {
      icon: Share2,
      title: 'Share Your Passion',
      description: 'Create posts, share moments, and inspire others with your interests and discoveries.',
    },
    {
      icon: TrendingUp,
      title: 'Discover Trends',
      description: 'Stay ahead of the curve with trending content curated by the community.',
    },
    {
      icon: Users,
      title: 'Build Connections',
      description: 'Connect with like-minded people who share your interests and values.',
    },
    {
      icon: MessageSquare,
      title: 'Join Communities',
      description: 'Participate in topic-specific communities and engage in meaningful discussions.',
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" ref={heroSection.ref}>
          <div className={`text-center mb-20 scroll-reveal ${heroSection.isVisible ? 'visible' : ''}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Loved by Thousands
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join a thriving community of creators, entrepreneurs, and tech enthusiasts
            </p>
          </div>

          <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 relative overflow-hidden mb-20 scroll-scale ${statsSection.isVisible ? 'visible' : ''}`} ref={statsSection.ref}>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Community by the Numbers
              </h2>

              <div className="grid md:grid-cols-4 gap-8">
                {communityStats.map((item, idx) => (
                  <div key={idx} className="group text-center animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {item.stat}
                    </div>
                    <div className="text-gray-400 font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-20" ref={testimonialsSection.ref}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent scroll-reveal ${testimonialsSection.isVisible ? 'visible' : ''}`}>
              What Our Community Says
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 ${idx % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'} ${testimonialsSection.isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-lg mb-8 text-gray-300 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.author}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-xs text-gray-500">{testimonial.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={featuresSection.ref}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent scroll-reveal ${featuresSection.isVisible ? 'visible' : ''}`}>
              Get Involved
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 scroll-scale ${featuresSection.isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" ref={ctaSection.ref}>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-emerald-500/10"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className={`scroll-scale ${ctaSection.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Ready to Join Us?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Become part of a community that shares your passion for social commerce
            </p>
            <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-full text-lg font-medium overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300">
              <span className="relative z-10">Join the Community</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
