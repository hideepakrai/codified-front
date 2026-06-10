'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { initCinematic } from '@/lib/cinematic';

import { Brain, Bot, Network, Sparkles, PenTool, Code, FileText, LayoutTemplate, Smartphone, Apple, Cpu, TrendingUp, DollarSign, PieChart, Activity } from 'lucide-react';

const getServiceIcon = (code: string) => {
  const props = { size: 24, strokeWidth: 1.5 };
  switch (code) {
    case 'AI': return <Brain {...props} />;
    case 'CB': return <Bot {...props} />;
    case 'AG': return <Network {...props} />;
    case 'GA': return <Sparkles {...props} />;
    case 'UX': return <PenTool {...props} />;
    case 'FS': return <Code {...props} />;
    case 'CM': return <FileText {...props} />;
    case 'ER': return <LayoutTemplate {...props} />;
    case 'MB': return <Smartphone {...props} />;
    case 'AP': return <Apple {...props} />;
    case 'AD': return <Cpu {...props} />;
    case 'GR': return <TrendingUp {...props} />;
    case 'PD': return <DollarSign {...props} />;
    case 'AN': return <PieChart {...props} />;
    default: return <Activity {...props} />;
  }
};

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('AI Services');

  useEffect(() => {
    initCinematic();
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveMega(null);
  };

  const megaData: any = {
    services: {
      title: "Services",
      description: "Provide effective and better solutions as per your business needs.",
      categories: [
        {
          name: "AI Services",
          items: [
            { title: "AI Consulting", desc: "Expert guidance on AI strategy.", icon: "AI", slug: "ai-consulting" },
            { title: "AI Chatbot", desc: "Intelligent conversational agents.", icon: "CB", slug: "ai-chatbot" },
            { title: "AI Agent", desc: "Autonomous workflow automation.", icon: "AG", slug: "ai-agent" },
            { title: "Generative AI", desc: "Custom LLMs and creative AI.", icon: "GA", slug: "gen-ai" },
          ]
        },
        {
          name: "Web Development",
          items: [
            { title: "UI/UX Design", desc: "Aesthetic, user-centric product strategies.", icon: "UX", slug: "ui-ux-design" },
            { title: "Full Stack Dev", desc: "Robust bespoke platforms.", icon: "FS", slug: "full-stack-development" },
            { title: "CMS Development", desc: "Tailored content management.", icon: "CM", slug: "cms-development" },
            { title: "ERP & CRM", desc: "Enterprise business tools.", icon: "ER", slug: "erp-crm" },
          ]
        },
        {
          name: "Mobile Apps",
          items: [
            { title: "Mobile App Dev", desc: "iOS & Android solutions.", icon: "MB", slug: "mobile-app-development" },
            { title: "iOS Development", desc: "Native Apple experiences.", icon: "AP", slug: "mobile-app-development" },
            { title: "Android Development", desc: "Native Google experiences.", icon: "AD", slug: "mobile-app-development" },
          ]
        },
        {
          name: "Digital Marketing",
          items: [
            { title: "SEO / SMM / AMO / PPC", desc: "Complete growth engine.", icon: "GR", slug: "seo-smm-amo-ppc" },
            { title: "Paid Marketing", desc: "Targeted PPC & Social Ads.", icon: "PD", slug: "paid-marketing" },
            { title: "Analytics & Reporting", desc: "Data-driven ROI insights.", icon: "AN", slug: "analytics-reporting" },
          ]
        }
      ]
    },
    industries: {
      title: "Industries",
      items: [
        { title: "Fintech", desc: "Secure payment engines.", icon: "FT", slug: "fintech" },
        { title: "Healthcare", desc: "MedTech and secure portals.", icon: "HC", slug: "healthcare" },
        { title: "E-Commerce", desc: "Scalable retail platforms.", icon: "EC", slug: "e-commerce" },
        { title: "Education", desc: "LMS and interactive learning.", icon: "ED", slug: "edtech" },
        { title: "Real Estate", desc: "Property portals and PropTech.", icon: "RE", slug: "realestate" },

      ]
    },
    about: {
      title: "About",
      description: "We are a software development company. Let us know what you want.",
      categories: [
        {
          name: "About Us",
          featured: {
            title: "About Our Vision",
            desc: "We build world-class digital products that empower innovation and growth.",
            link: "/about"
          }
        },
        {
          name: "Hire Developers",
          featured: {
            title: "Scale Your Team",
            desc: "Expert developers ready to integrate with your existing workflow.",
            link: "/hire-developers"
          }
        }
      ]
    }
  };

  return (
    <>
      <canvas id="webgl"></canvas>
      <div className="vignette"></div>
      <div className="grain"></div>

      <div className="progress" id="progress"></div>

      {/* Mega Menu Overlay removed to keep background visible */}

      <nav className="nav" onMouseLeave={() => setActiveMega(null)}>
        <Link href="/" onClick={closeMenu}>
          <img src="/img/white-logo.svg" alt="Logo" className="h-[55px]" />
        </Link>

        {/* Desktop menu */}
        <div className="menu">
          <div onMouseEnter={() => { setActiveMega('about'); setActiveCategory('About Us'); }}>
            <Link href="/about" className={activeMega === 'about' ? 'active' : ''}>About</Link>
          </div>
          <div onMouseEnter={() => { setActiveMega('services'); setActiveCategory('AI Services'); }}>
            <Link href="/services" className={activeMega === 'services' ? 'active' : ''}>Services</Link>
          </div>
          <div onMouseEnter={() => { setActiveMega('industries'); }}>
            <Link href="/industries" className={activeMega === 'industries' ? 'active' : ''}>Industries</Link>
          </div>
          <div><Link href="/technologies">Technologies</Link></div>
          <div><Link href="/contact">Contact</Link></div>
        </div>

        <div className="nav-right">
          <Link className="cta" href="/contact">Free Consultation</Link>

          {/* Hamburger — mobile only */}
          <button
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className={`ham-line ${menuOpen ? 'open' : ''}`}></span>
            <span className={`ham-line ${menuOpen ? 'open' : ''}`}></span>
            <span className={`ham-line ${menuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        {/* ── Mega Menus ── */}
        <div className={`mega-menu ${activeMega ? 'show' : ''}`} onMouseEnter={() => setActiveMega(activeMega)}>
          {activeMega === 'services' && (
            <div className="mega-grid">
              <div className="mega-sidebar">
                {megaData.services.categories.map((cat: any) => (
                  <button
                    key={cat.name}
                    className={`cat-btn ${activeCategory === cat.name ? 'active' : ''}`}
                    onMouseEnter={() => setActiveCategory(cat.name)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
              <div className="mega-content">
                <h3>{activeCategory}</h3>
                <p>{megaData.services.description}</p>
                <div className="mega-links-grid">
                  {megaData.services.categories.find((c: any) => c.name === activeCategory)?.items.map((item: any) => (
                    <Link href={`/services/${item.slug}`} key={item.title} className="mega-item" onClick={closeMenu}>
                      <div className="ico">{getServiceIcon(item.icon)}</div>
                      <div className="info">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeMega === 'industries' && (
            <div className="mega-content">
              <h3>Industries</h3>
              <p>Tailored digital solutions for every sector.</p>
              <div className="mega-industries-grid">
                {megaData.industries.items.map((item: any) => (
                  <Link href={`/industries/${item.slug}`} key={item.title} className="mega-item" onClick={closeMenu}>
                    <div className="ico">{item.icon}</div>
                    <div className="info">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeMega === 'about' && (
            <div className="mega-grid">
              <div className="mega-sidebar">
                {megaData.about.categories.map((cat: any) => (
                  <button
                    key={cat.name}
                    className={`cat-btn ${activeCategory === cat.name ? 'active' : ''}`}
                    onMouseEnter={() => setActiveCategory(cat.name)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
              <div className="mega-content">
                <h3>{activeCategory}</h3>
                <p>{megaData.about.description}</p>
                <div className="mega-about-box">
                  <div className="info">
                    <h4>{megaData.about.categories.find((c: any) => c.name === activeCategory)?.featured.title}</h4>
                    <p>{megaData.about.categories.find((c: any) => c.name === activeCategory)?.featured.desc}</p>
                  </div>
                  <Link
                    href={megaData.about.categories.find((c: any) => c.name === activeCategory)?.featured.link}
                    className="btn-explore"
                    onClick={closeMenu}
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile drawer */}

      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/services" onClick={closeMenu}>Services</Link>
        <Link href="/industries" onClick={closeMenu}>Industries</Link>
        <Link href="/technologies" onClick={closeMenu}>Technologies</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <Link href="/contact" className="drawer-cta" onClick={closeMenu}>Free Consultation →</Link>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="drawer-overlay" onClick={closeMenu} />
      )}

      <aside className="rail" id="rail">
        <div className="item active" data-target="signal"><span>Signal</span><span className="dot"></span></div>
        <div className="item" data-target="core"><span>Core</span><span className="dot"></span></div>
        <div className="item" data-target="why"><span>Why Us</span><span className="dot"></span></div>
        <div className="item" data-target="data-grid"><span>Services</span><span className="dot"></span></div>
        <div className="item" data-target="api"><span>Technologies</span><span className="dot"></span></div>
        <div className="item" data-target="engine"><span>Industries</span><span className="dot"></span></div>
        <div className="item" data-target="ai"><span>AI Workflow</span><span className="dot"></span></div>
        <div className="item" data-target="testimonials"><span>Testimonials</span><span className="dot"></span></div>
        <div className="item" data-target="command"><span>Command</span><span className="dot"></span></div>
      </aside>
    </>
  );
}
