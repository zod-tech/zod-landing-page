import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';

export default function Careers() {
  const positions = [
    {
      title: 'Senior Frontend Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build beautiful, performant user interfaces that delight our users.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Create intuitive experiences that make social commerce seamless.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Scale our infrastructure to support millions of users worldwide.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Community Manager',
      department: 'Marketing',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Build and nurture our vibrant community of creators and shoppers.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      description: 'Turn data into insights that drive product decisions.',
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      title: 'Content Marketing Lead',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Tell our story and grow our brand through compelling content.',
      gradient: 'from-blue-500 to-indigo-500',
    },
  ];

  const benefits = [
    'Competitive salary and equity',
    'Health, dental, and vision insurance',
    'Unlimited PTO',
    'Remote work options',
    '401(k) matching',
    'Learning and development budget',
    'Home office stipend',
    'Team retreats and events',
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We are a diverse team of passionate individuals working to revolutionize how people connect and shop
            online. Join us in building something meaningful.
          </p>
        </div>

        <div className="mb-24">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full mx-auto mb-3"></div>
                <p className="text-sm text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {positions.map((position, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {position.title}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${position.gradient} text-white text-xs font-medium`}>
                      {position.department}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 mb-6">{position.description}</p>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {position.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {position.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {position.department}
                  </div>
                </div>

                <button className="flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all duration-300">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Don't see a perfect fit?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            We're always looking for talented people. Send us your resume and let us know how you can contribute to
            Zod.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            Send General Application
          </button>
        </div>
      </div>
    </div>
  );
}
