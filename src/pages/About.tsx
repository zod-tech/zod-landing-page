import { Users, Target, Heart, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
           Behind the Platform
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Reimagining how people connect, share, and shop in the digital age
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Zod was born from a simple idea: social media and e-commerce shouldn't be separate experiences. We
                saw friends sharing product recommendations, influencers driving trends, and communities forming
                around shared interests.
              </p>
              <p>
                We built Zod to bridge that gap, creating a platform where social connections and shopping naturally
                coexist. Where discovering new products is as engaging as catching up with friends.
              </p>
              <p>
                Today, Zod serves thousands of users worldwide, helping them share moments, discover products, and
                build meaningful connections all in one place.
              </p>
            </div>
          </div>
          <div className="relative animate-fade-in-up animation-delay-300">
          <div className="rounded-3xl overflow-hidden border border-white/10 h-40 sm:h-56 md:h-64">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Team collaboration"
                className="w-full h-50 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Community First',
                description: 'We prioritize our users and build features that bring people together.',
                gradient: 'from-cyan-500 to-blue-500',
              },
              {
                icon: Target,
                title: 'Innovation',
                description: 'We constantly push boundaries to create better experiences.',
                gradient: 'from-emerald-500 to-teal-500',
              },
              {
                icon: Heart,
                title: 'Authenticity',
                description: 'We foster genuine connections and meaningful interactions.',
                gradient: 'from-pink-500 to-rose-500',
              },
              {
                icon: Zap,
                title: 'Excellence',
                description: 'We deliver quality in everything we create and maintain.',
                gradient: 'from-amber-500 to-orange-500',
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 text-center">
          <h3 className="text-4xl font-bold mb-6">Join Our Journey</h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and community.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
}
