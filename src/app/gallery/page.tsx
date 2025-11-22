'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { GalleryGrid } from '@/components/gallery-grid'
import { ArrowRight } from 'lucide-react'

const projectImages = [
  {
    src: '/generated/desert-residential-landscape.jpg',
    alt: 'Desert residential front yard with native Arizona plants and artificial turf',
    category: 'Desert Landscaping'
  },
  {
    src: '/generated/luxury-patio-landscape.jpg',
    alt: 'Luxury backyard patio with pergola and fire pit',
    category: 'Patio & Outdoor Living'
  },
  {
    src: '/generated/artificial-turf-backyard.jpg',
    alt: 'Professional artificial turf installation in modern backyard',
    category: 'Artificial Turf'
  },
  {
    src: '/generated/water-feature-fountain.jpg',
    alt: 'Custom water feature with fountain and koi pond',
    category: 'Water Features'
  },
  {
    src: '/generated/concrete-hardscaping-driveway.jpg',
    alt: 'Decorative stamped concrete driveway and walkway',
    category: 'Concrete Masonry'
  },
  {
    src: '/generated/custom-garden-landscape.jpg',
    alt: 'Beautiful custom garden with flowering plants and curved pathways',
    category: 'Garden Design'
  },
  {
    src: '/generated/commercial-business-landscape.jpg',
    alt: 'Modern commercial landscaping for business entrance',
    category: 'Commercial Projects'
  },
  {
    src: '/generated/retaining-wall-terraced.jpg',
    alt: 'Multi-tiered retaining wall with terraced garden design',
    category: 'Retaining Walls'
  },
  {
    src: '/generated/pool-landscape-desert.jpg',
    alt: 'Resort-style pool landscaping with desert theme',
    category: 'Pool Landscaping'
  }
]

const projectCategories = [
  {
    title: "Residential Gardens",
    description: "Beautiful custom gardens for homes across Arizona",
    emoji: "🏡",
    projects: 45
  },
  {
    title: "Desert Landscapes",
    description: "Water-wise xeriscaping with native plants",
    emoji: "🌵",
    projects: 32
  },
  {
    title: "Patio & Outdoor Living",
    description: "Stunning patios and outdoor entertainment spaces",
    emoji: "🪑",
    projects: 38
  },
  {
    title: "Water Features",
    description: "Custom fountains, ponds, and waterfalls",
    emoji: "⛲",
    projects: 24
  },
  {
    title: "Hardscaping",
    description: "Driveways, pathways, and retaining walls",
    emoji: "🧱",
    projects: 51
  },
  {
    title: "Commercial Projects",
    description: "Professional landscaping for businesses",
    emoji: "🏢",
    projects: 28
  }
]

export default function GalleryPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Our Project Gallery
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of completed landscaping projects. From residential gardens
              to commercial installations, see the quality craftsmanship we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Gallery */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Click any image to view full size and browse through our collection
            </p>
          </div>

          <GalleryGrid images={projectImages} columns={3} />
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized expertise across all landscaping disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl border-2 border-border hover:border-primary overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-8">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">
                      {category.projects} Projects
                    </span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Over 200 Completed Projects
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                With 15+ years of experience and hundreds of satisfied clients, we have the
                expertise to bring your landscaping vision to life. Every project receives
                our full attention to detail and commitment to quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 hover:shadow-lg transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground font-medium">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">20</div>
              <p className="text-muted-foreground font-medium">Services Offered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground font-medium">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
