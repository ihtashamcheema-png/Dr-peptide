'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/lib/cart';
import Link from 'next/link';

export default function Cart() {
  const items = useCart((state) => state.items);
  const removeItem = useCart((state) => state.removeItem);
  const updateQuantity = useCart((state) => state.updateQuantity);
  const total = useCart((state) => state.total());

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
            <Link href="/products">
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {items.map(item => (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-md mb-4 flex justify-between items-center border border-gray-200">
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-gray-600">{item.dosage}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 px-2 py-1 border rounded text-center"
                    />
                    <span className="font-bold w-24 text-right">${(item.price * item.quantity).toFixed(2)}</span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg h-fit border border-gray-200">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-semibold">$10.00</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-primary">${(total + 10).toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg mt-6 transition font-semibold">
                Proceed to Checkout
              </button>
              <Link href="/products">
                <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 rounded-lg mt-2 transition font-semibold">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}