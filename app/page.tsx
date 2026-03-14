import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Bienvenido a Next.js</h1>
        <p className="text-gray-700">Esta es la página principal de tu aplicación Next.js.</p>
        <Link href="/fetch" className="text-blue-500 hover:underline">Ver Posts</Link>
      </div>
    </div>
  )
}