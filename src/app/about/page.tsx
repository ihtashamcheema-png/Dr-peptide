import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">About Dr. Peptide</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Dr. Peptide is dedicated to providing researchers and scientists with the highest quality peptides and research compounds for legitimate scientific investigation and study.
          </p>
          <p className="text-gray-700 mb-4">
            We maintain strict quality control standards, ensuring all products meet purity requirements and are properly labeled for research use only.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Quality Standards</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">✓ All peptides are synthesized to 98%+ purity</li>
            <li className="flex items-center gap-2">✓ Third-party lab tested and verified</li>
            <li className="flex items-center gap-2">✓ Stored in optimal conditions for stability</li>
            <li className="flex items-center gap-2">✓ Shipped discreetly and securely</li>
            <li className="flex items-center gap-2">✓ Detailed product documentation included</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold mb-4">⚠️ Important Disclaimer</h2>
          <p className="text-gray-700">
            All products sold by Dr. Peptide are intended for research purposes only. These products are not intended for human or animal consumption, clinical use, or any therapeutic application. Buyers assume all responsibility for the appropriate and legal use of products purchased.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}