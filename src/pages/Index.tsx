import { Header } from '@/components/Header';
import { ProductGrid } from '@/components/ProductGrid';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
     
      <section className="bg-primary py-16">
        <div className="container text-center px-4">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            Welcome to Mini Ecommerce
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Find great products at affordable prices. Easy shopping, fast delivery.
          </p>
        </div>
      </section>
      
     
      <main className="container py-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Our Products
        </h2>
        <ProductGrid />
      </main>
    </div>
  );
};

export default Index;
