import { Check, Zap } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '0',
      description: 'Perfect for getting started',
      features: [
        'Basic social feed',
        'Up to 50 droplets per month',
        'Standard messaging',
        'Browse marketplace',
        'Community access',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '9.99',
      description: 'For power users and creators',
      features: [
        'Unlimited droplets',
        'Priority feed placement',
        'Advanced analytics',
        'Verified badge',
        'Early access to features',
        'Custom themes',
        'Ad-free experience',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Business',
      price: '29.99',
      description: 'For brands and businesses',
      features: [
        'Everything in Pro',
        'Business storefront',
        'Advanced marketplace tools',
        'Team collaboration',
        'API access',
        'Priority support',
        'Custom integrations',
        'Detailed analytics',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 hover:scale-105 animate-fade-in-up ${
                plan.popular ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/20' : 'border-white/10 hover:border-white/20'
              }`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Need a custom plan?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            We offer tailored solutions for enterprises and large organizations with specific needs.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
