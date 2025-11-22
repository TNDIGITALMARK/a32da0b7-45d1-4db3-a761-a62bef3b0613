import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight, CheckCircle, Sparkles, Award, Users } from 'lucide-react'

const services = [
  { title: "Custom Landscape Design", icon: "🎨" },
  { title: "Artificial Turf Installation", icon: "🌿" },
  { title: "Garden Landscaping", icon: "🌺" },
  { title: "Concrete Masonry", icon: "🏗️" },
  { title: "Patio Design", icon: "🪑" },
  { title: "Desert Landscaping", icon: "🌵" },
]

export default function HomePage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6 text-accent font-semibold">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Professional Landscaping Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 tracking-tight">
              Transform Your<br />Outdoor Space
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Expert landscaping services from custom designs to professional installations.
              We bring your outdoor vision to life with quality craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From design to installation, we offer comprehensive landscaping solutions
              tailored to your vision and environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Professional {service.title.toLowerCase()} services with attention to detail
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all duration-300"
            >
              View All 20 Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Why Choose GreenScape?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over 15 years of experience transforming outdoor spaces across Arizona,
                we combine expertise with passion to deliver exceptional results.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Expert Craftsmanship</h4>
                    <p className="text-muted-foreground">Licensed professionals with years of specialized training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Quality Materials</h4>
                    <p className="text-muted-foreground">We use only premium, sustainable materials built to last</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Customer Satisfaction</h4>
                    <p className="text-muted-foreground">500+ satisfied clients and 5-star reviews</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-sm text-muted-foreground font-medium">Projects Done</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <p className="text-sm text-muted-foreground font-medium">Satisfaction Rate</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  🌳
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary-foreground">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Get a free consultation and quote today. Let's discuss your project and create
            the outdoor space you've always dreamed of.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Free Quote
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-card text-foreground font-bold rounded-lg hover:bg-card/90 hover:shadow-xl transition-all duration-300"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}