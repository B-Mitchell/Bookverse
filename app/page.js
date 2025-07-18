'use client'
import { useState } from 'react'
import { Search, Phone, BookOpen, Headphones, FileText, ArrowRight, Menu, Star, Users, Clock, Zap, Shield, Globe, Award, PlayCircle, ChevronLeft, ChevronRight, Quote, Heart, TrendingUp, Sparkles, Download, Eye, Bookmark } from 'lucide-react'

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Book Blogger",
      avatar: "SC",
      content: "BookVerse transformed my reading habits completely. The seamless sync across devices means I never lose my place, and the recommendation engine introduces me to books I never would have discovered otherwise."
    },
    {
      name: "Marcus Rodriguez",
      role: "University Student",
      avatar: "MR",
      content: "As a grad student, having access to academic journals and textbooks alongside fiction has been incredible. The annotation features and offline reading have saved me countless hours."
    },
    {
      name: "Emily Watson",
      role: "Working Professional",
      avatar: "EW",
      content: "The audiobook quality is outstanding. I can 'read' during my commute and switch to text when I'm home. It's like having a personal library that travels with me everywhere."
    }
  ]

  const featuredBooks = [
    { title: "The Digital Revolution", author: "Alex Thompson", genre: "Technology", rating: 4.8, cover: "📱" },
    { title: "Midnight in Paris", author: "Claire Laurent", genre: "Romance", rating: 4.9, cover: "🌙" },
    { title: "The Art of Mindfulness", author: "Dr. Kim Lee", genre: "Self-Help", rating: 4.7, cover: "🧘" },
    { title: "Quantum Mysteries", author: "Prof. James Wright", genre: "Science", rating: 4.6, cover: "⚛️" }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-purple-50">
      {/* Header Section */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 px-4 py-4 border-b border-orange-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-orange-600 text-2xl font-black tracking-tight">BOOKVERSE</h1>
              <p className="text-gray-500 text-xs font-medium">Digital Reading Universe</p>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-600 hover:underline decoration-orange-500 decoration-2 underline-offset-4 transition-all font-medium">Discover</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 hover:underline decoration-orange-500 decoration-2 underline-offset-4 transition-all font-medium">Our Story</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 hover:underline decoration-orange-500 decoration-2 underline-offset-4 transition-all font-medium">Collection</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 hover:underline decoration-orange-500 decoration-2 underline-offset-4 transition-all font-medium">Community</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 hover:underline decoration-orange-500 decoration-2 underline-offset-4 transition-all font-medium">Writers</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 hover:underline decoration-orange-500 decoration-2 underline-offset-4 transition-all font-medium">Events</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 hover:underline decoration-orange-500 decoration-2 underline-offset-4 transition-all font-medium">Resources</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 hover:underline decoration-orange-500 decoration-2 underline-offset-4 transition-all font-medium">Connect</a>
          </nav>
          
          {/* Mobile menu button */}
          <button className="lg:hidden text-gray-700 hover:text-orange-600 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 via-transparent to-purple-100/20"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 px-5 py-3 rounded-full text-sm font-semibold shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span>DISCOVER YOUR NEXT GREAT READ</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-tight">
                  INFINITE
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">KNOWLEDGE</span>
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full"></div>
                  <ArrowRight className="w-8 h-8 text-orange-600 animate-pulse" />
                </div>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Dive into millions of books, audiobooks, and digital resources. Your gateway to endless stories, knowledge, and adventures awaits in the palm of your hand.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-4">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="w-5 h-5 text-orange-600" />
                    <span className="text-sm font-medium">2M+ Readers</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-5 h-5 text-orange-600" />
                    <span className="text-sm font-medium">24/7 Access</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Ad-Free Experience</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  <PlayCircle className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </button>
                <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl border border-gray-200">
                  <Download className="w-5 h-5" />
                  <span>Download App</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-transform cursor-pointer">
                    <BookOpen className="w-8 h-8 mb-4" />
                    <h3 className="font-bold text-lg">750K+</h3>
                    <p className="text-sm opacity-90">Digital Books</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-transform cursor-pointer">
                    <Headphones className="w-8 h-8 mb-4" />
                    <h3 className="font-bold text-lg">150K+</h3>
                    <p className="text-sm opacity-90">Audio Stories</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-transform cursor-pointer">
                    <FileText className="w-8 h-8 mb-4" />
                    <h3 className="font-bold text-lg">75K+</h3>
                    <p className="text-sm opacity-90">Magazines</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-transform cursor-pointer">
                    <Globe className="w-8 h-8 mb-4" />
                    <h3 className="font-bold text-lg">50+</h3>
                    <p className="text-sm opacity-90">Languages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 px-4 relative overflow-hidden">
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30`}></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-8">
            <h2 className="text-white text-3xl font-bold mb-3">Start Your Reading Journey</h2>
            <p className="text-gray-300 text-lg">Find books by title, author, genre, or ISBN</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <Phone className="w-5 h-5" />
              <span>Mobile App</span>
            </button>
            
            <div className="flex-1 max-w-md relative">
              <input
                type="text"
                placeholder="Search titles, authors, genres..."
                className="w-full px-6 py-4 border-2 border-orange-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white text-gray-900 text-lg shadow-xl placeholder-gray-500"
              />
              <Search className="absolute right-4 top-4 w-6 h-6 text-gray-400" />
            </div>
            
            <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <Search className="w-5 h-5" />
              <span>Find & Explore</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trending This Week</h2>
            <p className="text-xl text-gray-600">Discover what readers are loving right now</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBooks.map((book, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-6xl mb-4 text-center">{book.cover}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{book.title}</h3>
                <p className="text-gray-600 mb-2">by {book.author}</p>
                <p className="text-sm text-orange-600 font-medium mb-3">{book.genre}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{book.rating}</span>
                  </div>
                  <button className="text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>Preview</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose BookVerse?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the future of reading with our comprehensive digital library platform designed for modern book lovers
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Card 1 - Digital Books */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Library</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Access hundreds of thousands of digital books instantly on any device. Read anywhere, anytime with our cloud-based reading platform and offline sync.
              </p>
              <div className="flex items-center text-orange-600 font-semibold text-sm group-hover:text-orange-700 transition-colors">
                <span>Perfect for All Ages • Start Reading</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2 - Audio Experience */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Audio Experience</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Immerse yourself in professionally narrated audiobooks and podcasts. Variable speed controls, sleep timer, and bookmark features enhance your listening experience.
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                <span>Premium Quality • Listen Now</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3 - Digital Publications */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Publications</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Stay updated with the latest magazines, journals, and periodicals from around the world. Interactive content and multimedia experiences bring stories to life.
              </p>
              <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                <span>Latest Issues • Explore Topics</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <Zap className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Instant Sync</h4>
              <p className="text-sm text-gray-600">Pick up where you left off across all your devices</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <Shield className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Ad-Free</h4>
              <p className="text-sm text-gray-600">Pure reading experience without interruptions</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <Award className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Premium Quality</h4>
              <p className="text-sm text-gray-600">Curated content from trusted publishers</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <TrendingUp className="w-10 h-10 text-orange-600 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Smart Recommendations</h4>
              <p className="text-sm text-gray-600">AI-powered suggestions based on your preferences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Readers Say</h2>
            <p className="text-xl text-gray-300">Join millions of satisfied readers worldwide</p>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <Quote className="w-12 h-12 text-orange-400 mb-6 mx-auto" />
              <div className="text-center">
                <p className="text-xl text-white leading-relaxed mb-8">
                  {testimonials[currentTestimonial].content}
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-300 text-sm">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-orange-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Start Reading?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join millions of readers who have discovered their next favorite book on BookVerse. Start your free trial today and unlock unlimited access to our entire library.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <button className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <PlayCircle className="w-5 h-5" />
              <span>Start Free Trial</span>
            </button>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl border border-white/30">
              <Download className="w-5 h-5" />
              <span>Download App</span>
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-orange-100 text-sm">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>Instant access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-orange-400 text-xl font-bold">BOOKVERSE</h3>
                  <p className="text-gray-400 text-xs">Digital Reading Universe</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Your ultimate destination for digital reading experiences. Discover, read, and share amazing stories.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">New Releases</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Bestsellers</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Categories</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Authors</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Collections</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Reading Guide</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Technical Support</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Accessibility</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm">
                © 2025 BookVerse. All rights reserved. Made with ❤️ for book lovers worldwide.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">Available in 50+ languages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

// import Image from 'next/image'
// import { Search, Phone, BookOpen, Headphones, FileText, ArrowRight, Menu, Star, Users, Clock } from 'lucide-react'

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
//       {/* Header Section */}
//       <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 px-4 py-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
//               <BookOpen className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <h1 className="text-orange-600 text-2xl font-bold tracking-tight">BOOKVERSE</h1>
//               <p className="text-gray-500 text-xs">Digital Reading Hub</p>
//             </div>
//           </div>
          
//           {/* Navigation */}
//           <nav className="hidden lg:flex space-x-8">
//             <a href="#" className="text-gray-700 hover:text-orange-600 hover:underline decoration-orange-500 decoration-2 underline-offset-4 transition-all font-medium">Discover</a>
//             <a href="#" className="text-gray-700 hover:text-orange-600 hover:underline decoration-orange-500 decoration-2 underline-offset-4 transition-all font-medium">Our Story</a>
//             <a href="#" className="text-gray-700 hover:text-orange-600 hover:underline decoration-orange-500 decoration-2 underline-offset-4 transition-all font-medium">Collection</a>
//             <a href="#" className="text-gray-700 hover:text-orange-600 hover:underline decoration-orange-500 decoration-2 underline-offset-4 transition-all font-medium">Community</a>
//             <a href="#" className="text-gray-700 hover:text-orange-600 hover:underline decoration-orange-500 decoration-2 underline-offset-4 transition-all font-medium">Writers</a>
//             <a href="#" className="text-gray-700 hover:text-orange-600 hover:underline decoration-orange-500 decoration-2 underline-offset-4 transition-all font-medium">Events</a>
//             <a href="#" className="text-gray-700 hover:text-orange-600 hover:underline decoration-orange-500 decoration-2 underline-offset-4 transition-all font-medium">Resources</a>
//             <a href="#" className="text-gray-700 hover:text-orange-600 hover:underline decoration-orange-500 decoration-2 underline-offset-4 transition-all font-medium">Connect</a>
//           </nav>
          
//           {/* Mobile menu button */}
//           <button className="lg:hidden text-gray-700 hover:text-orange-600 transition-colors">
//             <Menu className="w-6 h-6" />
//           </button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="py-20 px-4 overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
//                 <Star className="w-4 h-4" />
//                 <span>NEED YOUR NEXT GREAT READ?</span>
//               </div>
              
//               <div className="space-y-4">
//                 <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-tight">
//                   INFINITE
//                   <span className="block text-orange-600">KNOWLEDGE</span>
//                 </h1>
//                 <div className="flex items-center space-x-4">
//                   <div className="w-16 h-1 bg-orange-600 rounded-full"></div>
//                   <ArrowRight className="w-8 h-8 text-orange-600" />
//                 </div>
//               </div>
              
//               <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
//                 Dive into millions of books, audiobooks, and digital resources. Your gateway to endless stories and knowledge awaits.
//               </p>
              
//               <div className="flex items-center space-x-6 pt-4">
//                 <div className="flex items-center space-x-2 text-gray-500">
//                   <Users className="w-5 h-5" />
//                   <span className="text-sm">2M+ Readers</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-gray-500">
//                   <Clock className="w-5 h-5" />
//                   <span className="text-sm">24/7 Access</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="relative">
//               <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-10 blur-3xl"></div>
//               <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 blur-3xl"></div>
              
//               <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
//                     <BookOpen className="w-8 h-8 mb-4" />
//                     <h3 className="font-bold text-lg">500K+</h3>
//                     <p className="text-sm opacity-90">Digital Books</p>
//                   </div>
//                   <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
//                     <Headphones className="w-8 h-8 mb-4" />
//                     <h3 className="font-bold text-lg">100K+</h3>
//                     <p className="text-sm opacity-90">Audio Stories</p>
//                   </div>
//                   <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
//                     <FileText className="w-8 h-8 mb-4" />
//                     <h3 className="font-bold text-lg">50K+</h3>
//                     <p className="text-sm opacity-90">Magazines</p>
//                   </div>
//                   <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
//                     <Users className="w-8 h-8 mb-4" />
//                     <h3 className="font-bold text-lg">2M+</h3>
//                     <p className="text-sm opacity-90">Active Users</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Search Bar Section */}
//       <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-8">
//             <h2 className="text-white text-2xl font-bold mb-2">Start Your Reading Journey</h2>
//             <p className="text-gray-300">Find books by title, author, genre, or ISBN</p>
//           </div>
          
//           <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
//             <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center space-x-2 shadow-lg">
//               <Phone className="w-5 h-5" />
//               <span>Mobile App</span>
//             </button>
            
//             <div className="flex-1 max-w-md relative">
//               <input
//                 type="text"
//                 placeholder="Search titles, authors, genres..."
//                 className="w-full px-6 py-4 border-2 border-orange-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white text-gray-900 text-lg shadow-lg"
//               />
//               <Search className="absolute right-4 top-4 w-6 h-6 text-gray-400" />
//             </div>
            
//             <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center space-x-2 shadow-lg">
//               <Search className="w-5 h-5" />
//               <span>Find & Explore</span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Welcome Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6">Discover BookVerse</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Experience the future of reading with our comprehensive digital library platform designed for modern book lovers
//             </p>
//           </div>
          
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Card 1 - Digital Books */}
//             <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
//               <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Library</h3>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 Access hundreds of thousands of digital books instantly on any device. Read anywhere, anytime with our cloud-based reading platform.
//               </p>
//               <div className="flex items-center text-orange-600 font-semibold text-sm group-hover:text-orange-700 transition-colors">
//                 <span>Perfect for All Ages • Start Reading</span>
//                 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//               </div>
//             </div>

//             {/* Card 2 - Audio Experience */}
//             <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <Headphones className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Audio Experience</h3>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 Immerse yourself in professionally narrated audiobooks and podcasts. Perfect for commuting, exercising, or relaxing at home.
//               </p>
//               <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
//                 <span>Premium Quality • Listen Now</span>
//                 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//               </div>
//             </div>

//             {/* Card 3 - Digital Publications */}
//             <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
//               <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <FileText className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Publications</h3>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 Stay updated with the latest magazines, journals, and periodicals from around the world. Discover new perspectives and trending topics.
//               </p>
//               <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
//                 <span>Latest Issues • Explore Topics</span>
//                 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }
