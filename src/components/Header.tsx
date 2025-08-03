import { Store } from 'lucide-react';
import { Cart } from '@/components/Cart';

export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
            <Store className="h-5 w-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-foreground">
           Mini Ecommerce
          </h1>
        </div>
        
        <Cart />
      </div>
    </header>
  );
}