import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { GalleryGrid } from '@/components/gallery-grid'
import { ArrowRight, Award, Camera, Users } from 'lucide-react'

const portfolioImages = [
  { src: '/images/portfolio/wedding-1.jpg', alt: 'Elegant wedding ceremony', category: 'Weddings' },
  { src: '/images/portfolio/portrait-1.jpg', alt: 'Professional portrait', category: 'Portraits' },
  { src: '/images/portfolio/corporate-1.jpg', alt: 'Corporate headshot', category: 'Corporate' },
  { src: '/images/portfolio/wedding-2.jpg', alt: 'Wedding couple outdoor', category: 'Weddings' },
  { src: '/images/portfolio/portrait-2.jpg', alt: 'Family portrait', category: 'Portraits' },
  { src: '/images/portfolio/product-1.jpg', alt: 'Product photography', category: 'Product' },
  { src: '/images/portfolio/wedding-3.jpg', alt: 'Wedding reception', category: 'Weddings' },
  { src: '/images/portfolio/portrait-3.jpg', alt: 'Senior portrait', category: 'Portraits' },
  { src: '/images/portfolio/corporate-2.jpg', alt: 'Business team photo', category: 'Corporate' },
]

export default function HomePage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20">
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
              Capturing Moments<br />That Last Forever
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Professional photography services for weddings, portraits, and corporate events.
              Creating timeless memories with artistry and authenticity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="px-8 py-4 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                Book a Session
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-black text-black font-medium rounded hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative aspect-[3/4] bg-gray-200 rounded overflow-hidden">
              <img
                src="/images/sarah-johnson.jpg"
                alt="Sarah Johnson - Professional Photographer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Meet Sarah Johnson
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 8 years of experience in professional photography, I specialize in capturing
                authentic moments that tell your unique story. My approach combines technical expertise
                with artistic vision to create images that resonate with emotion and beauty.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Featured in Modern Bride Magazine and trusted by hundreds of clients, I'm passionate
                about creating visual narratives that you'll treasure for a lifetime.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Camera size={32} className="text-gray-700" />
                  </div>
                  <p className="font-semibold">8+ Years</p>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users size={32} className="text-gray-700" />
                  </div>
                  <p className="font-semibold">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Award size={32} className="text-gray-700" />
                  </div>
                  <p className="font-semibold">Featured</p>
                  <p className="text-sm text-muted-foreground">Modern Bride</p>
                </div>
              </div>

              <Link
                href="/booking"
                className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity"
              >
                Let's work together
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A curated selection of recent projects showcasing my passion for storytelling through photography
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <GalleryGrid images={portfolioImages} columns={3} />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors"
            >
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Capture Your Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's create something beautiful together. Book your session today and experience
              professional photography that exceeds expectations.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors text-lg"
            >
              Schedule Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}