import { Code2, Palette, Megaphone, Smartphone, Globe, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies. Fast, scalable, and built to convert.',
    tags: ['React', 'Next.js', 'Node.js'],
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Distinctive brand identities that tell your story. From logo design to complete brand systems.',
    tags: ['Logo Design', 'Brand Strategy', 'Guidelines'],
  },
  {
    icon: Smartphone,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces and seamless user experiences that delight users and drive engagement.',
    tags: ['Figma', 'Prototyping', 'User Research'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that grow your audience, increase visibility, and drive conversions.',
    tags: ['SEO', 'Social Media', 'PPC'],
  },
  {
    icon: Globe,
    title: 'E-Commerce',
    description: 'Powerful online stores designed to sell. From product pages to checkout, optimised for revenue.',
    tags: ['Shopify', 'WooCommerce', 'Custom'],
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description: 'Strategic consulting to identify growth opportunities and create actionable roadmaps for your business.',
    tags: ['Analytics', 'CRO', 'Strategy'],
  },
]

export default function Services() {
  return (
    <section id="services" className="w-full px-6 lg:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border"
            style={{ backgroundColor: 'rgba(250,69,0,0.1)', borderColor: 'rgba(250,69,0,0.3)', color: '#FA4500' }}
          >
            What We Do
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Services that
            <br />
            <span style={{ color: '#FA4500' }}>drive growth</span>
          </h2>
          <p className="text-base max-w-lg" style={{ color: '#888888' }}>
            We offer end-to-end digital solutions tailored to your unique business needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group p-6 rounded-lg border transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{ backgroundColor: '#0E0E0E', borderColor: '#1A1A1A' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(250,69,0,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#1A1A1A'
                }}
              >
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center mb-4 transition-all duration-200 group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(250,69,0,0.15)', color: '#FA4500' }}
                >
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#888888' }}>
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{ backgroundColor: '#1A1A1A', color: '#888888' }}
                    >
                      {tag}