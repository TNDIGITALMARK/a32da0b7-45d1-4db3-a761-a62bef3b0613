import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Check, Star, ArrowRight } from 'lucide-react'

const packages = [
  {
    name: 'Essential Package',
    price: '$800',
    description: 'Perfect for intimate gatherings and small events',
    features: [
      '2 hours of photography',
      '100 professionally edited photos',
      'Online gallery for 30 days',
      'Personal use print rights',
      'Same-week delivery',
    ],
    popular: false,
  },
  {
    name: 'Premium Package',
    price: '$1,500',
    description: 'Our most popular choice for weddings and special occasions',
    features: [
      '4 hours of photography',
      '300 professionally edited photos',
      'Online gallery for 90 days',
      'Commercial use print rights',
      'Engagement session included',
      'Premium leather album (20 pages)',
      '48-hour sneak peek delivery',
    ],
    popular: true,
  },
  {
    name: 'Luxury Package',
    price: '$2,500',
    description: 'Complete coverage for your most important moments',
    features: [
      '8 hours of photography',
      '500+ professionally edited photos',
      'Unlimited online gallery access',
      'Full commercial use rights',
      'Pre-event consultation',
      'Engagement & rehearsal sessions',
      'Premium leather album (40 pages)',
      '24-hour sneak peek delivery',
      'Second photographer included',
    ],
    popular: false,
  },
]

const testimonials = [
  {
    name: 'Emily & Michael Rodriguez',
    role: 'Wedding Photography',
    rating: 5,
    image: '/images/testimonials/emily-michael.jpg',
    quote:
      'Sarah captured our wedding day perfectly! Every moment, every emotion - she has an incredible eye for detail and made us feel so comfortable. We will treasure these photos forever.',
    project: 'Wedding at Sunset Gardens',
  },
  {
    name: 'Jennifer Chen',
    role: 'Corporate Headshots',
    rating: 5,
    image: '/images/testimonials/jennifer-chen.jpg',
    quote:
      'Professional, efficient, and the results exceeded our expectations. Sarah photographed headshots for our entire executive team and everyone looks fantastic. Highly recommend!',
    project: 'Tech Startup Executive Portraits',
  },
  {
    name: 'David Thompson',
    role: 'Family Portrait Session',
    rating: 5,
    image: '/images/testimonials/david-thompson.jpg',
    quote:
      'Working with Sarah was an absolute pleasure. She was patient with our young children and somehow got everyone smiling at the same time! The photos are beautiful and we love them.',
    project: 'Thompson Family Portraits',
  },
  {
    name: 'Amanda Foster',
    role: 'Product Photography',
    rating: 5,
    image: '/images/testimonials/amanda-foster.jpg',
    quote:
      'Sarah transformed our product line with stunning photography. Her understanding of lighting and composition brought our brand to life. Our sales increased significantly after updating our catalog.',
    project: 'Artisan Jewelry Collection',
  },
  {
    name: 'Robert & Lisa Martinez',
    role: 'Engagement Session',
    rating: 5,
    image: '/images/testimonials/robert-lisa.jpg',
    quote:
      "We were nervous about being in front of the camera, but Sarah made it so easy and fun! She found the most beautiful locations and captured our love story authentically. Can't wait for our wedding photos!",
    project: 'Downtown Engagement Session',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Services & Pricing
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transparent pricing for exceptional photography services. Each package is designed
              to capture your story beautifully and professionally.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-lg border-2 p-8 ${
                  pkg.popular
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-4xl font-heading font-bold mb-2">
                    {pkg.price}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/booking"
                  className={`block w-full py-3 text-center font-medium rounded transition-colors ${
                    pkg.popular
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'border-2 border-black text-black hover:bg-gray-50'
                  }`}
                >
                  Book This Package
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Need something custom? Let's discuss your specific needs.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity"
            >
              Contact for Custom Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from some of the amazing people I've had the privilege to work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Book your session today and let's create beautiful memories together.
              I can't wait to hear about your vision!
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors text-lg"
            >
              Schedule Your Session
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
