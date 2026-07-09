'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart';
import { useState } from 'react';

export default function Header() {
  const items = useCart((state) => state.items);
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-secondary text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          🔬 Dr. Peptide
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/products" className="hover:text-primary transition">Products</Link>
          <Link href="/about" className="hover:text-primary transition">About</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        </nav>

        <Link href="/cart" className="relative">
          <button className="bg-primary hover:bg-blue-700 px-4 py-2 rounded transition font-semibold">
            🛒 Cart ({cartCount})
          </button>
        </Link>
      </div>
    </header>
  );
}