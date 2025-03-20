import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'My Next.js App',
  description: 'A small Next.js 15 application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body>
      {/* ✅ Place Navbar inside <body>, not <html> */}
      <Navbar />

      {/* ✅ This is where all page content will be rendered */}
      <main className="p-4">
        {children}
      </main>

      {/* ✅ Place Footer at the bottom */}
      <Footer />
      </body>
      </html>
  );
}
