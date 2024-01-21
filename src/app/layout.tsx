import Sidebar from "@/components/Sidebar";
import "./globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex items-start">
        <div className="min-h-screen fixed border-r drop-shadow-xl border-neutral-100 w-[300px] bg-neutral-50 lg:p-4">
          <Sidebar />
        </div>
        <main className="w-full p-4 lg:p-8 ml-[300px]">
          {children}
        </main>
      </body>
    </html>
  );
}
