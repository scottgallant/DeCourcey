"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Hammer,
  Home,
  Shield,
  ArrowRight,
  CheckCircle,
  Instagram,
  Facebook,
} from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "text";
  className?: string;
  onClick?: () => void;
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const DeCourceyWebsite = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  // Colors based on request
  const theme = {
    bg: "bg-[#3c3a37]",
    bgLight: "bg-[#4a4845]", // Slightly lighter for cards
    bgDark: "bg-[#2c2a27]", // Darker for footer/nav
    text: "text-gray-100",
    textMuted: "text-gray-300",
    accent: "text-brand",
    accentBg: "bg-brand",
    accentHover: "hover:bg-brand/90",
    border: "border-gray-600",
  };

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  // --- Components ---

  const Button = ({
    children,
    variant = "primary",
    className = "",
    onClick,
  }: ButtonProps) => {
    const baseStyle =
      "px-6 py-3 font-semibold transition-all duration-300 rounded-sm flex items-center justify-center gap-2";
    const variants = {
      primary: `${theme.accentBg} text-white ${theme.accentHover}`,
      outline: `border-2 ${theme.border} text-white hover:bg-white hover:text-[#3c3a37]`,
      text: `text-white hover:text-brand p-0`,
    };
    return (
      <button
        onClick={onClick}
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };

  const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white uppercase tracking-wider">
        {title}
      </h2>
      <div className="h-1 w-20 bg-brand mb-4"></div>
      {subtitle && (
        <p className={`text-lg ${theme.textMuted} max-w-2xl`}>{subtitle}</p>
      )}
    </div>
  );

  // --- Pages ---

  const HomePage = () => (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/construction-site-with-heavy-equipment-and-buildin.jpg"
            alt="Construction Site"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3c3a37] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Quality Craftsmanship. <br />
            Honest Work. <br />
            <span className="text-brand">Local Expertise.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            Specializing in new home builds, renovations, and roofing services
            across Prince Edward Island.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button onClick={() => navigateTo("contact")}>
              Get a Free Estimate
            </Button>
            <Button variant="outline" onClick={() => navigateTo("projects")}>
              View Our Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className={`py-20 px-4 ${theme.bg}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-brand font-bold tracking-widest mb-2">
              FULL SERVICE CONTRACTOR
            </h3>
            <h2 className="text-3xl font-bold text-white mb-6">
              Bringing Your Vision to Life
            </h2>
            <p className={`${theme.textMuted} mb-6 leading-relaxed`}>
              At DeCourcey Construction Ltd., we handle everything from
              upgrading a kitchen and adding space for your growing family, to
              protecting your home with a durable new roof. We are dedicated to
              delivering reliable service, transparent communication, and
              results that stand the test of time.
            </p>
            <div className="space-y-3">
              {[
                "Free Estimates",
                "Fully Insured & Licensed",
                "Locally Owned & Operated",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-brand w-5 h-5" />
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-80 rounded-sm overflow-hidden shadow-2xl">
            <img
              src="/roof-installation-new-shingles.jpg"
              alt="Worker on roof"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className={`py-20 px-4 ${theme.bgDark}`}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Our Core Services" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Home Renovations",
                icon: <Home className="w-10 h-10" />,
                desc: "Kitchens, bathrooms, basements, and full remodels.",
              },
              {
                title: "Home Additions",
                icon: <Hammer className="w-10 h-10" />,
                desc: "Expand your living space with seamless additions.",
              },
              {
                title: "Roofing",
                icon: <Shield className="w-10 h-10" />,
                desc: "Installation, repair, and replacement for PEI weather.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className={`${theme.bgLight} p-8 hover:-translate-y-2 transition-transform duration-300 border-b-4 border-brand`}
              >
                <div className="text-brand mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className={`${theme.textMuted} mb-4`}>{service.desc}</p>
                <button
                  onClick={() => navigateTo("services")}
                  className="text-brand font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className={`py-20 px-4 ${theme.bg} min-h-screen animate-fade-in`}>
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="About DeCourcey Construction"
          subtitle="Built on Trust. Driven by Craftsmanship."
        />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Founded in Charlottetown, DeCourcey Construction Ltd. has become a
              trusted name in residential construction and renovations across
              PEI. With years of hands-on experience and a customer-first
              approach, we take pride in completing every job — big or small —
              with precision and integrity.
            </p>
            <p>Our team believes in:</p>
            <ul className="space-y-4 mt-4">
              {[
                "Clear timelines and honest quotes",
                "Quality work done right the first time",
                "Respect for your home, property, and budget",
                "Lasting relationships with our clients",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 pl-4 border-l-2 border-brand"
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-white pt-4">
              From concept to completion, you can count on us to deliver results
              you’ll be proud of.
            </p>
          </div>

          <div className="space-y-6">
            <img
              src="/construction-workers-on-job-site-building-home.jpg"
              alt="Construction Planning"
              className="w-full h-64 object-cover rounded-sm shadow-lg"
            />
            <div className={`${theme.bgLight} p-6 border border-gray-600`}>
              <h4 className="text-white font-bold mb-2">Our Location</h4>
              <p className="text-gray-300">
                48 Thorndale Drive, Charlottetown, PE
              </p>
              <p className="text-brand mt-2 font-medium">
                Serving all of Prince Edward Island
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ServicesPage = () => (
    <div className={`py-20 px-4 ${theme.bg} min-h-screen animate-fade-in`}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Our Services"
          subtitle="Transform your home with renovations that add beauty, value, and functionality."
        />

        {/* Home Renovations Group */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-brand rounded-sm">
              <Home className="text-white w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-white">Home Renovations</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Bathroom */}
            <div className={`${theme.bgLight} p-6 border border-gray-600`}>
              <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">
                Bathroom Renovations
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Create a clean, modern, and efficient bathroom you’ll love.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Custom tile work</li>
                <li>• Shower and tub installs</li>
                <li>• Vanity and fixture upgrades</li>
                <li>• Flooring and waterproofing</li>
                <li>• Full reconfigurations</li>
              </ul>
            </div>

            {/* Kitchen */}
            <div className={`${theme.bgLight} p-6 border border-gray-600`}>
              <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">
                Kitchen Renovations
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                From modern makeovers to functional redesigns.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Custom cabinetry</li>
                <li>• Countertop installs</li>
                <li>• Layout improvements</li>
                <li>• Backsplashes & lighting</li>
                <li>• Appliance fitting</li>
              </ul>
            </div>

            {/* Basement */}
            <div className={`${theme.bgLight} p-6 border border-gray-600`}>
              <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">
                Basement Renovations
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Turn unused space into something great.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Family / TV rooms</li>
                <li>• Rental suites</li>
                <li>• Home gyms</li>
                <li>• Offices & hobby rooms</li>
                <li>• Dry, insulated living spaces</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Other Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Additions */}
          <div className="relative group">
            <div className="h-64 overflow-hidden rounded-sm mb-4">
              <img
                src="/home-addition-with-new-windows.jpg"
                alt="Home Addition"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Home Additions
            </h3>
            <p className="text-gray-300 mb-4">
              Need more space? We design and build additions that blend
              seamlessly with your existing home.
            </p>
            <ul className="text-gray-400 space-y-1 mb-4 text-sm">
              <li>• Bedroom & living extensions</li>
              <li>• Sunrooms & seasonal rooms</li>
              <li>• Attached garages</li>
              <li>• Second-level additions</li>
            </ul>
          </div>

          {/* Barrier Free */}
          <div className="relative group">
            <div className="h-64 overflow-hidden rounded-sm mb-4">
              <img
                src="/accessible-bathroom-design.jpg"
                alt="Barrier Free"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Barrier-Free Renovations
            </h3>
            <p className="text-gray-300 mb-4">
              We believe every home should be accessible, safe, and comfortable.
            </p>
            <ul className="text-gray-400 space-y-1 mb-4 text-sm">
              <li>• Wheelchair-accessible bathrooms</li>
              <li>• Walk-in showers</li>
              <li>• Ramps and widened doorways</li>
              <li>• Grip rails & stair mods</li>
            </ul>
          </div>

          {/* Roofing */}
          <div className="relative group">
            <div className="h-64 overflow-hidden rounded-sm mb-4">
              <img
                src="/roof-replacement-asphalt-shingles.jpg"
                alt="Roofing"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Roofing Services
            </h3>
            <p className="text-gray-300 mb-4">
              Get unbeatable pricing and reliable workmanship with DeCourcey
              Construction Ltd.
            </p>
            <ul className="text-gray-400 space-y-1 mb-4 text-sm">
              <li>• Asphalt shingle roofs</li>
              <li>• Metal roofing</li>
              <li>• Full tear-offs & Repairs</li>
              <li>• Storm damage replacements</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button onClick={() => navigateTo("contact")}>
            Request a Quote Today
          </Button>
        </div>
      </div>
    </div>
  );

  const ProjectsPage = () => {
    const projects = [
      {
        title: "Full Kitchen Remodel",
        loc: "Stratford",
        desc: "New cabinetry, flooring, and layout redesign",
        img: "/modern-kitchen-renovation.png",
      },
      {
        title: "Roof Replacement",
        loc: "Charlottetown",
        desc: "30-year architectural shingles",
        img: "/roof-replacement-shingles.jpg",
      },
      {
        title: "Bathroom Upgrade",
        loc: "Cornwall",
        desc: "Custom tile shower + modern fixtures",
        img: "/modern-bathroom-renovation.png",
      },
      {
        title: "Garage Addition",
        loc: "West Royalty",
        desc: "Foundation, framing, siding, electrical",
        img: "/attached-garage-addition.jpg",
      },
      {
        title: "Basement Suite",
        loc: "PEI",
        desc: "Added bedroom, bathroom, and living space",
        img: "/finished-basement-suite.jpg",
      },
    ];

    return (
      <div className={`py-20 px-4 ${theme.bg} min-h-screen animate-fade-in`}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Recent Work"
            subtitle="A sample of the types of projects we complete across PEI."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden h-72 rounded-sm mb-4">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-300 z-10"></div>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                <span className="text-brand text-sm font-medium tracking-wider uppercase">
                  {p.loc}
                </span>
                <p className="text-gray-400 mt-1 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 border border-dashed border-gray-600 rounded text-center">
            <p className="text-gray-400">
              More project photos coming soon as our portfolio grows.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const TestimonialsPage = () => {
    const reviews = [
      {
        name: "Mark L.",
        loc: "Charlottetown",
        text: "The DeCourcey team replaced our roof in just two days. Great price, clean worksite, and professional communication from start to finish.",
      },
      {
        name: "Heather & Allan",
        loc: "Stratford",
        text: "Our new kitchen is exactly what we hoped for. They stayed on budget and helped guide us through design decisions.",
      },
      {
        name: "Susan M.",
        loc: "Cornwall",
        text: "We needed a barrier-free bathroom for mobility reasons. The work was outstanding — safe, modern, and beautifully finished.",
      },
      {
        name: "Kevin R.",
        loc: "PEI",
        text: "Reliable, honest, and easy to work with. We’ll be hiring them again for our basement renovation.",
      },
    ];

    return (
      <div className={`py-20 px-4 ${theme.bg} min-h-screen animate-fade-in`}>
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            title="Client Testimonials"
            subtitle="See what our neighbors across PEI are saying."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className={`${theme.bgLight} p-8 rounded-sm relative`}
              >
                <div className="text-brand absolute top-4 left-4 text-6xl opacity-20 font-serif">
                  "
                </div>
                <p className="text-gray-200 text-lg italic mb-6 relative z-10">
                  {r.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white font-bold">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{r.name}</h4>
                    <span className="text-gray-400 text-sm">{r.loc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ContactPage = () => (
    <div className={`py-20 px-4 ${theme.bg} min-h-screen animate-fade-in`}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Contact Us"
          subtitle="Get a free estimate for your upcoming project."
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand/20 text-brand rounded-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call or Text</h4>
                  <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    (782) 377-5247
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand/20 text-brand rounded-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    DeCourceyConstructionLtd@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand/20 text-brand rounded-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Location</h4>
                  <p className="text-gray-300">
                    48 Thorndale Drive, Charlottetown, PE
                  </p>
                </div>
              </div>
            </div>

            <div className={`${theme.bgLight} p-8 rounded-sm`}>
              <h4 className="text-white font-bold mb-4 border-b border-gray-600 pb-2">
                Business Hours
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Monday - Friday</span> <span>8:00 AM – 6:00 PM</span>
                </li>
                <li className="flex justify-between text-gray-500">
                  <span>Saturday</span> <span>By appointment</span>
                </li>
                <li className="flex justify-between text-gray-500">
                  <span>Sunday</span> <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className={`${theme.bgLight} p-8 rounded-sm shadow-xl`}>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className={`w-full bg-[#3c3a37] border border-gray-600 rounded p-3 text-white focus:outline-none focus:border-brand`}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={`w-full bg-[#3c3a37] border border-gray-600 rounded p-3 text-white focus:outline-none focus:border-brand`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className={`w-full bg-[#3c3a37] border border-gray-600 rounded p-3 text-white focus:outline-none focus:border-brand`}
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Service Needed
                </label>
                <select
                  className={`w-full bg-[#3c3a37] border border-gray-600 rounded p-3 text-white focus:outline-none focus:border-brand`}
                >
                  <option>Select a service...</option>
                  <option>Home Renovation</option>
                  <option>New Build / Addition</option>
                  <option>Roofing</option>
                  <option>Barrier-Free Upgrade</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className={`w-full bg-[#3c3a37] border border-gray-600 rounded p-3 text-white focus:outline-none focus:border-brand`}
                ></textarea>
              </div>

              <Button className="w-full" onClick={() => {}}>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`min-h-screen ${theme.bg} font-sans selection:bg-brand selection:text-white`}
    >
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${theme.bgDark} shadow-lg border-b border-[#3c3a37]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex-shrink-0 cursor-pointer flex items-center gap-2"
              onClick={() => navigateTo("home")}
            >
              <div className="text-brand p-1 rounded-sm">
                <img
                  src="/small-logo-transparent.png"
                  alt="DeCourcey Construction Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="hidden md:block">
                <span className="block text-white font-bold text-lg leading-none">
                  DeCourcey
                </span>
                <span className="block text-gray-400 text-xs tracking-widest uppercase">
                  Construction Ltd.
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => navigateTo(link.id)}
                    className={`${
                      currentPage === link.id
                        ? "text-brand"
                        : "text-gray-300 hover:text-white"
                    } px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wide`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <Button onClick={() => navigateTo("contact")}>
                Free Estimate
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-[#4a4845] inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#2c2a27] border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`${
                    currentPage === link.id
                      ? "text-brand bg-black/20"
                      : "text-gray-300"
                  } block w-full text-left px-3 py-3 rounded-md text-base font-medium`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {currentPage === "home" && <HomePage />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "services" && <ServicesPage />}
        {currentPage === "projects" && <ProjectsPage />}
        {currentPage === "testimonials" && <TestimonialsPage />}
        {currentPage === "contact" && <ContactPage />}
      </main>

      {/* Footer */}
      <footer className={`${theme.bgDark} border-t border-gray-800 pt-16 pb-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-brand p-1 rounded-sm">
                <img
                  src="/small-logo.png"
                  alt="DeCourcey Construction Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <span className="block text-white font-bold text-lg leading-none">
                  DeCourcey
                </span>
                <span className="block text-gray-400 text-xs tracking-widest uppercase">
                  Construction Ltd.
                </span>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Quality craftsmanship and honest work across Prince Edward Island.
              Fully insured, licensed, and locally owned.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 bg-[#3c3a37] flex items-center justify-center text-gray-400 hover:text-brand hover:bg-white transition-all cursor-pointer rounded-sm">
                <Facebook size={20} />
              </div>
              <div className="w-10 h-10 bg-[#3c3a37] flex items-center justify-center text-gray-400 hover:text-brand hover:bg-white transition-all cursor-pointer rounded-sm">
                <Instagram size={20} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About", "Services", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => navigateTo(link.toLowerCase())}
                    className="text-gray-400 hover:text-brand transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-brand shrink-0" /> 48
                Thorndale Drive
                <br />
                Charlottetown, PE
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-brand shrink-0" /> (782)
                377-5247
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-brand shrink-0" />{" "}
                DeCourceyConstructionLtd@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 border-t border-gray-800 pt-8 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} DeCourcey Construction Ltd. All Rights
          Reserved.
        </div>
      </footer>
    </div>
  );
};

export default DeCourceyWebsite;
