import { Droplets, ShoppingBag, MessageCircle, ArrowRight, Smartphone, Zap, Users } from 'lucide-react';

export default function Showcase() {
  const screens = [
    {
      icon: Droplets,
      title: 'Social Feed',
      desc: 'Share & Engage',
      details: 'Create rich posts, discover trends, and engage with your community in real-time.',
      features: ['Post creation tools', 'Real-time feed', 'Engagement metrics'],
      image: '/Simulator Screenshot - iPhone 16 Pro Max - 2025-11-11 at 17.23.40.png',
    },
    {
      icon: ShoppingBag,
      title: 'Shop Gadgets',
      desc: 'Browse & Buy',
      details: 'Discover curated collections of amazing products from trusted sellers.',
      features: ['Smart filters', 'Secure payment', 'Order tracking'],
      image: '/Simulator Screenshot - iPhone 16 Pro Max - 2025-11-11 at 17.21.45.png',
    },
    {
      icon: MessageCircle,
      title: 'Stay Connected',
      desc: 'Chat & Connect',
      details: 'Message friends and sellers with media sharing and group conversations.',
      features: ['Real-time chat', 'Media upload', 'Group chats'],
      image: '/Simulator Screenshot - iPhone 16 Pro Max - 2025-11-11 at 17.21.22.png',
    },
  ];

  const highlights = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Perfectly optimized for mobile with gesture controls and intuitive navigation.',
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Seamless experience with instant loading and smooth animations.',
    },
    {
      icon: Users,
      title: 'Social Integration',
      description: 'Share with friends and discover content from your social circle.',
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-20 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Experience the Interface
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Beautiful, intuitive design that makes connecting and shopping effortless
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {screens.map((screen, idx) => (
              <div key={idx} className="group relative animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-500">
                  <div className="relative overflow-hidden rounded-2xl mb-6 h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 transform group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{screen.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{screen.details}</p>
                    <div className="space-y-2">
                      {screen.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                          <ArrowRight className="w-4 h-4 text-cyan-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Key Highlights
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-emerald-500/10"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Ready to Explore?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Download Zod today and experience the future of social commerce
            </p>
            <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-full text-lg font-medium overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300">
              <span className="relative z-10">Download App</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
