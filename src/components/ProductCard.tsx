'use client';

import { useState } from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/lib/cart';

export default function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      dosage: product.dosage,
    });
    alert(`Added ${quantity}x ${product.name} to cart!`);
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border border-gray-200">
      <div className="text-5xl mb-4 text-center">{product.image}</div>
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2 font-semibold">{product.dosage}</p>
      <p className="text-gray-700 mb-4 text-sm h-12">{product.description}</p>
      
      <div className="mb-4">
        <p className="font-semibold text-sm mb-2">Benefits:</p>
        <ul className="text-sm text-gray-600">
          {product.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center gap-2">
              ✓ {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between mt-6">
        <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
        <div className="flex gap-2">
          <input
            type="number"
            min="1"
            max="10"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-12 px-2 py-1 border rounded text-center"
          />
          <button
            onClick={handleAddToCart}
            className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded transition font-semibold"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}