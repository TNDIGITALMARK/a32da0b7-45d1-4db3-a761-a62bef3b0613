"use client"

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Calendar, Clock, Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Book Your Session
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Let's start planning your perfect photography experience. Fill out the form below
              and I'll get back to you within 24 hours to discuss your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Get In Touch
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm excited to hear about your project! Reach out via the form
                or use any of the contact methods below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-gray-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:hello@sarahjohnson.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      hello@sarahjohnson.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-gray-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-gray-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-muted-foreground">
                      Serving nationwide<br />
                      Based in California
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-gray-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Business Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9am - 6pm<br />
                      Saturday: By appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Calendar Preview */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-gray-700" size={24} />
                  <h3 className="font-heading font-semibold text-lg">
                    Availability
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Currently booking for sessions 2-3 months out. Limited spots
                  available for rush bookings.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">This Week:</span>
                    <span className="font-medium text-red-600">Fully Booked</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Next Week:</span>
                    <span className="font-medium text-yellow-600">2 Slots Left</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">This Month:</span>
                    <span className="font-medium text-green-600">Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Booking Request Form
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-2 text-green-800">
                      Request Received!
                    </h3>
                    <p className="text-green-700">
                      Thank you for your booking request. I'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          Service Type *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all bg-white"
                        >
                          <option value="">Select a service</option>
                          <option value="wedding">Wedding Photography</option>
                          <option value="portrait">Portrait Session</option>
                          <option value="corporate">Corporate Headshots</option>
                          <option value="product">Product Photography</option>
                          <option value="event">Event Coverage</option>
                          <option value="other">Other/Custom</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="time" className="block text-sm font-medium mb-2">
                          Preferred Time
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all bg-white"
                        >
                          <option value="">Select a time</option>
                          <option value="morning">Morning (8am - 12pm)</option>
                          <option value="afternoon">Afternoon (12pm - 4pm)</option>
                          <option value="evening">Evening (4pm - 8pm)</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Tell Me About Your Vision *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Share details about your event, vision, location preferences, special requests, or any questions you have..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors"
                    >
                      Submit Booking Request
                    </button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to be contacted via email or phone regarding your inquiry.
                    </p>
                  </form>
                )}
              </div>

              {/* What Happens Next */}
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Submit Request</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out the booking form with your details and preferences
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Consultation Call</h3>
                  <p className="text-sm text-muted-foreground">
                    I'll reach out to discuss your vision and answer questions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Book & Prepare</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure your date and receive preparation tips for the session
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
