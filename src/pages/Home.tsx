import { useState, useEffect } from 'react';
import {
  Droplets,
  ShoppingBag,
  MessageCircle,
  Users,
  Star,
  Download,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import SolarOrder from '../components/SolarOrder';

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const offsetY = useParallax();
  const featuresSection = useScrollAnimation(0.2);
  const showcaseSection = useScrollAnimation(0.2);
  const statsSection = useScrollAnimation(0.2);
  const testimonialsSection = useScrollAnimation(0.2);
  const ctaSection = useScrollAnimation(0.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Droplets,
      title: 'Social Feed',
      description: 'Share your thoughts, moments, and trends.',
    },
    {
      icon: ShoppingBag,
      title: 'Marketplace',
      description: 'Explore and purchase products with ease.',
    },
    {
      icon: MessageCircle,
      title: 'Messaging',
      description: 'Instantly connect with friends and sellers.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse-slow"
            style={{ transform: `translateY(${offsetY * 0.1}px)` }}
          ></div>
          <div
            className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"
            style={{ transform: `translateY(${offsetY * -0.15}px)` }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"
            style={{ transform: `translate(-50%, -50%) translateY(${offsetY * 0.2}px)` }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
                  Zod Do More.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0">
                Discover, share, and shop effortlessly with friends and brands you love.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium overflow-hidden hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download App
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
             <Link to="/about">
              <button className="group border-2 border-white/20 hover:border-cyan-400 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-white/5">
                Learn More
              </button>
             </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-500 ${
                      activeFeature === idx
                        ? 'bg-white/10 border-white/30 scale-105'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <feature.icon className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-up animation-delay-300">
              <div className="relative max-w-sm mx-auto lg:max-w-md">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 border border-white/10 shadow-2xl">
<div className="relative animate-fade-in-up animation-delay-300">
  <div className="relative max-w-lg mx-auto flex gap-4">
    {/* First image container */}
    <div className="bg-gray-950 rounded-[2.5rem] w-1/2 h-[450px] overflow-hidden">
      <img
        src="/Simulator Screenshot - iPhone 16 Pro Max - 2025-11-11 at 17.24.56.png"
        alt="Zod App Interface 1"
        className="w-full h-full object-contain rounded-[2.5rem]"
      />
    </div>

    {/* Second image container */}
    <div className="bg-gray-950 rounded-[2.5rem] w-1/2 h-[450px] overflow-hidden">
      <img
        src="/Simulator Screenshot - iPhone 16 Pro Max - 2025-11-11 at 17.24.15.png"
        alt="Zod App Interface 2"
        className="w-full h-full object-contain rounded-[2.5rem]"
      />
    </div>
  </div>
</div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 relative" ref={featuresSection.ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-20 scroll-reveal ${featuresSection.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              One App, One Platform
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to connect, share, and shop
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Droplets,
                title: 'Social Feed',
                description: 'Share your thoughts, moments, and trends with friends and community.',
                features: ['Rich media posts', 'Real-time engagement', 'Trending content'],
                gradient: 'from-cyan-500 to-blue-500',
              },
              {
                icon: ShoppingBag,
                title: 'Marketplace',
                description: 'Explore and purchase products with ease, all in one place.',
                features: ['Curated collections', 'Secure checkout', 'Fast delivery'],
                gradient: 'from-emerald-500 to-teal-500',
              },
              {
                icon: MessageCircle,
                title: 'Messaging',
                description: 'Instantly connect with friends, sellers, and groups securely.',
                features: ['Real-time chat', 'Media sharing', 'Group conversations'],
                gradient: 'from-amber-500 to-orange-500',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 scroll-scale ${featuresSection.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
                  style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                ></div>

                <div
                  className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>

                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`}></div>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section id="showcase" className="py-24 relative overflow-hidden" ref={showcaseSection.ref}>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
    <div className={`text-center mb-20 scroll-reveal ${showcaseSection.isVisible ? 'visible' : ''}`}>
      <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Experience the Interface
      </h2>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[
        {
          title: 'Social Feed',
          desc: 'Share & Engage',
          gradient: 'from-cyan-500/20 to-blue-500/20',
          image: 'https://i.postimg.cc/hGhz3Myc/Whats-App-Image-2026-04-21-at-20-57-03.jpg',
          rounded: 'rounded-[2rem_3rem_2rem_3rem]', // top-left, top-right, bottom-right, bottom-left
        },
        {
          title: 'Shop Gadgets',
          desc: 'Browse & Buy',
          gradient: 'from-emerald-500/20 to-teal-500/20',
          image: 'https://i.postimg.cc/W4tFfSWN/Whats-App-Image-2026-04-21-at-20-57-05.jpg',
          rounded: 'rounded-[3rem_2rem_3rem_2rem]',
        },
        {
          title: 'Stay Connected',
          desc: 'Chat & Connect',
          gradient: 'from-cyan-500/20 to-blue-500/20',
          image: 'https://i.postimg.cc/yN5gq952/Whats-App-Image-2026-04-21-at-20-57-04.jpg',
          rounded: 'rounded-[2.5rem_2rem_3rem_3rem]',
        },
        {
          title: 'Notifications',
          desc: 'Stay Updated',
          gradient: 'from-emerald-500/20 to-teal-500/20',
          image: 'https://i.postimg.cc/SKj2tVTy/Whats-App-Image-2026-04-21-at-20-57-04-1.jpg',
          rounded: 'rounded-[3rem_3rem_2rem_2rem]',
        },
      ].map((screen, idx) => (
        <div
          key={idx}
          className={`group relative scroll-reveal ${showcaseSection.isVisible ? 'visible' : ''}`}
          style={{
            transitionDelay: `${idx * 100}ms`,
            transform: showcaseSection.isVisible ? 'translateY(0)' : 'translateY(50px)',
          }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${screen.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-3 border border-white/10 group-hover:border-white/20 transition-all duration-500">
           <div className={`relative overflow-hidden mb-3 h-[250px] md:h-[450px] lg:h-[400px] transform group-hover:scale-105 transition-transform duration-500`}>
  <img
    src={screen.image}
    alt={screen.title}
    className={`w-full h-full object-contain ${screen.rounded}`} 
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent"></div>
</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <section className="py-24 relative" ref={statsSection.ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 relative overflow-hidden scroll-scale ${statsSection.isVisible ? 'visible' : ''}`}>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

            <div className="relative grid md:grid-cols-3 gap-12 text-center">
              {[
                { stat: '50K+', label: 'Active Users', icon: Users },
                { stat: '2M+', label: 'Droplets Shared', icon: TrendingUp },
                { stat: '100K+', label: 'Products Sold', icon: ShoppingBag },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group"
                  style={{
                    opacity: statsSection.isVisible ? 1 : 0,
                    transform: statsSection.isVisible ? 'scale(1)' : 'scale(0.8)',
                    transition: `all 0.8s ease-out ${idx * 150}ms`
                  }}
                >
                  <item.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {item.stat}
                  </div>
                  <div className="text-lg text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="py-24 relative" ref={testimonialsSection.ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-20 scroll-reveal ${testimonialsSection.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Loved by Thousands
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Join a thriving community of creators and shoppers</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: 'Zod transformed how I discover tech. The perfect blend of social and shopping!',
                author: 'Sarah Chen',
                role: 'Content Creator',
                avatar: Users,
              },
              {
                quote: 'Love sharing droplets and finding amazing gadgets. This community is incredible!',
                author: 'Mercy Vincent',
                role: 'Entrepreneur',
                avatar: Users,
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 ${idx === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'} ${testimonialsSection.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-lg mb-8 text-gray-300 leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <testimonial.avatar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolarOrder />

      <section id="cta" className="py-24 relative overflow-hidden" ref={ctaSection.ref}>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-emerald-500/10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className={`scroll-scale ${ctaSection.isVisible ? 'visible' : ''}`}>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Experience Social
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Reinvented
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Get Zod now and connect with friends, explore trends, and shop what you love, without the hassle.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-full text-lg font-medium overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-6 h-6" />
                  Get Started Free
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
