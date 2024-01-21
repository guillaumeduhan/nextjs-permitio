'use client';
export default function Sidebar() {
  return <div className="grid gap-6">
    <button className="primary">Login</button>
    <div className="grid">
      <p className="font-semibold text-neutral-800 rounded px-4 py-2 bg-white hover:shadow cursor-pointer transition scale-[102%]">The Physics of the Sun</p>
    </div>
  </div>;
}