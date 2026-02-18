import { Button } from '@rent-a-truck/ui';

export function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-accent-700 text-4xl font-bold">Driver Dashboard</h1>
      <p className="max-w-md text-center text-gray-600">
        Go online to start receiving job requests.
      </p>
      <Button size="lg">Go Online</Button>
    </main>
  );
}
