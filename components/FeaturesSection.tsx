
import React from 'react';
import { Section } from './Section';
import { Card } from './Card';
import { BoltIcon, LockClosedIcon, GlobeAltIcon, HeartIcon } from './icons';

const features = [
    {
      icon: <BoltIcon />,
      title: "Lightning Fast",
      description: "Optimized performance that delivers instant responses and seamless experiences",
    },
    {
      icon: <LockClosedIcon />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security protocols protect your data and ensure peace of mind",
    },
    {
      icon: <GlobeAltIcon />,
      title: "Global Impact",
      description: "Solutions designed to scale and make a difference in communities worldwide",
    },
    {
      icon: <HeartIcon />,
      title: "Client-Focused",
      description: "Your success is our priority. We work closely with you to exceed expectations",
    },
];

export const FeaturesSection: React.FC = () => {
    return (
        <Section
            id="features"
            badge="Why Choose ParadiigmX"
            title="Built for Excellence"
            subtitle="Innovation meets reliability in everything we create"
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <Card key={feature.title} index={index} variant="tertiary">
                        <div className="w-20 h-20 mx-auto rounded-3xl flex items-center justify-center text-cyan-300 bg-cyan-500/10 text-4xl mb-6 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#0066ff] group-hover:to-[#00b4d8] group-hover:text-white group-hover:scale-110 group-hover:rotate-12">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                        <p className="text-slate-400">{feature.description}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
};
