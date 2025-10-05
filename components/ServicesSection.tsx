
import React from 'react';
import { Section } from './Section';
import { Card } from './Card';
import { PaletteIcon, DevicePhoneMobileIcon, CodeBracketIcon, ChartBarIcon, MegaphoneIcon, CursorArrowRaysIcon } from './icons';

const services = [
    {
      icon: <PaletteIcon />,
      title: "Graphic Design",
      description: "Stunning visual designs that capture your brand essence. From logos to complete brand identities, we create designs that leave lasting impressions.",
    },
    {
      icon: <DevicePhoneMobileIcon />,
      title: "App Development",
      description: "Native and cross-platform mobile applications built with cutting-edge technology. We transform your ideas into powerful, user-friendly apps.",
    },
    {
      icon: <CodeBracketIcon />,
      title: "Web Development",
      description: "Modern, responsive websites that perform flawlessly across all devices. From simple sites to complex web applications, we deliver excellence.",
    },
    {
      icon: <ChartBarIcon />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that drive growth and engagement. SEO, social media, content marketing, and paid advertising to reach your audience.",
    },
    {
      icon: <MegaphoneIcon />,
      title: "Brand Strategy",
      description: "Comprehensive brand development that sets you apart. We help define your voice, position your brand, and create meaningful connections with customers.",
    },
    {
      icon: <CursorArrowRaysIcon />,
      title: "UI/UX Design",
      description: "User-centered design that delights and converts. We create intuitive interfaces and seamless experiences that keep users coming back.",
    },
];

export const ServicesSection: React.FC = () => {
  return (
    <Section
      id="services"
      badge="Our Services"
      title="Full-Service Digital Solutions"
      subtitle="From concept to launch, we bring your vision to life"
      className="bg-slate-900/40 border-y border-slate-800"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={service.title} index={index} variant="secondary">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-cyan-300 bg-cyan-500/10 text-3xl mb-6 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#0066ff] group-hover:to-[#00b4d8] group-hover:text-white group-hover:scale-110">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
            <p className="text-slate-400 leading-relaxed">{service.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
