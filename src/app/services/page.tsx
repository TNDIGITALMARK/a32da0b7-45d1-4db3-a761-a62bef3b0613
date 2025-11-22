import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CheckCircle, ArrowRight, Sprout, Trees, Hammer, Fence, Droplets, Sun } from 'lucide-react'

const allServices = [
  {
    title: "Artificial Turf Installation",
    icon: "🌿",
    description: "Low-maintenance, year-round green lawns with premium synthetic grass that looks and feels natural.",
    features: ["Premium materials", "Expert installation", "5-year warranty"]
  },
  {
    title: "Concrete Masonry",
    icon: "🏗️",
    description: "Durable concrete work including driveways, walkways, patios, and decorative concrete surfaces.",
    features: ["Quality concrete", "Custom finishes", "Long-lasting results"]
  },
  {
    title: "Custom Landscape Design",
    icon: "🎨",
    description: "Personalized landscape plans that blend aesthetics with functionality for your unique outdoor space.",
    features: ["3D renderings", "Plant selection", "Complete planning"]
  },
  {
    title: "Desert Landscaping",
    icon: "🌵",
    description: "Water-efficient xeriscaping with native plants perfect for Arizona's climate and environment.",
    features: ["Drought-tolerant", "Native plants", "Low water usage"]
  },
  {
    title: "Driveway Landscaping",
    icon: "🚗",
    description: "Enhance your property's curb appeal with beautiful driveway borders and surrounding landscapes.",
    features: ["Border design", "Plant selection", "Hardscape integration"]
  },
  {
    title: "Driveway or Path Paving",
    icon: "🛤️",
    description: "Professional paving services using pavers, stone, or concrete for durable and attractive pathways.",
    features: ["Multiple materials", "Custom patterns", "Proper drainage"]
  },
  {
    title: "Garden Decorating",
    icon: "💐",
    description: "Enhance your garden with decorative elements, lighting, water features, and artistic touches.",
    features: ["Lighting design", "Water features", "Garden art"]
  },
  {
    title: "Garden Design",
    icon: "🌸",
    description: "Complete garden planning from concept to reality, creating beautiful and functional outdoor spaces.",
    features: ["Custom layouts", "Plant combinations", "Year-round interest"]
  },
  {
    title: "Garden Designs",
    icon: "🌻",
    description: "Multiple design options for various garden styles including cottage, modern, and Mediterranean gardens.",
    features: ["Style options", "Plant palettes", "Seasonal planning"]
  },
  {
    title: "Garden Drainage",
    icon: "💧",
    description: "Proper drainage solutions to protect your landscape and prevent water damage to your property.",
    features: ["French drains", "Grading work", "Problem solving"]
  },
  {
    title: "Garden Landscaping",
    icon: "🌺",
    description: "Comprehensive garden installation and maintenance creating vibrant, healthy outdoor environments.",
    features: ["Installation", "Soil preparation", "Plant care"]
  },
  {
    title: "Landscape Design Construction",
    icon: "🏘️",
    description: "Full-service design and build services bringing your landscape vision from paper to reality.",
    features: ["Design-build", "Project management", "Quality construction"]
  },
  {
    title: "Landscape Installations",
    icon: "🌳",
    description: "Expert installation of plants, trees, shrubs, and complete landscape systems with proper techniques.",
    features: ["Proper planting", "Irrigation setup", "Mulching"]
  },
  {
    title: "Outdoor Step Construction",
    icon: "🪜",
    description: "Safe, attractive steps and stairs using stone, pavers, or timber for sloped properties.",
    features: ["Safe design", "Quality materials", "Custom heights"]
  },
  {
    title: "Outdoor Water Feature Design",
    icon: "⛲",
    description: "Custom fountains, ponds, waterfalls, and streams adding tranquility to your outdoor space.",
    features: ["Custom design", "Pump systems", "Natural look"]
  },
  {
    title: "Path Landscaping",
    icon: "🚶",
    description: "Beautiful garden paths and walkways that guide movement while enhancing your landscape design.",
    features: ["Various materials", "Curved designs", "Border plants"]
  },
  {
    title: "Patio Design",
    icon: "🪑",
    description: "Functional and beautiful patios perfect for entertaining, dining, and relaxing outdoors.",
    features: ["Multiple layouts", "Material options", "Shade solutions"]
  },
  {
    title: "Retaining Wall Design",
    icon: "🧱",
    description: "Structural and decorative retaining walls for erosion control and creating usable terraced spaces.",
    features: ["Engineering", "Various materials", "Proper drainage"]
  },
  {
    title: "Stonemasonry",
    icon: "🪨",
    description: "Expert stonework for walls, pathways, borders, and decorative features using natural and cut stone.",
    features: ["Natural stone", "Expert craftsmanship", "Lasting beauty"]
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Our Landscaping Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive landscaping solutions for residential and commercial properties.
              From design to installation, we handle every aspect with professional expertise.
            </p>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Custom Solutions Available
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't see exactly what you need? We offer custom landscaping solutions
                tailored to your specific requirements and vision.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 hover:shadow-lg transition-all duration-300"
              >
                Get Custom Quote
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary-foreground">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Contact us today for a free consultation and quote. We'll discuss your vision
            and create a custom plan for your outdoor space.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Request Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
