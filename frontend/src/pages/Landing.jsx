import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Smartphone, 
  Shield, 
  Zap, 
  CreditCard, 
  Globe,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Wallet,
  TrendingUp,
  Lock,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export function Landing() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const features = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Fast",
      description: "Transfer money instantly to any bank account across India",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Ultra Secure",
      description: "Military-grade encryption protects every transaction",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile First",
      description: "Designed for seamless mobile experience",
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Reach",
      description: "Send money internationally with best rates",
      color: "from-cyan-400 to-blue-500"
    }
  ];

  const services = [
    { title: "Money Transfer", description: "Send money instantly using just phone number", icon: <Wallet className="w-8 h-8" />, gradient: "from-orange-500 to-pink-500" },
    { title: "Bill Payments", description: "Pay electricity, water, gas bills in seconds", icon: <CreditCard className="w-8 h-8" />, gradient: "from-green-500 to-teal-500" },
    { title: "Mobile Recharge", description: "Recharge prepaid & postpaid instantly", icon: <Phone className="w-8 h-8" />, gradient: "from-purple-500 to-indigo-500" },
    { title: "Investments", description: "Invest in mutual funds, stocks & gold", icon: <TrendingUp className="w-8 h-8" />, gradient: "from-blue-500 to-cyan-500" },
    { title: "Insurance", description: "Protect yourself with comprehensive coverage", icon: <Shield className="w-8 h-8" />, gradient: "from-red-500 to-orange-500" },
    { title: "Travel Booking", description: "Book flights, trains, buses & hotels", icon: <Globe className="w-8 h-8" />, gradient: "from-teal-500 to-green-500" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
    
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">MePay</h1>
                <p className="text-xs text-gray-500">Payments Made Simple</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-orange-600 font-medium">Features</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 font-medium">Services</a>
              <a href="#security" className="text-gray-700 hover:text-orange-600 font-medium">Security</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium">Contact</a>
              <button
                onClick={() => navigate('/signup')}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Sign Up
              </button>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-orange-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

       
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block text-gray-700 hover:text-orange-600 font-medium">Features</a>
              <a href="#services" className="block text-gray-700 hover:text-orange-600 font-medium">Services</a>
              <a href="#security" className="block text-gray-700 hover:text-orange-600 font-medium">Security</a>
              <a href="#contact" className="block text-gray-700 hover:text-orange-600 font-medium">Contact</a>
              <button
                onClick={() => { setIsMenuOpen(false); navigate('/signup'); }}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-medium"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </header>

    
      <section className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Trusted by 2k+ Indians</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Digital<br/>
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Payments
                  </span><br/>
                  Simplified
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Experience the future of money with MePay. Send, receive, and manage your finances with just a tap.
                </p>
              </div>
              
              <button
                onClick={() => navigate('/signup')}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </button>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">₹1k+</div>
                  <div className="text-sm text-gray-600">Daily Transactions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Quick Transfer</h3>
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Ashok Dinda</div>
                        <div className="text-xs text-gray-500">+91 98765 43210</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-gray-900">₹5,000</div>
                      <div className="text-sm text-gray-500">Amount to send</div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-medium">
                      Send Money
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose MePay?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for the modern Indian, designed for simplicity and security
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
   
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All-in-One Financial Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From payments to investments, everything you need in one app
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-orange-600 font-medium group-hover:text-red-600 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section id="security" className="py-24 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Your Money,
                <br />
                <span className="text-orange-400">Our Responsibility</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We use cutting-edge security measures to ensure your money and data are always protected.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Lock className="w-6 h-6" />, title: "256-bit Encryption", desc: "Bank-grade security for all transactions" },
                  { icon: <Shield className="w-6 h-6" />, title: "Two-Factor Authentication", desc: "Extra layer of protection for your account" },
                  { icon: <Clock className="w-6 h-6" />, title: "24/7 Monitoring", desc: "Real-time fraud detection and prevention" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 text-gray-900">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Security Status</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Account Protection</span>
                      <span className="text-sm font-medium text-green-600">Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Transaction Monitoring</span>
                      <span className="text-sm font-medium text-green-600">Enabled</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Data Encryption</span>
                      <span className="text-sm font-medium text-green-600">256-bit SSL</span>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 mt-4">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-sm font-medium text-green-800">All systems secure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-24 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Payments?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join millions of Indians who have already made the switch to smarter, faster, and more secure payments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

    
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">MePay</h3>
                  <p className="text-xs text-gray-400">Payments Made Simple</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                India's fastest growing digital payment platform, trusted by millions for secure and instant transactions.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Money Transfer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bill Payments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Recharge</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span>1800-999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span>support@mepay.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                  <span>2156,R.S.Building,Rodgran,110006</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MePay. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}