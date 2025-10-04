import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Lorikeet</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A modern Next.js application with shadcn/ui components
          </p>
          <Badge variant="secondary" className="text-sm">
            Built with shadcn/ui
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Clean Design</CardTitle>
              <CardDescription>
                Beautiful, accessible components built with Radix UI and Tailwind CSS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Learn More</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>TypeScript</CardTitle>
              <CardDescription>
                Full type safety with TypeScript and excellent developer experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Get Started</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customizable</CardTitle>
              <CardDescription>
                Easy to customize and extend with your own design system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full">Explore</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to build something amazing?
          </p>
          <Button size="lg">
            Start Building
          </Button>
        </div>
      </div>
    </div>
  )
}
