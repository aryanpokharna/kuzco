import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Lorikeet</h1>
      <p className="text-lg text-gray-600 mb-8">Welcome to your dashboard</p>
      <Link 
        href="/dashboard" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Dashboard
      </Link>
    </div>
  )
}
