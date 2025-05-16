import prisma from "@/lib/data";

export default async function page() {
  const customers = await prisma.customers.findMany();
  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-4">
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="text-2xl font-bold">1,234</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-4">
            <h2 className="text-lg font-semibold">Active Users</h2>
            <p className="text-2xl font-bold">567</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-4">
            <h2 className="text-lg font-semibold">New Signups</h2>
            <p className="text-2xl font-bold">89</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-4">
            <h2 className="text-lg font-semibold">Revenue</h2>
            <p className="text-2xl font-bold">$12,345</p>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {customers.map((cus) => (
          <li key={cus.id}>{cus.name}</li>
        ))}
      </div>
    </main>
  );
}
