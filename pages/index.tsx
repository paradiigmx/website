
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

// Import Vite components (ported)
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { FeaturesSection } from '../components/FeaturesSection';
import { ProductsSection } from '../components/ProductsSection';
import { ServicesSection } from '../components/ServicesSection';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Paradiigm</title>
        <meta name="description" content="Paradiigm — Next.js + WPGraphQL headless site with custom React UI" />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <Hero />
        <FeaturesSection />
        <ProductsSection />
        <ServicesSection />
        <Footer />
      </div>
    </main>
  );
}
