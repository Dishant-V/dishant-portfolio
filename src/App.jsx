import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, Linkedin, Instagram, Mail, MapPin, Calendar, ExternalLink, Award } from 'lucide-react'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    const timeInterval = setInterval(() => setCurrentTime(new Date()), 1000)
    
    return () => {
      clearTimeout(timer)
      clearInterval(timeInterval)
    }
  }, [])

  const projects = [
    {
      title: "Facial Recognition System",
      description: "High-precision facial recognition application using Python, OpenCV, ML",
      tech: ["Python", "OpenCV", "Machine Learning"],
      link: "https://github.com/Dishant-V/Django-portfolio.git"
    },
    {
      title: "SoleStyle",
      description: "Modern eCommerce platform for curated fashion & footwear",
      tech: ["Django", "Tailwind", "PostgreSQL", "Stripe"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Fully responsive portfolio site with dark mode and contact functionality",
      tech: ["Django", "Tailwind CSS", "Render"],
      link: "https://dishants-portfolio-ykm5.onrender.com/"
    },
    {
      title: "Altossa Italian Furniture",
      description: "Brand tone development and content strategy for premium Italian furniture",
      tech: ["Brand Strategy", "Content Marketing"],
      link: "#"
    },
    {
      title: "The Leela Hyderabad",
      description: "Marketing strategy and campaign execution for luxury hospitality",
      tech: ["Digital Marketing", "Campaign Management"],
      link: "#"
    },
    {
      title: "Maison Isa Fashion Ramp",
      description: "Event content coordination and luxury brand documentation",
      tech: ["Event Marketing", "Content Creation"],
      link: "#"
    }
  ]

  const certifications = [
    {
      title: "AI Agents Bootcamp",
      issuer: "LetsUpgrade",
      date: "Aug 2025",
      credentialId: "LUEAIJUL1251"
    }
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold mb-8 tracking-wider">DV</div>
          <div className="text-lg font-medium mb-4">LOADING</div>
          <Button 
            className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-sm tracking-wider"
            onClick={() => setIsLoading(false)}
          >
            VISIT WEBSITE
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Dishant Vaswani</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-gray-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
            <a href="#work" className="hover:text-gray-600 transition-colors">Work<span className="text-xs ml-1">{projects.length}</span></a>
            <a href="#certifications" className="hover:text-gray-600 transition-colors">Certifications</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">hellooooo</h1>
              <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
                My name is Dishant, and I'm a tech-driven problem solver who creates websites and applications 
                with a special focus on innovation and user experience. I'm ready to bring your ideas to life 
                and add a touch of originality to the digital space.
              </p>
              <div className="mt-8">
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                  more about me
                </Button>
              </div>
            </div>
            
            <div className="hidden md:block text-right">
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-2">Socials</div>
                <div className="flex flex-col space-y-2">
                  <a href="https://www.linkedin.com/in/dishant-vaswani/" className="text-sm hover:text-gray-600">LinkedIn</a>
                  <a href="https://github.com/Dishant-V" className="text-sm hover:text-gray-600">GitHub</a>
                  <a href="#" className="text-sm hover:text-gray-600">Instagram</a>
                  <a href="mailto:dishantvaswani7@gmail.com" className="text-sm hover:text-gray-600">Email</a>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  Located in Hyderabad
                </div>
              </div>
              
              <div className="text-sm text-gray-600">
                <div>{currentTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' })}</div>
                <div>{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Let's make your project special!</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                I'm a tech-driven problem solver with a passion for blending innovation and strategy. 
                With a foundation in Python, Django, Linux, and data analytics, I've worked on projects 
                ranging from AI-based facial recognition to web automation and backend development.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                I also led my team to the national-level round of the Smart India Hackathon, where we 
                built a tech-enabled solution to a real-world problem.
              </p>
              <p className="text-lg leading-relaxed">
                While my core strengths lie in technology, I've also applied them in digital marketing 
                environments—building data-informed campaigns, managing content pipelines, and analyzing 
                performance metrics to guide decision-making.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "Django", "JavaScript", "React", "HTML/CSS", "Linux", "Data Analytics", 
                  "Machine Learning", "OpenCV", "PostgreSQL", "Digital Marketing", "Content Strategy"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <div className="font-medium">Bachelor of Computer Applications</div>
                  <div className="text-sm text-gray-600">IFHE, Hyderabad • 2024-2027</div>
                </div>
                <div>
                  <div className="font-medium">GirlScript Summer of Code</div>
                  <div className="text-sm text-gray-600">Open Source Contributor • 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Recent works</h2>
            <div className="text-sm text-gray-600">
              0 <span className="mx-2">—</span> {projects.length - 1}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-2xl font-bold text-gray-400">{project.title.split(' ').map(word => word[0]).join('')}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.link !== "#" && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      View Project <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Licenses & Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                      <p className="text-gray-600 mb-2">{cert.issuer}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        Issued {cert.date}
                      </div>
                      <p className="text-xs text-gray-500">Credential ID: {cert.credentialId}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
          
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-blue-600 font-bold text-sm">IA</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Digital Marketing Associate</h3>
                  <p className="text-gray-600 mb-2">Ingenious Advertise • Internship</p>
                  <p className="text-sm text-gray-500 mb-4">May 2025 - Jun 2025 • 2 mos</p>
                  <p className="text-gray-700 leading-relaxed">
                    Worked across 6+ luxury brands, contributing to content strategy, campaign planning, 
                    and cross-platform execution. Coordinated with internal teams and vendors to ensure 
                    seamless creative alignment and timely delivery. Negotiated offline media placements, 
                    integrating print and airport branding with digital outreach.
                  </p>
                  <div className="mt-4">
                    <Badge variant="secondary">Social Media Management</Badge>
                    <Badge variant="secondary" className="ml-2">Performance Marketing</Badge>
                    <Badge variant="secondary" className="ml-2">+8 skills</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's create something amazing</h2>
          <p className="text-lg mb-8 text-gray-300">
            Ready to bring your ideas to life with innovative technology and strategic thinking?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-black hover:bg-gray-100 px-8 py-3"
              onClick={() => window.open('mailto:dishantvaswani7@gmail.com')}
            >
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3"
              onClick={() => window.open('https://dishants-portfolio-ykm5.onrender.com/', '_blank')}
            >
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2025 Dishant Vaswani. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/dishant-vaswani/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/Dishant-V" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:dishantvaswani7@gmail.com" className="text-gray-600 hover:text-black">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

