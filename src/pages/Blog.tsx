import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'Introducing Zod 2.0: A New Era of Social Commerce',
      excerpt:
        'We are excited to announce the launch of Zod 2.0, bringing powerful new features and a redesigned interface.',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Product Updates',
      gradient: 'from-cyan-500 to-blue-500',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'How Zod is Revolutionizing Online Shopping',
      excerpt:
        'Discover how our unique approach to social commerce is changing the way people discover and buy products.',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'Insights',
      gradient: 'from-emerald-500 to-teal-500',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'Building Community: The Heart of Zod',
      excerpt:
        'Learn about our community-first approach and how we foster meaningful connections between users.',
      date: '2025-01-05',
      readTime: '4 min read',
      category: 'Community',
      gradient: 'from-pink-500 to-rose-500',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'Top 10 Tips for Growing Your Zod Presence',
      excerpt: 'Expert advice on how to maximize your reach and engagement on the Zod platform.',
      date: '2024-12-28',
      readTime: '6 min read',
      category: 'Tips & Tricks',
      gradient: 'from-amber-500 to-orange-500',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'Behind the Scenes: Building Zod',
      excerpt: 'A deep dive into the technology and design decisions that power the Zod platform.',
      date: '2024-12-20',
      readTime: '8 min read',
      category: 'Engineering',
      gradient: 'from-purple-500 to-violet-500',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'The Future of Social Commerce',
      excerpt:
        'Our vision for the future of online shopping and social interaction, and how Zod fits into that picture.',
      date: '2024-12-15',
      readTime: '5 min read',
      category: 'Vision',
      gradient: 'from-blue-500 to-indigo-500',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
           Insight Hub
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest news, insights, and stories from the Zod team
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${post.gradient} text-white text-xs font-medium`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <button className="flex items-center gap-2 text-sm font-medium text-cyan-400 group-hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
}
