
import React from 'react';
import { Section } from './Section';
import { Card } from './Card';
import { WrenchIcon, MicIcon, ShieldIcon, BookIcon, UsersIcon, BoxIcon } from './icons';

const products = [
  {
    icon: <WrenchIcon />,
    name: "RepairBuddy",
    status: "Available Now",
    description: "Your comprehensive repair price lookup app. Get instant, accurate estimates for repairs and services, helping you make informed decisions and avoid overpricing.",
    iconBg: "bg-gradient-to-br from-sky-500 to-indigo-600",
  },
  {
    icon: <MicIcon />,
    name: "StagePass",
    status: "Coming Soon",
    description: "The ultimate platform for live entertainment. More exciting details coming soon. Get ready to experience events like never before.",
    iconBg: "bg-gradient-to-br from-rose-500 to-purple-600",
  },
  {
    icon: <ShieldIcon />,
    name: "RugRadar",
    status: "In Development",
    description: "Stay safe in the crypto space. Our advanced warning system helps investors identify and avoid rugpulls, protecting your investments from fraudulent projects.",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
  },
  {
    icon: <BookIcon />,
    name: "Greenbook App",
    status: "Available",
    description: "Discover and support Black-owned businesses and events. Connect with your community and find authentic experiences that celebrate culture and entrepreneurship.",
    iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
  },
  {
    icon: <UsersIcon />,
    name: "Connect",
    status: "White Label Solution",
    description: "A powerful white-label app for non-profit associations. Build community, share resources, and strengthen connections with a customizable platform designed for impact.",
    iconBg: "bg-gradient-to-br from-teal-500 to-cyan-600",
  },
  {
    icon: <BoxIcon />,
    name: "MovingBuddy",
    status: "Launching Soon",
    description: "Navigate your move with confidence. Our app helps you identify legitimate movers, avoid common scams, and ensures a stress-free relocation experience.",
    iconBg: "bg-gradient-to-br from-slate-500 to-gray-600",
  },
];

export const ProductsSection: React.FC = () => {
  return (
    <Section
      id="products"
      badge="Our Products"
      title="Innovative Apps That Make a Difference"
      subtitle="Solving real-world problems with cutting-edge technology"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card key={product.name} index={index}>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 ${product.iconBg}`}>
              {product.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">{product.name}</h3>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-cyan-300 uppercase bg-cyan-500/10 rounded-full mb-4">
              {product.status}
            </span>
            <p className="text-slate-400 leading-relaxed">{product.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
