
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
    <main style={{ padding: 40 }}>
      <h1>Welcome to Paradiigm</h1>
      <p>Your site deployed successfully on Vercel!</p>
    </main>
  );
}
