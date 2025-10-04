import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Lorikeet</h1>
      <p className="text-lg text-muted-foreground mb-8">Welcome to your dashboard</p>
      <Button asChild>
        <Link href="/dashboard">
          Go to Dashboard
        </Link>
      </Button>
    </div>
  )
}
