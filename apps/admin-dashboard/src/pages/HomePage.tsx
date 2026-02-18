import { Button } from '@rent-a-truck/ui';

export function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-accent-700 text-4xl font-bold">Admin Portal</h1>
      <p className="max-w-md text-center text-gray-600">
        Manage your fleet, drivers, and monitor business performance.
      </p>
      <div className="flex gap-4">
        <Button>Fleet Overview</Button>
        <Button variant="outline">Verification Queue</Button>
      </div>
    </main>
  );
}
