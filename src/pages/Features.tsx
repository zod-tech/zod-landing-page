import { Droplets, ShoppingBag, MessageCircle, Zap, Shield, TrendingUp, Users, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Features() {
  const heroSection = useScrollAnimation(0.1);
  const cardsSection = useScrollAnimation(0.2);
  const statsSection = useScrollAnimation(0.2);
  const features = [
    {
      icon: Droplets,
      title: 'Social Feed',
      description: 'Share your thoughts, moments, and trends with friends and community.',
      details: 'Create and share rich media posts with real-time engagement. Watch your content spark conversations and trends within the community.',
      features: ['Rich media posts', 'Real-time engagement', 'Trending content', 'Social reactions'],
      gradient: 'from-cyan-500 to-blue-500',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    },
    {
      icon: ShoppingBag,
      title: 'Marketplace',
      description: 'Explore and purchase products with ease, all in one place.',
      details: 'Discover curated collections, secure checkout, and fast delivery. Shop from trusted sellers and find exactly what you need.',
      features: ['Curated collections', 'Secure checkout', 'Fast delivery', 'Buyer protection'],
      gradient: 'from-emerald-500 to-teal-500',
      image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    },
    {
      icon: MessageCircle,
      title: 'Messaging',
      description: 'Instantly connect with friends, sellers, and groups securely.',
      details: 'Real-time chat with media sharing capabilities. Connect with friends or negotiate with sellers all in one secure platform.',
      features: ['Real-time chat', 'Media sharing', 'Group conversations', 'End-to-end encryption'],
      gradient: 'from-amber-500 to-orange-500',
      image: 'https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience instant loading and seamless performance.',
      details: 'Optimized for speed with global CDN distribution ensuring your content loads in milliseconds.',
      features: ['Instant loading', 'Global CDN', 'Optimized performance', 'Zero lag'],
      gradient: 'from-yellow-500 to-amber-500',
      image: 'https://images.pexels.com/photos/3561837/pexels-photo-3561837.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security.',
      details: 'End-to-end encryption and privacy-first design keeps your information safe and secure.',
      features: ['End-to-end encryption', 'Privacy controls', 'Secure servers', 'GDPR compliant'],
      gradient: 'from-blue-500 to-indigo-500',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered',
      description: 'Smart recommendations tailored just for you.',
      details: 'Machine learning algorithms understand your preferences and suggest content and products you\'ll love.',
      features: ['Smart recommendations', 'Personalized feed', 'Content matching', 'Trend detection'],
      gradient: 'from-violet-500 to-purple-500',
      image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
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
                Powerful Features
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to connect, share, and shop in one incredible platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={cardsSection.ref}>
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 scroll-scale ${cardsSection.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/80"></div>
                </div>

                <div className="p-6">
                  <div
                    className={`relative w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 mb-3 leading-relaxed text-sm">{feature.description}</p>

                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${feature.gradient}`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" ref={statsSection.ref}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-16 relative overflow-hidden scroll-scale ${statsSection.isVisible ? 'visible' : ''}`}>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

            <div className="relative text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Why Choose Zod?
              </h2>

              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { stat: '50K+', label: 'Active Users', icon: Users },
                  { stat: '2M+', label: 'Interactions Daily', icon: TrendingUp },
                  { stat: '100K+', label: 'Products Available', icon: ShoppingBag },
                ].map((item, idx) => (
                  <div key={idx} className="group animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                    <item.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4 group-hover:scale-125 transition-transform duration-300" />
                    <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {item.stat}
                    </div>
                    <div className="text-lg text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
