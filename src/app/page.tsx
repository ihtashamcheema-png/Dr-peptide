'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-secondary to-blue-800 text-white rounded-lg p-12 mb-12">
          <h1 className="text-5xl font-bold mb-4">Welcome to Dr. Peptide</h1>
          <p className="text-xl mb-6">Premium Research Peptides for Scientific Investigation</p>
          <Link href="/products">
            <button className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition font-semibold">
              Shop Now →
            </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold mb-2">Research Grade</h3>
            <p className="text-gray-600">High-purity peptides for scientific research and investigation.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
            <p className="text-gray-600">All products tested and verified for purity and potency.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
            <p className="text-gray-600">Quick and discreet delivery to researchers worldwide.</p>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
          <h2 className="text-3xl font-bold mb-4">Featured Peptides</h2>
          <p className="text-gray-700 mb-6">Explore our complete catalog of premium research peptides sourced from the highest quality suppliers.</p>
          <Link href="/products">
            <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition font-semibold">
              View All Products →
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}