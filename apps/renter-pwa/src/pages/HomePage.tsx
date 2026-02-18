import { Button } from '@rent-a-truck/ui';

export function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-accent-700 text-4xl font-bold">Rent-a-Truck</h1>
      <p className="max-w-md text-center text-gray-600">
        Move anything, anywhere. Book a truck in minutes.
      </p>
      <Button size="lg">Book a Truck</Button>
    </main>
  );
}
